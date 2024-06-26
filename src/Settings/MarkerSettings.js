import {
	PanelBody,
	TextControl,
	RangeControl,
	PanelRow,
	ColorIndicator,
	ColorPalette,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function MarkerSettings( props ) {
	const {
		attributes: { breakPoint, tileStyle, defaultStyle },
		setAttributes,
	} = props;

	return (
		<PanelBody
			title={ __( 'Marker Settings', 'wp-store-locator-widget-block' ) }
			initialOpen={ false }
		>
			<PanelRow>
				<label htmlFor="tile-color-control">
					{ __( 'Tile Color', 'wp-store-locator-widget-block' ) }
				</label>
				<ColorIndicator
					id="tile-color-control"
					colorValue={ tileStyle.color }
				/>
			</PanelRow>
			<ColorPalette
				value={ tileStyle.color }
				onChange={ ( value ) =>
					setAttributes( {
						tileStyle: {
							color: value,
							size: tileStyle.size,
							minSize: tileStyle.minSize,
							typeRules: tileStyle.typeRules,
						},
					} )
				}
			/>
			<RangeControl
				label={ __( 'Tile Size', 'wp-store-locator-widget-block' ) }
				value={ tileStyle.size }
				onChange={ ( value ) =>
					setAttributes( {
						tileStyle: {
							color: tileStyle.color,
							size: value,
							minSize: tileStyle.minSize,
							typeRules: tileStyle.typeRules,
						},
					} )
				}
				min={ 1 }
				max={ 50 }
				step={ 1 }
			/>
			<RangeControl
				label={ __( 'Break Point', 'wp-store-locator-widget-block' ) }
				value={ breakPoint }
				onChange={ ( value ) => setAttributes( { breakPoint: value } ) }
				min={ 1 }
				max={ 20 }
				step={ 1 }
			/>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Default Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ defaultStyle.icon.url }
					onChange={ ( value ) =>
						setAttributes( {
							defaultStyle: {
								icon: { url: value },
								selectedIcon: {
									url: defaultStyle.selectedIcon.url,
								},
								numberedIcon: {
									url: defaultStyle.numberedIcon.url,
								},
							},
						} )
					}
				/>
				{ defaultStyle.icon.url && (
					<img
						src={ defaultStyle.icon.url }
						alt="Default Marker Url"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Selected Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ defaultStyle.selectedIcon.url }
					onChange={ ( value ) =>
						setAttributes( {
							defaultStyle: {
								icon: { url: defaultStyle.icon.url },
								selectedIcon: {
									url: value,
								},
								numberedIcon: {
									url: defaultStyle.numberedIcon.url,
								},
							},
						} )
					}
				/>
				{ defaultStyle.selectedIcon.url && (
					<img
						src={ defaultStyle.selectedIcon.url }
						alt="Selected Marker Url"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
			<div
				style={ {
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Numbered Marker Url',
						'wp-store-locator-widget-block'
					) }
					value={ defaultStyle.numberedIcon.url }
					onChange={ ( value ) =>
						setAttributes( {
							defaultStyle: {
								icon: { url: defaultStyle.icon.url },
								selectedIcon: {
									url: defaultStyle.selectedIcon.url,
								},
								numberedIcon: {
									url: value,
								},
							},
						} )
					}
				/>
				{ defaultStyle.numberedIcon.url && (
					<img
						src={ defaultStyle.numberedIcon.url }
						alt="Numbered Marker Url"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
		</PanelBody>
	);
}
