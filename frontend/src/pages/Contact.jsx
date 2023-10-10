import React from "react";
import "../styles/Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">

        <section className="contact-section">
          <div className="contact-text">
            <h3>Feedback</h3>
            <p>We continually strive to deliver the best possible experience for you, our valued guests, and we welcome your feedback, perspectives and ideas.</p>
          </div>
          <Link to="/feedback">
            <button>Feedback</button>
          </Link>
        </section>

        <section className="contact-section">
          <div className="contact-text">
            <h3>Make a Reservation</h3>
            <p>Please make a reservation online for the location you would like to visit.</p>
          </div>
          <Link to="/reservations">
            <button>Reservations</button>
          </Link>
        </section>

        <section className="contact-section">
          <div className="contact-text">
            <h3>Media Inquiries</h3>
            <p>Are you interested in sharing a media or advertising opportunity with us? Please email your contact information for our Marketing and Communications team to consider.</p>
          </div>
          <Link to="/">
            <button>Email Us</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Contact;