=== Store Locator Widget Block ===
Contributors: @woosmap
Tags: store locator, maps, map block, block
Requires at least: 6.1
Tested up to: 6.5
Requires PHP: 7.0
Stable tag: 1.0.0
License: GPL-2.0-or-later
License URI: https://spdx.org/licenses/GPL-2.0-or-later.html

Easily integrate the Woosmap Store Locator Widget into your WordPress site with this Gutenberg block plugin.

== Description ==

The Woosmap Store Locator Widget Block for WordPress allows you to add a store locator to your WordPress site using the
Gutenberg editor. This plugin leverages
the [Woosmap Store Locator Widget JS](https://developers.woosmap.com/products/widgets/store-locator-widget/quick-start/)
to provide a rich and interactive experience for users looking for your store locations.
With easy customization and setup, you can enhance your site's user experience in minutes.

To use this plugin, you will need a Woosmap account and an API key. The Woosmap Store Locator Widget connects to the
Woosmap API to fetch and display store locations on your site. Note that Woosmap offers various pricing plans, including
a free tier with limited usage and paid plans for higher usage and additional features. For detailed pricing
information, please refer to the [Woosmap pricing page](https://www.woosmap.com/pricing/).

The widget supports a broad array of languages, including French, English, Spanish, German, and many more, catering to a
global audience and is designed for fast and advanced display capabilities, ensuring a seamless user experience.

[Check official documentation](https://developers.woosmap.com/products/widgets/store-locator-widget/quick-start/) for
more details.

=== Key Features ===

- **Multilingual Support**: Available in over 15 languages, such as English, Chinese, and French, catering to
  international brands.
- **Customizable Display**: Users can set a primary color that applies to labels and backgrounds, aligning the
  locator's
  appearance with their brand identity.
- **Flexible Search**: Adapt the search features to include autocomplete worldwide or for specific countries and
  specific types (address, postal code, etc.), ensuring the functionality best fits your needs.
- **Advanced Display Options**: Offers simplified and markers views for displaying assets, allowing for a clean view or
  detailed markers based on zoom level.
- **Configurable Search Parameters**: Set the number of assets fetched from a user search and bound searches within a
  set radius to accommodate store density.

=== Display Customization ===

- **Simplified View**: Ideal for rendering a large number of assets or high store density, displaying assets as colored
  dots for faster map loading and a cleaner view.
- **Markers View**: Displays assets as pictograms with customizable images, sizes, and hotspots, suitable for detailed
  branding after a specified zoom level.

=== Integration and Customization ===

The widget's properties offer versatile customization options: use Form controls for swift adjustments of attributes
like theme color, or dive into an editable JSON Configuration for granular control over the store locator's
functionality and appearance. This adaptability guarantees seamless integration into any website, equipping businesses
with a robust tool to enhance their online presence and engage customers more effectively.

== External Dependencies ==

This plugin will load the Woosmap Store Locator Widget JavaScript asynchronously, which will then load the
[Woosmap Map JavaScript](https://developers.woosmap.com/products/map-api/get-started/) asynchronously and execute
requests to Woosmap services for various functionalities:

- **Searching for Stores**: The widget will query the Woosmap API to fetch store locations, ensuring accurate and
  up-to-date results.
- **Autocompleting Addresses**: The widget will use Woosmap's autocomplete service to suggest addresses as users type,
  enhancing the user experience with quick and relevant suggestions.
- **Displaying Maps**: The widget will render maps using Woosmap's mapping service to visually display store locations
  and other relevant data, providing an interactive and user-friendly interface.

The URLs involved are:
- [https://webapp.woosmap.com/webapp.js](https://webapp.woosmap.com/webapp.js)
- [https://sdk.woosmap.com/map.js](https://sdk.woosmap.com/map.js)
- [https://api.woosmap.com/*](https://api.woosmap.com/*)

== Source Code ==

This plugin's source code is accessible in the `src` directory of our [GitHub repository](https://github.com/woosmap/store-locator-widget-block).

== Installation ==

Follow these steps to install and activate the Woosmap Store Locator Widget Block:

1. Via WordPress Plugin Directory:
	- Navigate to *Plugins > Add New* in your WordPress dashboard.
	- Search for *Store Locator Widget Block*.
	- Click *Install Now* and then *Activate*.

2. Manual Installation:
	- Download the plugin as a .ZIP file from the WordPress plugin directory.
	- Navigate to *Plugins > Add New > Upload Plugin* in your WordPress dashboard.
	- Upload the .ZIP file and click *Install Now*, then *Activate*.

== Configuration ==

To begin using the Woosmap Store Locator Widget Block, follow these steps to configure your environment and gain access
to the Woosmap API
for enhancing your site with location services.

=== Woosmap Account Requirements ===

1. If you haven't already, [sign up for a Woosmap account](https://www.woosmap.com/sign_up/) as it's necessary to access
   the Woosmap Console and API keys.
2. [Log in to the Woosmap Console](https://console.woosmap.com/). If you're new to Woosmap, you might need to
   create a project to generate API keys.
3. Navigate to the API keys section and generate a new Public API key for your project. This key will be used to
   authenticate your requests to the Woosmap services.

=== Configure the Woosmap Store Locator Widget Block ===

When you create a new Woosmap block, the initial settings screen prompts you to enter the public API Key. If an API Key
has already been configured, this field will be pre-populated with the existing key stored in the Woosmap settings.
After validation, proceed to the Map View to access various editor settings, or edit the JSON Configuration as desired.

== Frequently Asked Questions ==

= Are there any usage limits for the Woosmap API? =

Woosmap offers different plans with varying usage limits. The free tier includes a generous allowance suitable for small
to medium projects. For higher usage limits or specific needs, consider upgrading to a paid plan. Check
the [Woosmap pricing page](https://www.woosmap.com/pricing/) for more details.

= Can I track my API usage and see analytics? =

Yes, the Woosmap Console provides detailed analytics and usage reports for your API keys. You can monitor your
usage to ensure you stay within your plan's limits and analyze the data to gain insights into your users' behavior.

== Screenshots ==

1. Store Locator Widget Block preview
2. Editable JSON Configuration
3. Block Configuration API Key

== Changelog ==

= 1.0.1 - 2024-27-08 =

- Added Support for local map markers.
- Updated Readme to clarify Woosmap requirements and dependencies.

= 1.0.0 - 2024-07-05 =

Initial Release
