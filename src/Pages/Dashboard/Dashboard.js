import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-base-200 ">
                <h2 className='text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center h-20 text-white py-3'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side w-48">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto  bg-base-300 text-base-content">
                    <li className='my-1 '><NavLink to='/dashboard/myorders'>My Orders</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/addreview'>Add  Review</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                    <ul class="menu menu-horizontal p-0">
                        <li tabindex="0">
                            <li className=''><NavLink to='/dashboard/manageallorders'>Admin Panel</NavLink></li>
                            {/* <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> */}

                            <ul class="bg-base-300">
                                <li className='my-1'><NavLink to='/dashboard/addaproduct'>Add Product</NavLink></li>
                                <li className='my-1'><NavLink to='/dashboard/manageproduct'>Manage Product</NavLink></li>
                                <li className='my-1'><NavLink to='/dashboard/manageallorders'>Manage All Product</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    {/* <li className='my-1'><NavLink to='/dashboard/addaproduct'>Add Product</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/manageproduct'>Manage Product</NavLink></li>
                    <li className='my-1'><NavLink to='/dashboard/manageallorders'>Manage All Product</NavLink></li> */}
                </ul>
            </div>

        </div>





    );
};

export default Dashboard;