import React from 'react';
import Slider from 'react-slick';
import Iced from './iced.jpg'
import Solo from './bottle-with-cup.jpg';
import Trio from './trio-bottle.jpg';
import Crates from './bottle-crates.jpg';
import './Carousel.css';

const ingredientes = (
    <ul>
        <li>Gengibre</li>
        <li>Canela</li>
        <li>Flor de Jamaica</li>
        <li>Entre otros...</li>
    </ul>
);
const photos = [ 
    {
        
        id: 1, 
        image: <img width='47%' src={Solo} />,
        caption: <p className='solo-caption'>Infusión Artesanal Medicinal</p>
    }, 
    {
        id: 2, 
        image: <img width='47%' src={Trio} />,
        caption: <p className='trio-caption'>
                    Contiene ingredientes medicinales como: 
                    {ingredientes}
                    </p>
    }, 
    {
        id: 3, 
        image: <img width='47%' src={Crates} />,
        caption: <p className='crates-caption'>Hecho incgredientes medicinales saludables y empacado a mano</p>
    }, 
    {
        id: 4, 
        image: <img width='47%' src={Iced} />,
        caption: <p className='iced-caption'>Alternativa perfecta para refrescarse en días caluroso</p>
    }
]

class Carousel extends  React.Component {
    render() {
        const settings = {
            autoplaySpeed: 5000,
            dots: false, 
            arrows: false, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 1, 
            slidesToScroll: 1,
            fade: true,
            autoplay: true, 
            pauseOnHover: true,
            className: 'slides'
        }

        return (
            <div className='carousel'>
                <Slider {...settings}>
                    {
                        photos.map(photo => {
                            return (
                                <div key={photo.id} className='carousel-content'>
                                    {photo.image}
                                    {photo.caption}
                                </div>
                                
                            )
                        })
                    }
                </Slider>
            </div>
        )
    };
};

export default Carousel;