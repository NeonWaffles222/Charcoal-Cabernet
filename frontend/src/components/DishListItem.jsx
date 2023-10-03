import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


function DishListItem(props) {
  // const dish = {
  //   category_id: 12,
  //   name: 'Grilled Ribeye Steak',
  //   description: "Whether you savor each bite slowly, letting the flavors dance on your palate, or devour it with gusto, our Savory Grilled Ribeye Steak is a culinary journey that promises satisfaction and delight. It's the perfect choice for a special occasion or a memorable evening out, inviting you to savor the finest in steakhouse dining.",
  //   price: 12.00,
  //   quantity: 100,
  //   image_url: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   isActive: true,
  //   diary_allergen: true,
  //   nuts_allergen: true,
  //   gluten_allergen: true,
  //   shellfish_allergen: true,
  //   eggs_allergen: true,
  // };

    let dish =props
    // console.log(props)

  return (
    <div className="border">
      <h1>{dish.name}</h1>
      <div className="dish-card">
        <img src={dish.image_url} className ="img-size"/>
        <div className="dish-info">
          <p>"{dish.description}" - Head Chef</p>
          <div>
            <p> There are {dish.quantity} {dish.name}'s left. Don't miss out and add to your order now.
            </p>
            <button>Add Item to Order</button>
          </div>
          <div>
            <p>This dish may contain traces of the following</p>
            {props.shellfish_allergen && <FontAwesomeIcon icon={faShrimp} size = '2x'/>}
            {props.gluten_allergen && <FontAwesomeIcon icon={faBreadSlice} size = '2x'/>}
            {props.dairy_allergen && <FontAwesomeIcon icon={faCow} size = '2x'/>}
            {props.eggs_allergen && <FontAwesomeIcon icon={faEgg} size = '2x'/>}
            
            
            
            {/* <FontAwesomeIcon icon={faSeedling} size = '2x'/> */}
          </div>
          <FontAwesomeIcon icon={faHeart} size = '2x'/>
        </div>
      </div>
    </div>
  );
}


export default DishListItem;