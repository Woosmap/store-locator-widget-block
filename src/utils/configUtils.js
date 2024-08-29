// Safe JSON parsing with default value
import { dispatch } from '@wordpress/data';
import { defaultConfig } from './configDefaults';

function deepMerge( target, source ) {
	Object.keys( source ).forEach( ( key ) => {
		if ( Array.isArray( source[ key ] ) ) {
			target[ key ] = source[ key ];
		} else if ( source[ key ] && typeof source[ key ] === 'object' ) {
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

// Utility function to check for empty values
function isEmptyValue( value ) {
	return (
		value === null ||
		value === undefined ||
		( typeof value === 'object' && Object.keys( value ).length === 0 ) ||
		( typeof value === 'string' && value.trim() === '' )
	);
}

export function parseDataset( dataset ) {
	const {
		filters = '{}',
		theme = '{}',
		datasource = '{}',
		internationalization = '{}',
		woosmapView = '{}',
		maps = '{}',
		initialSearch = '{}',
		apiKey,
	} = dataset;

	const parsedWoosmapView = safeParse(
		woosmapView,
		defaultConfig.woosmapView
	);
	const parsedTheme = safeParse( theme, defaultConfig.theme );
	const parsedDataSource = safeParse( datasource, defaultConfig.datasource );
	const parsedInternationalization = safeParse(
		internationalization,
		defaultConfig.internationalization
	);
	const parsedFilters = safeParse( filters );
	const parsedInitialSearch = safeParse( initialSearch );

	const config = {
		theme: parsedTheme,
		datasource: parsedDataSource,
		internationalization: parsedInternationalization,
		maps: {
			...safeParse( maps, defaultConfig.maps ),
			apiKey,
		},
		woosmapView: {
			...parsedWoosmapView,
			initialCenter: parsedWoosmapView.initialCenter,
			initialZoom: parsedWoosmapView.initialZoom,
			tileStyle: {
				color: parsedWoosmapView.tileStyle.color,
				size: Number( parsedWoosmapView.tileStyle.size ),
				minSize: Number( parsedWoosmapView.tileStyle.minSize ),
				typeRules: parsedWoosmapView.tileStyle.typeRules,
			},
			breakPoint: Number( parsedWoosmapView.breakPoint ),
			style: {
				rules: parsedWoosmapView.style.rules,
				default: parsedWoosmapView.style.default,
			},
		},
		filters: parsedFilters,
		initialSearch: parsedInitialSearch,
	};

	removeEmptyValues( config );
	return config;
}

// Remove top-level keys with empty values

function removeEmptyValues( config ) {
	Object.keys( config ).forEach( ( key ) => {
		if ( isEmptyValue( config[ key ] ) ) {
			delete config[ key ];
		}
	} );
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
	const fixedConfig = config
		.replace( /([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":' ) // Ensure keys are quoted
		.replace( /\b(true|false|null)\b/g, ( match ) => match.toLowerCase() ) // Correct boolean and null literals
		.replace( /,\s*([}\]])/g, '$1' ) // Remove trailing commas
		.trim();

	try {
		const parsedConfig = JSON.parse( fixedConfig );
		// Check and replace "woosmapview" with "woosmapView" at the first level
		if ( parsedConfig.hasOwnProperty( 'woosmapview' ) ) {
			parsedConfig.woosmapView = parsedConfig.woosmapview;
			delete parsedConfig.woosmapview;
		}
		return JSON.stringify( parsedConfig, null, 2 );
	} catch ( error ) {
		throw new Error(
			'Failed to process input config into valid JSON: ' + error.message
		);
	}
}
