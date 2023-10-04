import React, { useState } from 'react';
import ModalMenu from './MenuModal';

function MenuListItem({ dish }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <a href='#' onClick={() => setModalOpen(true)}>{dish.name}</a> <strong>- ${dish.price}</strong>
      <p>Description: {dish.description}</p>
      <ModalMenu
        isOpen={modalOpen}
        imageUrl={dish.image_url}
        title={dish.title}
        description={dish.description}
        price={dish.price}
        onClose={() => setModalOpen(false)}
      />

    </div>
  );
}

export default MenuListItem;
