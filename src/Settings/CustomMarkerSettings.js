import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import EditCustomMarkerSettings from './EditCustomMarkerSettings';
import { useState } from '@wordpress/element';
import { dispatch } from '@wordpress/data';

export default function CustomMarkerSettings( props ) {
	const {
		attributes: { woosmapView },
		setAttributes,
	} = props;

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

		const newMarker = {
			type: storeType,
			icon: { url: 'https://images.woosmap.com/marker-default.svg' },
			selectedIcon: {
				url: 'https://images.woosmap.com/marker-selected.svg',
			},
			numberedIcon: {
				url: 'https://images.woosmap.com/marker-default.svg',
			},
		};

		const newCustomMarkers = [ ...woosmapView.style.rules, newMarker ];
		setAttributes( {
			woosmapView: {
				...woosmapView,
				style: {
					...woosmapView.style,
					rules: newCustomMarkers,
				},
			},
		} );

		setStoreType( '' );
	};

	return (
		<PanelBody
			title={ __(
				'Custom Marker Settings',
				'store-locator-widget-block'
			) }
			initialOpen={ false }
		>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __( 'Store Type', 'store-locator-widget-block' ) }
					value={ storeType }
					onChange={ ( value ) => setStoreType( value ) }
				/>
				<Button variant="primary" onClick={ addCustomMarker }>
					{ __( 'Add Custom Marker', 'store-locator-widget-block' ) }
				</Button>
			</div>
			{ ( woosmapView.style?.rules || [] ).map( ( marker, index ) => (
				<EditCustomMarkerSettings
					key={ index }
					index={ index }
					marker={ marker }
					storeType={ marker.type }
					customDefaultMarkerUrl={ marker.icon.url }
					customSelectedMarkerUrl={ marker.selectedIcon.url }
					customNumberedMarkerUrl={ marker.numberedIcon.url }
					woosmapView={ woosmapView }
					setAttributes={ setAttributes }
				/>
			) ) }
		</PanelBody>
	);
}
