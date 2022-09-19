import React from "react";

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
      <div className="b-header__container">
        <img
          src="./images/menu.svg"
          alt="Menú desplegable"
          className="b-link"
        />
      </div>
    </header>
  );
};

export default HeaderMobile;
