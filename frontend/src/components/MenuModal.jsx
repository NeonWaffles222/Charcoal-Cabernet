import React, { useState } from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'; // Include the faHeart icon

function MenuModal({ isOpen, onClose, imageUrl, title, description, price }) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen) return null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const heartClass = isFavorite ? 'favorite' : ''; // Add the 'favorite' class when it's favorited

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Dish" />
        <h1>{title}</h1>
        <p>{description}</p>
        <strong><h2>${price}</h2></strong>

        {/* Toggleable heart icon with conditional CSS class */}
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          onClick={toggleFavorite}
          className={`heart-icon ${heartClass}`}
        />

        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* Use the FontAwesome icon */}
        </button>
      </div>
    </div>
  );
}

export default MenuModal;
