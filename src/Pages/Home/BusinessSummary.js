import React from 'react';
import Clients from '../../Assets/client.png'
import Access from '../../Assets/access.png'
import Deliveri from '../../Assets/deliveri.png'
import bsummaryimg from '../../Assets/bsummary .png'


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
            <div class="card card-side bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;