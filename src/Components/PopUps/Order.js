import React from 'react'; 

class Order extends React.Component {
    render() {
        return (
            <div className='info'>
                <div className='modal-content'>
                    <button 
                    className='modal-button'
                    onClick={this.props.toggleOrder}>x</button>
                    <h3>Puedes ordenar esta infusión por teléfono desde la comodidad de su casa y pagar a través de la aplicación de ATH Móvil.</h3>
                    <ol>
                        <li>Primero enviar un mensaje de texto al <a href='+1-787-216-3529'>(787)216-3529</a>, 
                        o acceder a la <a href='https://www.facebook.com/Reinacortesinfusion'>página de Facebook </a>
                        para hacer su pedido de la infusión.</li>
                        <li>Después de hacer la orden, entre a la aplicación de ATH Móvil y complete su transacción.</li>
                        <li>Cuando la infusión este lista para recoger o entregar, se le avisara a través de mensaje de text 
                        o por llamada telefónica.</li>
                    </ol>
                </div>
            </div>
        )
    }
};

export default Order; 