import { useState, useCallback } from '@wordpress/element'; // Added useCallback import
import { Placeholder, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';

export default function WidgetJsonForm( {
	blockProps,
	BlockIcon,
	initialConfig,
	onValidateConfig,
} ) {
	const [ config, setConfig ] = useState(
		JSON.stringify( initialConfig, null, 2 )
	);

	const handleConfigChange = useCallback( ( event ) => {
		setConfig( event.target.value );
	}, [] );

	const handleValidateConfig = useCallback( () => {
		try {
			const parsedConfig = JSON.parse( config );
			onValidateConfig( parsedConfig );
		} catch ( error ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Invalid Widget Conf format',
					'wp-store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
		}
	}, [ config, onValidateConfig ] );

	return (
		<div { ...blockProps }>
			<Placeholder
				label={ __(
					'Store Locator Widget Configuration',
					'wp-store-locator-widget-block'
				) }
				icon={ BlockIcon }
			>
				<textarea
					value={ config }
					onChange={ handleConfigChange }
					style={ { width: '100%', height: '350px' } }
				/>
				<Button
					isPrimary
					onClick={ handleValidateConfig }
					style={ { marginTop: '10px' } }
				>
					{ __(
						'Validate Configuration',
						'wp-store-locator-widget-block'
					) }
				</Button>
			</Placeholder>
		</div>
	);
}
