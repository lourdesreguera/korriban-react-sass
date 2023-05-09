import React from "react";

const Tour = () => {
  return (
    <div className="b-tour" id="tour">
      <h2 className="b-tour__heading">Proximas fechas</h2>
      <div className="b-tour__dates">
        {/* <p>Añadiremos nuevas fechas próximamente. ¡Sigue atento!</p> */}
        <p>27/05/2023</p>
        <div className="b-tour__place">
          <div className="b-tour__city">
            <p className="b-tour__city-name">Huelva</p>
            <span>--Sede Huelva Rock</span>
          </div>
        </div>
      </div>
      <a
        href="https://entradium.com/es/events/korriban-dissidents"
        target="_blank"
        rel="noreferrer"
        className="b-btn b-btn--tour"
      >
        Comprar entradas
      </a>
      <h2 className="b-tour__heading">Eventos pasados</h2>
      <div className="b-tour__dates">
        <p>18/11/2022</p>
        <div className="b-tour__place">
          <div className="b-tour__city">
            <p className="b-tour__city-name">Granada</p>
            <span>--Sala Tren</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
