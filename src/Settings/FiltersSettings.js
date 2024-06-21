import {
	PanelBody,
	TextControl,
	CheckboxControl,
	Button, SelectControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import EditFiltersSettings from './EditFiltersSettings';
import { useState } from '@wordpress/element';

export default function FiltersSettings(props) {
	const {
		attributes: {
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator
		},
		setAttributes,
	} = props;

	const [propertyType, setPropertyType] = useState('');
	const [title, setTitle] = useState('');

	const addFilter = () => {
		if (!propertyType.trim()) {
			alert('Property Type cannot be empty.');
			return;
		}

		if (!title.trim()) {
			alert('Title cannot be empty.');
			return;
		}

		const existingFilters = filters.find(filter => filter.propertyType === propertyType);
		if (existingFilters) {
			alert('This filter already exists. Please choose a different one.');
			return;
		}

		const newFilter = {
			propertyType: propertyType,
			title: title,
			innerOperator: "and",
			choices: [],
		};

		const newFilters = [...filters, newFilter];
		setAttributes({ filters: newFilters });

		setPropertyType('');
		setTitle('');
	};

	return (
		<PanelBody title={__('Filters Settings', 'wp-store-locator-widget-block')} initialOpen={false}>
			<CheckboxControl
				label={__('Filters Opened', 'wp-store-locator-widget-block')}
				checked={filtersOpened}
				onChange={(checked) => setAttributes({ filtersOpened: checked })}
			/>
			<CheckboxControl
				label={__('Filters Custom Order', 'wp-store-locator-widget-block')}
				checked={filtersCustomOrder}
				onChange={(checked) => setAttributes({ filtersCustomOrder: checked })}
			/>
			<SelectControl
				label={ __('Filters Outer Operator', 'wp-store-locator-widget-block') }
				value={ filtersOuterOperator }
				onChange={(value) => setAttributes({ filtersOuterOperator: value })}
			>
				<option value="and">{ __('And', 'wp-store-locator-widget-block') }</option>
				<option value="or">{ __('Or', 'wp-store-locator-widget-block') }</option>
			</SelectControl>
			<div style={{ marginBottom: 20, padding: 10, border: '1px solid lightgray', borderRadius: 5 }}>
				<TextControl
					label={__('Property Type', 'wp-store-locator-widget-block')}
					value={propertyType}
					onChange={(value) => setPropertyType(value)}
				/>
				<TextControl
					label={__('Title', 'wp-store-locator-widget-block')}
					value={title}
					onChange={(value) => setTitle(value)}
				/>
				<Button variant="primary" onClick={addFilter}>
					{__('Add Filter', 'wp-store-locator-widget-block')}
				</Button>
			</div>
			{filters.map((filter, index) => (
				<EditFiltersSettings
					index={index}
					filter={filter}
					propertyType={filter.propertyType}
					title={filter.title}
					innerOperator={filter.innerOperator}
					choices={filter.choices}
					filters={filters}
					setAttributes={setAttributes}
				/>
			))}
		</PanelBody>
	);
}
