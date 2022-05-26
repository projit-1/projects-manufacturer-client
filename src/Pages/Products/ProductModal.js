import React from 'react';

const ProductModal = ({ item }) => {
    const { name, available } = item;
    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Order for: {name}</h3>
                    <p className="py-4">Available item are {available} </p>
                    <div className="modal-action">
                        <label for="product-modal" className="btn">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;