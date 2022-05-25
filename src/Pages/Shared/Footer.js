import React from 'react';
import footerimg from '../../Assets/footerimg.jpg'
import { FaFacebookF, FaTwitter, FaYoutube, FaPhone } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='bg-base-200 mt-20'>
            <footer class="footer p-10  text-base-content">
                <div>
                    <div>
                        <img className='w-72' src={footerimg} alt="" />
                    </div>
                </div>

                <div>
                    <span class="footer-title">Learn more</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>

                </div>
                <div>
                    <span class="footer-title">Join us</span>
                    <a >
                        <FaFacebookF className='cursor-pointer rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </a>
                    <a>
                        <FaTwitter className='cursor-pointer rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </a>
                    <a>
                        <FaYoutube className='cursor-pointer  rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </a>
                    <a>
                        <FaPhone className='cursor-pointer  rounded-full w-8 h-8 hover:bg-primary ease-in-out duration-300  py-1' />
                    </a>
                </div>
            </footer>
            <p className='text-2xl text-primary text-center py-5'>NS Motor Bangladesh Ltd.</p>
        </div>
    );
};

export default Footer;