import React from 'react';
import './Banner.css';
import { CSSTransition } from "react-transition-group";

class Banner extends React.Component {
  showIngredients() {
    if(this.props.showModal) {
      return (
        <div 
          className='info'>
          <div className='modal-content fade-in '>
            <button 
              className='modal-button'
              onClick={this.props.togglePopUp}>x</button>
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
    } else {
      return; 
    }
  }

  handleMouseOver() {
    const button = document.getElementById('button'); 
    button.style.backgroundColor = 'hsl(352.1,60.4%,19.8%)';
  }

  handleMouseOut() {
    const button = document.getElementById('button'); 
    button.style.backgroundColor = 'hsla(94, 33%, 4%, 0.6)'
  }

  render() {
    return (
        <div className='banner'>
          <button
            id='button' 
            className='button' 
            onClick={this.props.togglePopUp}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseOut}>Ingredientes</button>
          <button className='button'>Ordenar</button>
          {this.showIngredients()}
        </div>
     )  
  }
};

export default Banner;