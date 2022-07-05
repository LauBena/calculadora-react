import "./App.css";
import Boton from "../src/componentes/boton";
import Pantalla from "./componentes/pantalla";
import Borrar from "./componentes/borrar";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(''); //creamos un estado para la app llamado input(valor ingresado por el usuario) se mantiene como estado de mi componente App
  // y tmbn vamos a tener una actualizacion de ese input, que inicialmente va a ser una cadena vacia

  const agregarInput = val => {
    setInput(input + val); //unimos las cadenas de caracteres
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    } else{
      alert("Por favor ingrese valores apropiados para realizar los calculos.");
    }
  }


  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila"></div>
        <Borrar manejarBorrar={() => setInput('')}>Borrar</Borrar>
      </div>
    </div>
  );
}

export default App;
