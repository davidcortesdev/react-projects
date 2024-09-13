// eslint-disable-next-line react/prop-types
import { useState } from "react";
export function Pantalla() {

  //const nums = [0,1,2,3,4,5,6,7,8,9,'x','-','+','=']
  const [acumulador, setAcumulador] = useState('Pantalla')
  
  function añadirNum () { 
    setAcumulador(acumulador + '1')
  }

    return (
      <section className="mi-seccion">
        <div className="div-pantalla">
          <h1>{acumulador}</h1>
        </div>
        <div className="botones">
          <div className="boton" onClick={añadirNum}> 7 </div>
          <div className="boton"> 8 </div>
          <div className="boton"> 9 </div>
          <div className="boton"> x </div>
          <div className="boton"> 4 </div>
          <div className="boton"> 5 </div>
          <div className="boton"> 6 </div>
          <div className="boton"> - </div>
          <div className="boton"> 1 </div>
          <div className="boton"> 2 </div>
          <div className="boton"> 3 </div>
          <div className="boton"> + </div>
          <div className="boton"> 0 </div>
          <div className="boton"> . </div>
          <div className="botonEq"> = </div>
        </div>
      </section>
    );
  }