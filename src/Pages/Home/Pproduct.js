import React from 'react';

const Pproduct = ({ pproduct }) => {
    const { name, image } = pproduct
    return (
        <div className=' bg-base-200 shadow-xl  gap-2 rounded-xl m-2 '>
            <div className=''>
                <div className=' w-[220px] inline-bloc  cursor-pointer hover:scale-105 ease-in-out duration-300 '>
                    <figure className=''>
                        <img className='rounded-xl items-center p-1 mx-auto w-[250px] h-52' src={image} alt="product" />
                    </figure>
                    <div class="card-body w-64 items-center">
                        <h2 className="card-title ">{name}</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button class="btn btn-primary btn-sm ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Pproduct;