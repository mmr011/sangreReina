import React from 'react';
// import Ingredients from '../Ingredients/Ingredients'
// import { Transition, animated } from "react-spring/renderprops";
import './Banner.css';

class Banner extends React.Component {
  
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
        
        </div>
     )  
  }
};

export default Banner;