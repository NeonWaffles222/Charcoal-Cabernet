

function OrderList(props) {
// console.log(props)

  return (
<tr>
  <td>
    {/* <%= image_tag product.image.tiny.url %>{props.} */}
  </td>
  <td>
    {/* <h4><%= product.name %></h4> */}
    {props.dish.name}
    {/* <p><%= product.description %></p> */}
  </td>
  <td>
    {/* <%= product.price * quantity %> */}
    {/* {props.dish.price * props.dish.quantity} */}
    ${props.dish.price}
  </td>
  <td>
    <div>
    {1}
    </div>
  </td>
</tr>

  );
}


export default OrderList;