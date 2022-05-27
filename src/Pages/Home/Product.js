import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ hproduct }) => {
    const { name, image, description, price, available, minimumorder } = hproduct;

    return (

        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className=" bg-base-100 shadow-xl grid rounded-xl">
            <figure className=''>
                <img className='rounded-xl items-center w-96 h-52' src={image} alt="product" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p > {description}  </p>
                <p>Available Quantity: {available} </p>
                <p>Price per unit : $ {price} </p>
                <p>Minimum order: {minimumorder} </p>

                <div className="card-actions justify-center">

                    <NavLink to='/products'>  <label
                        className="btn btn-primary ">Buy Now</label></NavLink>

                </div>
            </div>
        </div>
    );
};

export default Product;