import DishListItem from "./DishListItem";
import '../styles/DishList.scss'

const DishList = (props) => {

  // console.log(props.dish.dishes,"----------------------------------------")
  const DishArray = props.dish.dishes.map((dish, index)=>{
    return <DishListItem
    key={index} 
    id={dish.id}
    name = {dish.name}
    category_id = {dish.category_id}
    description = {dish.description}
    image_url = {dish.image_url}
    isActive = {dish.isActive}
    price = {dish.price}
    quantity = {dish.quantity}
    nuts_allergen = {dish.nuts_allergen}
    dairy_allergen = {dish.dairy_allergen}
    eggs_allergen = {dish.eggs_allergen}
    gluten_allergen = {dish.gluten_allergen}
    shellfish_allergen = {dish.shellfish_allergen}
    />
  })


  return (
    <ul>
      {DishArray}
    </ul>
  );
};

export default DishList;