import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";

import '../styles/OrderModal.scss';
import OrderList from "./OrderList";


const OrderModal = (props, { onLoginSelect, onRegisterSelect, onOrderSelect }) => {


  const totalPrice = props.state.order.reduce((accumulator, currentValue) => {
    const dishPrice = currentValue.price;
    return accumulator + dishPrice;
  }, 0);


  console.log(props)
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
                    dish={dish.id}
                    id={props.state.order}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="4">TOTAL:</th>
                    <th>{totalPrice.toFixed(2)}</th>
                    {/* {console.log(totalPrice)} */}
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* <div className="order-summary jumbotron">
              {currentUser ? (
                <h4>Thank you for your order {currentUser.email}!</h4>
              ) : (
                <h4>Thank you for your order!</h4>
              )}
            </div> */}
            <a href="/" className="btn btn-lg btn-primary">
              Back to Dishes
            </a>
          </section>;
        </form>
      </div>
    </div>
  );
};

export default OrderModal;