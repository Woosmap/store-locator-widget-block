import {
	PanelBody,
	RangeControl,
	PanelRow,
	ColorIndicator,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function DisplaySettings( props ) {
	const {
		attributes: { height, theme, initialCenter, zoom },
		setAttributes,
	} = props;

	return (
		<PanelBody
			title={ __( 'Display Settings', 'wp-store-locator-widget-block' ) }
		>
			<PanelRow>
				<label htmlFor="theme-color-control">
					{ __( 'Primary Color', 'wp-store-locator-widget-block' ) }
				</label>
				<ColorIndicator
					id="theme-color-control"
					colorValue={ theme.primary_color }
				/>
			</PanelRow>
			<ColorPalette
				value={ theme.primary_color }
				onChange={ ( value ) =>
					setAttributes( { theme: { primary_color: value } } )
				}
			/>
			<RangeControl
				label={ __( 'Zoom', 'wp-store-locator-widget-block' ) }
				value={ zoom }
				onChange={ ( value ) => setAttributes( { zoom: value } ) }
				min={ 0 }
				max={ 20 }
				step={ 0.5 }
			/>
			<RangeControl
				label={ __(
					'Height ( pixels )',
					'wp-store-locator-widget-block'
				) }
				value={ Number( height ) }
				onChange={ ( value ) => setAttributes( { height: value } ) }
				min={ 250 }
				max={ 5000 }
				step={ 5 }
			/>
			<RangeControl
				label={ __(
					'Default Latitude',
					'wp-store-locator-widget-block'
				) }
				value={ initialCenter.lat }
				onChange={ ( value ) =>
					setAttributes( {
						initialCenter: {
							lat: value,
							lng: initialCenter.lng,
						},
					} )
				}
				min={ -90 }
				max={ 90 }
				step={ 0.1 }
			/>
			<RangeControl
				label={ __(
					'Default Longitude',
					'wp-store-locator-widget-block'
				) }
				value={ initialCenter.lng }
				onChange={ ( value ) =>
					setAttributes( {
						initialCenter: {
							lat: initialCenter.lat,
							lng: value,
						},
					} )
				}
				min={ -180 }
				max={ 180 }
				step={ 0.1 }
			/>
		</PanelBody>
	);
}
