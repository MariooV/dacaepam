import React, { useState } from 'react';

import { LikeIcon } from '../../assets/icons';

import './PhotoCard.css';



interface PhotoCardProps {
  location: string;
  imageUrl: string;
  description: string;
  initialLikes: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ location, imageUrl, description, initialLikes }) => {
  const [likes, setLikes] = useState<number>(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div data-testid="photo-card" className="photo-card">
      <div className="photo-card-header">
        <h1>{ location }</h1>
      </div>

      <img src={ imageUrl } alt={ description } className="photo-image" />

      <div className='img-footer'>
        <p>{ description }</p>
        <button onClick={ handleLike }>
          <div className='like-button'>
            <p>{ likes }</p>
            <LikeIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
