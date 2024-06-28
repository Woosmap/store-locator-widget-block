import {render, cleanup} from "@testing-library/react";
import StoreLocatorBlockSave from '../../src/save';

describe("StoreLocatorBlockSave component", () => {
	afterEach(cleanup);

	it("matches snapshot with default attributes", () => {
		const attributes = {
			height: 300,
			latitude: 0,
			longitude: 0,
			zoom: 13,
			themeColor: '#000000',
			apiKey: ''
		};

		const {asFragment} = render(
			<StoreLocatorBlockSave
				{...{
					attributes,
					clientId: "random-id",
					className: "wp-blocks-whatever",
				}}
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});

	it("matches snapshot with provided attributes", () => {
		const attributes = {
			height: 400,
			latitude: 51.5074,
			longitude: 0.1278,
			zoom: 15,
			themeColor: '#ffffff',
			apiKey: 'your-api-key'
		};

		const {asFragment} = render(
			<StoreLocatorBlockSave
				{...{
					attributes,
					clientId: "random-id",
					className: "wp-blocks-whatever",
				}}
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
