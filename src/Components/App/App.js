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
    this.popUp = this.popUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  popUp() {
    this.setState({ showModal: true });
  }

  hidePopUp() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className='container'>
        <Banner 
          showModal={this.state.showModal}
          popUp={this.popUp}
          hidePopUp={this.hidePopUp}/>
        <div className="App">
          <Carousel />
          <div className='logo'></div>
        </div>
      </div>
    );
  }
}

export default App;
