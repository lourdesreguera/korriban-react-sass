import React from "react";

const HeaderDesk = () => {
  return (
    <header className="b-header b-header--desk">
      <div className="b-header__container">
        <img
          src="./images/logo-header.webp"
          alt="Logo de Korriban"
          className="b-header__logo--desk"
        />
      </div>
      <nav className="b-header__container">
        <a href="#home" className="b-link b-link--nav">
          Home
        </a>
        <a href="#music" className="b-link b-link--nav">
          Music
        </a>
        <a href="#shop" className="b-link b-link--nav">
          Shop
        </a>
        <a href="#contact" className="b-link b-link--nav">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default HeaderDesk;
