import {
	PanelBody,
	TextControl,
	CheckboxControl,
	Button,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import EditFiltersSettings from './EditFiltersSettings';
import { useState } from '@wordpress/element';
import { dispatch } from '@wordpress/data';

export default function FiltersSettings( props ) {
	const {
		attributes: {
			filtersOpened,
			filtersCustomOrder,
			filters,
			filtersOuterOperator,
		},
		setAttributes,
	} = props;

	const [ propertyType, setPropertyType ] = useState( '' );
	const [ title, setTitle ] = useState( '' );

	const addFilter = () => {
		if ( ! propertyType.trim() ) {
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
			return;
		}

		if ( ! title.trim() ) {
			dispatch( 'core/notices' ).createErrorNotice(
				__( 'Title cannot be empty', 'wp-store-locator-widget-block' ),
				{
					isDismissible: true,
					type: 'snackbar',
				}
			);
			return;
		}

		const newFilter = {
			propertyType,
			title,
			innerOperator: 'and',
			choices: [],
		};

		const newFilters = [ ...filters, newFilter ];
		setAttributes( { filters: newFilters } );

		setPropertyType( '' );
		setTitle( '' );
	};

	return (
		<PanelBody
			title={ __( 'Filters Settings', 'wp-store-locator-widget-block' ) }
			initialOpen={ false }
		>
			<CheckboxControl
				label={ __(
					'Filters Opened',
					'wp-store-locator-widget-block'
				) }
				checked={ filtersOpened }
				onChange={ ( checked ) =>
					setAttributes( { filtersOpened: checked } )
				}
			/>
			<CheckboxControl
				label={ __(
					'Filters Custom Order',
					'wp-store-locator-widget-block'
				) }
				checked={ filtersCustomOrder }
				onChange={ ( checked ) =>
					setAttributes( { filtersCustomOrder: checked } )
				}
			/>
			<SelectControl
				label={ __(
					'Filters Outer Operator',
					'wp-store-locator-widget-block'
				) }
				value={ filtersOuterOperator }
				onChange={ ( value ) =>
					setAttributes( { filtersOuterOperator: value } )
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
				<SelectControl
					label={ __(
						'Property Type',
						'wp-store-locator-widget-block'
					) }
					onChange={ ( value ) => setPropertyType( value ) }
				>
					<option value="type">
						{ __( 'Type', 'wp-store-locator-widget-block' ) }
					</option>
					<option value="tag">
						{ __( 'Tag', 'wp-store-locator-widget-block' ) }
					</option>
					<option value="custom">
						{ __( 'Custom', 'wp-store-locator-widget-block' ) }
					</option>
				</SelectControl>
				<TextControl
					label={ __( 'Title', 'wp-store-locator-widget-block' ) }
					value={ title }
					onChange={ ( value ) => setTitle( value ) }
				/>
				<Button variant="primary" onClick={ addFilter }>
					{ __( 'Add Filter', 'wp-store-locator-widget-block' ) }
				</Button>
			</div>
			{ filters.map( ( filter, index ) => (
				<EditFiltersSettings
					key={ index }
					index={ index }
					filter={ filter }
					propertyType={ filter.propertyType }
					title={ filter.title }
					innerOperator={ filter.innerOperator }
					choices={ filter.choices }
					filters={ filters }
					setAttributes={ setAttributes }
				/>
			) ) }
		</PanelBody>
	);
}
