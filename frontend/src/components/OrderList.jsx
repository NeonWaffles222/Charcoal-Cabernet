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
      </td>
      <td>
        {props.dish.name}
      </td>
      <td>  
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