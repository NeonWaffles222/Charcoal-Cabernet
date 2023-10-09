import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AutoRotatingCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {props.images.map((image, index) => ( // Looping through props.images
          <div key={index} className="location-galleryimage-container">
            <div className="location-galleryimage-containerinner">
              <img
                src={image}  // Using image directly since it's an array of URLs now
                alt={`Image ${index + 1}`}
                width="620"
                height="500"
                className="location-galleryimage img-styling"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
