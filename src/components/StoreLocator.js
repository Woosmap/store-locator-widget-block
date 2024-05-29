import {dispatch} from '@wordpress/data';

class StoreLocator {
	constructor(element) {
		this.element = element;
		this.storeLocatorConfig = {};

		// get the webapp object on the current window object to account for iframe editors
		this.webAppLib = element.ownerDocument.defaultView.WebApp;

		if (!this.webAppLib || !this.element.dataset.apiKey) return;

		this.init();
	}

	init() {
		this.createStoreLocatorWidget();
	}

	createStoreLocatorWidget() {
		const {
			latitude,
			longitude,
			zoom,
			themeColor,
			apiKey
		} = this.element.dataset;

		this.storeLocatorConfig = {
			theme: {primary_color: themeColor || "#000"},
			maps: {provider: "woosmap"},
			woosmapview: {
				initialCenter: {
					lat: Number(latitude) || 48.967529,
					lng: Number(longitude) || 2.368438
				},
				initialZoom: Number(zoom) || 5,
			},
			datasource: {max_responses: 10, max_distance: 50000},
		};

		this.element.innerHTML = ''
		const newElementId = 'store-locator-widget-id';

		const newElement = document.createElement('div');
		newElement.style = "width:100%; height:100%"
		newElement.id = newElementId;
		this.element.appendChild(newElement);

		// Create a new WebApp instance
		// TODO fix internally or find why it's not working here.
		// normally we should render the widget using this.storeLocatorWidget.render(isMobile);
		// but it causes the following error on host localhost
		// DOMException: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL
		// the render() method try to load a protocol-relative url
		//     var req = new XMLHttpRequest();
		//     req.open('GET', '//webapp-woosmap.woosmap.com/webapp-conf.json', true);
		// fallback to this
		if (this.storeLocatorWidget) {
			this.storeLocatorWidget.isMobile = false;
			this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig);
		}
		this.storeLocatorWidget = new this.webAppLib(newElement.id, apiKey);
		this.storeLocatorWidget.isMobile = false;
		this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig);
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
	constructor(element, clientId, setAttributes) {
		super(element);
		this.isEditor = true;
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
		if (!this.storeLocatorWidget) return;
		this.element.parentNode.removeChild(this.element);
		this.storeLocatorWidget = null;
	}

	/**
	 * Attach different listeners to handle interactions
	 * with the map and modify block settings accordingly
	 * @see https://developers.woosmap.com/products/widgets/store-locator-widget/advanced-usages/#events
	 */
	addListeners() {
		// select the block when the user interacts with the map
		this.element.addEventListener('click', () => {
			dispatch('core/block-editor').selectBlock(this.clientId);
		});
	}

	/**
	 * Update options of the map
	 *
	 * @param {Object} options Settings to update
	 */
	update(options) {
		const {height, latitude, longitude, zoom, themeColor, apiKey} = options;

		if (height) {
			this.element.style.height = `${height}px`;
		}
		if (latitude) {
			this.element.dataset.latitude = latitude;
		}

		if (longitude) {
			this.element.dataset.longitude = longitude;
		}

		if (zoom) {
			this.element.dataset.zoom = zoom;
		}
		if (themeColor) {
			this.element.dataset.themeColor = themeColor;
		}

		if (apiKey) {
			this.element.dataset.apiKey = apiKey;
		}

		// Only call init if options other than height are passed
		if (latitude || longitude || zoom || themeColor || apiKey) {
			this.init();
		}
	}
}

export {StoreLocator, StoreLocatorEdit};
