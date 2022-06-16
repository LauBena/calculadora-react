import './App.css';
import Boton from '../src/componentes/boton'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
