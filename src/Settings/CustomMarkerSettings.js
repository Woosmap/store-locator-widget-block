import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import EditCustomMarkerSettings from './EditCustomMarkerSettings';
import { useState } from '@wordpress/element';
import { dispatch } from '@wordpress/data';

export default function CustomMarkerSettings( props ) {
	const {
		attributes: { customMarkers },
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
			storeType,
			customTyleColor: '#000',
			customDefaultMarkerUrl:
				'https://images.woosmap.com/marker-default.svg',
			customSelectedMarkerUrl:
				'https://images.woosmap.com/marker-selected.svg',
			customNumberedMarkerUrl:
				'https://images.woosmap.com/marker-default.svg',
		};

		const newCustomMarkers = [ ...customMarkers, newMarker ];
		setAttributes( { customMarkers: newCustomMarkers } );

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
			{ customMarkers.map( ( marker, index ) => (
				<EditCustomMarkerSettings
					key={ index }
					index={ index }
					marker={ marker }
					storeType={ marker.storeType }
					customTyleColor={ marker.customTyleColor }
					customDefaultMarkerUrl={ marker.customDefaultMarkerUrl }
					customSelectedMarkerUrl={ marker.customSelectedMarkerUrl }
					customNumberedMarkerUrl={ marker.customNumberedMarkerUrl }
					customMarkers={ customMarkers }
					setAttributes={ setAttributes }
				/>
			) ) }
		</PanelBody>
	);
}
