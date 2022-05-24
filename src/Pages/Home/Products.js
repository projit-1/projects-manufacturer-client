import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useProduct();

    return (
        <div className='px-5 mx-auto'>
            <h2 className='text-primary text-3xl text-center'>Our Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
                <Link to='/totalproduct'>
                    <button class="btn btn-outline btn-primary  absolute inset-x-20 left-20  ">See More</button>
                </Link>

            </div>
        </div>
    );
};

export default Products;