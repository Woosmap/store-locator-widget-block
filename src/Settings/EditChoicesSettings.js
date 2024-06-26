import {
	PanelBody,
	TextControl,
	Button,
	CheckboxControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default function EditchoicesSettings(props) {
	const {
		choiceIndex,
		choice,
		choiceKey,
		choiceTitle,
		choiceSelected,
		choiceHidden,
		choices,
		index,
		filter,
		filters,
		setAttributes,
	} = props

	const updateFilter = (updatedFilter) => {
		const newFilters = filters.map((m, i) => (i === index ? updatedFilter : m));
		setAttributes({ filters: newFilters });
	};

	const updateChoice = (updatedChoice) => {
		const newChoices = choices.map((m, i) => (i === choiceIndex ? updatedChoice : m));
		updateFilter({ ...filter, choices: newChoices });
	};

	const deleteChoice = () => {
		const newChoices = choices.filter((_, i) => i !== choiceIndex);
		updateFilter({ ...filter, choices: newChoices });
	};

	const validateChoiceKey = (value) => {
		if (!value.trim()) {
			alert(__('Choice Key cannot be empty.', 'wp-store-locator-widget-block'));
			return false;
		}
		return true;
	};

	const validateChoiceTitle = (value) => {
		if (!value.trim()) {
			alert(__('Choice Title cannot be empty.', 'wp-store-locator-widget-block'));
			return false;
		}
		return true;
	}

	return (
		<PanelBody title={__('Choice: ', 'wp-store-locator-widget-block') + choiceTitle + " {" + choiceKey + "}"} initialOpen={false}>
			<TextControl
				label={__('Choice Key', 'wp-store-locator-widget-block')}
				value={choiceKey}
				onChange={(value) => {
					if (validateChoiceKey(value)) {
						updateChoice({ ...choice, choiceKey: value });
					}
				}}
			/>
			<TextControl
				label={__('Choice Tile', 'wp-store-locator-widget-block')}
				value={choiceTitle}
				onChange={(value) => {
					if (validateChoiceTitle(value)) {
						updateChoice({ ...choice, choiceTitle: value });
					}
				}}
			/>
			<CheckboxControl
				label={__('Selected', 'wp-store-locator-widget-block')}
				checked={choiceSelected}
				onChange={(checked) => updateChoice({ ...choice, choiceSelected: checked })}
			/>
			<CheckboxControl
				label={__('Hidden', 'wp-store-locator-widget-block')}
				checked={choiceHidden}
				onChange={(checked) => updateChoice({ ...choice, choiceHidden: checked })}
			/>
			<Button
				variant="primary"
				onClick={deleteChoice}
			>
				{__('Delete choice', 'wp-store-locator-widget-block')}
			</Button>
		</PanelBody>
	);
}
