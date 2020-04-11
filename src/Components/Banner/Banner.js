import React from 'react';
import './Banner.css';

class Banner extends React.Component {
  
  showInfo() {
    if(this.props.showModal) {
      return (
        <div className='info'>
          <button 
          className='button'
          onClick={this.props.hidePopUp}>x</button>
          <p>La infusión artesanal Sangre de Reina es hecho a mano y solo con ingredientes fresccos y
          naturales para darle ese toque esepcial que no encontrarás cualquier te.</p>
        </div>
      )
    } else {
      return null; 
    }
  }

  render() {
    return (
        <div className='banner'>
          <button className='button' id='button1'  onClick={this.props.popUp}>button 1</button>
          <button className='button' id='button2'>button 2</button>
          {this.showInfo()}
        </div>
     )  
  }
};

export default Banner;