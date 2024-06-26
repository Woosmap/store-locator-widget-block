import {render, screen, fireEvent} from '@testing-library/react';
import InternationalizationSettings from '../../Settings/InternationalizationSettings';
import '@testing-library/jest-dom';


const setAttributes = jest.fn();

const defaultProps = {
	attributes: {
		language: 'en',
		period: 'fr',
		unitSystem: 0
	},
	setAttributes,
	setState: jest.fn(),
};

describe('InternationalizationSettings', () => {
	beforeEach(() => {
		setAttributes.mockClear();
	});

	test('displays internationalization settings panel correctly', () => {
		render(<InternationalizationSettings {...defaultProps} />);
		expect(screen.getByText('Internationalization Settings')).toBeInTheDocument();
	});
});
