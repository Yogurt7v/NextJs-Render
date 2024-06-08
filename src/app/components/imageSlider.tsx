import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>1111</h3>
          </div>
          <div>
            <h3>2222</h3>
          </div>
          <div>
            <h3>3333</h3>
          </div>
          <div>
            <h3>4444</h3>
          </div>
          <div>
            <h3>5555</h3>
          </div>
          <div>
            <h3>6666</h3>
          </div>
        </Slider>
      );
    
    }