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
      showIngredients: false, 
      showOrder: false
    }
    this.toggleIngredients = this.toggleIngredients.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this); 
  }

  toggleIngredients() {
    this.setState({ 
      showIngredients: !this.state.showIngredients
     });
  }

  toggleOrder() {
    this.setState({
      showOrder: !this.state.showOrder
    });
  }

  render() {
    return (
      <div id='App' className='container'>
        <Banner 
          showIngredients={this.state.showIngredients}
          showOrder={this.state.showOrder}
          toggleIngredients={this.toggleIngredients}
          toggleOrder={this.toggleOrder}/>
        <div className="App">
          <Carousel />
          <div className='logo'></div>
        </div>
      </div>
    );
  }
}

export default App;
