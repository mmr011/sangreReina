import React from 'react';
import './App.css';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component { 
  constructor(props) {
    super(props); 
    this.state = {
      showModal: false 
    }
    this.togglePopUp = this.togglePopUp.bind(this);
  }

  togglePopUp() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div id='App' className='container'>
        <Banner 
          showModal={this.state.showModal}
          togglePopUp={this.togglePopUp}
          />
        <div className="App"
          onClick={this.hidePopUp}>
          <Carousel />
          <div className='logo'></div>
        </div>
      </div>
    );
  }
}

export default App;
