import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
import OrderList from "./OrderList";

const OrderModal = (props) => {

  const { auth, user, logout, order } = useContext(authContext);

// console.log(props)
  const totalPrice = props.state.order.reduce((acc, dish) => {
    return Number(acc) + Number(dish.price);
  }, 0);

  function handleOrder(){
    props.createOrder(user, props.state.order)
  }
console.log("order", props.state.order)
  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <section className="orders-show">
            <header className="page-header">
              <h1>Order #{props.order}</h1>
            </header>
            <div className="panel panel-default items">
              <table className="table table-bordered">
                <thead>
                  <tr>  
                    <th colSpan="2">Dish</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.state.order.map((dish, index) => (
                    <OrderList
                      key={index}
                      dish={dish}
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
              Place Order
              </a>
            <br></br>
            <a href="/">
              Back to Dishes
            </a>
          </section>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;