import React from "react";
import PropTypes from "prop-types";

//* En este archivo lo que se hace es generar por así decirlo el esquelo de la CARD aquí solo se va a poner las propiedades de diseño
//* ---------------------------------------------------------------------------------------------------------------------------------
//* Aquí lo que se realiza es una CARD la cual contiene una imagen con un alto de 48 y un ancho de 64
//* Las etiquetas de los texto tambien tienen propiedades
//* la CARD cuenta con una etiqueta <a></a> la cual cuenta con un diseño de button ademas de tener animacion
//* La CARD cuenta con una sobra muy tenue y con animación la cual es que cuando se pasa el mouse por arriba esta cambia de color ->
//* -> a un tono más fuerte
//* se tiene que hacer una validación para que si PROM < 70 este se ponga en color rojo en caso de que de sea PROM => 70 sea verde

//? ------------------IMPORTANTE-------------------
//* Este diseño lo maneje usando PROPTYPES por consiguiente se tienen dos archivos este es el primero en el cual se realiza solamente el diseño
//* base de la CARD y tambien se le incrusta propiedades de TAILWINDCSS y en el segundo archivo llamado MAESTROS es donde se manda a llamar este archivo

//TODO:
// INVESTIGAR MÁS ACERCA DE PROPTYPES


//! opacity-80 hover:opacity-100
const cardMaestro = ({ materia, imagen, alumnos, promedio, enlace }) => {
  return (
    <div className="pl-7 pt-6 w-60 h-32">
      <div
        className="bg-color-azul01/95 border border-color-azul03
        hover:border-cyan-500/100
        hover:shadow-xl
        rounded-2xl p-4 "
      >
        <img
          src={imagen}
          className="w-44 h-40 rounded-lg border "
          alt="Ecuaciones Diferenciales"
        />
        <div className="mt-4">
          <h4 className="text-md text-white font-semibold pb-3">{materia}</h4>
          <p className="text-white text-sm">
            Numero de Alumnos{" "}
            <span className="font-semibold text-sm text-green-500">{alumnos}</span>
          </p>
          <p className="text-white text-sm pt-3">
            Promedio{" "}
            <span className="font-semibold text-sm text-green-500">{promedio}</span>
          </p>
          <a
            href={enlace}
            className="text-white text-md px-3 py-2 rounded-full text-center block mt-4
                        transition ease-in-out delay-150 bg-sky-400/75 hover:-translate-y-1
                        hover:scale-105 hover:hover:bg-color-azul03 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </a>
        </div>
      </div>
    </div>
  );
};

cardMaestro.propTypes = {
  materia: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  alumnos: PropTypes.number.isRequired,
  promedio: PropTypes.number.isRequired,
  enlace: PropTypes.string.isRequired,
};

export default cardMaestro;
