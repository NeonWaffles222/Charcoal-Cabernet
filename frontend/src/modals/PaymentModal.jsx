import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import '../styles/OrderModal.scss';
// import OrderList from "./OrderList";
import '../styles/PaymentModal.scss'

const OrderModal = (props) => {

  const { auth, user, logout, order } = useContext(authContext);

  function handleClick () {
    props.onPaymentSelect();
  }
  console.log("order", props);

  return (
    <div>
      <button>Open Modal</button>
        <div className="modal">
          <div className="modal-content">
          <button className="order-modal__close" onClick={() => props.onPaymentSelect()}>X</button>
            <h2>Buy cool new product</h2>
            <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
            <div className="description">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>
            <form action="/create-checkout-session" method="POST">
              <button type="submit" id="checkout-button">Checkout</button>
            </form>
            <button onClick={handleClick}>Close Modal</button>
          </div>
        </div>

    </div>
  );
}

export default OrderModal;