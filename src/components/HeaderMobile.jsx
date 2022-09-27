import React from "react";
import { useState } from "react";

const MobileNav = React.lazy(() => import('./MobileNav'));

const HeaderMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header className="b-header">
      <div className="b-header__container">
        <img
          src="./images/logo-header.webp"
          alt="Logo de Korriban"
          className="b-header__logo--mobile"
        />
      </div>
      <button onClick={toggleMenu} className="b-header__button"><img src="./images/menu.svg" alt="menu" />
        <div className= {menuIsOpen ? "b-mobileNav__open" : "b-mobileNav__close"}>
          <MobileNav  />
        </div>
      </button>
    </header>
  );
};

export default HeaderMobile;
