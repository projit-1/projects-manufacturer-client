import React from 'react';
import logo from '../../Assets/logo/logo.ico'
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const manuItems = <>
        <li className='mx-1'><NavLink to='/' >Home</NavLink> </li>

        <li className='mx-1'> <NavLink to='/products' >Products</NavLink> </li>
        <li className='mx-1'> <NavLink to='/blogs' >Blogs</NavLink> </li>
        <li className='mx-1'> <NavLink to='/myportfolio' >My Portfolio</NavLink> </li>

        {user && <li className='mx-1'> <NavLink to='/dashboard' >Dashboard</NavLink> </li>}
        <li className='mx-1'> {user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <NavLink to='/login' >Log in</NavLink>}</li>

    </>

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            manuItems
                        }
                    </ul>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" ><img src={logo} alt="" /> </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        manuItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Navbar;