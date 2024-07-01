import {render, cleanup} from "@testing-library/react";
import StoreLocatorBlockSave from '../../src/save';

describe("StoreLocatorBlockSave component", () => {
	afterEach(cleanup);

	it("matches snapshot with default attributes", () => {
		const attributes = {
			height: 300,
			initialCenter: {
				lat: 0,
				lng: 0
			},
			zoom: 13,
			theme: {
				primary_color: '#ffffff'
			},
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
			initialCenter: {
				lat: 51.5074,
				lng: 0.1278
			},
			zoom: 15,
			theme: {
				primary_color: '#ffffff'
			},
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
