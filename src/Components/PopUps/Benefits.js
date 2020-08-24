import React from 'react'; 

class Benefits extends React.Component {
    render() {
        return (
            <div className='info'>
                <div className="modal-content">
                    <button 
                    className='modal-button'
                    onClick={this.props.toggleBenefits}>x</button>
                    <h3>Ingredientes y sus Beneficios</h3>
                    <ol>
                        <li>Canela: Ayuda a controlar los niveles de colesterol malo y glucosa, elimina la flatulencia</li>
                        <li>Flor the Jamaica: Detox, Antioxidante, Vitamina C, Alivia imsomnio</li>
                        <li>Anis Estrellado: Mejor que el Tamiflu porque es natural, es antibacteriano y fungicida</li>
                        <li>Clavos: Ricon en eugenole (anticuagulante), tiene propeidades analgesicas, antisepticas, antivomitativas, y sedante</li>
                        <li>Jengibre: Antiflamatorio, combate enfermedates respiratorias, artrosis, diabetes</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Benefits; 
