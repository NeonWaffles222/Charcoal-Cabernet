import '../styles/OrderList.scss'

function OrderList(props) {


  function handleClick(event) {
    event.preventDefault();
    props.removeDish(props.dish.id);
  }

  return (
    <div className='line-item-padding'>
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
        <button onClick={handleClick}>X</button>
      </td>
    </tr>
    </div>
  );
}


export default OrderList;