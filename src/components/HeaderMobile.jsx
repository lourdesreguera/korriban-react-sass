import React from "react";
import MobileNav from "./MobileNav";

const HeaderMobile = () => {
  return (
    <header className="b-header">
      <div className="b-header__container">
        <img
          src="./images/logo-header.png"
          alt="Logo de Korriban"
          className="b-header__logo--mobile"
        />
      </div>
      <MobileNav />
    </header>
  );
};

export default HeaderMobile;
