/**
 * Import WordPress Playwright tests utilities.
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Store Locator Widget Editor Block Functionality', () => {
	test.beforeEach( async ( { admin } ) => {
		// Create a new post before each tests.
		await admin.createNewPost();
	} );

	test( 'Authentication Form Displays Correctly', async ( { editor } ) => {
		// Insert the Store Locator Widget block.
		await editor.insertBlock( {
			name: 'woosmap/wp-store-locator-widget-block',
		} );

		// Fill in the API key field with a tests value.
		await editor.canvas
			.locator( "[name='woosmap_public_api_key']" )
			.fill( 'tests-apikey' );

		// Confirm the API key.
		await editor.canvas
			.locator( 'text=Confirm Woosmap Credentials' )
			.click();

		// Verify that the store locator map is visible.
		await expect(
			editor.canvas.locator( '[id="store-locator-widget-id"]' )
		).toBeVisible();
	} );
} );
