import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";
import "../styles/GaleriaData.css";
import Datos from "../data/Gal.js";
import { NavLink
         } from 'react-router-dom';
import {Link} from 'react-scroll';
const Galleria = (props) => {
    const {Testimonios,They,Say,izquierda,derecha} = props;
    const [selected,setSelected] = useState(0);
    const tlength = Datos.length;
    const transition = {type:"spring",duration:3}
  return (
    <div className="Testimonios">
        <div className="left-t">
            <span>{Testimonios}</span>
            <span className="stroke-text">{They}</span>
            <span>{Say}</span> 
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition} 
            >{Datos[selected].categoria}</motion.span>
            <span>
            <Link to={`${Datos[selected].categoria}`}>
            <NavLink style={{color:'white',textDecoration:'none',textShadow:'0 0 6px yellow'}}
            to={`/${Datos[selected].enlace.split(' ')[1]}`}>{Datos[selected].enlace}</NavLink>
            </Link>
            </span>
            
        </div>
        <div className="rigth-t">
           <img src={Datos[selected].imagen} alt="" />
           <div className="obj1"></div>
           <div className="obj2"></div>
           <div className="arrows">
            <img 
            src={require(`../Imagenes/${izquierda}.png`)}
             alt=""
             onClick={()=>{
                selected === 0 ? setSelected(tlength-1):
                                 setSelected((prev)=> prev -1)
             }}
              />
            <img 
            src={require(`../Imagenes/${derecha}.png`)}
            alt=""
            onClick={()=>{
                selected === tlength - 1 ? setSelected(0):
                                           setSelected((prev)=> prev + 1)
            }} />
         </div>
        </div>
    </div>
  )
}

export default Galleria