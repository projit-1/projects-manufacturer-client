import React from 'react';
import Clients from '../../Assets/client.png'
import Access from '../../Assets/access.png'
import Deliveri from '../../Assets/deliveri.png'
import { NavLink } from 'react-router-dom';




const BusinessSummary = () => {
    return (
        <div className='my-5'>

            <div className='bg-base-200 shadow-xl text-primary py-3 text-center text-2xl'>
                <h2>Business Summary</h2>
            </div>

            <div className="bSumary grid grid-cols-1 lg:grid-cols-3 gap-5 my-1">
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='w-16' src={Clients} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">50+ Countries </h2>
                        <p>* 500+ Institutions </p>
                        <p>* 5000+ Cleints</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='w-16' src={Access} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Easy Access</h2>
                        <p>* User friendly dashbord</p>
                        <p>* Easy payment Method</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='w-16' src={Deliveri} alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fast Delivery</h2>
                        <p>* No delivery conditons </p>
                        <p>*Gauranted product</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class="card card-side bg-base-100 shadow-xl">
                    <div class="card-body grid grid-cols-2 ">
                        <div>
                            <h2 class="text-2xl text-primary">Have any question about us or get a product request?</h2>
                            <p>Never hesitate to contact us !</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div class="card-actions justify-end">
                                <NavLink to='/products'> <button class="btn btn-sm btn-primary">Request for Quote</button></NavLink>
                            </div>
                            <div class="card-actions justify-end">
                                <NavLink to='/contactus'><button class="btn btn-sm btn-primary">Contact us</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;