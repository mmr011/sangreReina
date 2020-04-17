import React from 'react';
import './PopUps.css'
// import { Transition, animated } from 'react-spring'

class Ingredients extends React.Component {
 
 render() {
    return (
      <div 
        id='modal'
        className='info'>
        <div className='modal-content'>
          <button 
            className='modal-button'
            onClick={this.props.toggleIngredients}>x</button>
            <p>La infusión artesanal Sangre de Reina es hecho a mano y solo con ingredientes fresccos y
              naturales para darle ese toque esepcial que no encontrarás cualquier te.</p>
            <h3>Lista de ingredientes:</h3>
            <ul>
              <li>Agua Filtrada</li>
              <li>Jengibre</li>
              <li>Canela</li>
              <li>Flor de Jamaica</li>
              <li>Anís Estrellado</li>
              <li>Clavos</li>
            </ul>
         </div>
    </div>
    )
  }
};

export default Ingredients;