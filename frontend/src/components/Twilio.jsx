import { useState } from "react";
import axios from "axios";

function Twilio(props) {

  const handleConfirm = (e) => {
    e.preventDefault();

    // Function to make an HTTP request and log the response
    const messageGET = (url, status) => {
      axios
        .get(url, {})
        .then((response) => {
          console.log(response);
          updateOrderStatus(status);
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
    const orderStatus = ["confirmed", "prepping", "enroute", "delivered"];

    // Function to iterate through the URLs with a 2 second delay
    const sendMessage = (index = 0) => {
      console.log(index);
      if (index < urls.length) {
        messageGET(urls[index], orderStatus[index]);
        setTimeout(() => {
          sendMessage(index + 1);
        }, 2000);
      }
    };

    const updateOrderStatus = (status) => {
      // Make an Axios POST request to update the order status
      const order_id =
        props.state.orders.length > 0
          ? props.state.orders[props.state.orders.length - 1].id
          : null;

      if (order_id) { 
        console.log(order_id)
      axios.post(`http://localhost:3001/orders/${order_id}/update_status`, { status })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        console.log("There was an error")
      }
    };

    //Starts send message function
    sendMessage();
  };

  return (
    <div>
      <h1>Testing Twilio</h1>
      <div>
        <button onClick={handleConfirm}>Send Texting</button>
      </div>
    </div>
  );
}


export default Twilio;