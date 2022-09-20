import React from "react";

const Music = () => {
  return (
    <div id="music" className="b-bcg b-bcg--music b-music">
      <div>
        <h1 className="b-music__heading">Korriban</h1>
      </div>
      <div>
        <iframe
          title="player"
          src="https://open.spotify.com/embed/track/7MwQHHzwWOC3VyLs19m6Qn?utm_source=generator"
          className="b-music__player"
          frameBorder="0"
          allow="encrypted-media"
          loading="lazy"
        ></iframe>
        {/* <iframe
          title="player"
          className="b-music__player"
          src="https://open.spotify.com/embed/track/7MwQHHzwWOC3VyLs19m6Qn?utm_source=generator&theme=0"
          frameBorder={0}
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        /> */}
      </div>
    </div>
  );
};

export default Music;
