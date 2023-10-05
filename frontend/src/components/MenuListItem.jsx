import React, { useState } from 'react';
import ModalMenu from './MenuModal';
import axios from 'axios';


function MenuListItem({ dish }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const getFavoriteDishes = () => {
    axios.get('http://localhost:3001/api/favorites', {
      headers: {
        'Authorization': `Bearer ${jwtToken}` // Include the JWT token in the header
      }
    })
      .then(response => {
        // Handle the response here
        console.log('Favorite dishes:', response.data);
        setJwtToken(response.data.token);
      })
      .catch(error => {
        console.error('Error fetching favorite dishes:', error);
      });

  };

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
        token={jwtToken} // Pass the JWT token as a prop

      />

    </div>
  );
}

export default MenuListItem;
