import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';
//
// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },  since we always show only one picture at a time. So no need to be responsive.
// };

const items = MainCarouselData.map((item) => (
    <img
        className="cursor-pointer"//tailwind css class
        role = "presentation"
        src={item.image}
        alt={item.path}
        //style={{ height: '450px',width: '100%' }}
    />
))
const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}//milliseconds
        infinite
    />
);

export default MainCarousel;
