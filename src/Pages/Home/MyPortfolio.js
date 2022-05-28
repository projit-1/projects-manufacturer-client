import React from 'react';
import Portimg from '../../Assets/portimg.png'

const MyPortfolio = () => {
    return (
        <div className=''>
            <h2 className='text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center h-20 text-white py-3'>Welcome to My Portfolio</h2>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="max-w-sm rounded-lg shadow-2xl" src={Portimg} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Projit Mondol</h1>

                        <p className="py-1">B.S.S (Hons.) Economics</p>
                        <p className="py-1">M.S.S in Economics</p>
                        <p className="py-1">As a student of Programming Hero, I have learned about HTML-5, CSS-3, JavaScript, React, Router, and many other things. But, thing is that as a none CSE student I need to learn these things more and more. I can  solve most the things that are assigned as assignment to me, it took time. So, I think I need more and more practice. </p>
                    </div>
                </div>
            </div>
            <div className="">
                <p className=' text-center text-2xl '> My Best Previous work link</p>

                <p className=' text-center cursor-pointer my-1 '>
                    https://assignment-03-rupsha-convention-center.netlify.app/
                </p>
                <p className=' text-center cursor-pointer my-1 '>
                    https://assignment-09-khulna-car-hat-product-review.netlify.app/
                </p>
                <p className=' text-center  '>
                    https://ns-motors-bangladesh-ltd.web.app/
                </p>
            </div>
        </div>
    );
};

export default MyPortfolio;