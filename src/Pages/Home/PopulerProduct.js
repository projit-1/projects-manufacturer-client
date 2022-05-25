import React from 'react';
import usePopulerProduct from '../../Hooks/usePopulerProduct';
import Pproduct from './Pproduct';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Populerproduct from '../../Assets/poulerproduct.png'


const PopulerProduct = () => {
    const slideLeft = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300;
    }
    const slideRight = () => {
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300;
    }


    const [pproduct, setPproduct] = usePopulerProduct();
    return (
        <div className='mx-2'>
            <div className='bg bg-slate-400'>
                <h2 className='text-3xl text-center text-primary  -mb-10'>Our Populer Products</h2>
                <img className='w-full h-[290px] object-cover ' src={Populerproduct} alt="" />
            </div>
            <div className='relative flex items-center my-2'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 ' onClick={slideLeft} size={40} />
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' >
                    <div className='relative flex items-center' >

                        {
                            pproduct.map(pproduct => <Pproduct
                                key={pproduct._id}
                                pproduct={pproduct}
                            ></Pproduct>)
                        }
                    </div>
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 ' onClick={slideRight} size={40} />
            </div>
        </div>


    );
};

export default PopulerProduct;