import PropTypes from 'prop-types';
import '../../styles.css';

export const ImageGallery = ({ images = [] }) => {
  return (
    <div className="image-gallery fade-in">
      {images.map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img 
            src={`${image}?w=248&fit=crop&auto=format`} 
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota" 
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
