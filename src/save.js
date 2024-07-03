import { useBlockProps } from '@wordpress/block-editor';

export default function StoreLocatorBlockSave( props ) {
	const {
		attributes: {
			height,
			apiKey,
			theme,
			internationalization,
			woosmapView,
			customMarkers,
			filters,
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
			data-custom-markers={ JSON.stringify( customMarkers ) }
			data-filters={ JSON.stringify( filters ) }
		></div>
	);
}
