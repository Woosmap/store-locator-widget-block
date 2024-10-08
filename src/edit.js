import {
	Spinner,
	Placeholder,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect, memo } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { useRefEffect, useDebounce } from '@wordpress/compose';
import { StoreLocatorEdit } from './components/StoreLocator';
import './editor.scss';
import { store as slwBlockStore } from './store';
import InspectorSettings from './inspector-settings';
import BlockIcon from './block-icon';
import EditAuthForm from './components/EditAuthForm';
import { ResizableMap } from './components/ResizableMap';
import WidgetJsonForm from './components/WidgetJsonForm';

const StoreLocatorWidget = memo( ( props ) => {
	const {
		storeLocatorWidget,
		isAuthenticated,
		clientId,
		setAttributes,
		setStoreLocatorWidget,
		apiKey,
	} = props;

	const hasSLW = !! storeLocatorWidget;

	/**
	 * render a new store locator widget on the provided element
	 */
	const slwContainerRef = useRefEffect(
		( element ) => {
			if ( isAuthenticated && ! hasSLW ) {
				setStoreLocatorWidget(
					new StoreLocatorEdit( element, clientId, setAttributes )
				);
			}

			return () => {
				if ( hasSLW ) {
					storeLocatorWidget.remove();
					setStoreLocatorWidget( null );
				}
			};
		},
		[ apiKey, isAuthenticated, storeLocatorWidget, clientId, setAttributes ]
	);
	return <div id="storeLocatorWidgetEdit" ref={ slwContainerRef } />;
} );

export default function StoreLocatorBlockEdit( props ) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { height, apiKey: initialApiKey } = attributes;
	const [ storeLocatorWidget, setStoreLocatorWidget ] = useState( null );
	const [ apiKey, setApiKey ] = useState( initialApiKey );
	const hasSLW = !! storeLocatorWidget;
	const [ isLoading, setIsLoading ] = useState( true );
	const [ showConfigPlaceholder, setShowConfigPlaceholder ] =
		useState( true );

	const isAuthenticated = useSelect( ( select ) => {
		return select( slwBlockStore ).isAuthenticated();
	} );
	const { updateAuthenticationStatus } = useDispatch( slwBlockStore );
	const { toggleSelection } = useDispatch( blockEditorStore );

	const debouncedUpdate = useDebounce( ( newAttributes ) => {
		storeLocatorWidget.update( newAttributes );
	}, 500 );

	const handleSetApiKey = ( newApiKey ) => {
		setApiKey( newApiKey );
		setAttributes( { apiKey: newApiKey } );
	};

	const onValidateConfig = ( conf ) => {
		setAttributes( { ...attributes, ...conf } );
		setShowConfigPlaceholder( false );
	};

	/**
	 * Set the initial authentication of Woosmap
	 *
	 * ensures that the WebApp object gets initialized on the correct window which is
	 * needed for the iframe editors.
	 */
	const setupRef = useRefEffect( () => {
		const handleConfigurationChange = ( { status } ) => {
			function handleSuccessfulAuthentication() {
				updateAuthenticationStatus( true );
			}

			switch ( status ) {
				case 'Initialized':
					handleSuccessfulAuthentication();
					break;
			}
		};
		const InitializeWebApp = () => {
			handleConfigurationChange( { status: 'Initialized' } );
		};

		setIsLoading( false );
		if ( apiKey && ! isAuthenticated ) {
			InitializeWebApp();
		}

		window.addEventListener( 'woosmapSettingsSaved', InitializeWebApp );

		return () => {
			window.removeEventListener(
				'woosmapSettingsSaved',
				InitializeWebApp
			);
		};
	} );

	useEffect( () => {
		if ( isAuthenticated ) {
			setIsLoading( false );
		}
	}, [ isAuthenticated ] );

	useEffect( () => {
		if ( isAuthenticated && hasSLW ) {
			debouncedUpdate( attributes );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ attributes, isAuthenticated, storeLocatorWidget, hasSLW ] );

	// Set the Marker URLs from local assets dynamically only once when the component mounts
	useEffect( () => {
		if ( ! attributes.woosmapView.style ) {
			const { markerDefaultUrl, markerSelectedUrl } =
				window.woosmapPluginData;
			setAttributes( {
				...attributes,
				woosmapView: {
					...attributes.woosmapView,
					style: {
						default: {
							icon: {
								url: markerDefaultUrl,
							},
							selectedIcon: {
								url: markerSelectedUrl,
							},
							numberedIcon: {
								url: markerDefaultUrl,
							},
						},
					},
				},
			} );
		}
	}, [ setAttributes, attributes ] );
	const blockProps = useBlockProps( { ref: setupRef } );

	if ( isLoading ) {
		return (
			<div { ...blockProps }>
				<Placeholder
					style={ { height: `${ height }px` } }
					label={ __(
						'Block for Woosmap Store Locator Widget',
						'store-locator-widget-block'
					) }
					icon={ BlockIcon }
				>
					<Spinner />
				</Placeholder>
			</div>
		);
	}
	if ( ! isAuthenticated ) {
		return (
			<>
				<InspectorSettings
					{ ...props }
					isAuthenticated={ isAuthenticated }
					storeLocatorWidget={ storeLocatorWidget }
				/>
				<div { ...blockProps }>
					<Placeholder
						style={ { minHeight: `${ height }px` } }
						label={ __(
							'Authorize Woosmap Access',
							'store-locator-widget-block'
						) }
						icon={ BlockIcon }
						isColumnLayout={ true }
					>
						<div style={ { marginBottom: '1em' } }>
							{ __(
								'To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ',
								'store-locator-widget-block'
							) }
							<a
								href="https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key"
								target="_blank"
								rel="noopener noreferrer"
							>
								{ __(
									'Guide to register a Woosmap Public API Key.',
									'store-locator-widget-block'
								) }
							</a>
						</div>
						<EditAuthForm setApiKey={ handleSetApiKey } />
					</Placeholder>
				</div>
			</>
		);
	}
	if ( showConfigPlaceholder ) {
		return (
			<>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							icon="location"
							label={ __(
								'Show Map',
								'store-locator-widget-block'
							) }
							onClick={ () => setShowConfigPlaceholder( false ) }
						/>
					</ToolbarGroup>
				</BlockControls>
				<WidgetJsonForm
					blockProps={ blockProps }
					initialConfig={ {
						woosmapView: attributes.woosmapView,
						theme: attributes.theme,
						initialSearch: attributes.initialSearch,
						internationalization: attributes.internationalization,
						filters: attributes.filters,
						maps: attributes.maps,
						datasource: attributes.datasource,
					} }
					onValidateConfig={ onValidateConfig }
				/>
			</>
		);
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="admin-generic"
						label={ __(
							'Show Configuration',
							'store-locator-widget-block'
						) }
						onClick={ () => setShowConfigPlaceholder( true ) }
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorSettings
				{ ...props }
				isAuthenticated={ isAuthenticated }
				storeLocatorWidget={ storeLocatorWidget }
			/>
			<div { ...blockProps }>
				<ResizableMap
					onResizeStart={ () => {
						toggleSelection( false );
					} }
					onResize={ ( newHeight ) => {
						storeLocatorWidget.update(
							{ height: newHeight.toString() },
							false
						);
					} }
					onResizeStop={ ( newHeight ) => {
						setAttributes( { height: newHeight.toString() } );
						toggleSelection( true );
					} }
					showHandle={ isSelected }
					size={ { height } }
				/>
				<StoreLocatorWidget
					clientId={ clientId }
					setAttributes={ setAttributes }
					isAuthenticated={ isAuthenticated }
					storeLocatorWidget={ storeLocatorWidget }
					setStoreLocatorWidget={ setStoreLocatorWidget }
					apiKey={ apiKey }
				/>
			</div>
		</>
	);
}
