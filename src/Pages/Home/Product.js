import React from 'react';

const Product = ({ product }) => {
    const { name, image, description, available, price, minimumorder } = product;

    return (

        <div class=" bg-base-100 shadow-xl grid rounded-xl">
            <figure className=''>
                <img className='rounded-xl items-center w-96 h-52' src={image} alt="Shoes" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p > {description}  </p>
                <p >Available Quantity: {available} </p>
                <p>Price P/P: $ {price} </p>
                <p>Minimun Order: {minimumorder}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;