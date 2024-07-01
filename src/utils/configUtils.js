// Safe JSON parsing with default value
import { dispatch } from '@wordpress/data';

function safeParse( json, defaultValue = {} ) {
	try {
		return JSON.parse( json ) || defaultValue;
	} catch ( e ) {
		dispatch( 'core/notices' ).createErrorNotice(
			`Error parsing conf: ${ e }`,
			{
				isDismissible: true,
				type: 'snackbar',
			}
		);
		return defaultValue;
	}
}

// Process custom markers
function processCustomMarkers( customMarkers = [] ) {
	return customMarkers.map( ( marker ) => ( {
		type: marker.storeType || 'store_type',
		color: marker.customTyleColor || '#000',
		icon: {
			url:
				marker.customDefaultMarkerUrl ||
				'https://images.woosmap.com/marker-default.svg',
		},
		selectedIcon: {
			url:
				marker.customSelectedMarkerUrl ||
				'https://images.woosmap.com/marker-selected.svg',
		},
		numberedIcon: {
			url:
				marker.customNumberedMarkerUrl ||
				'https://images.woosmap.com/marker-default.svg',
		},
	} ) );
}

// Process filters
function processFilters( filters = [] ) {
	return filters.map( ( filter ) => ( {
		propertyType: filter.propertyType || 'propertyType',
		title: { en: filter.title || 'title' },
		choices:
			filter.choices.map( ( choice ) => ( {
				key: choice.choiceKey || 'choiceKey',
				en: choice.choiceTitle || 'choiceTitle',
				selected: choice.choiceSelected || false,
				hidden: choice.choiceHidden || false,
			} ) ) || [],
		innerOperator: filter.innerOperator || 'and',
	} ) );
}

export function parseDataset( dataset ) {
	const {
		customMarkers = '[]',
		filters = '[]',
		theme = '{}',
		internationalization = '{}',
		woosmapView = '{}',
		defaultStyle = '{}',
		apiKey,
		tileColor = '#000',
		tileSize = '11',
		breakPoint = '10',
		filtersOpened = 'false',
		filtersCustomOrder = 'false',
		filtersOuterOperator = 'or',
	} = dataset;

	const parsedWoosmapView = safeParse( woosmapView, {
		initialCenter: { lat: 50, lng: 0 },
		initialZoom: 13,
	} );

	return {
		theme: safeParse( theme, { primary_color: '#000' } ),
		datasource: { max_responses: 5, max_distance: 50000 },
		internationalization: safeParse( internationalization, {
			lang: 'en',
			period: 'fr',
			unitSystem: 0,
		} ),
		maps: { apiKey, provider: 'woosmap' },
		woosmapview: {
			initialCenter: parsedWoosmapView.initialCenter,
			initialZoom: parsedWoosmapView.initialZoom,
			tileStyle: {
				color: tileColor,
				size: Number( tileSize ),
				minSize: 5,
				typeRules: processCustomMarkers( safeParse( customMarkers ) ),
			},
			breakPoint: Number( breakPoint ),
			style: {
				rules: processCustomMarkers( safeParse( customMarkers ) ),
				default: safeParse( defaultStyle, {
					icon: {
						url: 'https://images.woosmap.com/marker-default.svg',
					},
					selectedIcon: {
						url: 'https://images.woosmap.com/marker-selected.svg',
					},
					numberedIcon: {
						url: 'https://images.woosmap.com/marker-default.svg',
					},
				} ),
			},
		},
		filters: {
			opened: filtersOpened === 'true',
			customOrder: filtersCustomOrder === 'true',
			filters: processFilters( safeParse( filters ) ),
			outerOperator: filtersOuterOperator,
		},
	};
}

export function validateConfig( config ) {
	if ( ! config.maps.apiKey ) {
		throw new Error(
			'StoreLocator configuration error: apiKey is required.'
		);
	}
	// Add more validations as necessary
	return config;
}

export function processInputConfig( config ) {
	const trimmedConfig = config.trim();
	return trimmedConfig
		.replace( /\\\"/g, '\\\\"' ) // Escape existing double quotes
		.replace( /([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":' ) // Ensure property names are quoted
		.replace( /,\s*}/g, '}' ) // Remove trailing commas in objects
		.replace( /,\s*]/g, ']' ); // Remove trailing commas in arrays
}
