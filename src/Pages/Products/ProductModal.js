import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ProductModal = ({ item, setItem }) => {
    const { _id, name, available, price } = item;
    const [user, loading, error] = useAuthState(auth);

    const handleOrder = (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        const option = event.target.option.value;
        // console.log(_id, name, option);

        const order = {
            productId: _id,
            product: name,
            name: user.displayName,
            buyer: user.email,
            option,
            phone: event.target.phone.value

        }

        fetch('https://dry-brushlands-79455.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    toast(`Your order is set for, '${name}', amount ${option} .`)
                }
                setItem(null);
            })



    }
    return (
        <div>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Your Order </h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-1 justify-items-center '>
                        <input type="text" disabled value={name} className="input input-bordered input-md w-full max-w-xs text-center" />
                        {/* <input type="text" disabled value={(price)} className="input input-bordered input-md w-full max-w-xs text-center" /> */}
                        <select name='option' className="select select-bordered w-full max-w-xs text-center">
                            <option disabled select>Product Amout</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || " "} className="input input-bordered input-md w-full max-w-xs text-center" />
                        <input type="email" name='email' disabled value={user?.email || " "} className="input input-bordered input-md w-full max-w-xs text-center" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered input-md w-full max-w-xs" />
                        <input type="submit" value="submit" className=" btn btn-secondary  w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label for="product-modal" className="btn">Order Now</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductModal;