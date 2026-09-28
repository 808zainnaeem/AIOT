import React, { Suspense, lazy, useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import Hero from '../Components/Home/Hero';

const Whatwedo = lazy(() => import('../Components/Home/Whatwedo'));
const Philosophy = lazy(() => import('../Components/Home/Philosophy'));
const ServicesStats = lazy(() => import('../Components/Home/Services'));
const Products = lazy(() => import('../Components/Home/Products'));

const BelowFoldFallback = () => (
    <div className="min-h-[20vh]" aria-hidden="true" />
);

const Home = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div key={language}>
            <Hero />
            <Suspense fallback={<BelowFoldFallback />}>
                <Whatwedo />
                <Philosophy />
                <ServicesStats />
                <Products />
            </Suspense>
        </div>
    );
};

export default Home;
