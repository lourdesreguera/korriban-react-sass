import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileNav = () => {
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
    <div className="b-mobileNav">
      {location === "home" ? (
        <>
          <Link to="/" className="menu-item" onClick={scrollToSection}>
            Home
          </Link>
          <Link to="/" className="menu-item" onClick={scrollToSection}>
            Music
          </Link>
          <Link to="/" className="menu-item" onClick={scrollToSection}>
            Shop
          </Link>
          <Link to="/" className="menu-item" onClick={scrollToSection}>
            Contact
          </Link>
        </>
      ) : (
        <>
          <Link to="/" className="menu-item" onClick={goToHomeAndScroll}>
            Home
          </Link>
          <Link to="/" className="menu-item" onClick={goToHomeAndScroll}>
            Music
          </Link>
          <Link to="/" className="menu-item" onClick={goToHomeAndScroll}>
            Shop
          </Link>
          <Link to="/" className="menu-item" onClick={goToHomeAndScroll}>
            Contact
          </Link>
        </>
      )}
    </div>
  );
};

export default MobileNav;
