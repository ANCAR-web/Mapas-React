import "../styles/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {  
  return (
    <div className='encabezado1'>
     <h1>Aplicacion galleria de mapas y webapps.</h1>
     <span><NavLink to={'/'} style={{color:"yellow",fontSize:"15px"}}>Inicio</NavLink></span>
    </div> 
  )
}

export default Header;