

function OrderItems(props) {

  // console.log(props)

  const dishName = props.dishes.filter((dish) => {
    // console.log(dish)
    // console.log(props.order_item.dish_id)
    return dish.id === props.order_item.dish_id;
  });

  // console.log(props)

  return (
    <tr>
      <td>
        {dishName[0].name}
      </td>
      <td>
        $ {dishName[0].price}
      </td>
    </tr>

  );
}


export default OrderItems;