import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function InternationalizationSettings( props ) {
	const {
		attributes: { internationalization },
		setAttributes,
	} = props;

	return (
		<PanelBody
			title={ __(
				'Internationalization Settings',
				'store-locator-widget-block'
			) }
			initialOpen={ false }
		>
			<SelectControl
				label={ __( 'Language', 'store-locator-widget-block' ) }
				value={ internationalization.lang }
				onChange={ ( value ) =>
					setAttributes( {
						internationalization: {
							lang: value,
							period: internationalization.period,
							unitSystem: internationalization.unitSystem,
						},
					} )
				}
			>
				<option value="pt-br">
					{ __(
						'Brazilian Portuguese',
						'store-locator-widget-block'
					) }
				</option>
				<option value="ca">
					{ __( 'Catalan', 'store-locator-widget-block' ) }
				</option>
				<option value="zh">
					{ __( 'Chinese', 'store-locator-widget-block' ) }
				</option>
				<option value="zh-HK">
					{ __(
						'Chinese (Hong Kong)',
						'store-locator-widget-block'
					) }
				</option>
				<option value="hr">
					{ __( 'Croatian', 'store-locator-widget-block' ) }
				</option>
				<option value="de">
					{ __( 'Deutsch', 'store-locator-widget-block' ) }
				</option>
				<option value="nl">
					{ __( 'Dutch', 'store-locator-widget-block' ) }
				</option>
				<option value="en">
					{ __( 'English', 'store-locator-widget-block' ) }
				</option>
				<option value="fr">
					{ __( 'French', 'store-locator-widget-block' ) }
				</option>
				<option value="el">
					{ __( 'Greek', 'store-locator-widget-block' ) }
				</option>
				<option value="he">
					{ __( 'Hebrew', 'store-locator-widget-block' ) }
				</option>
				<option value="it">
					{ __( 'Italian', 'store-locator-widget-block' ) }
				</option>
				<option value="ja">
					{ __( 'Japanese', 'store-locator-widget-block' ) }
				</option>
				<option value="pl">
					{ __( 'Polish', 'store-locator-widget-block' ) }
				</option>
				<option value="pt">
					{ __( 'Portuguese', 'store-locator-widget-block' ) }
				</option>
				<option value="ro">
					{ __( 'Romanian', 'store-locator-widget-block' ) }
				</option>
				<option value="ru">
					{ __( 'Russian', 'store-locator-widget-block' ) }
				</option>
				<option value="es">
					{ __( 'Spanish', 'store-locator-widget-block' ) }
				</option>
				<option value="sv">
					{ __( 'Swedish', 'store-locator-widget-block' ) }
				</option>
				<option value="uk">
					{ __( 'Ukrainian', 'store-locator-widget-block' ) }
				</option>
			</SelectControl>

			<SelectControl
				label={ __( 'Period', 'store-locator-widget-block' ) }
				value={ internationalization.period }
				onChange={ ( value ) =>
					setAttributes( {
						internationalization: {
							lang: internationalization.lang,
							period: value,
							unitSystem: internationalization.unitSystem,
						},
					} )
				}
			>
				<option value="fr">
					{ __( '24h', 'store-locator-widget-block' ) }
				</option>
				<option value="en-US">
					{ __( '12h', 'store-locator-widget-block' ) }
				</option>
			</SelectControl>

			<SelectControl
				label={ __( 'Unit System', 'store-locator-widget-block' ) }
				value={ internationalization.unitSystem }
				onChange={ ( value ) =>
					setAttributes( {
						internationalization: {
							lang: internationalization.lang,
							period: internationalization.period,
							unitSystem: Number( value ),
						},
					} )
				}
			>
				<option value="0">
					{ __( 'Metric', 'store-locator-widget-block' ) }
				</option>
				<option value="1">
					{ __( 'Imperial', 'store-locator-widget-block' ) }
				</option>
			</SelectControl>
		</PanelBody>
	);
}
