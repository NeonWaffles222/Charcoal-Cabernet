import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import MapContainer from "../components/MapContainer";

import { authContext } from "../providers/AuthProvider";
import myImage from "../assets/images/20231007_020713.jpg";
import '../styles/Home.css';
import AutoRotatingCarousel from "../components/Testimonials";
import DishScroll2 from "../components/DishScroll2";

function Home(props) {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Charcoal & Cabernet</h1>
        <DishScroll2 dish={props.dish} />
      </div>
      <div className="content-container">
        <div className="image-box">
          <img src={myImage} alt="Description of the image" />
        </div>
        <div className="text-box">
          <p>
            Founded in 2022, Charcoal & Cabernet has become a beloved destination for steak enthusiasts and wine connoisseurs alike. We take immense pride in sourcing the choicest cuts of meat and curating an extensive wine list to perfectly complement your dining experience. At Charcoal & Cabernet, our menu is a testament to culinary excellence. Featuring a diverse selection of prime cuts, delectable sides, and sumptuous desserts, each dish is crafted with precision and served with care, ensuring a truly unforgettable dining experience.
          </p>
        </div>
      </div>

      <div className="box-container content-container">
        <div className="text-box">
          <p>At Charcoal & Cabernet, our menu is a testament to culinary excellence. Featuring a diverse selection of prime cuts, delectable sides, and sumptuous desserts, each dish is crafted with precision and served with care, ensuring a truly unforgettable dining experience.
            Whether you're savoring our signature filet mignon, exploring our vegetarian options, or indulging in one of our decadent desserts, our culinary team is dedicated to exceeding your expectations with every bite.
          </p>
        </div>
        <img src="images/67_restaurant.jpg" alt="Inside Restaurant" />
      </div>

      <div className="side-by-side-container">
        <div className="box-container4">
          <img src="images/71_chef.png" alt="chef" />
          <h3 className="chef"><em>Mickeal Suller, Head-Chef</em></h3>
        </div>
        <div className="box-container2">
          <MapContainer />
        </div>
      </div>

      <div className="box-container3">
        <img src="images/70_Business-Hours-Template.jpg" alt="Inside Restaurant" />
      </div>

      <AutoRotatingCarousel images={[
        "images/6_test_6.jpg",
        "images/7_test_7.jpg",
        "images/8_test_8.jpg",
        "images/9_test_9.jpg",
        "images/10_test_10.jpg",
        "images/11_test_11.jpg",
        "images/12_test_12.jpg"
      ]}
      />
      <br></br>

    </div >
  );
};
export default Home;
