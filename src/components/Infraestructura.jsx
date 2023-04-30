import React from 'react'
import "../styles/Infraestructura.css";
import { useState } from 'react';
import Mapas from "../data/Mapas";
import NumberCounter from 'number-counter';
import Cards from './Cards';
const Infraestructura = () => {
  const keys = ["Nombre","categoria"]
  const [query,seyQuery] = useState("");
  const search = (Mapas)=>{
    return Mapas.filter((mapa)=>{
    return keys.some(key=>mapa[key].toLocaleLowerCase().includes(query))
    })
  }
const conteo = Mapas.length;
  return (
    <div className='Infraestructura'>
      <div className="encabezado">
        <h1>Galeria de mapas de infraestructura.</h1>
        <p>Filtra en minusculas lo que buscas.</p>
      </div>
      <h2><NumberCounter end={conteo} start={0} delay='5' preFix="Total de mapas filtrados:  "/></h2>
      <input type='text' 
            placeholder='Search...'
            className='inputtext'
            onChange={(e)=>{seyQuery(e.target.value)}} />
      <Cards search = {search(Mapas)}/>
    </div> 
  )
}

export default Infraestructura 