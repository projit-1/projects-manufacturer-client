import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200 ">
                <h2 className='text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center h-20 text-white py-3'>Welcome to Dashboard</h2>
                <div>
                    <h2 className='text-2xl text-center text-indigo-700 text-bold'>Please Select Sideber Menu </h2>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side w-48">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto  bg-base-300 text-base-content">
                    <li className='my-1 '><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/addreview'>Add  Review</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                    <ul className="menu menu-horizontal p-0">
                        <li tabindex="0">
                            <li className=''><NavLink to='/dashboard/manageallorders'>Admin Panel</NavLink></li>


                            <ul className="bg-base-300">
                                <li className='my-1'><NavLink to='/dashboard/addaproduct'>Add Product</NavLink></li>
                                <li className='my-1'><NavLink to='/dashboard/manageproduct'>Manage Product</NavLink></li>
                                <li className='my-1'><NavLink to='/dashboard/manageallorders'>Manage All Product</NavLink></li>
                                <li className='my-1'><NavLink to='/dashboard/users'>All Users</NavLink></li>
                            </ul>
                        </li>
                    </ul>

                </ul>
            </div>

        </div>





    );
};

export default Dashboard;