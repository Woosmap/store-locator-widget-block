import {render, screen} from '@testing-library/react';
import DisplaySettings from '../../../src/Settings/DisplaySettings';
import '@testing-library/jest-dom';


const setAttributes = jest.fn();

const defaultProps = {
	attributes: {
		height: 300,
		zoom: 13,
		theme: {
			primary_color: '#000000'
		},
		initialCenter: {
			lat: 50,
			lng: 0
		},
	},
	setAttributes,
	setState: jest.fn(),
};

describe('DisplaySettings', () => {
	beforeEach(() => {
		setAttributes.mockClear();
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
