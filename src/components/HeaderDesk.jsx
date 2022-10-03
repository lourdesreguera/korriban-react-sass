import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderDesk = () => {
  const Scroll = require("react-scroll");
  const scroller = Scroll.scroller;
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();

  const scrollToSection = (ev) => {
    scroller.scrollTo(ev.target.innerText.toLowerCase(), {
      smooth: true,
      duration: 600,
    });
  };

  const goToHomeAndScroll = async (ev) => {
    await closeMobile();
    await navigate("/home");
    await scroller.scrollTo(ev.target.innerText.toLowerCase(), {
      duration: 600,
      smooth: true,
    });
  };

  const closeMobile = () => {};

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
        {location === "home" ? (
          <>
            <Link className="b-link b-link--nav" onClick={scrollToSection}>
              Home
            </Link>
            <Link className="b-link b-link--nav" onClick={scrollToSection}>
              Music
            </Link>
            <Link className="b-link b-link--nav" onClick={scrollToSection}>
              Shop
            </Link>
            <Link className="b-link b-link--nav" onClick={scrollToSection}>
              Tour
            </Link>
            <Link className="b-link b-link--nav" onClick={scrollToSection}>
              Contact
            </Link>
          </>
        ) : (
          <>
            <Link className="b-link b-link--nav" onClick={goToHomeAndScroll}>
              Home
            </Link>
            <Link className="b-link b-link--nav" onClick={goToHomeAndScroll}>
              Music
            </Link>
            <Link className="b-link b-link--nav" onClick={goToHomeAndScroll}>
              Shop
            </Link>
            <Link className="b-link b-link--nav" onClick={goToHomeAndScroll}>
              Tour
            </Link>
            <Link className="b-link b-link--nav" onClick={goToHomeAndScroll}>
              Contact
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default HeaderDesk;
