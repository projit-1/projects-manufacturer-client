import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-2xl text-center '>This is My Profile</h2>
            <Link className='flex justify-center items-center ' to='/dashboard/addreview'> <button className="btn btn-link  text-center">Add Review</button></Link>
        </div>
    );
};

export default MyProfile;