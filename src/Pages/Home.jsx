// Components/Home.js
import React from 'react';
import Hero from '../Components/Home/Hero';
import Whatwedo from '../Components/Home/Whatwedo';
import Philosophy from '../Components/Home/Philosophy';
import ServicesStats from '../Components/Home/Services';
import Products from '../Components/Home/Products';
const Home = () => {
    return (
        <>
            <Hero />
            <Whatwedo />
            <Philosophy />
            <ServicesStats />
            <Products />
        </>
    );
};

export default Home;
