import OrderItems from "./OrderItems";

function PastOrders(props) {

  // let id =props.dish.id

  function handleClick(event) {
    event.preventDefault();
    props.onPastOrderSelect();
  }


  // const filteredOrderedDishes = props.dishes.filter((dish)=>{
  //   return dish.id 
  // })

  // const userItemOrders = props.state.order_items.filter((order_item)=>{
  //   return order_item.order_id 
  // })
  const totalPrice = parseFloat(props.order.total_price);

  // console.log(totalPrice.toFixed(2))

  // let totalPrice= 
  // console.log(props.state.order_items)

  // console.log(props.state.orders);
  // const filteredLineItems = props.order.filter((item) => {
  //   // console.log("item.order_id, ", item.id)
  //   // console.log("props.state.order_items, ", props.state.order_items)
  //   return item.id === props.order.id;
  // });
// console.log(props.state.dishes)
  // console.log(props.state.order_items);
  const filteredLineItems = props.state.order_items.filter((item) => {
    return item.order_id === props.order.id
  })


  // console.log(filteredLineItems)
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
        {props.order.status}
      </td>
    </tr>
  );
}


export default PastOrders;

{/* <table className="table table-bordered">
<thead>
  <tr>
    <th colSpan="3">Dish</th>
    <th>Price</th>
  </tr>
</thead>
<tbody>
  {userOrders.map((dish, index) => (  
    <PastOrders
      key={index}
      order={dish}
      state={props.state}
      onPastOrderSelect={props.onPastOrderSelect}
    />
  ))}
</tbody>
<tfoot>
  <tr>
    <th colSpan="4">TOTAL:</th>
    <th>{totalPrice.toFixed(2)}</th>
  </tr>
</tfoot>
</table> */}