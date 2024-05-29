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
			<TextControl
				label={__('Height ( pixels )', 'wp-store-locator-widget-block')}
				value={height}
				onChange={(value) => setAttributes({height: value})}
			/>
		</PanelBody>
	);
}
