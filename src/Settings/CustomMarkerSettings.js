import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import EditCustomMarker from '../components/EditCustomMarker';

export default function CustomMarkerSettings( {
	attributes: { woosmapView },
	setAttributes,
} ) {
	const [ storeType, setStoreType ] = useState( '' );

	const addCustomMarker = () => {
		if ( ! storeType.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Store Type Title cannot be empty',
					'store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return;
		}

		const { icon, selectedIcon, numberedIcon } =
			woosmapView.style?.default || {};

		if ( ! icon?.url || ! selectedIcon?.url || ! numberedIcon?.url ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Marker URLs are missing in woosmapView.style.default',
					'store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return;
		}

		const newMarker = {
			type: storeType,
			icon: { url: icon.url },
			selectedIcon: { url: selectedIcon.url },
			numberedIcon: { url: numberedIcon.url },
		};
		const newCustomMarkers = [
			...( woosmapView.style?.rules || [] ),
			newMarker,
		];
		const newRule = {
			type: storeType,
			color: woosmapView.tileStyle?.color || '#000000',
		};
		const newTypeRules = [
			...( woosmapView.tileStyle?.typeRules || [] ),
			newRule,
		];
		setAttributes( {
			woosmapView: {
				...woosmapView,
				style: {
					...woosmapView.style,
					rules: newCustomMarkers,
				},
				tileStyle: {
					...woosmapView.tileStyle,
					typeRules: newTypeRules,
				},
			},
		} );

		setStoreType( '' );
	};

	const updateMarker = ( index, updatedMarker ) => {
		const newCustomMarkers = woosmapView.style.rules.map( ( m, i ) =>
			i === index ? updatedMarker : m
		);
		setAttributes( {
			woosmapView: {
				...woosmapView,
				style: {
					...woosmapView.style,
					rules: newCustomMarkers,
				},
			},
		} );
	};

	const updateTypeRules = ( type, newColor ) => {
		const newTypeRules = woosmapView.tileStyle.typeRules.map( ( rule ) =>
			rule.type === type
				? { ...rule, color: newColor || woosmapView.tileStyle?.color }
				: rule
		);

		setAttributes( {
			woosmapView: {
				...woosmapView,
				tileStyle: {
					...woosmapView.tileStyle,
					typeRules: newTypeRules,
				},
			},
		} );
	};

	const deleteMarker = ( index ) => {
		const newCustomMarkers = woosmapView.style.rules.filter(
			( _, i ) => i !== index
		);
		setAttributes( {
			woosmapView: {
				...woosmapView,
				style: {
					...woosmapView.style,
					rules: newCustomMarkers,
				},
			},
		} );
	};

	const panelStyle = {
		marginBottom: 20,
		padding: 10,
		border: '1px solid lightgray',
		borderRadius: 5,
	};

	return (
		<PanelBody
			title={ __(
				'Custom Marker Settings',
				'store-locator-widget-block'
			) }
			initialOpen={ false }
		>
			<div style={ panelStyle }>
				<TextControl
					label={ __( 'Store Type', 'store-locator-widget-block' ) }
					value={ storeType }
					onChange={ setStoreType }
				/>
				<Button variant="primary" onClick={ addCustomMarker }>
					{ __( 'Add Custom Marker', 'store-locator-widget-block' ) }
				</Button>
			</div>
			{ ( woosmapView.style?.rules || [] ).map( ( marker, index ) => (
				<EditCustomMarker
					key={ index }
					marker={ marker }
					storeType={ marker.type }
					customDefaultMarkerUrl={ marker.icon.url }
					customSelectedMarkerUrl={ marker.selectedIcon.url }
					customNumberedMarkerUrl={ marker.numberedIcon.url }
					color={
						woosmapView.tileStyle?.typeRules?.find(
							( rule ) => rule.type === marker.type
						)?.color || woosmapView.tileStyle?.color
					}
					updateMarker={ ( updatedMarker ) =>
						updateMarker( index, updatedMarker )
					}
					updateTypeRules={ ( color ) =>
						updateTypeRules( marker.type, color )
					}
					deleteMarker={ () => deleteMarker( index ) }
				/>
			) ) }
		</PanelBody>
	);
}
