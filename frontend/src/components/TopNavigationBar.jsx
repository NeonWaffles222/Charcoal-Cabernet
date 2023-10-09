import React, { useContext, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { Stack, Badge } from '@mui/material';
import axios from "axios";

import '../styles/TopNavigationBar.scss';


const TopNavigation = ({ onLoginSelect, onRegisterSelect, toggleFav, onOrderSelect, onPastOrderSelect, open, state, onOrderStatusSelect, setOrderStatus, orderStatus }) => {
  const { auth, user, logout, order } = useContext(authContext);

  const itemsInCart = state && state.order ? state.order.length : 0;


  const handleConfirm = (e) => {
    // e.preventDefault();

    // Function to make an HTTP request and log the response
    const messageGET = (url, status) => {
      axios
        .get(url, {})
        .then((response) => {
          // console.log(response);
          updateOrderStatus(status);
          setOrderStatus(status);
        });
    };

    // Array of URLs for the requests
    const urls = [
      "http://localhost:3001/confirmation_sms",
      "http://localhost:3001/prepping_sms",
      "http://localhost:3001/enroute_sms",
      "http://localhost:3001/delivered_sms",
    ];
    //Array for order status
    const orderStatusArray = ["Confirmed", "Prepping", "Enroute", "Delivered"];

    // Function to iterate through the URLs with a 2 second delay
    const sendMessage = (index = 0) => {
      // console.log(index);
      if (index < urls.length) {
        messageGET(urls[index], orderStatusArray[index]);
        setTimeout(() => {
          sendMessage(index + 1);
        }, 2000);
      }
    };

    const updateOrderStatus = (status) => {
      // Make an Axios POST request to update the order status
      const order_id =
        state.orders.length > 0
          ? state.orders[state.orders.length - 1].id
          : null;

      if (order_id) {
        // console.log(order_id)
        axios.post(`http://localhost:3001/orders/${order_id}/update_status`, { status })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("There was an error");
      }
    };
    //Starts send message function
    sendMessage();
  };


  return (
    <div className="top-nav-bar">
      {open === 'login' && <LoginModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      {open === 'register' && <RegisterModal onLoginSelect={onLoginSelect} onRegisterSelect={onRegisterSelect} />}
      <Link to='/'>
        <span className="top-nav-bar__logo">Charcoal & Cabernet</span>
      </Link>
      <div className="top-nav-bar__routes">
        <Link to='/menu'>
          <span className="top-nav-bar__item">Menu</span>
        </Link>
        <Link to='/reservations'>

          <span className="top-nav-bar__item">Reservations</span>
        </Link>
        {!auth && <>
          <span className="top-nav-bar__item" order={order} onClick={() => onLoginSelect()} >Cart</span>
          <span className="top-nav-bar__item" onClick={() => onLoginSelect()}>Login</span>
          <span className="top-nav-bar__item" onClick={() => onRegisterSelect()}>Register</span>
        </>}
        {auth && <>
          <Stack spacing={2} direction='row'>
            <Badge badgeContent={itemsInCart} color='primary'>
              <span className="top-nav-bar__item" onClick={() => onOrderSelect()} >Cart</span>
            </Badge>
          </Stack>
          {/* <span className="top-nav-bar__item" onClick={toggleFav}>Favorites</span> */}
          <Link to='/favorites'>
            <span className="top-nav-bar__item">Favorites</span>

          </Link>
          <span className="top-nav-bar__item" onClick={() => { onOrderStatusSelect(); handleConfirm(); }} orderStatus={orderStatus} state={state}>Order Status</span>
          <span className="top-nav-bar__item" onClick={() => onPastOrderSelect()}>Past Orders</span>
          <span className="top-nav-bar__item">Welcome back {user.first_name}</span>
          <span className="top-nav-bar__item" onClick={logout}>Logout</span>
        </>}
      </div>
    </div>
  );
};

export default TopNavigation;