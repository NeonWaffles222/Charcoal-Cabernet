import { useState, useEffect } from "react";
import OrderItems from "./OrderItems";
import '../styles/OrderStatusModal.scss';

function PreviousOrderStatus(props) {
  const totalPrice = parseFloat(props.order.total_price);

  const containerStyle = {
    color: getStatusColor(props.orderStatus),
  };

  // Function to choose text color based on orderStatus
  function getStatusColor(orderStatus) {
    switch (orderStatus) {
      case "Confirmed":
        return "blue";
      case "Prepping":
        return "purple";
      case "Enroute":
        return "orange";
      case "Delivered":
        return "green";
      default:
        return 'black';
    }
  }

  // Filters orders by id
  const filteredLineItems = props.state.order_items.filter((item) => {
    return item.order_id === props.order.id;
  });

  // console.log(props.state.orders[props.state.orders.length-1].status)
  // console.log(props)

  return (
    <tr>
      <td>
        <table>

          <div><strong >Order # {props.order.id}</strong></div>

          <tbody >
            {filteredLineItems.map((dish, index) => (
              <OrderItems
                key={index}
                order_item={dish}
                order_id={dish.order_id}
                dishes={props.state.dishes}
              />
            ))}
          </tbody>
        </table>
      </td>
      <td>
        <strong>
          $ {totalPrice.toFixed(2)}
        </strong>
      </td>
      <td>
        <strong></strong>
      </td>
      <td>
        <strong style={containerStyle}>{props.orderStatus}</strong>
      </td>
    </tr>
  );
}

export default PreviousOrderStatus;