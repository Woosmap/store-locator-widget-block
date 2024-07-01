<?php
/**
 * Uninstaller
 *
 * @package woosmap\store-locator-widget-block
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

// Remove Woosmap API Key on uninstall.
delete_option( 'woosmap_public_api_key' );
delete_site_option( 'woosmap_public_api_key' );
