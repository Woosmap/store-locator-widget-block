import { dispatch } from '@wordpress/data';
import { parseDataset, validateConfig } from '../utils/configUtils';
import { loadOrReplaceScript } from '../utils/scriptUtils';

class StoreLocator {
	constructor( element ) {
		this.element = element;
		this.storeLocatorConfig = {};

		if ( ! this.element.dataset.apiKey ) {
			return;
		}

		loadOrReplaceScript( this.element, () => {
			this.webAppLib = this.element.ownerDocument.defaultView.WebApp;
			this.init();
		} );
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
			loadOrReplaceScript( this.element, () => {
				this.webAppLib = this.element.ownerDocument.defaultView.WebApp;
				this.init();
			} );
		}
	}
}

export { StoreLocator, StoreLocatorEdit };
