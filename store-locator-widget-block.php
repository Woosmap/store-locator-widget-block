<?php
/**
 * Plugin Name:       Store Locator Widget Block
 * Description:       Easily display your stores on a Map using Woosmap platform
 * Requires at least: 6.1
 * Tested up to:      6.5
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            @woosmap
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       store-locator-widget-block
 *
 * @package Woosmap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function woosmap_store_locator_widget_block_init() {
	register_block_type( __DIR__ . '/build' );
	 wp_localize_script('woosmap-store-locator-widget-block-editor-script', 'woosmapPluginData', array(
        'markerDefaultUrl' => plugins_url('assets/images/marker-default.svg', __FILE__),
        'markerSelectedUrl' => plugins_url('assets/images/marker-selected.svg', __FILE__),
    ));
}
add_action( 'init', 'woosmap_store_locator_widget_block_init' );

function woosmap_store_locator_widget_block_register_settings() {
	register_setting(
		'woosmap_settings',
		'woosmap_settings',
		array(
			'type'              => 'object',
			'show_in_rest'      => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'woosmap_public_api_key' => array(
							'type' => 'string',
						),
					),
				),
			),
			'default'           => new stdClass(),
			'sanitize_callback' => 'woosmap_sanitize_settings',
		)
	);
}
add_action('admin_init', 'woosmap_store_locator_widget_block_register_settings');
add_action('rest_api_init', 'woosmap_store_locator_widget_block_register_settings');

function woosmap_sanitize_settings($input) {
	if (is_array($input) && isset($input['woosmap_public_api_key'])) {
		$input['woosmap_public_api_key'] = sanitize_text_field($input['woosmap_public_api_key']);
	}

	return $input;
}
