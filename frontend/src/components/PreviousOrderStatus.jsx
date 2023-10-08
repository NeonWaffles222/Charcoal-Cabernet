import { useState, useEffect } from "react";
import OrderItems from "./OrderItems";

function PreviousOrderStatus(props) {
  const totalPrice = parseFloat(props.order.total_price);
  // const [orderStatus, setOrderStatus] = useState(props.order.status);

  // const statusArray=["Confirmed", "Prepping", "Enroute", "Delivered"]

  // let counter = statusArray.indexOf(props.order.status);

  // Filters orders by id
  const filteredLineItems = props.state.order_items.filter((item) => {
    return item.order_id === props.order.id;
  });

// console.log(props.state.orders[props.state.orders.length-1].status)
// console.log(props)

  return (
    <tr>
      <td>
        <table className="border">
          <thead>
            <tr>
              <th colSpan="0.5">Order # {props.order.id}</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody >
            {filteredLineItems.map((dish, index) => (
              <OrderItems
                key={index}
                order_item={dish}
                order_id ={dish.order_id}
                dishes={props.state.dishes}
              />
            ))}
          </tbody>
        </table>
      </td>
      <td>
        $ {totalPrice.toFixed(2)}
      </td>
      <td>
        <strong>{props.orderStatus}</strong>
      </td>
    </tr>
  );
}

export default PreviousOrderStatus;