import React from 'react';


const Product = ({ product, setItem }) => {
    const { name, image, description, price, available, minimumorder } = product;
    return (

        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" class=" bg-base-100 shadow-xl grid rounded-xl">
            <figure className=''>
                <img className='rounded-xl items-center w-96 h-52' src={image} alt="product" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">{name}</h2>
                <p > {description}  </p>
                <p >Available Quantity: {available} </p>
                <p>Price : $ {price} </p>
                <p>Minimun Order: {minimumorder}</p>
                <div class="card-actions justify-center">

                    <label
                        for="product-modal"
                        onClick={() => setItem(product)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;