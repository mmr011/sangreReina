import React from 'react';
import './App.css';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';
import Ingredients from '../Ingredients/Ingredients'
import { Transition, animated } from 'react-spring/renderprops'
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
        <Transition
          native
          items={this.state.showModal}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show => show && (props => (
            <animated.div  sytle={props}>
              <Ingredients togglePopUp={this.props.togglePopUp} />
            </animated.div>
          ))}
        </Transition>
      </div>
    );
  }
}

export default App;
