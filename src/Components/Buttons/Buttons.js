import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
    render() {
        return (
            <div className='button-container'>
                <div className='button'>button 1</div>
                <div className='button'>button 2</div>
            </div>
        )
    }
}

export default Buttons;