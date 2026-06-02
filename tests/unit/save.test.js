import {render, cleanup} from "@testing-library/react";

// Unit-test our save output in isolation. `useBlockProps.save()` runs WordPress's
// `blocks.getSaveContent.extraProps` filter pipeline (align support, etc.), which
// expects the block-serialization context that a bare render doesn't provide.
// Mock the WP boundary so we assert our own data-* serialization, not WP internals.
jest.mock("@wordpress/block-editor", () => ({
	useBlockProps: Object.assign(jest.fn(() => ({})), {
		save: jest.fn((props) => props),
	}),
}));

import StoreLocatorBlockSave from '../../src/save';

describe("StoreLocatorBlockSave component", () => {
	afterEach(cleanup);

	it("matches snapshot with default attributes", () => {
		const attributes = {
			height: 300,
			woosmapView: {
				initialCenter: {lat: 50, lng: 0},
				initialZoom: 13,
			},
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
			woosmapView: {
				initialCenter: {lat: 51.5074, lng:  0.1278},
				initialZoom: 15,
			},
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
