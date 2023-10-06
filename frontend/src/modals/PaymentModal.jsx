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

  return (
    <div>
      <button>Open Modal</button>
      <div className="modal">
        <div className="modal-content">
          <PaymentElement/>
          <button className="order-modal__close" onClick={() => props.onPaymentSelect()}>X</button>
          <h2>Buy cool new product</h2>
          <button onClick={handleStripe} type="submit" id="checkout-button">Checkout</button>
          <button onClick={handleClick}>Close Modal</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;