import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import PopulerProduct from './PopulerProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <PopulerProduct></PopulerProduct>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
