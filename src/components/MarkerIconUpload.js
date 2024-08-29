import { __ } from '@wordpress/i18n';
import { Button, BaseControl } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';

export default function MarkerIconUpload( props ) {
	const { marker, update } = props;
	const [ markerUrl, setMarkerUrl ] = useState( marker.markerUrl );
	const ALLOWED_MEDIA_TYPES = [ 'image' ];

	useEffect( () => {
		if ( marker.markerUrl ) {
			setMarkerUrl( marker.markerUrl );
		}
	}, [ marker.markerUrl ] );

	const onUpdateImage = ( media ) => {
		setMarkerUrl( media.url );
		update( {
			...marker,
			markerUrl: media.url,
		} );
	};

	const onRemoveImage = () => {
		setMarkerUrl( undefined );
		update( {
			...marker,
			markerUrl: undefined,
		} );
	};

	return (
		<div className="store-locator-widget-block-marker-uploader">
			<BaseControl
				id="marker-icon-control"
				label={ __( 'Marker Icon', 'store-locator-widget-block' ) }
			>
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						render={ ( { open } ) => (
							<Button
								className={
									! markerUrl
										? 'editor-post-featured-image__toggle'
										: 'editor-post-featured-image__preview'
								}
								onClick={ open }
							>
								{ ! markerUrl &&
									__(
										'Choose an icon',
										'store-locator-widget-block'
									) }
								{ markerUrl && (
									<img
										src={ markerUrl }
										alt={ __(
											'Marker icon',
											'store-locator-widget-block'
										) }
									/>
								) }
							</Button>
						) }
						onSelect={ onUpdateImage }
						value={ markerUrl }
					/>
				</MediaUploadCheck>
				{ !! markerUrl && (
					<MediaUploadCheck>
						{ markerUrl && (
							<MediaUpload
								onSelect={ onUpdateImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										variant="secondary"
										className="replace-marker-icon"
									>
										{ __(
											'Replace icon',
											'store-locator-widget-block'
										) }
									</Button>
								) }
							/>
						) }
						<Button
							className="remove-marker-icon"
							onClick={ onRemoveImage }
							variant="link"
							isDestructive
						>
							{ __(
								'Remove icon',
								'store-locator-widget-block'
							) }
						</Button>
					</MediaUploadCheck>
				) }
			</BaseControl>
		</div>
	);
}
