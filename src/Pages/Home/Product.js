import React from 'react';

const Product = ({ product }) => {
    const { name, image, description, available, price, minimumorder } = product;

    return (
        <div class="card card-compact  bg-base-200 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p> {description}  </p>
                <p>Available Quantity: {available} </p>
                <p>Price P/P: $ {price} </p>
                <p>Minimun Order: {minimumorder}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;