import React from 'react';
import banner1 from '../../Assets/bannerimg/bannerimg1.jpg'
import banner2 from '../../Assets/bannerimg/bannerimg2.jpg'
import banner3 from '../../Assets/bannerimg/bannerimg3.jpg'

const Banner = () => {
    return (
        <div class="carousel">
            <div className="carousel-item">
                <img className='w=400&h=300&hash=8B7BCDC2' src={banner1} alt="" />
            </div>
            <div className="carousel-item">
                <img className='w=400&h=300&hash=8B7BCDC2' src={banner2} alt="" />
            </div>
            <div className="carousel-item">
                <img className='w=400&h=300&hash=8B7BCDC2' src={banner3} alt="" />
            </div>


        </div>
    );
};

export default Banner;