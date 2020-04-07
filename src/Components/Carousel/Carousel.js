import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const photos = [ 
    {
        
        id: 1, 
        image: <img width="25%" src='https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/90151682_114687503476363_5251636068221976576_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_oc=AQnqY_PVlxuzz_1sN_lUab2D_dRl8HYT67_owdT05EZbkEjTP6CL6AEeEncNQV6Updk&_nc_ht=scontent-mia3-1.xx&oh=326ba860da3ae6fe36cd151189d729e1&oe=5EB0BFC6' />
    }, 
    {
        id: 2, 
        image: <img width="25%" src='https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/90084627_114687466809700_5273783500875497472_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_oc=AQlUp84X-50aBHrzRoao6u2Y_2WEIf2Vnwrq2-mShmP8FexTpLRjRBoCcLZYGqR3uwU&_nc_ht=scontent-mia3-1.xx&oh=ace7f65a3631633e20aefa81eda70866&oe=5EB1C5D0' />
    }, 
    {
        id: 3, 
        image: <img width="25%" src='https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/78140472_107643507514096_6603432795064762368_o.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_oc=AQl7pwkolMB54UXlsO2bei9u7t2_RObmOpLNhvo0_UOhi9bIE0B9Mp9VHzV-9qo8-Y8&_nc_ht=scontent-mia3-2.xx&oh=b0a9ec7b0404df4fbb414030506405ab&oe=5EB346C1' />
    } 
]

class Carousel extends  React.Component {
    render() {
        const settings = {
            dots: false, 
            infinite: true, 
            speed: 550, 
            slidesToShow: 1, 
            slidesToScroll: 1,
            fade: true,
            autplay: true, 
            pauseOnHover: true,
            className: 'slides'
        }

        return (
            <div className='carousel'>
                <Slider {...settings}>
                    {
                        photos.map(photo => {
                            return (
                                <div>
                                    {photo.image}
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