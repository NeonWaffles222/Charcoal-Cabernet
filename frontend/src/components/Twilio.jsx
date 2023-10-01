import { useState } from "react";
import axios from "axios";

function Twilio () {

  const handleConfirm = (e) => {
    e.preventDefault();
  
    // Function to make an HTTP request and log the response
    const messageGET = (url) => {
      axios.get(url, {}).then((response) => {
        console.log(response);
      });
    };
  
    // Array of URLs for the requests
    const urls = [
      "http://localhost:3001/confirmation_sms",
      "http://localhost:3001/prepping_sms",
      "http://localhost:3001/enroute_sms",
      "http://localhost:3001/delivered_sms",
    ];

    // Function to iterate through the URLs with a 2 second delay
    const sendMessage = (index=0) => {
      console.log(index)
      if (index < urls.length) {
        messageGET(urls[index]);
        setTimeout(() => {
          sendMessage(index + 1);
        }, 2000); 
      }
    };
  
    //Starts send message function
    sendMessage()
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