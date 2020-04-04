import React from 'react';
import './App.css';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';

function App() {
  return (
    <div className='container'>
      <Banner />
      <div className="App">
        <Carousel />
        <div className='logo'></div>
      </div>
    </div>
  );
}

export default App;
