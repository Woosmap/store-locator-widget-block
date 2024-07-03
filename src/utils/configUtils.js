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

export function parseDataset( dataset ) {
	const {
		filters = '{}',
		theme = '{}',
		datasource = '{}',
		internationalization = '{}',
		woosmapView = '{}',
		apiKey,
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
		filters: safeParse( filters, {} ),
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
	const fixedConfig = config
		.replace( /'/g, '"' ) // Replace single quotes with double quotes
		.replace( /([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":' ) // Ensure keys are quoted
		.replace( /\b(true|false|null)\b/g, ( match ) => match.toLowerCase() ) // Correct boolean and null literals
		.replace( /,\s*([}\]])/g, '$1' ) // Remove trailing commas
		.trim();

	try {
		// Attempt to parse and then stringify to ensure valid JSON format
		return JSON.stringify( JSON.parse( fixedConfig ), null, 2 );
	} catch ( error ) {
		throw new Error(
			'Failed to process input config into valid JSON: ' + error.message
		);
	}
}
