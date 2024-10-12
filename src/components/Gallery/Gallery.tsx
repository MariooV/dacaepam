import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';
import photos from '../PhotoCard/__mock__/index';

import './Gallery.css';


const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      {photos.length === 0 ? (
        <p>No photos available</p>
      ) : (
        photos.map((photo) => (
          <PhotoCard
            key={ photo.id }
            location={ photo.location }
            imageUrl={ photo.imageUrl }
            description={ photo.description }
            initialLikes={ photo.likes }
          />
        ))
      )}
    </div>
  );
};

export default Gallery;