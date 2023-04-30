import React from 'react'
import { BrowserRouter,
         Routes,
         Route } from 'react-router-dom';
import Infraestructura from "./Infraestructura";
import Gestion from "./Gestion";
import Fotogametria from "./Fotogametria";
import ScrollToText from "../components/ScrollToTop";
import Header from "../components/Header";
import Headertextos from "../components/Headertextos";
import GalleryImages from "../components/GalleryImages";
import Galleria from "../components/Galleria";
import App from "../App.js";

const Rutas = () => {
  return (
    <BrowserRouter>
    <ScrollToText/>
    <Header/>
    <Headertextos/>
    <GalleryImages/>
    <Galleria Testimonios="Categorias"
              They="Web apps GIS"
              Say="Mira los datos"
              izquierda="leftArrow"
              derecha = "rightArrow"/>
    <Routes>
      <Route path='/Infraestructura' element={<Infraestructura/>}></Route>
      <Route path='/Gestion' element={<Gestion/>}></Route>
      <Route path='/Fotogametria' element={<Fotogametria/>}></Route>
      <Route path='/' element={App}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Rutas