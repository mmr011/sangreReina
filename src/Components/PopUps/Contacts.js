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
                    hacer una llamada o dejar un mensaje de text al <a href='+1-787-216-3529'>(787)216-3529</a>.</p>
                    <p>Página creada por Martín Molina Rodriguez. Para más información, presione 
                    <a href="mailto:mmr001@gmail.com">aquí</a> para enviar correos electrónico.</p>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Contacts; 
