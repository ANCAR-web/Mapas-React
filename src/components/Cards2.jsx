import React from 'react'
import { motion } from "framer-motion";
import "../styles/Gestion.css";
const Cards2 = ({search}) => {
  return (
    <div className='Cards'>
        {
          search.map((cards)=>{
            return <motion.div 
          initial={{scale:0}}
          transition={{duration:2}}
          animate={{scale:1}}
          className='card'
          key={cards.id}>
          <h2>{cards.Nombre}</h2>
          <img src={cards.imagen} alt={cards.Nombre} />
          <h3>{`Categoria: ${cards.Categoria}`}</h3>
          <a href={cards.url}>{cards.Categoria}</a>
          </motion.div>
          })
        }
      </div>
  )
}

export default Cards2