import React from "react";

const ShopCard = () => {
  return (
    <div className="b-shopPage__card">
      <img
        src="./images/camiseta.PNG"
        alt="Camiseta"
        className="b-shopPage__image"
      />
      <div className="b-shopPage__text">
        <h2 className="b-shopPage__title">Camiseta</h2>
        <p className="b-shopPage__desc">Camiseta negra</p>
        <span className="b-shopPage__price">15€</span>
      </div>
    </div>
  );
};

export default ShopCard;
