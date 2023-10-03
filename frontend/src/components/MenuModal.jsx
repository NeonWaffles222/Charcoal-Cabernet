import React from 'react';

function Modal({ isOpen, onClose, imageUrl }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={imageUrl} alt="Dish" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
