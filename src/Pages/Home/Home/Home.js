import React from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import Pricing from '../Pricing/Pricing';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <Pricing></Pricing>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;