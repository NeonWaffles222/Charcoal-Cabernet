import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/DishScroll2.scss'


export default function AutoRotatingCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true, // To make the center item larger and centered
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true
  };


  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {props.dish.dishes.map((image, index) => (
        <div key={index} className="location-gallery__image-container">
          <div className="location-gallery__image-container__inner">
            <img
              src={image.image_url}
              alt=""
              width="620"
              height="400"
              className="location-gallery__image img-styling"
              
            />
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}


