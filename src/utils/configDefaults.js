export const defaultConfig = {
	theme: { primary_color: '#000' },
	datasource: { max_responses: 5, max_distance: 50000 },
	internationalization: {
		lang: 'en',
		period: 'fr',
		unitSystem: 0,
	},
	maps: {
		apiKey: '', // This needs to be provided by the user
		provider: 'woosmap',
	},
	woosmapview: {
		initialCenter: { lat: 50, lng: 0 },
		initialZoom: 13,
		tileStyle: {
			color: '#000',
			size: 11,
			minSize: 5,
			typeRules: [], // Custom dot markers processed separately
		},
		breakPoint: 10,
		style: {
			rules: [], // Custom image markers processed separately
			default: {
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
		opened: false,
		customOrder: false,
		filters: [], // Filters processed separately
		outerOperator: 'or',
	},
};
