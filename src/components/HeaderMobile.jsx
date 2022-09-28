import React from "react";
import { useState } from "react";

const MobileNav = React.lazy(() => import("./MobileNav"));

const HeaderMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className="b-header">
      <div className="b-header__container">
        <img
          src="./images/logo-header.webp"
          alt="Logo de Korriban"
          className="b-header__logo--mobile"
        />
      </div>
      <button className="b-header__button" onClick={toggleMenu}>
        <img src="./images/menu.svg" alt="menu" />
        <div
          className={menuIsOpen ? "b-mobileNav__show b-mobileNav__show--open" : "b-mobileNav__show b-mobileNav__show--close"}
        >
          <MobileNav />
        </div>
      </button>
    </header>
  );
};

export default HeaderMobile;
