import React from 'react';
import Ingredients from '../PopUps/Ingredients';
import Order from '../PopUps/Order';
import Contacts from '../PopUps/Contacts';
import './Banner.css';

class Banner extends React.Component {
  showIngredients() {
    if(this.props.showIngredients) {
      return (
        <Ingredients 
        toggleIngredients={this.props.toggleIngredients}
        />
      );
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
      );
    } else {
      return; 
    };
  }

  showContacts() {
    if(this.props.showContacts) {
      return(
        <Contacts 
        toggleContacts={this.props.toggleContacts}/>
      ); 
    } else {
      return; 
    }
  }

  handleMouseOverIngredients() {
    const button = document.getElementById('button'); 
    button.style.backgroundColor = 'hsl(352.1,60.4%,19.8%)';
  }

  handleMouseOutIngredients() {
    const button = document.getElementById('button'); 
    button.style.backgroundColor = 'hsla(94, 33%, 4%, 0.6)';
  }

  handleMouseOverOrders() {
    const button2 = document.getElementById('button2'); 
    button2.style.backgroundColor = 'hsl(352.1,60.4%,19.8%)';
  }

  handleMouseOutOrders() {
    const button2 = document.getElementById('button2'); 
    button2.style.backgroundColor = 'hsla(94, 33%, 4%, 0.6)';
  }

  handleMouseOverContacts() {
    const button3 = document.getElementById('button3'); 
    button3.style.backgroundColor = 'hsl(352.1,60.4%,19.8%)';
  }

  handleMouseOutContacts() {
    const button3 = document.getElementById('button3'); 
    button3.style.backgroundColor = 'hsla(94, 33%, 4%, 0.6)';
  }

  render() {
    return (
        <div className='banner'>
          <button
            id='button' 
            className='button' 
            onClick={this.props.toggleIngredients}
            onMouseOver={this.handleMouseOverIngredients}
            onMouseLeave={this.handleMouseOutIngredients}>Ingredientes</button>
          <button 
            id='button2'
            className='button'
            onClick={this.props.toggleOrder}
            onMouseOver={this.handleMouseOverOrders}
            onMouseLeave={this.handleMouseOutOrders}>Ordenar</button>
          <button
            id='button3'
            className='button'
            onClick={this.props.toggleContacts}
            onMouseOver={this.handleMouseOverContacts}
            onMouseLeave={this.handleMouseOutContacts}>Contacts</button>
          {this.showIngredients()}
          {this.showOrder()}
          {this.showContacts()}
        </div>
     )  
  }
};

export default Banner;