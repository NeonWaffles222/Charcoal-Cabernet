import React from 'react';
import "../styles/MenuModal.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Replace with the icon you want to use

function Modal({ isOpen, onClose, imageUrl, title, description, price }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Dish" />
        <h1>{title}</h1>
        <p>{description}</p>
        <strong><h2>${price}</h2></strong>

        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* Use the FontAwesome icon */}
        </button>
      </div>
    </div>
  );
}

export default Modal;
