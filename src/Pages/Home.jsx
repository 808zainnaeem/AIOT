import React, { useContext } from 'react';
import Hero from '../Components/Home/Hero';
import Whatwedo from '../Components/Home/Whatwedo';
import Philosophy from '../Components/Home/Philosophy';
import ServicesStats from '../Components/Home/Services';
import Products from '../Components/Home/Products';
import { LanguageContext } from '../Context/LanguageContext';

const Home = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div key={language}>
            <Hero />
            <Whatwedo />
            <Philosophy />
            <ServicesStats />
            <Products />
        </div>
    );
};

export default Home;
