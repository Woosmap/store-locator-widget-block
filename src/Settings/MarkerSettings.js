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
		<PanelBody title={__('Marker Settings', 'wp-store-locator-widget-block')} initialOpen={false}>
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
			<div style={{ marginBottom: 20, padding: 10, border: '1px solid lightgray', borderRadius: 5 }}>
				<TextControl
					label={__('Default Marker Url', 'wp-store-locator-widget-block')}
					value={defaultMarkerUrl}
					onChange={(value) => setAttributes({defaultMarkerUrl: value})}
				/>
				{defaultMarkerUrl && (
					<img src={defaultMarkerUrl} alt="Default Marker Url" style={{ maxWidth: '100%', height: 'auto' }} />
				)}
			</div>
			<div style={{ marginBottom: 20, padding: 10, border: '1px solid lightgray', borderRadius: 5 }}>
				<TextControl
					label={__('Selected Marker Url', 'wp-store-locator-widget-block')}
					value={selectedMarkerUrl}
					onChange={(value) => setAttributes({selectedMarkerUrl: value})}
				/>
				{selectedMarkerUrl && (
					<img src={selectedMarkerUrl} alt="Selected Marker Url" style={{ maxWidth: '100%', height: 'auto' }} />
				)}
			</div>
			<div style={{ padding: 10, border: '1px solid lightgray', borderRadius: 5 }}>
				<TextControl
					label={__('Numbered Marker Url', 'wp-store-locator-widget-block')}
					value={numberedMarkerUrl}
					onChange={(value) => setAttributes({numberedMarkerUrl: value})}
				/>
				{numberedMarkerUrl && (
					<img src={numberedMarkerUrl} alt="Numbered Marker Url" style={{ maxWidth: '100%', height: 'auto' }} />
				)}
			</div>
		</PanelBody>
	);
}
