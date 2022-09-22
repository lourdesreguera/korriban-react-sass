import React from "react";

const Music = () => {
  return (
    <div id="music" className="b-bcg b-bcg--music b-music">
      <div>
        <h1 className="b-music__heading">Korriban</h1>
      </div>
      <div>
        <iframe
          // width="560"
          // height="315"
          className="b-music__player"
          src="https://www.youtube-nocookie.com/embed/2dKBR8l65ww"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
