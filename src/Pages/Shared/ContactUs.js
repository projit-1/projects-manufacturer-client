import React from 'react';
import { NavLink } from 'react-router-dom';
import bsummary from '../../Assets/bsummary .png'


const ContactUs = () => {
    return (
        <section style={{
            background: `url(${bsummary})`
        }} className='bg-accent px-10 py-14 '>
            <div className='text-center pb-14'>
                <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Contact Us
                </h2>
                <h3 className='text-4xl text-white'>
                    Stay connected with us
                </h3>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input className='input w-full max-w-md' type="text" placeholder='email' name="" id="" />
                <input className='input w-full max-w-md' type="text" placeholder='subject' name="" id="" />
                <textarea className='textarea w-full max-w-md' type="text" placeholder='message' name="" id="" rows={6} />
                <NavLink to='/products' className='text-primary'>Submit</NavLink>
            </div>
        </section>
    );
};

export default ContactUs;