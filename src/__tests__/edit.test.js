import {render, cleanup} from "@testing-library/react";
import StoreLocatorBlockEdit from '../edit';

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
			latitude: 0,
			longitude: 0,
			zoom: 13,
			themeColor: '#000000',
			apiKey: ''
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
