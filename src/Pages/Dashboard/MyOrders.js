import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    return (
        <div>
            <h2 className='text-2xl text-center '>My Orders</h2>
            <Link className='flex justify-center items-center ' to='/dashboard/addreview'> <button className="btn btn-link  text-center">Add Review</button></Link>

        </div>
    );
};

export default MyOrders;