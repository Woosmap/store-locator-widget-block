/**
 * Jest config extending the @wordpress/scripts unit preset.
 *
 * Some deps pulled in transitively by @wordpress/* ship as ESM only (`uuid`,
 * `parsel-js`), which Jest can't load as CommonJS. Transform those instead of
 * ignoring them like the rest of node_modules.
 */
const defaultConfig = require('@wordpress/scripts/config/jest-unit.config.js');

module.exports = {
	...defaultConfig,
	transformIgnorePatterns: [
		'/node_modules/(?!(uuid|parsel-js)/)',
		'\\.pnp\\.[^\\/]+$',
	],
};
