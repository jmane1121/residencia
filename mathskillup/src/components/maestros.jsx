import React from 'react'
import CardMaestro from './cardMaestro'
import ed from '../img/ecuacionesDiferenciales.png'
import algebra from '../img/algebra.jpg'

//* En este archivo llamado MAESTROS es donde se manda a llamar el primer archivo llamado CARDMAESTROS
//* lo que se realiza en este archivo es la creación de manera dinamica de las cards esto pasando un arreglo 
//* en formato JSON (creo) el cual nos va a ayudar cuando estemos usando la funcion MAP que nos proporciona JS
//* las unicas propiedades que tiene este archivo es en el div y solo es para indicar como va a estar ordenado 
//? es una manera de crear los componentes y poder hacerlos de manera dinamica y en el archivo INDEX.JS se manda a llamar este archivo

//TODO
// INVESTIGAR, ENCONTRAR LA MANERA EN COMO HACER ESTO PERO CON UNA BASE DE DATOS

export const maestros = () => {
    const maestros =[
        {
            materia: "Ecuaciones Diferenciales",
            imagen: ed,
            alumnos: 20,
            promedio: 8.5,
            enlace: "https://www.youtube.com/watch?v=i2GEOcEcRtY&list=RD-_3dc6X-Iwo&index=4"
        },
        {
            materia: "Algebra Lineal",
            imagen: algebra,
            alumnos: 40,
            promedio: 6.4,
            enlace: "https://www.youtube.com/watch?v=IBLruNfUqUs&list=RD-_3dc6X-Iwo&index=5"
        },
        {
            materia: "Calculo Vectorial",
            imagen: ed,
            alumnos: 30,
            promedio: 9.5,
            enlace: "https://www.youtube.com/watch?v=i2GEOcEcRtY&list=RD-_3dc6X-Iwo&index=4"
        },
        {
            materia: "Algebra Lineal",
            imagen: algebra,
            alumnos: 40,
            promedio: 6.4,
            enlace: "https://www.youtube.com/watch?v=IBLruNfUqUs&list=RD-_3dc6X-Iwo&index=5"
        },
    ]
  return (
    <div className="flex flex-row">
        {maestros.map((maestro, index)=>(
            <CardMaestro key={index} {...maestro}/>  //{...maestro} -> spread operator se usa para pasar todas las propiedades del objeto maestro como propiedades independientes al componenete CardMaestro
        ))}                                          
    </div>
  )
}

export default maestros