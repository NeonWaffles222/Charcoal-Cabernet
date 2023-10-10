import React, { useState, useEffect } from 'react';
import ModalMenu from './MenuModal';
import axios from 'axios';


function MenuListItem({ dish, jwtToken, isFavorite, favorite_id }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <a href='#' className="link-font" onClick={() => setModalOpen(true)}>{dish.name}</a> <strong>- ${dish.price}</strong>
      <p>Description: {dish.description}</p>
      <p>Favorite:{isFavorite}</p>
      <ModalMenu
        isOpen={modalOpen}
        imageUrl={dish.image_url}
        title={dish.title}
        description={dish.description}
        price={dish.price}
        onClose={() => setModalOpen(false)}
        token={jwtToken} // Pass the JWT token as a prop
        dish_id={dish.id}
        isFav={isFavorite}
        favorite_id={favorite_id}

      />

    </div>
  );
}

export default MenuListItem;
