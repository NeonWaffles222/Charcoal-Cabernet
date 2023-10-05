

function OrderList(props) {

  // let id =props.dish.id

  function handleClick(event) {
    event.preventDefault();
    props.removeDish(props.dish.id);
    console.log("Did this work");
    console.log(props.dish.id);
  }

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
        <div>
          {/* <%= quantity %> */}
          {1}
        </div>
      </td>
      <td>
        {/* <%= product.price * quantity %> */}
        {/* {props.dish.price * props.dish.quantity} */}
        ${props.dish.price}
      </td>
      <td>
        <button onClick={handleClick}>X</button>
      </td>
    </tr>

  );
}


export default OrderList;