import { useState, useCallback } from '@wordpress/element';
import { Placeholder, Button } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { processInputConfig } from '../utils/configUtils';

export default function WidgetJsonForm( {
	blockProps,
	initialConfig,
	onValidateConfig,
} ) {
	const [ config, setConfig ] = useState(
		JSON.stringify( initialConfig, null, 2 )
	);

	const handleValidateConfig = useCallback( () => {
		try {
			const modifiedConfig = processInputConfig( config );
			setConfig( modifiedConfig );
			const parsedConfig = JSON.parse( modifiedConfig );
			onValidateConfig( parsedConfig );
		} catch ( error ) {
			const errorMessage = `Invalid Widget Conf format: ${ error.message }`;
			dispatch( 'core/notices' ).createErrorNotice( errorMessage, {
				isDismissible: true,
				type: 'snackbar',
			} );
		}
	}, [ config, onValidateConfig ] );

	return (
		<div { ...blockProps }>
			<Placeholder
				label={ __(
					'Store Locator Widget Configuration',
					'store-locator-widget-block'
				) }
			>
				<div style={ { marginBottom: '1em' } }>
					{ __(
						'Before updating the configuration, please ensure that your JSON is valid and that it includes all necessary fields for the widget to function correctly.',
						'store-locator-widget-block'
					) }
				</div>
				<pre>
					<RichText
						value={ config }
						onChange={ ( text ) => setConfig( text ) }
						placeholder={ __( 'Write json conf…' ) }
						aria-label={ __( 'Conf' ) }
						preserveWhiteSpace={ true }
						allowedFormats={ [] }
						withoutInteractiveFormatting={ true }
					/>
				</pre>
				<Button
					isPrimary
					onClick={ handleValidateConfig }
					style={ { marginTop: '10px' } }
				>
					{ __(
						'Validate Configuration',
						'store-locator-widget-block'
					) }
				</Button>
			</Placeholder>
		</div>
	);
}
