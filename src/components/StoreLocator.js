import { dispatch } from '@wordpress/data';
import { parseDataset, validateConfig } from '../utils/configUtils';

class StoreLocator {
	constructor( element ) {
		this.element = element;
		this.storeLocatorConfig = {};

		// get the webapp object on the current window object to account for iframe editors
		this.webAppLib = element.ownerDocument.defaultView.WebApp;

		if ( ! this.webAppLib || ! this.element.dataset.apiKey ) {
			return;
		}

		this.init();
	}

	init() {
		this.createStoreLocatorWidget();
	}

	createStoreLocatorWidget() {
		const config = parseDataset( this.element.dataset );
		this.storeLocatorConfig = validateConfig( config );

		this.element.innerHTML = '';
		const newElementId = 'store-locator-widget-id';

		const newElement = document.createElement( 'div' );
		newElement.style = 'width:100%; height:100%';
		newElement.id = newElementId;
		this.element.appendChild( newElement );

		this.storeLocatorWidget = new this.webAppLib(
			newElement.id,
			this.storeLocatorConfig.maps.apiKey
		);
		this.storeLocatorWidget.isMobile = false;
		this.storeLocatorWidget.setConf( this.storeLocatorConfig );
		this.storeLocatorWidget.render();
	}
}

class StoreLocatorEdit extends StoreLocator {
	/**
	 * Constructor of the StoreLocatorEdit Class
	 *
	 * @param {HTMLElement} element       Element to initialize the map on
	 * @param {string}      clientId      ClientId of the Block
	 * @param {Function}    setAttributes to update attributes of the block
	 */
	constructor( element, clientId, setAttributes ) {
		super( element );
		this.clientId = clientId;
		this.setAttributes = setAttributes;

		this.initEdit();
	}

	/**
	 * Initialize Edit version of StoreLocator
	 */
	initEdit() {
		this.addListeners();
	}

	/**
	 * Recreate webapp.js script and reset global vars.
	 * This ensures to remove persistent states from the store locator widget for editing mode.
	 * @param {Function} callback - The function to call once the script is successfully loaded.
	 */
	refreshScript( callback ) {
		const scriptSource = 'https://webapp.woosmap.com/webapp.js';
		const loadingScript = this.element.ownerDocument.querySelector(
			`script[src="${ scriptSource }"][data-loading]`
		);
		if ( loadingScript ) {
			return;
		}
		const existingScript = this.element.ownerDocument.querySelector(
			`script[src="${ scriptSource }"]`
		);
		if ( existingScript ) {
			const globalVars = [ 'WebApp', 'woosmap' ];
			globalVars.forEach( ( varName ) => {
				if (
					this.element.ownerDocument.defaultView[ varName ] !==
					undefined
				) {
					this.element.ownerDocument.defaultView[ varName ] = null;
				}
			} );
			existingScript.parentNode.removeChild( existingScript );
		}

		const script = this.element.ownerDocument.createElement( 'script' );
		script.src = scriptSource;
		script.setAttribute( 'data-loading', 'true' );
		script.onload = () => {
			script.removeAttribute( 'data-loading' );
			this.webAppLib = this.element.ownerDocument.defaultView.WebApp;
			callback();
		};
		script.onerror = ( error ) => {
			dispatch( 'core/notices' ).createErrorNotice(
				`Failed to load the script:${ error }`,
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			script.removeAttribute( 'data-loading' );
		};
		this.element.ownerDocument.head.appendChild( script );
	}

	/**
	 * Remove the widget's element from the DOM and release internal ref
	 */
	remove() {
		if ( ! this.storeLocatorWidget ) {
			return;
		}
		this.element.parentNode.removeChild( this.element );
		this.storeLocatorWidget = null;
	}

	addListeners() {
		// select the block when the user interacts with the map
		this.element.addEventListener( 'click', () => {
			dispatch( 'core/block-editor' ).selectBlock( this.clientId );
		} );
	}

	updateDatasetProperty( key, value ) {
		if ( typeof value === 'object' ) {
			this.element.dataset[ key ] = JSON.stringify( value );
		} else {
			this.element.dataset[ key ] = value;
		}
	}

	update( options, rerenderLocator = true ) {
		Object.entries( options ).forEach( ( [ key, value ] ) => {
			if ( key === 'height' ) {
				this.element.style.height = `${ value }px`;
			} else {
				this.updateDatasetProperty( key, value );
			}
		} );

		if ( rerenderLocator ) {
			this.refreshScript( () => this.init() );
		}
	}
}

export { StoreLocator, StoreLocatorEdit };
