import React from 'react';
import './Banner.css';
import Buttons from '../Buttons/Buttons'

class Banner extends React.Component {
    render() {
      return (
          <div className='banner'>
            <Buttons />
          </div>
      )  
    }
};

export default Banner;