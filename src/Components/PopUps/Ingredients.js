import React from 'react';

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
            <p>La infusión artesanal Sangre de Reina es hecho a mano y solo con ingredientes frescos y
              naturales para darle ese toque especial que no encontrarás en cualquier otra infusión.</p>
            <h3>Lista de ingredientes:</h3>
            <ul>
              <li>Agua Filtrada</li>
              <li>Jengibre: Antiflamatorio, combate enfermedates respiratorias, artrosis, diabetes</li>
              <li>Canela: Ayuda a controlar los niveles de colesterol malo y glucosa, elimina la flatulencia</li>
              <li>Flor de Jamaica: Detox, Antioxidante, Vitamina C, Alivia imsomnio</li>
              <li>Anís Estrellado: Mejor que el Tamiflu porque es natural, es antibacteriano y fungicida</li>
              <li>Clavos de Especias: Ricon en eugenole (anticuagulante), tiene propeidades analgesicas, antisepticas, antivomitativas, y sedante</li>
            </ul>
         </div>
    </div>
    )
  }
};

export default Ingredients;