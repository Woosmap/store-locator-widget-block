import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';

export default function EditAuthForm() {
	const [publicApiKey, setPublicApiKey] = useState('');
	const [isBusy, setIsBusy] = useState(false);

	const siteSettings = useSelect((select) => {
		return select('core').getEntityRecord('root', 'site');
	}, []);

	useEffect(() => {
		if (siteSettings) {
			const {
				woosmap_settings: { woosmap_public_api_key },
			} = siteSettings;
			setPublicApiKey(woosmap_public_api_key);
		}
	}, [siteSettings]);

	const handleSave = () => {
		setIsBusy(true);

		dispatch('core')
			.saveEntityRecord('root', 'site', {
				woosmap_settings: {
					woosmap_public_api_key: publicApiKey,
				},
			})
			.then(({ woosmap_settings: { woosmap_public_api_key } }) => {
				setPublicApiKey(woosmap_public_api_key);
				setIsBusy(false);
				window.dispatchEvent(new CustomEvent('woosmapSettingsSaved'));
			})
			.catch((error) => {
				dispatch('core/notices').createErrorNotice(error.message, {
					isDismissible: true,
					type: 'snackbar',
				});
				setIsBusy(false);
			});
	};

	return (
		<>
			<TextControl
				label={__('Please enter your Public API Key', 'wp-store-locator-widget-block')}
				readOnly={isBusy}
				name="woosmap_public_api_key"
				value={publicApiKey}
				onChange={(newPublicApiKeyKey) => setPublicApiKey(newPublicApiKeyKey)}
			/>
			<Button
				isPrimary
				disabled={isBusy}
				isBusy={isBusy}
				onClick={handleSave}
			>
				{__('Confirm Woosmap Credentials', 'wp-store-locator-widget-block')}
			</Button>
		</>
	);
}
