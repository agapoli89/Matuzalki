import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState } from 'react';

const Gallery = ({handleIsGalleryOpen, images, captions}) => {
    
    const [photoIndex, setPhotoIndex] = useState(0);

    return (  
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => handleIsGalleryOpen()}
            onMovePrevRequest={() => setPhotoIndex(prev => (prev + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex(prev => (prev + 1) % images.length)}
            imageCaption={captions[photoIndex]}
        />
    );
}
 
export default Gallery;