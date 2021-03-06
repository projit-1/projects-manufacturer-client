import React from 'react';

const Review = ({ review }) => {
    const { name, image, description, ratings } = review;
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="w-96  card card-compact  bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
            <figure><img className='w-24 rounded-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> {description}  </p>
                <p> ratings:  {ratings}  </p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Review;