import {
	PanelBody,
	Button,
	PanelRow,
	ColorIndicator,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import MarkerIconUpload from './MarkerIconUpload';
import { useState } from '@wordpress/element';

export default function EditCustomMarker( props ) {
	const {
		marker,
		storeType,
		customDefaultMarkerUrl,
		customSelectedMarkerUrl,
		customNumberedMarkerUrl,
		updateMarker,
		updateTypeRules,
		deleteMarker,
	} = props;

	const [ color, setColor ] = useState( props.color );

	const renderMarkerIconUpload = ( title, markerUrl, updateKey ) => (
		<PanelBody
			title={ title }
			className="marker-edit"
			icon={
				<img
					src={ markerUrl }
					alt={ `${ title } Icon` }
					style={ { height: '20px' } }
				/>
			}
			initialOpen={ false }
		>
			<PanelRow>
				<MarkerIconUpload
					marker={ { markerUrl } }
					update={ ( updatedMarker ) =>
						updateMarker( {
							...marker,
							[ updateKey ]: { url: updatedMarker.markerUrl },
						} )
					}
				/>
			</PanelRow>
		</PanelBody>
	);

	return (
		<PanelBody
			title={ __( 'Edit: ', 'store-locator-widget-block' ) + storeType }
			initialOpen={ false }
			icon={
				<ColorIndicator id="tile-color-control" colorValue={ color } />
			}
		>
			<p>
				{ __( 'Store Type: ', 'store-locator-widget-block' ) }
				<code>{ storeType }</code>
			</p>

			<label htmlFor="tile-color-control">
				{ __( 'Tile Color', 'store-locator-widget-block' ) }
			</label>
			<ColorPalette
				value={ color }
				onChange={ ( newColor ) => {
					setColor( newColor );
					updateTypeRules( newColor );
				} }
			/>

			{ renderMarkerIconUpload(
				__( 'Default Marker Icon', 'store-locator-widget-block' ),
				customDefaultMarkerUrl,
				'icon'
			) }
			{ renderMarkerIconUpload(
				__( 'Selected Marker Icon', 'store-locator-widget-block' ),
				customSelectedMarkerUrl,
				'selectedIcon'
			) }
			{ renderMarkerIconUpload(
				__( 'Numbered Marker Icon', 'store-locator-widget-block' ),
				customNumberedMarkerUrl,
				'numberedIcon'
			) }

			<Button variant="primary" onClick={ deleteMarker }>
				{ __( 'Delete Custom Marker', 'store-locator-widget-block' ) }
			</Button>
		</PanelBody>
	);
}
