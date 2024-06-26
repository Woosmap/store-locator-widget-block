import domReady from '@wordpress/dom-ready';

import { StoreLocator } from './components/StoreLocator';

domReady( async () => {
	const storeLocatorBlock = document.querySelector(
		'.wp-block-woosmap-wp-store-locator-widget-block'
	);

	if ( ! storeLocatorBlock ) {
		return;
	}
	new StoreLocator( storeLocatorBlock );
} );
