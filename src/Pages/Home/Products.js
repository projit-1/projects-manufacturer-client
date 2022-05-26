import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';
import OrderModal from './OrderModal';
import Product from './Product';


const Products = () => {
    const [hproducts, sethProducts] = useProduct([]);
    const [items, setItems] = useState(null);


    return (
        <div className='px-5 mx-auto'>
            <h2 className='text-primary text-3xl text-center'>Our Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    hproducts.slice(0, 6).map(hproduct => <Product
                        key={hproduct._id}
                        hproduct={hproduct}
                        setItems={setItems}
                    ></Product>)
                }
            </div>
            {/* {items && <OrderModal items={items} ></OrderModal>} */}
            <Link className=' flex justify-end items-end my-5 mx-10' to='/products'>
                <button className="btn btn-outline btn-primary btn-sm ">See More</button>
            </Link>
        </div>
    );
};

export default Products;