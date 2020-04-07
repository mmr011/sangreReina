import React from 'react';
import './Banner.css';
// import Buttons from '../Buttons/Buttons'

class Banner extends React.Component {
  

    render() {
      return (
          <div className='banner'>
            <div className='button'>button 1</div>
            <div className='button'>button 2</div>
          </div>
      )  
    }
};

export default Banner;