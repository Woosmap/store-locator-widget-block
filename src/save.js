import { useBlockProps } from '@wordpress/block-editor';

export default function StoreLocatorBlockSave( props ) {
	const {
		attributes: {
			height,
			apiKey,
			theme,
			internationalization,
			woosmapView,
			tileColor,
			tileSize,
			breakPoint,
			defaultStyle,
			customMarkers,
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator,
		},
	} = props;

	const blockProps = useBlockProps.save( {
		style: {
			height: `${ height }px`,
		},
		id: 'storeLocatorWidget',
	} );

	return (
		<div
			{ ...blockProps }
			data-api-key={ apiKey }
			data-theme={ JSON.stringify( theme ) }
			data-internationalization={ JSON.stringify( internationalization ) }
			data-woosmap-view={ JSON.stringify( woosmapView ) }
			data-tile-color={ tileColor }
			data-tile-size={ tileSize }
			data-break-point={ breakPoint }
			data-default-style={ JSON.stringify( defaultStyle ) }
			data-custom-markers={ JSON.stringify( customMarkers ) }
			data-filters-opened={ filtersOpened }
			data-filters-custom-order={ filtersCustomOrder }
			data-filters={ JSON.stringify( filters ) }
			data-filters-outer-operator={ filtersOuterOperator }
		></div>
	);
}
