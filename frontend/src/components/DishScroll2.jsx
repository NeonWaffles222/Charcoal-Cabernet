import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/DishScroll2.scss';


export default function AutoRotatingCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true, // To make the center item larger and centered
    autoplay: true, // Set to true for auto-rotation
    autoplaySpeed: 2000,
    variableWidth: true
  };
  // const carouselItemStyle = {
  //   margin: '0', // Remove default margin
  // };

  return (
    <Slider {...settings}>
      {props.dish.dishes.map((image, index) => (
        <div key={index} className="location-gallery__image-container">
          <div className="location-gallery__image-container__inner">
            <img
              src={image.image_url}
              alt=""
              width="620"
              height="400"
              className="location-gallery__image"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}


