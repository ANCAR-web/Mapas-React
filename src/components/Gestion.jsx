import React from 'react'
import { useState } from 'react';
import NumberCounter from 'number-counter';
import Mapas2 from "../data/Mapas2";
import Cards2 from './Cards2';
import "../styles/Gestion.css";
const Gestion = () => {
  const keys = ["Nombre","Departamento"]
  const [query,seyQuery] = useState("");
  const search = (Mapas2)=>{
    return Mapas2.filter((mapa)=>{
    return keys.some(key=>mapa[key].toLocaleLowerCase().includes(query))
    })
  }
const conteo = Mapas2.length;
  return (
    <div className='Gestion'>
    <div className="encabezado">
      <h1>Galeria de mapas de gestion de riesgo.</h1>
      <p>Filtra en minusculas lo que buscas.</p>
    </div>
    <h2><NumberCounter end={conteo} start={0} delay='5' preFix="Total de mapas filtrados:  "/></h2>
    <input type='text' 
          placeholder='Search...'
          className='inputtext'
          onChange={(e)=>{seyQuery(e.target.value)}} />
    <Cards2 search = {search(Mapas2)}/>
  </div> 
  )
}

export default Gestion