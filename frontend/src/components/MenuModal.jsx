import React from 'react';
import "../styles/MenuModal.scss";
function Modal({ isOpen, onClose, imageUrl, title, description, price }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Dish" />
        <h1>{title}</h1>
        <p>{description}</p>
        <strong><h4>${price}</h4></strong>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
