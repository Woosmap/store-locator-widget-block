import { dispatch } from '@wordpress/data';

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
		const {
			apiKey,
			theme,
			internationalization,
			initialCenter,
			zoom,
			tileColor,
			tileSize,
			breakPoint,
			defaultStyle,
			customMarkers,
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator,
		} = this.element.dataset;

		let typeRules = { typeRules: [] };
		let styleRules = { rules: [] };

		const jsonCustomMarkers = JSON.parse( customMarkers );

		if ( jsonCustomMarkers ) {
			typeRules = jsonCustomMarkers.map( ( marker ) => ( {
				type: marker.storeType || 'store_type',
				color: marker.customTyleColor || '#000',
			} ) );

			styleRules = jsonCustomMarkers.map( ( marker ) => ( {
				type: marker.storeType || 'store_type',
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

		let allFilters = { filters: [] };

		const jsonFilters = JSON.parse( filters );

		if ( jsonFilters ) {
			allFilters = jsonFilters.map( ( filter ) => ( {
				propertyType: filter.propertyType || 'propertyType',
				title: {
					en: filter.title || 'title',
				},
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

		this.storeLocatorConfig = {
			theme: JSON.parse( theme ) || { primary_color: '#000' },
			datasource: {
				max_responses: 5,
				max_distance: 50000,
			},
			internationalization: JSON.parse( internationalization ) || {
				lang: 'en',
				period: 'fr',
				unitSystem: 0,
			},
			maps: { provider: 'woosmap' },
			woosmapview: {
				initialCenter: JSON.parse( initialCenter ) || {
					lat: 50,
					lng: 0,
				},
				initialZoom: Number( zoom ) || 5,
				tileStyle: {
					color: tileColor || '#000',
					size: Number( tileSize ) || 11,
					minSize: 5,
					typeRules,
				},
				breakPoint: Number( breakPoint ) || 10,
				style: {
					rules: styleRules,
					default: JSON.parse( defaultStyle ) || {
						icon: {
							url: 'https://images.woosmap.com/marker-default.svg',
						},
						selectedIcon: {
							url: 'https://images.woosmap.com/marker-selected.svg',
						},
						numberedIcon: {
							url: 'https://images.woosmap.com/marker-default.svg',
						},
					},
				},
			},
			filters: {
				opened: filtersOpened || false,
				customOrder: filtersCustomOrder || false,
				filters: allFilters,
				outerOperator: filtersOuterOperator || 'or',
			},
		};

		this.element.innerHTML = '';
		const newElementId = 'store-locator-widget-id';

		const newElement = document.createElement( 'div' );
		newElement.style = 'width:100%; height:100%';
		newElement.id = newElementId;
		this.element.appendChild( newElement );

		// Create a new WebApp instance
		// TODO fix internally or find why it's not working here.
		// normally we should render the widget using this.storeLocatorWidget.render(isMobile);
		// but it causes the following error on host localhost
		// DOMException: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL
		// the render() method try to load a protocol-relative url
		//     var req = new XMLHttpRequest();
		//     req.open('GET', '//webapp-woosmap.woosmap.com/webapp-conf.json', true);
		// fallback to this
		if ( this.storeLocatorWidget ) {
			this.storeLocatorWidget.isMobile = false;
			this.storeLocatorWidget.confHandler.setInitConf(
				this.storeLocatorConfig
			);
		}
		this.storeLocatorWidget = new this.webAppLib( newElement.id, apiKey );
		this.storeLocatorWidget.isMobile = false;
		this.storeLocatorWidget.confHandler.setInitConf(
			this.storeLocatorConfig
		);
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
		if ( ! this.storeLocatorWidget ) {
			return;
		}
		this.element.parentNode.removeChild( this.element );
		this.storeLocatorWidget = null;
	}

	/**
	 * Attach different listeners to handle interactions
	 * with the map and modify block settings accordingly
	 * @see https://developers.woosmap.com/products/widgets/store-locator-widget/advanced-usages/#events
	 */
	addListeners() {
		// select the block when the user interacts with the map
		this.element.addEventListener( 'click', () => {
			dispatch( 'core/block-editor' ).selectBlock( this.clientId );
		} );
	}

	/**
	 * Update options of the map
	 *
	 * @param {Object}  options         Settings to update
	 * @param {boolean} rerenderLocator To rerender or not store locator
	 */
	update( options, rerenderLocator = true ) {
		const {
			height,
			apiKey,
			theme,
			internationalization,
			initialCenter,
			zoom,
			tileColor,
			tileSize,
			breakPoint,
			defaultStyle,
			language,
			period,
			unitSystem,
			customMarkers,
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator,
		} = options;

		if ( height ) {
			this.element.style.height = `${ height }px`;
		}
		if ( apiKey ) {
			this.element.dataset.apiKey = apiKey;
		}

		if ( theme ) {
			this.element.dataset.theme = JSON.stringify( theme );
		}
		if ( internationalization ) {
			this.element.dataset.internationalization =
				JSON.stringify( internationalization );
		}
		if ( initialCenter ) {
			this.element.dataset.initialCenter =
				JSON.stringify( initialCenter );
		}
		if ( zoom ) {
			this.element.dataset.zoom = zoom;
		}
		if ( tileColor ) {
			this.element.dataset.tileColor = tileColor;
		}
		if ( tileSize ) {
			this.element.dataset.tileSize = tileSize;
		}
		if ( breakPoint ) {
			this.element.dataset.breakPoint = breakPoint;
		}
		if ( defaultStyle ) {
			this.element.dataset.defaultStyle = JSON.stringify( defaultStyle );
		}

		if ( language ) {
			this.element.dataset.language = language;
		}
		if ( period ) {
			this.element.dataset.period = period;
		}
		if ( unitSystem ) {
			this.element.dataset.unitSystem = unitSystem;
		}

		if ( customMarkers ) {
			this.element.dataset.customMarkers =
				JSON.stringify( customMarkers );
		}

		if ( filtersOpened ) {
			this.element.dataset.filtersOpened = filtersOpened;
		}
		if ( filtersCustomOrder ) {
			this.element.dataset.filtersCustomOrder = filtersCustomOrder;
		}
		if ( filters ) {
			this.element.dataset.filters = JSON.stringify( filters );
		}
		if ( filtersOuterOperator ) {
			this.element.dataset.filtersOuterOperator = filtersOuterOperator;
		}

		// Only call init if options other than height are passed
		if ( rerenderLocator ) {
			this.init();
		}
	}
}

export { StoreLocator, StoreLocatorEdit };
