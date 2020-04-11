import React from 'react';
import './Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.stats = {
      showPopUp: false
    };
    this.renderPopUp = this.renderPopUp.bind(this); 
  }
  
  renderPopUp() {
    this.setState({ showPopUp: true }); 
  }

  infoPopUp() {
    
  }

  render() {
    return (
        <div className='banner'>
          <button className='button' id='button1'>button 1</button>
          <button className='button' id='button2'>button 2</button>
          
        </div>
     )  
  }
};

export default Banner;