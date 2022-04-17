import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;