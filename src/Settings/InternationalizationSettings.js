import {
	PanelBody,
	SelectControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default function InternationalizationSettings(props) {
	const {
		attributes: {
			language,
			period,
			unitSystem
		},
		setAttributes,
	} = props;

	return (
		<PanelBody title={ __('Internationalization Settings', 'wp-store-locator-widget-block') } initialOpen={false}>
			<SelectControl
				label={ __('Language', 'wp-store-locator-widget-block') }
				value={ language }
				onChange={(value) => setAttributes({language: value})}
			>
				<option value="pt-br">{ __('Brazilian Portuguese', 'wp-store-locator-widget-block') }</option>
				<option value="ca">{ __('Catalan', 'wp-store-locator-widget-block') }</option>
				<option value="zh">{ __('Chinese', 'wp-store-locator-widget-block') }</option>
				<option value="zh-HK">{ __('Chinese (Hong Kong)', 'wp-store-locator-widget-block') }</option>
				<option value="hr">{ __('Croatian', 'wp-store-locator-widget-block') }</option>
				<option value="de">{ __('Deutsch', 'wp-store-locator-widget-block') }</option>
				<option value="nl">{ __('Dutch', 'wp-store-locator-widget-block') }</option>
				<option value="en">{ __('English', 'wp-store-locator-widget-block') }</option>
				<option value="fr">{ __('French', 'wp-store-locator-widget-block') }</option>
				<option value="el">{ __('Greek', 'wp-store-locator-widget-block') }</option>
				<option value="he">{ __('Hebrew', 'wp-store-locator-widget-block') }</option>
				<option value="it">{ __('Italian', 'wp-store-locator-widget-block') }</option>
				<option value="ja">{ __('Japanese', 'wp-store-locator-widget-block') }</option>
				<option value="pl">{ __('Polish', 'wp-store-locator-widget-block') }</option>
				<option value="pt">{ __('Portuguese', 'wp-store-locator-widget-block') }</option>
				<option value="ro">{ __('Romanian', 'wp-store-locator-widget-block') }</option>
				<option value="ru">{ __('Russian', 'wp-store-locator-widget-block') }</option>
				<option value="es">{ __('Spanish', 'wp-store-locator-widget-block') }</option>
				<option value="sv">{ __('Swedish', 'wp-store-locator-widget-block') }</option>
				<option value="uk">{ __('Ukrainian', 'wp-store-locator-widget-block') }</option>
			</SelectControl>

			<SelectControl
				label={ __('Period', 'wp-store-locator-widget-block') }
				value={ period }
				onChange={(value) => setAttributes({period: value})}
			>
				<option value="fr">{ __('24h', 'wp-store-locator-widget-block') }</option>
				<option value="en-US">{ __('12h', 'wp-store-locator-widget-block') }</option>
			</SelectControl>

			<SelectControl
				label={ __('Unit System', 'wp-store-locator-widget-block') }
				value={ unitSystem }
				onChange={(value) => setAttributes({unitSystem: value})}
			>
				<option value="0">{ __('Metric', 'wp-store-locator-widget-block') }</option>
				<option value="1">{ __('Imperial', 'wp-store-locator-widget-block') }</option>
			</SelectControl>
		</PanelBody>
	);
}
