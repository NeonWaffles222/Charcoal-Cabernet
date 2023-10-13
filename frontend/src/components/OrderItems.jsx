

function OrderItems(props) {

  const dishName = props.dishes.filter((dish) => {

    return dish.id === props.order_item.dish_id;
  });

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