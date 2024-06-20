import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import DisplaySettings from './Settings/DisplaySettings';
import MarkerSettings from './Settings/MarkerSettings';
import InternationalizationSettings from "./Settings/InternationalizationSettings";
import FiltersSettings from "./Settings/FiltersSettings";
export default function InspectorSettings(props) {
	const { isAuthenticated } = props;

	if (!isAuthenticated) {
		return (
			<InspectorControls>
				<PanelBody>
					<p>
						{__(
							'You need to confirm your access to Woosmap before you can continue.',
							'wp-store-locator-widget-block'
						)}
					</p>
				</PanelBody>
			</InspectorControls>
		);
	}

	return (
		<InspectorControls>
			<DisplaySettings {...props} />
			<InternationalizationSettings {...props} />
			<MarkerSettings {...props} />
			<FiltersSettings {...props} />
		</InspectorControls>
	);
}
