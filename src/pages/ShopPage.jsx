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
      <div>
        <ShopCard />
      </div>
    </main>
  );
};

export default ShopPage;
