import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Blogs from './Blogs';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
