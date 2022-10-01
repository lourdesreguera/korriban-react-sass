import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Gallery = () => {
  return (
    <Slide slidesToScroll={1} slidesToShow={2}>
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
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--six"></div>
      </div>
    </Slide>
  );
};

export default Gallery;
