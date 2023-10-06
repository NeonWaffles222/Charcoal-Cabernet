import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
// import OrderList from "./OrderList";
import '../styles/PaymentModal.scss';
import axios from 'axios';
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js'


const PaymentModal = (props) => {

  const stripe = useStripe()
  const elements = useElements()

  const { auth, user, logout, order } = useContext(authContext);

  function handleClick() {
    props.onPaymentSelect();
  }
  console.log("order", props);

  function handleStripe(event) {
    if (!stripe||!elements){
      return
    }

    stripe.confirmPayment({elements, confirmParams: {return_url: "http://localhost:3000"} }).then((error) => console.log(error))
  }

  let totalPrice = props.state.order.reduce((acc, dish) => {
    return Number(acc) + Number(dish.price);
  }, 0);

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <button className="order-modal__close" onClick={() => props.onPaymentSelect()}>X</button>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <PaymentElement/>
          <button onClick={handleStripe} type="submit" id="checkout-button">Checkout</button>
          <button onClick={handleClick}>Close Modal</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;