import {render, cleanup} from "@testing-library/react";
import StoreLocatorBlockEdit from '../../src/edit';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))
describe("StoreLocatorBlockEdit component", () => {
	afterEach(cleanup);

	it("matches snapshot", () => {
		const attributes = {
			height: 300,
			woosmapView: {
				initialCenter: {lat: 50, lng: 0},
				initialZoom: 13,
			},
			theme: {primary_color: '#000000'},
			apiKey: 'fake-apikey'
		};

		const {asFragment} = render(
			<StoreLocatorBlockEdit
				{...{
					attributes,
					setAttributes: jest.fn(),
					clientId: "random-id",
					isSelected: false,
				}}
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});

});
