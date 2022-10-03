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
        <div className="each-slide-effect__image each-slide-effect__image--seven"></div>
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
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--eight"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--nine"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--ten"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--eleven"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--twelve"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--thirteen"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--fourteen"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--fifteen"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--sixteen"></div>
      </div>
      <div className="each-slide-effect">
        <div className="each-slide-effect__image each-slide-effect__image--seventeen"></div>
      </div>
    </Slide>
  );
};

export default Gallery;
