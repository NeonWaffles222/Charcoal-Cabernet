import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import MapContainer from "../components/MapContainer";
import DishScroll from "../components/DishScroll";
import { authContext } from "../providers/AuthProvider";
import myImage from "../assets/images/20231007_020713.jpg";
import '../styles/Home.css';
function Home() {
  return (
    <div className="home-container">
      <h1>Charcoal And Cabernet</h1>
      <DishScroll />
      <div className="content-container">
        <div className="image-box">
          <img src={myImage} alt="Description of the image" />
        </div>
        <div className="text-box">
          <p>
            Founded in 2022, Charcoal & Cabernet has become a beloved destination for steak enthusiasts and wine connoisseurs alike. We take immense pride in sourcing the choicest cuts of meat and curating an extensive wine list to perfectly complement your dining experience. At Charcoal & Cabernet, our menu is a testament to culinary excellence. Featuring a diverse selection of prime cuts, delectable sides, and sumptuous desserts, each dish is crafted with precision and served with care, ensuring a truly unforgettable dining experience. At Charcoal & Cabernet, our menu is a testament to culinary excellence. Featuring a diverse selection of prime cuts, delectable sides, and sumptuous desserts, each dish is crafted with precision and served with care, ensuring a truly unforgettable dining experience.
            Whether you're savoring our signature filet mignon, exploring our vegetarian options, or indulging in one of our decadent desserts, our culinary team is dedicated to exceeding your expectations with every bite.
          </p>
        </div>
      </div>
      <div className="box-container">
        <img src="images/67_restaurant.jpg" alt="Inside Restaurant" />

      </div>
      <div className="box-container2">
        <MapContainer />

      </div>
      <div className="box-container">
        <img src="images/69_Business-Hours-Template.jpg" alt="Inside Restaurant" />

      </div>

    </div >
  );
};
export default Home;
