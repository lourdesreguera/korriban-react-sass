import React from "react";
import products from "../data/products";

const ShopCard = () => {
  return (
    <div className="b-shopPage__gallery">
      {products &&
        products.map((product) => {
          return (
            <div className="b-shopPage__card">
              <img
                src={product.imageFront}
                alt={product.name}
                className="b-shopPage__image"
              />
              {product.imageBack && (
                <img
                  src={product.imageBack}
                  alt={product.name}
                  className="b-shopPage__image b-shopPage__image--back"
                />
              )}

              <div className="b-shopPage__text">
                <h2 className="b-shopPage__title">{product.name}</h2>
                <p className="b-shopPage__desc">{product.description}</p>
                <span className="b-shopPage__price">{product.price}€</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShopCard;
