import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const Gallery = () => {
  return (
    <Slide slidesToScroll={1} slidesToShow={2} responsive={responsiveSettings}>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--one"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--two"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--three"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--four"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--five"></div>
      </div>
    </Slide>
  );
};

export default Gallery;
