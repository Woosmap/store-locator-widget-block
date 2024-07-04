import { dispatch } from '@wordpress/data';

/**
 * Load or replace webapp.js script and reset global vars.
 * This ensures to remove persistent states from the store locator widget for editing mode.
 * @param {HTMLElement} element
 * @param {Function}    callback - The function to call once the script is successfully loaded.
 */
export function loadOrReplaceScript( element, callback = null ) {
	const webappScriptSource = 'https://webapp.woosmap.com/webapp.js';
	const mapScriptSource = 'https://sdk.woosmap.com/map/map.js';
	const loadingScript = element.ownerDocument.querySelector(
		`script[src^="${ webappScriptSource }"][data-loading]`
	);
	if ( loadingScript ) {
		return;
	}
	const existingScripts = element.ownerDocument.querySelectorAll(
		`script[src^="${ webappScriptSource }"], script[src^="${ mapScriptSource }"]`
	);
	if ( existingScripts.length ) {
		const globalVars = [ 'WebApp', 'woosmap' ];
		globalVars.forEach( ( varName ) => {
			if ( element.ownerDocument.defaultView[ varName ] !== undefined ) {
				element.ownerDocument.defaultView[ varName ] = null;
			}
		} );
		existingScripts.forEach( ( script ) =>
			script.parentNode.removeChild( script )
		);
	}

	const script = element.ownerDocument.createElement( 'script' );
	script.src = webappScriptSource;
	script.setAttribute( 'data-loading', 'true' );
	script.onload = () => {
		script.removeAttribute( 'data-loading' );
		if ( callback && typeof callback === 'function' ) {
			callback();
		}
	};
	script.onerror = ( error ) => {
		dispatch( 'core/notices' ).createErrorNotice(
			`Failed to load Woosmap WebApp script: ${ error }`,
			{
				isDismissible: true,
				type: 'snackbar',
			}
		);
		script.removeAttribute( 'data-loading' );
	};
	element.ownerDocument.head.appendChild( script );
}
