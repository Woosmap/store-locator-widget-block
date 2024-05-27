import {
	PanelBody,
	TextControl,
	RangeControl,
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default function DisplaySettings(props) {
	const {
		attributes: {
			height,
			zoom
		},
		setAttributes,
	} = props;

	return (
		<PanelBody title={__('Display Settings', 'wp-store-locator-widget-block')}>
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
