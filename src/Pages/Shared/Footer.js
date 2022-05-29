import React from 'react';
import footerimg from '../../Assets/footerimg.jpg'
import { FaFacebookF, FaTwitter, FaYoutube, FaPhone } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-base-200 mt-20'>
            <footer className="footer p-10  text-base-content">
                <div>
                    <div>
                        <img className='w-72' src={footerimg} alt="" />
                    </div>
                </div>

                <div>
                    <span className="footer-title">Learn more</span>
                    <NavLink to='/aboutus'> About us</NavLink>
                    <NavLink to='/contactus'> Contact</NavLink>
                    <NavLink to='/'> Jobs</NavLink>
                    <NavLink to='/'>Privacy Policy </NavLink>

                </div>
                <div>
                    <span className="footer-title">Join us</span>
                    <>
                        <FaFacebookF className='cursor-pointer rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </>
                    <>
                        <FaTwitter className='cursor-pointer rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </>
                    <>
                        <FaYoutube className='cursor-pointer  rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </>
                    <>
                        <FaPhone className='cursor-pointer  rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </>
                </div>
            </footer>
            <p className='text-2xl text-primary text-center py-5'>NS Motor Bangladesh Ltd.</p>
        </div>
    );
};

export default Footer;