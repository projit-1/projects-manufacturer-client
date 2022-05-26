import React from 'react';
import AvaliableProduct from './AvaliableProduct';
import ProductBanner from './ProductBanner';
import Footer from '../Shared/Footer'

const Products = () => {
    return (
        <div>
            <ProductBanner></ProductBanner>
            <AvaliableProduct></AvaliableProduct>
            <Footer></Footer>
        </div>
    );
};

export default Products;