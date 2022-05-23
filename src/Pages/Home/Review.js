import React from 'react';

const Review = ({ review }) => {
    const { name, image, description, ratings } = review;
    return (
        <div class="w-96  card card-compact  bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p> {description}  </p>
                <p> ratings:  {ratings}  </p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Review;