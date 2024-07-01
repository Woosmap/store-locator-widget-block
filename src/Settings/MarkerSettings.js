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
		attributes: { woosmapView },
		setAttributes,
	} = props;

	const { tileColor, tileSize, breakPoint, style } = woosmapView || {};

	return (
		<PanelBody
			title={ __( 'Marker Settings', 'store-locator-widget-block' ) }
			initialOpen={ false }
		>
			<PanelRow>
				<label htmlFor="tile-color-control">
					{ __( 'Tile Color', 'store-locator-widget-block' ) }
				</label>
				<ColorIndicator
					id="tile-color-control"
					colorValue={ tileColor }
				/>
			</PanelRow>
			<ColorPalette
				value={ tileColor }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: { ...woosmapView, tileColor: value },
					} )
				}
			/>
			<RangeControl
				label={ __( 'Tile Size', 'store-locator-widget-block' ) }
				value={ tileSize }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: { ...woosmapView, tileSize: value },
					} )
				}
				min={ 1 }
				max={ 50 }
				step={ 1 }
			/>
			<RangeControl
				label={ __( 'Break Point', 'store-locator-widget-block' ) }
				value={ breakPoint }
				onChange={ ( value ) =>
					setAttributes( {
						woosmapView: { ...woosmapView, breakPoint: value },
					} )
				}
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
						'store-locator-widget-block'
					) }
					value={ style.default.icon.url }
					onChange={ ( value ) =>
						setAttributes( {
							woosmapView: {
								...woosmapView,
								style: {
									...style,
									default: {
										...style.default,
										icon: { url: value },
									},
								},
							},
						} )
					}
				/>
				{ style.default.icon.url && (
					<img
						src={ style.default.icon.url }
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
						'store-locator-widget-block'
					) }
					value={ style.default.selectedIcon.url }
					onChange={ ( value ) =>
						setAttributes( {
							woosmapView: {
								...woosmapView,
								style: {
									...style,
									default: {
										...style.default,
										selectedIcon: { url: value },
									},
								},
							},
						} )
					}
				/>
				{ style.default.selectedIcon.url && (
					<img
						src={ style.default.selectedIcon.url }
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
						'store-locator-widget-block'
					) }
					value={ style.default.numberedIcon.url }
					onChange={ ( value ) =>
						setAttributes( {
							woosmapView: {
								...woosmapView,
								style: {
									...style,
									default: {
										...style.default,
										numberedIcon: { url: value },
									},
								},
							},
						} )
					}
				/>
				{ style.default.numberedIcon.url && (
					<img
						src={ style.default.numberedIcon.url }
						alt="Numbered Marker Url"
						style={ { maxWidth: '100%', height: 'auto' } }
					/>
				) }
			</div>
		</PanelBody>
	);
}
