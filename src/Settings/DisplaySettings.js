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
		attributes: { height, theme, woosmapView },
		setAttributes,
	} = props;

	return (
		<PanelBody
			title={ __( 'Display Settings', 'store-locator-widget-block' ) }
		>
			<PanelRow>
				<label htmlFor="theme-color-control">
					{ __( 'Primary Color', 'store-locator-widget-block' ) }
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
				label={ __( 'Zoom', 'store-locator-widget-block' ) }
				value={ woosmapView.initialZoom }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: {
							...woosmapView,
							initialZoom: value,
						},
					} )
				}
				min={ 0 }
				max={ 20 }
				step={ 0.5 }
			/>
			<RangeControl
				label={ __(
					'Height ( pixels )',
					'store-locator-widget-block'
				) }
				value={ Number( height ) }
				onChange={ ( value ) => setAttributes( { height: value } ) }
				min={ 250 }
				max={ 3000 }
				step={ 5 }
			/>
			<RangeControl
				label={ __( 'Default Latitude', 'store-locator-widget-block' ) }
				value={ woosmapView.initialCenter.lat }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: {
							...woosmapView,
							initialCenter: {
								...woosmapView.initialCenter,
								lat: value,
							},
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
					'store-locator-widget-block'
				) }
				value={ woosmapView.initialCenter.lng }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: {
							...woosmapView,
							initialCenter: {
								...woosmapView.initialCenter,
								lng: value,
							},
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
