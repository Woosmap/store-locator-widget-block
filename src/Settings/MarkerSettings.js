import {
	PanelBody,
	TextControl,
	RangeControl,
	PanelRow,
	ColorIndicator,
	ColorPalette,
	Button
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default function MarkerSettings(props) {
	const {
		attributes: {
			tileColor,
			tileSize,
			breakPoint,
			defaultMarkerUrl,
			selectedMarkerUrl,
			numberedMarkerUrl
		},
		setAttributes,
	} = props;

	return (
		<PanelBody title={__('Marker Settings', 'wp-store-locator-widget-block')}>
			<PanelRow>
				<label htmlFor="tile-color-control">
					{__('Tile Color', 'wp-store-locator-widget-block')}
				</label>
				<ColorIndicator
					id="tile-color-control"
					colorValue={tileColor}
				/>
			</PanelRow>
			<ColorPalette
				value={tileColor}
				onChange={(value) => setAttributes({tileColor: value})}
			/>
			<RangeControl
				label={__('Tile Size', 'wp-store-locator-widget-block')}
				value={tileSize}
				onChange={(value) => setAttributes({tileSize: value})}
				min={1}
				max={50}
				step={1}
			/>
			<RangeControl
				label={__('Break Point', 'wp-store-locator-widget-block')}
				value={breakPoint}
				onChange={(value) => setAttributes({breakPoint: value})}
				min={1}
				max={20}
				step={1}
			/>
			<TextControl
				label={__('Default Marker Url', 'wp-store-locator-widget-block')}
				value={defaultMarkerUrl}
				onChange={(value) => setAttributes({defaultMarkerUrl: value})}
			/>
			<TextControl
				label={__('Selected Marker Url', 'wp-store-locator-widget-block')}
				value={selectedMarkerUrl}
				onChange={(value) => setAttributes({selectedMarkerUrl: value})}
			/>
			<TextControl
				label={__('Numbered Marker Url', 'wp-store-locator-widget-block')}
				value={numberedMarkerUrl}
				onChange={(value) => setAttributes({numberedMarkerUrl: value})}
			/>
		</PanelBody>
	);
}
