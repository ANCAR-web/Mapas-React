import React from 'react';
import Img1 from "../Imagenes/Imagen1.jpg";
import Img2 from "../Imagenes/Imagen2.jpg";
import { motion } from "framer-motion";
import "../styles/Galeria.css";

const GalleryImages = () => {
  return (
    <div className='Galeria_imagenes'>
        <motion.img 
        initial={{scale:0}}
        transition={{duration:2}}
        animate={{scale:1}}
        src={Img1}
        alt="Img1"/>
        <motion.img
        initial={{scale:0}}
        transition={{duration:2}}
        animate={{scale:1}}
        src={Img2}
        alt="Img2"/>
    </div>
  )
}

export default GalleryImages