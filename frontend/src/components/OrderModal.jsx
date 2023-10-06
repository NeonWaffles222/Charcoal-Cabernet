import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
import OrderList from "./OrderList";


const OrderModal = (props) => {

  const { auth, user, logout, order } = useContext(authContext);

  console.log(props.state.order);

  let totalPrice = props.state.order.reduce((acc, dish) => {
    return Number(acc) + Number(dish.price);
  }, 0);

  function handleOrder(event) {
    event.preventDefault();
    props.createOrder(user, props.state.order);
    props.onOrderSelect();
    props.onPaymentSelect();
    // props.emptyCart();
  }

  // console.log("order", props);

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <section className="orders-show">
            <div className="exit-flex">
              <button className="order-modal__close" onClick={() => props.onOrderSelect()}>X</button>
              <header className="page-header">
                <h3>Order #{props.order}</h3>
              </header>
            </div>
            <div className="panel panel-default items">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="2">Dish</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {props.state.order.map((dish, index) => (
                    <OrderList
                      key={index}
                      dish={dish}
                      removeDish={props.removeDish}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="4">TOTAL:</th>
                    <th>{totalPrice.toFixed(2)}</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <a href='/orders' onClick={handleOrder}>
              Confirm Order
            </a>

            <br></br>
            <a onClick={props.onOrderSelect} className="back-to-dishes">
              Back to Dishes
            </a>
          </section>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;