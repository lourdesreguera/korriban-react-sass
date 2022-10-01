import React from "react";

const Music = () => {
  return (
    <div id="music" className="b-bcg b-bcg--music b-music">
      <div>
        <h1 className="b-music__heading b-music__heading">
          Check our last video
        </h1>
      </div>
      <div className="b-music__players">
        <iframe
          className="b-music__youtube"
          src="https://www.youtube-nocookie.com/embed/2dKBR8l65ww"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <iframe
          className="b-music__spotify"
          title="Spotify player"
          src="https://open.spotify.com/embed/album/0jykunMBd8v3B0cOTeUeqw?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        <iframe
          className="b-music__spotify"
          title="Spotify player"
          src="https://open.spotify.com/embed/album/0jykunMBd8v3B0cOTeUeqw?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
