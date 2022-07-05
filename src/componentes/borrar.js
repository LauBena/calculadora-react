import React from 'react';
import '../estilos/borrar.css';

const Borrar = (props) => (
    <div className='borrar' onClick={props.manejarBorrar}>
        {props.children}
    </div>
);

export default Borrar;