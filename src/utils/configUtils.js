// Safe JSON parsing with default value
import { dispatch } from '@wordpress/data';
import { defaultConfig } from './configDefaults';

function deepMerge( target, source ) {
	Object.keys( source ).forEach( ( key ) => {
		if ( source[ key ] && typeof source[ key ] === 'object' ) {
			if ( ! target[ key ] ) {
				target[ key ] = {};
			}
			deepMerge( target[ key ], source[ key ] );
		} else {
			target[ key ] = source[ key ];
		}
	} );
	return target;
}

function safeParse( json, defaultValue = {} ) {
	try {
		const parsed = JSON.parse( json );
		return deepMerge( defaultValue, parsed ); // Use deepMerge to combine defaults and parsed values
	} catch ( e ) {
		dispatch( 'core/notices' ).createErrorNotice(
			`Error parsing conf: ${ e.message }`,
			{
				isDismissible: true,
				type: 'snackbar',
			}
		);
		return defaultValue;
	}
}

function processCustomMarkers( customMarkers = [] ) {
	return customMarkers.map(
		( {
			storeType = 'store_type',
			customTyleColor = '#000',
			customDefaultMarkerUrl,
			customSelectedMarkerUrl,
			customNumberedMarkerUrl,
		} ) => ( {
			type: storeType,
			color: customTyleColor,
			icon: {
				url:
					customDefaultMarkerUrl ||
					'https://images.woosmap.com/marker-default.svg',
			},
			selectedIcon: {
				url:
					customSelectedMarkerUrl ||
					'https://images.woosmap.com/marker-selected.svg',
			},
			numberedIcon: {
				url:
					customNumberedMarkerUrl ||
					'https://images.woosmap.com/marker-default.svg',
			},
		} )
	);
}

function processFilters( filters = [] ) {
	return filters.map(
		( {
			propertyType = 'propertyType',
			title,
			choices = [],
			innerOperator = 'and',
		} ) => ( {
			propertyType,
			title: { en: title || 'title' },
			choices: choices.map(
				( {
					choiceKey = 'choiceKey',
					choiceTitle = 'choiceTitle',
					choiceSelected = false,
					choiceHidden = false,
				} ) => ( {
					key: choiceKey,
					en: choiceTitle,
					selected: choiceSelected,
					hidden: choiceHidden,
				} )
			),
			innerOperator,
		} )
	);
}

export function parseDataset( dataset ) {
	const {
		customMarkers = '[]',
		filters = '[]',
		theme = '{}',
		datasource = '{}',
		internationalization = '{}',
		woosmapView = '{}',
		apiKey,
		filtersOpened = 'false',
		filtersCustomOrder = 'false',
		filtersOuterOperator = 'or',
	} = dataset;

	const parsedWoosmapView = safeParse(
		woosmapView,
		defaultConfig.woosmapview
	);

	return {
		theme: safeParse( theme, defaultConfig.theme ),
		datasource: safeParse( datasource, defaultConfig.datasource ),
		internationalization: safeParse(
			internationalization,
			defaultConfig.internationalization
		),
		maps: { apiKey, provider: 'woosmap' },
		woosmapview: {
			initialCenter: parsedWoosmapView.initialCenter,
			initialZoom: parsedWoosmapView.initialZoom,
			tileStyle: {
				color: parsedWoosmapView.tileStyle.color,
				size: Number( parsedWoosmapView.tileStyle.size ),
				minSize: Number( parsedWoosmapView.tileStyle.minSize ),
				typeRules: processCustomMarkers(
					safeParse( customMarkers, [] )
				),
			},
			breakPoint: Number( parsedWoosmapView.breakPoint ),
			style: {
				rules: processCustomMarkers( safeParse( customMarkers, [] ) ),
				default: parsedWoosmapView.style.default,
			},
		},
		filters: {
			opened: filtersOpened === 'true',
			customOrder: filtersCustomOrder === 'true',
			filters: processFilters( safeParse( filters, [] ) ),
			outerOperator: filtersOuterOperator,
		},
	};
}

export function validateConfig( config ) {
	if (
		! config.maps.apiKey ||
		typeof config.maps.apiKey !== 'string' ||
		! config.maps.apiKey.trim()
	) {
		throw new Error(
			'StoreLocator configuration error: apiKey is required and must be a non-empty string.'
		);
	}
	// Additional validations can be added here
	return config;
}

export function processInputConfig( config ) {
	return config
		.trim()
		.replace( /([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":' ) // Ensure property names are quoted
		.replace( /,\s*([}\]])/g, '$1' ); // Remove trailing commas in objects and arrays
}
