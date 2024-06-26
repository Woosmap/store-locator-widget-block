import {
	PanelBody,
	TextControl,
	Button,
	PanelRow,
	ColorIndicator,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';

export default function EditCustomMarkerSettings( props ) {
	const {
		index,
		marker,
		storeType,
		customTyleColor,
		customDefaultMarkerUrl,
		customSelectedMarkerUrl,
		customNumberedMarkerUrl,
		customMarkers,
		setAttributes,
	} = props;

	const updateMarker = ( updatedMarker ) => {
		const newCustomMarkers = customMarkers.map( ( m, i ) =>
			i === index ? updatedMarker : m
		);
		setAttributes( { customMarkers: newCustomMarkers } );
	};

	const deleteMarker = () => {
		const newCustomMarkers = customMarkers.filter(
			( _, i ) => i !== index
		);
		setAttributes( { customMarkers: newCustomMarkers } );
	};

	const validateStoreType = ( value ) => {
		if ( ! value.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Store Type cannot be empty',
					'wp-store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return false;
		}
		return true;
	};

	return (
		<PanelBody
			title={
				__( 'Edit: ', 'wp-store-locator-widget-block' ) + storeType
			}
			initialOpen={ false }
		>
			<TextControl
				label={ __( 'Store Type', 'wp-store-locator-widget-block' ) }
				value={ storeType }
				onChange={ ( value ) => {
					if ( validateStoreType( value ) ) {
						updateMarker( { ...marker, storeType: value } );
					}
				} }
			/>
			<PanelRow>
				<label htmlFor="custom-tile-color-control">
					{ __(
						'Custom Tile Color',
						'wp-store-locator-widget-block'
					) }
				</label>
				<ColorIndicator
					id="custom-tile-color-control"
					colorValue={ customTyleColor }
				/>
			</PanelRow>
			<ColorPalette
				value={ customTyleColor }
				onChange={ ( value ) =>
					updateMarker( { ...marker, customTyleColor: value } )
				}
			/>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Custom Default Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ customDefaultMarkerUrl }
					onChange={ ( value ) =>
						updateMarker( {
							...marker,
							customDefaultMarkerUrl: value,
						} )
					}
				/>
				{ customDefaultMarkerUrl && (
					<img
						src={ customDefaultMarkerUrl }
						alt="Custom Default Marker"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Custom Selected Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ customSelectedMarkerUrl }
					onChange={ ( value ) =>
						updateMarker( {
							...marker,
							customSelectedMarkerUrl: value,
						} )
					}
				/>
				{ customSelectedMarkerUrl && (
					<img
						src={ customSelectedMarkerUrl }
						alt="Custom Selected Marker"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Custom Numbered Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ customNumberedMarkerUrl }
					onChange={ ( value ) =>
						updateMarker( {
							...marker,
							customNumberedMarkerUrl: value,
						} )
					}
				/>
				{ customNumberedMarkerUrl && (
					<img
						src={ customNumberedMarkerUrl }
						alt="Custom Numbered Marker"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
			<Button variant="primary" onClick={ deleteMarker }>
				{ __(
					'Delete Custom Marker',
					'wp-store-locator-widget-block'
				) }
			</Button>
		</PanelBody>
	);
}
