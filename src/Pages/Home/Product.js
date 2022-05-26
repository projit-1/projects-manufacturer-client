import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ hproduct }) => {
    const { name, image, description, price, } = hproduct;

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
                <p>Price : $ {price} </p>
                <div class="card-actions justify-center">

                    <NavLink to='/products'>  <label
                        class="btn btn-primary ">Buy Now</label></NavLink>

                </div>
            </div>
        </div>
    );
};

export default Product;