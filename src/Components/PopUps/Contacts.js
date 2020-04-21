import React from 'react'; 

class Contacts extends React.Component {
    render() {
        return (
            <div className='info'>
                <div className='modal-content'>
                    <button 
                    className='modal-button'
                    onClick={this.props.toggleContacts}>x</button>
                    <p>Para más información sobre algún aspecto de la infusión Sangre de Reina, puede enviar un correo electrónico a 
                    <a href='mailto:sangrereina@gmail.com'> sangrereina@gmail.com</a>, 
                    dejar hacer una llamada o dejar un mensaje de text al <a href='+1-787-216-3529'>(787)216-3529</a></p>
                </div>
            </div>
        )
    }
}

export default Contacts; 
