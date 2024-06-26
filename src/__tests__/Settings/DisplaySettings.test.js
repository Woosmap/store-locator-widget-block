import {render, screen, fireEvent} from '@testing-library/react';
import DisplaySettings from '../../Settings/DisplaySettings';
import '@testing-library/jest-dom';
import InternationalizationSettings from "../../Settings/InternationalizationSettings";


const setAttributes = jest.fn();

const defaultProps = {
	attributes: {
		height: 300,
		zoom: 13,
		themeColor: '#000000',
		latitude: 50,
		longitude: 0
	},
	setAttributes,
	setState: jest.fn(),
};

describe('DisplaySettings', () => {
	beforeEach(() => {
		setAttributes.mockClear();
	});

	test('displays display settings panel correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Display Settings')).toBeInTheDocument();
	});

	test('displays primary color control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Primary Color')).toBeInTheDocument();
	});

	test('displays zoom control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Zoom')).toBeInTheDocument();
	});

	test('displays height control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Height ( pixels )')).toBeInTheDocument();
	});

	test('displays default latitude control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Default Latitude')).toBeInTheDocument();
	});

	test('displays default longitude control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Default Longitude')).toBeInTheDocument();
	});
});
