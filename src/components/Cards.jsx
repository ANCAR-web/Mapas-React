import React from 'react'
import "../styles/Infraestructura.css";
import { motion } from "framer-motion";
const Cards = ({search}) => {
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
          <h3>{`Categoria: ${cards.categoria}`}</h3>
          <a href={cards.url}>{cards.categoria}</a>
          </motion.div>

          })
        }

      </div>
  )
}

export default Cards