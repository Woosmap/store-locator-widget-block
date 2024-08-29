import { PanelBody, PanelRow } from '@wordpress/components';
import MarkerIconUpload from './MarkerIconUpload';

const EditMarker = ( { label, markerUrl, update } ) => {
	return (
		<PanelBody
			title={ label }
			className="marker-edit"
			icon={
				<img
					src={ markerUrl }
					alt="Marker Icon"
					style={ { height: '20px' } }
				/>
			}
			initialOpen={ false }
		>
			<PanelRow>
				<MarkerIconUpload marker={ { markerUrl } } update={ update } />
			</PanelRow>
		</PanelBody>
	);
};

export default EditMarker;
