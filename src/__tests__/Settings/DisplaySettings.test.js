import {render, screen, fireEvent} from '@testing-library/react';
import DisplaySettings from '../../Settings/DisplaySettings';
import '@testing-library/jest-dom';


const setAttributes = jest.fn();

const defaultProps = {
	attributes: {
		height: 300,
		zoom: 13,
		themeColor: '#000000',
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

	test('displays and updates height control correctly', () => {
		render(<DisplaySettings {...defaultProps} />);
		expect(screen.getByText('Height ( pixels )')).toBeInTheDocument();
		fireEvent.change(screen.getByLabelText('Height ( pixels )'), {target: {value: '400'}});
		expect(setAttributes).toHaveBeenCalledWith({height: '400'});
	});
});
