import React from "react";

const Tour = () => {
  return (
    <div className="b-tour" id="tour">
      <h2 className="b-tour__heading">Proximas fechas</h2>
      <div className="b-tour__dates">
        <p>18/11/2022</p>
        <div className="b-tour__place">
          <div className="b-tour__city">
            <p className="b-tour__city-name">Granada</p>
            <span>--Sala Tren</span>
          </div>
        </div>
      </div>
      <a href="https://www.wegow.com/es-es/compra/bolu2-death-donuts-hole-korriban-withering-the-core-granada" target="_blank" rel="noreferrer" className="b-btn b-btn--tour">
        Comprar entradas
      </a>
    </div>
  );
};

export default Tour;
