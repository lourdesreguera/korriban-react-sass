import React from "react";
import MediaQuery from "react-responsive";

const Hero = () => {
  return (
    <div className="b-bcg b-bcg--hero" id="home">
      <MediaQuery maxWidth={576}>
        <a
          href="https://open.spotify.com/artist/2YtYAtB4fyFJOflAUlUCMf?si=aSFjifNiS5qIXLbpPgyouw"
          className="b-link b-link--hero"
        >
          <img src="./images/banner2.gif" alt="Listen to Korriban" />
        </a>
      </MediaQuery>
    </div>
  );
};

export default Hero;
