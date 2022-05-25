import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Product from './Product';

const TotalProduct = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className='mx-10'>
            <h2 className='text-primary text-3xl text-center' > Our Products</h2 >
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2 ' >

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div >
        </div>
    );
};

export default TotalProduct;