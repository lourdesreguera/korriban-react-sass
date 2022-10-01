import React from "react";
import MediaQuery from "react-responsive";

const Hero = () => {
  return (
    <div className="b-bcg b-bcg--hero" id="home">
      <MediaQuery maxWidth={576}>
        <a
          href="https://open.spotify.com/album/0jykunMBd8v3B0cOTeUeqw?si=RkJaUyRvRTm9TM2r2BqCyg"
          className="b-link b-link--hero"
        >
          <img src="./images/banner.gif" alt="Listen to Korriban" />
        </a>
      </MediaQuery>
    </div>
  );
};

export default Hero;
