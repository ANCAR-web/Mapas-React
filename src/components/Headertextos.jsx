import React from 'react'
import Mapas from "../data/Mapas";
import Mapas2 from "../data/Mapas2";
import NumberCounter from 'number-counter';
import { motion } from "framer-motion";
import Tierra from "../Imagenes/rotacion-de-la-tierra.png"
import { useState } from 'react';
import "../styles/HeaderTextos.css";
const Headertextos = () => {
  const LongMapa = Mapas.length;
  const LongMapa2 = Mapas2.length;
  const [indicador1,setIndicador1] = useState(LongMapa);
  const [indicador2,setIndicador2] = useState(LongMapa2);
  return (
    <div className='App-header'>
        <motion.img
        initial={{scale:0}}
        transition={{duration:2}}
        animate={{scale:1}}
        src={Tierra}
        alt="Tierra"
        className='App-logo' />
        <h1>Galleria de web maps aplication</h1>
        <h2>Conteo de mapas: </h2>
        <div className='indicadores'>
            <h2><NumberCounter end={indicador1} start={0} delay='5' preFix="Infraestructura:  "/></h2>
            <h2><NumberCounter end={indicador2} start={0} delay='5' preFix="Gestion de riesgo:  "/></h2>
        </div>

    </div>
  )
}

export default Headertextos