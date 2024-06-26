import {useBlockProps} from '@wordpress/block-editor';

export default function StoreLocatorBlockSave(props) {
	const {
		attributes: {
			height,
			latitude,
			longitude,
			zoom,
			themeColor,
			apiKey,
			tileColor,
			tileSize,
			breakPoint,
			defaultMarkerUrl,
			selectedMarkerUrl,
			numberedMarkerUrl,
			language,
			period,
			unitSystem,
			customMarkers,
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator
		},
	} = props;

	const blockProps = useBlockProps.save({
		style: {
			height: `${height}px`,
		},
		id: "storeLocatorWidget",
	});

	return (
		<div
			{...blockProps}
			data-latitude={latitude}
			data-longitude={longitude}
			data-zoom={zoom}
			data-theme-color={themeColor}
			data-api-key={apiKey}
			data-tile-color={tileColor}
			data-tile-size={tileSize}
			data-break-point={breakPoint}
			data-default-marker-url={defaultMarkerUrl}
			data-selected-marker-url={selectedMarkerUrl}
			data-numbered-marker-url={numberedMarkerUrl}
			data-language={language}
			data-period={period}
			data-unit-system={unitSystem}
			data-custom-markers={JSON.stringify(customMarkers)}
			data-filters-opened={filtersOpened}
			data-filters-custom-order={filtersCustomOrder}
			data-filters={JSON.stringify(filters)}
			data-filters-outer-operator={filtersOuterOperator}
		>
		</div>
	);
}
