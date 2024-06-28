<?php
/**
 * Plugin Name:       Woosmap Store Locator Widget Block
 * Description:       Easily display your stores on a Map using Woosmap platform
 * Requires at least: 6.1
 * Tested up to:      6.5
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Woosmap Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-store-locator-widget-block
 *
 * @package Woosmap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function woosmap_wp_store_locator_widget_block_block_init() {
	register_block_type( __DIR__ . '/build' );
	wp_register_script( 'woosmap-webapp-js', 'https://webapp.woosmap.com/webapp.js', [], null, false );
	add_option( 'wp_store_locator_block_woosmap_public_api_key' );
}
add_action( 'init', 'woosmap_wp_store_locator_widget_block_block_init' );

function woosmap_wp_store_locator_block_register_settings() {
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
add_action('admin_init', 'woosmap_wp_store_locator_block_register_settings');
add_action('rest_api_init', 'woosmap_wp_store_locator_block_register_settings');

function woosmap_sanitize_settings($input) {
	if (is_array($input) && isset($input['woosmap_public_api_key'])) {
		$input['woosmap_public_api_key'] = sanitize_text_field($input['woosmap_public_api_key']);
	}

	return $input;
}

/**
 * Helper to retrieve a setting.
 *
 * @param string $setting The name of the setting.
 * @return mixed
 */
function get_woosmap_settings( $setting ) {
	$settings = get_option( 'woosmap_settings', [] );
	return isset( $settings[ $setting ] ) ? $settings[ $setting ] : '';
}
