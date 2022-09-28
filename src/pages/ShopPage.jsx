import React from "react";
import { useEffect } from "react";
import ShopCard from "../components/ShopCard";

const ShopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="b-shop b-shop--shopPage">
      <div className="b-shopPage__heading">
        <h1 className="b-shopPage__heading--title">Merchandising Oficial</h1>
        <p>
          Si quieres adquirir algún producto, 
          <a
            href="mailto:korribanofficial@gmail.com"
            className="b-link b-link--mail"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            PULSA AQUÍ
          </a>{" "}
          para enviarnos un email indicando qué producto deseas y nos pondremos
          en contacto contigo lo antes posible.
        </p>
      </div>
      <div >
        <ShopCard />
        {/* <ShopCard /> */}

        {/* <div className="b-shopPage__card">
          <img
            src="./images/camiseta.png"
            alt="Camiseta"
            className="b-shopPage__image"
          />
          <div className="b-shopPage__text">
            <h2 className="b-shopPage__title">Camiseta</h2>
            <p className="b-shopPage__desc">Camiseta negra blablabla</p>
            <span className="b-shopPage__price">15€</span>
          </div>
        </div> */}
        {/* <div className="b-shopPage__card">
          <img
            src="./images/camiseta.png"
            alt="Camiseta"
            className="b-shopPage__image"
          />
          <h2 className="b-shopPage__title">Camiseta</h2>
          <p className="b-shopPage__desc">Camiseta negra blablabla</p>
          <span>15€</span>
        </div> */}
      </div>
    </main>
  );
};

export default ShopPage;
