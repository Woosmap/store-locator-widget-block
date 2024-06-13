import {
	PanelBody,
	TextControl,
	RangeControl,
	PanelRow,
	ColorIndicator,
	ColorPalette
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default function DisplaySettings(props) {
	const {
		attributes: {
			height,
			zoom,
			themeColor,
			latitude,
			longitude
		},
		setAttributes,
	} = props;

	return (
		<PanelBody title={__('Display Settings', 'wp-store-locator-widget-block')}>
			<PanelRow>
				<label htmlFor="theme-color-control">
					{__('Primary Color', 'wp-store-locator-widget-block')}
				</label>
				<ColorIndicator
					id="theme-color-control"
					colorValue={themeColor}
				/>
			</PanelRow>
			<ColorPalette
				value={themeColor}
				onChange={(value) => setAttributes({themeColor: value})}
			/>
			<RangeControl
				label={__('Zoom', 'wp-store-locator-widget-block')}
				value={zoom}
				onChange={(value) => setAttributes({zoom: value})}
				min={0}
				max={20}
				step={0.5}
			/>
			<RangeControl
				label={__('Height ( pixels )', 'wp-store-locator-widget-block')}
				value={Number(height)}
				onChange={(value) => setAttributes({height: value})}
				min={250}
				max={5000}
				step={5}
			/>
			<RangeControl
				label={__('Default Latitude', 'wp-store-locator-widget-block')}
				value={latitude}
				onChange={(value) => setAttributes({latitude: value})}
				min={-90}
				max={90}
				step={0.1}
			/>
			<RangeControl
				label={__('Default Longitude', 'wp-store-locator-widget-block')}
				value={longitude}
				onChange={(value) => setAttributes({longitude: value})}
				min={-90}
				max={90}
				step={0.1}
			/>
		</PanelBody>
	);
}
