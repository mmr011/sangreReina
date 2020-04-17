import React from 'react';
import Ingredients from '../PopUps/Ingredients'
import Order from '../PopUps/Order'
// import { Transition, animated } from 'react-spring/renderprops'
import './Banner.css';

class Banner extends React.Component {
  showIngredients() {
    if(this.props.showIngredients) {
      return (
        <Ingredients 
        toggleIngredients={this.props.toggleIngredients}
         />
      )
    } else {
      return; 
    }
  }

  showOrder() {
    if(this.props.showOrder) {
      return (
        <Order 
        toggleOrder={this.props.toggleOrder}
        />
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
            onClick={this.props.toggleIngredients}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseOut}>Ingredientes</button>
          <button 
          className='button'
          onClick={this.props.toggleOrder}>Ordenar</button>
          {this.showIngredients()}
          {this.showOrder()}
        </div>
     )  
  }
};

export default Banner;