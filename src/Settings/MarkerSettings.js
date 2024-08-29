import {
	PanelBody,
	RangeControl,
	PanelRow,
	ColorIndicator,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import EditMarker from '../components/EditMarker';

export default function MarkerSettings( {
	attributes: { woosmapView },
	setAttributes,
} ) {
	const { breakPoint, tileStyle, style } = woosmapView || {};

	const updateAttribute = ( key, value ) => {
		setAttributes( {
			woosmapView: {
				...woosmapView,
				[ key ]: value,
			},
		} );
	};

	const updateMarker = ( updatedMarker ) => {
		updateAttribute( 'style', {
			...style,
			default: {
				...style.default,
				...updatedMarker,
			},
		} );
	};

	const renderEditMarker = ( label, markerUrl, updateKey ) => (
		<EditMarker
			label={ label }
			markerUrl={ markerUrl }
			update={ ( marker ) =>
				updateMarker( { [ updateKey ]: { url: marker.markerUrl } } )
			}
		/>
	);

	return (
		<PanelBody
			title={ __( 'Marker Settings', 'store-locator-widget-block' ) }
			initialOpen={ false }
		>
			<PanelRow>
				<label htmlFor="tile-color-control">
					{ __( 'Tile Color', 'store-locator-widget-block' ) }
				</label>
				<ColorIndicator
					id="tile-color-control"
					colorValue={ tileStyle.color }
				/>
			</PanelRow>
			<ColorPalette
				value={ tileStyle.color }
				onChange={ ( value ) =>
					updateAttribute( 'tileStyle', {
						...tileStyle,
						color: value,
					} )
				}
			/>
			<RangeControl
				label={ __( 'Tile Size', 'store-locator-widget-block' ) }
				value={ tileStyle.size }
				onChange={ ( value ) =>
					updateAttribute( 'tileStyle', {
						...tileStyle,
						size: value,
					} )
				}
				min={ 1 }
				max={ 50 }
				step={ 1 }
			/>
			<RangeControl
				label={ __( 'Break Point', 'store-locator-widget-block' ) }
				value={ breakPoint }
				onChange={ ( value ) => updateAttribute( 'breakPoint', value ) }
				min={ 1 }
				max={ 20 }
				step={ 1 }
			/>
			{ renderEditMarker(
				__( 'Default Marker Url', 'store-locator-widget-block' ),
				style.default.icon.url ||
					window.woosmapPluginData.markerDefaultUrl,
				'icon'
			) }
			{ renderEditMarker(
				__( 'Selected Marker Url', 'store-locator-widget-block' ),
				style.default.selectedIcon.url ||
					window.woosmapPluginData.selectedDefaultUrl,
				'selectedIcon'
			) }
			{ renderEditMarker(
				__( 'Numbered Marker Url', 'store-locator-widget-block' ),
				style.default.numberedIcon.url ||
					window.woosmapPluginData.markerDefaultUrl,
				'numberedIcon'
			) }
		</PanelBody>
	);
}
