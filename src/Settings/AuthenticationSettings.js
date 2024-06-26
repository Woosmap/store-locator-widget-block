import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import EditAuthForm from '../components/EditAuthForm';

export default function AuthenticationSettings() {
	return (
		<PanelBody
			title={ __( 'Authentication', 'wp-store-locator-widget-block' ) }
			initialOpen={ false }
		>
			<EditAuthForm />
		</PanelBody>
	);
}
