import React from 'react';
import './App.css';
import Carousel from '../Carousel/Carousel';
import Banner from '../Banner/Banner';


class App extends React.Component {
  renderInfo() {
    return(
      <div>
        <p>El té Sangre de Reina es hecho a mano y solo con ingredientes fresccos y
        naturales para darle ese toque esepcial que no encontrarás cualquier te.</p>
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        <Banner />
        <div className="App">
          <Carousel />
          <div className='logo'></div>
          <div className="info">
            <p>El té Sangre de Reina es hecho a mano y solo con ingredientes fresccos y
            naturales para darle ese toque esepcial que no encontrarás cualquier te.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
