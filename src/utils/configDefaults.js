export const defaultConfig = {
	theme: { primary_color: '#000' },
	datasource: { max_responses: 5, max_distance: 50000 },
	internationalization: {
		lang: 'en',
		unitSystem: 0,
	},
	maps: {
		provider: 'woosmap',
		localities: {
			types: [
				'locality',
				'postal_code',
				'address',
				'admin_level',
				'country',
			],
		},
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
	},
};
