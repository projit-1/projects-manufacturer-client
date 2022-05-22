import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Product from './Product';

const TotalProduct = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <h2 className='text-primary text-3xl text-center'>Our Products</h2>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default TotalProduct;