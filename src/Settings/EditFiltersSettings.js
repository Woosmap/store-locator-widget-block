import {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import EditChoicesSettings from './EditChoicesSettings';
import { dispatch } from '@wordpress/data';

export default function EditFiltersSettings( props ) {
	const {
		index,
		filter,
		propertyType,
		title,
		innerOperator,
		choices,
		filters,
		setAttributes,
	} = props;

	const updateFilter = ( updatedFilter ) => {
		const newFilters = filters.map( ( m, i ) =>
			i === index ? updatedFilter : m
		);
		setAttributes( { filters: newFilters } );
	};

	const deleteFilter = () => {
		const newFilters = filters.filter( ( _, i ) => i !== index );
		setAttributes( { filters: newFilters } );
	};

	const validatePropertyType = ( value ) => {
		if ( ! value.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Property Type cannot be empty',
					'wp-store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return false;
		}
		return true;
	};

	const validateTitle = ( value ) => {
		if ( ! value.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__( 'Title cannot be empty', 'wp-store-locator-widget-block' ),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return false;
		}
		return true;
	};

	const [ choiceKey, setChoiceKey ] = useState( '' );
	const [ choiceTitle, setChoiceTitle ] = useState( '' );

	const addChoice = () => {
		if ( ! choiceKey.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Choice Key cannot be empty',
					'wp-store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return;
		}

		if ( ! choiceTitle.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__(
					'Choice Title cannot be empty',
					'wp-store-locator-widget-block'
				),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return;
		}

		const newChoice = {
			choiceKey,
			choiceTitle,
			choiceSelected: false,
		};

		const newChoices = [ ...choices, newChoice ];
		updateFilter( { ...filter, choices: newChoices } );

		setChoiceKey( '' );
		setChoiceTitle( '' );
	};

	return (
		<PanelBody
			title={
				__( 'Filter: ', 'wp-store-locator-widget-block' ) +
				title +
				' {' +
				propertyType +
				'}'
			}
			initialOpen={ false }
		>
			<TextControl
				label={ __( 'Property Type', 'wp-store-locator-widget-block' ) }
				value={ propertyType }
				onChange={ ( value ) => {
					if ( validatePropertyType( value ) ) {
						updateFilter( { ...filter, propertyType: value } );
					}
				} }
			/>
			<TextControl
				label={ __( 'title', 'wp-store-locator-widget-block' ) }
				value={ title }
				onChange={ ( value ) => {
					if ( validateTitle( value ) ) {
						updateFilter( { ...filter, title: value } );
					}
				} }
			/>
			<SelectControl
				label={ __(
					'Inner Operator',
					'wp-store-locator-widget-block'
				) }
				value={ innerOperator }
				onChange={ ( value ) =>
					updateFilter( { ...filter, innerOperator: value } )
				}
			>
				<option value="and">
					{ __( 'And', 'wp-store-locator-widget-block' ) }
				</option>
				<option value="or">
					{ __( 'Or', 'wp-store-locator-widget-block' ) }
				</option>
			</SelectControl>
			<div
				style={ {
					marginBottom: 20,
					padding: 10,
					border: '1px solid lightgray',
					borderRadius: 5,
				} }
			>
				<TextControl
					label={ __(
						'Choice Key',
						'wp-store-locator-widget-block'
					) }
					value={ choiceKey }
					onChange={ ( value ) => setChoiceKey( value ) }
				/>
				<TextControl
					label={ __(
						'Choice Title',
						'wp-store-locator-widget-block'
					) }
					value={ choiceTitle }
					onChange={ ( value ) => setChoiceTitle( value ) }
				/>
				<Button variant="primary" onClick={ addChoice }>
					{ __( 'Add Choice', 'wp-store-locator-widget-block' ) }
				</Button>
			</div>
			{ choices.map( ( choice, choiceIndex ) => (
				<EditChoicesSettings
					key={ choiceIndex }
					choiceIndex={ choiceIndex }
					choice={ choice }
					choiceKey={ choice.choiceKey }
					choiceTitle={ choice.choiceTitle }
					choiceSelected={ choice.choiceSelected }
					choiceHidden={ choice.choiceHidden }
					choices={ choices }
					index={ index }
					filter={ filter }
					filters={ filters }
					setAttributes={ setAttributes }
				/>
			) ) }
			<Button
				variant="primary"
				onClick={ deleteFilter }
				style={ { marginTop: 20 } }
			>
				{ __( 'Delete filter', 'wp-store-locator-widget-block' ) }
			</Button>
		</PanelBody>
	);
}
