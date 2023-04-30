import './App.css';
import React from 'react';
import { useState } from 'react';
import Cargadordatos from './components/Cargadordatos';
import Rutas from './components/Rutas';
import Video from "./Imagenes/Tierra-inicio.mp4";
function App() {
const [loading,setLoading] = useState(true);
setTimeout(()=>{
setLoading(false)
},3000)

if (loading) return <Cargadordatos/>
  return (
    <div className="App">
      <video src={Video} onPlay loop muted></video>
      <Rutas/>

    </div>
  );
}

export default App;
