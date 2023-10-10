import { useState, useEffect } from "react";
import OrderItems from "./OrderItems";

function PastOrders(props) {
  const totalPrice = parseFloat(props.order.total_price);
  const [orderStatus, setOrderStatus] = useState(props.order.status);

  // Filters orders by id
  const filteredLineItems = props.state.order_items.filter((item) => {
    return item.order_id === props.order.id;
  });

  // Effect to update the orderStatus when props.order.status changes
  useEffect(() => {
    setOrderStatus(props.order.status);
  }, [props.order.status]);

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
                order_id={dish.order_id}
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
        <strong>
          {props.order.status}
        </strong>
      </td>
    </tr>
  );
}

export default PastOrders;