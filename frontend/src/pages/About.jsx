import React from "react";
import myImage from "../assets/images/20231007_020713.jpg";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <section className="about-section">
          <img src={myImage} alt="Description of the image" />
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Welcome to Charcoal & Cabernet, where exceptional flavors meet exquisite ambiance. Our journey began with an unwavering passion for delivering the finest steaks and wines to our discerning guests.</p>
            <p> Founded in 2022, Charcoal & Cabernet has become a beloved destination for steak enthusiasts and wine connoisseurs alike. We take immense pride in sourcing the choicest cuts of meat and curating an extensive wine list to perfectly complement your dining experience.  </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-text">
            <h2>Our Menu</h2>
            <p>At Charcoal & Cabernet, our menu is a testament to culinary excellence. Featuring a diverse selection of prime cuts, delectable sides, and sumptuous desserts, each dish is crafted with precision and served with care, ensuring a truly unforgettable dining experience.</p>
            <p>Whether you're savoring our signature filet mignon, exploring our vegetarian options, or indulging in one of our decadent desserts, our culinary team is dedicated to exceeding your expectations with every bite.</p>
          </div>
          <img src="images/9_longhorn.jpg" alt="Yummy Steak" />
        </section>

        <section className="about-section">
          <img src="images/67_restaurant.jpg" alt="Inside the building" />
          <div className="about-text">
            <h2>Our Commitment</h2>
            <p>Our commitment extends beyond serving exceptional cuisine. We strive to provide our guests with an unparalleled level of service, set in a warm and inviting atmosphere that enhances your overall dining experience. At Charcoal & Cabernet, we believe in creating moments that turn into lasting memories.</p>
            <p>Join us at Charcoal & Cabernet for a remarkable dining experience that celebrates the art of steak and wine. We eagerly await the opportunity to welcome you to our restaurant and create unforgettable moments together.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;