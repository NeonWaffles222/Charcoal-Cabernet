import React, { useState } from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons'; // Include the faHeart icon
import FavoriteToggle from './FavoriteToggle';
import axios from 'axios';
function MenuModal({ isOpen, onClose, imageUrl, title, description, dish_id, favorite_id, price, token, isFav, favorites, setFavorites, dish }) {
  const [isFavorite, setIsFavorite] = useState(isFav);

  if (!isOpen) return null;



  const updateFavoriteStatus = (status) => {
    setIsFavorite(status);
  };



  const heartClass = isFavorite ? 'favorite' : ''; // Add the 'favorite' class when it's favorited

  return (
    <div className="modal-overlay">
      <div >
        <div className="modal-image-container">
          <img src={imageUrl} alt="Dish" />
          <h1>{title}</h1>
        </div>

        <div className="modal-description-container ">
          <p>{description}</p>
          <strong><h2>${price}</h2></strong>
          <FavoriteToggle
            dish_id={dish_id} // Pass the dish_id
            onUpdate={updateFavoriteStatus}
            isFav={isFav} // Pass whether it's favorited or not
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
            setFavorites={setFavorites}
            favorites={favorites}
            dish={dish}
          />
        </div>

        <button onClick={onClose}>Close Modal</button>

      </div>
    </div>
  );

}

export default MenuModal;

