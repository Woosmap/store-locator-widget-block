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
	woosmapView: {
		initialCenter: { lat: 50, lng: 0 },
		initialZoom: 13,
		tileStyle: {
			color: '#000',
			size: 11,
			minSize: 5,
			typeRules: [],
		},
		breakPoint: 10,
		style: {
			rules: [],
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
};
