import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div class="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-primary text-center'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><NavLink to='/dashboard'>My Orders</NavLink></li>
                    <li><NavLink to='/dashboard/addreview'>Add  Review</NavLink></li>
                    <li><NavLink to='/dashboard/myprofile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/addaproduct'>Add Product</NavLink></li>
                    <li><NavLink to='/dashboard/manageproduct'>Manage Product</NavLink></li>
                    <li><NavLink to='/dashboard/manageallproduct'>Manage All Product</NavLink></li>
                </ul>
            </div>

        </div>





    );
};

export default Dashboard;