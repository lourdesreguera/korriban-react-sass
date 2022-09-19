import React from "react";

const Contact = () => {
  return (
    <div className="b-contact">
      <div className="b-contact__text-container">
        <p>
          Korriban es una banda afincada en Granada nacida a principios de 2017
          formada actualmente por Luiso Gil, Dewy Conde, Ari Martínez, Javi
          Olivares y Charlie Ferrer.
        </p>
        <p>
          Enseguida empiezan a trabajar en lo que sería su primer trabajo,
          titulado ‘The Masquerade’, lanzado en 2018 con un éxito total en el
          concierto presentación del álbum. Después de una minigira presentación
          durante 2019, llegó el parón mundial a causa de la pandemia del
          Coronavirus. Durante este tiempo la banda sufre una revolución en sus
          filas, cambiando casi toda la formación y publicando dos nuevos temas
          con un corte más melodico y moderno. Actualmente están a la espera de
          lanzar su segundo álbum de estudio.
        </p>
        <div>
          <h2 className="b-contact__heading">Contratación</h2>
          <a href="mailto:korribanofficial@gmail.com" className="b-link b-link--mail">
            korribanofficial@gmail.com
          </a>
        </div>
      </div>
      <div className="b-contact__social">
        <a href="#" className="b-link b-link--social">
          <img className="b-contact__icon" src="./images/icon-facebook.svg" alt="Icono de Facebook" />
          <p className="b-contact__text">Facebook</p>
        </a>
        <a href="#" className="b-link b-link--social">
          <img className="b-contact__icon" src="./images/icon-instagram.svg" alt="Icono de Instagram" />
          <p className="b-contact__text">Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
