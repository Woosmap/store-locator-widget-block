import {useBlockProps} from '@wordpress/block-editor';

export default function StoreLocatorBlockSave(props) {
	const {
		attributes: {
			height,
			latitude,
			longitude,
			zoom,
			apiKey
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
			data-api-key={apiKey}
		>
		</div>
	);
}
