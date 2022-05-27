import React, { useEffect, useState } from 'react';
import Product from './Product';
import ProductModal from './ProductModal';

const AvaliableProduct = () => {
    const [products, setProducts] = useState([])
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch('https://dry-brushlands-79455.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='mx-10'>
            <h2 className='text-primary text-3xl text-center'>Our Avaliable Products</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-2 ' >
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setItem={setItem}
                    ></Product>)
                }
            </div>
            {
                item && <ProductModal
                    item={item}
                    setItem={setItem}
                ></ProductModal>
            }

        </div>
    );
};

export default AvaliableProduct;