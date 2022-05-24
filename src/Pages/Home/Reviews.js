import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review';
import { Link } from 'react-router-dom';


const Reviews = () => {
    const [reviews, setRevews] = useReview();

    return (
        <div className='my-10 mx-auto'>
            <h2 className='text-primary text-3xl text-center'>Customer Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    reviews.slice(0, 6).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
                <Link to='/totalreviews'>
                    <button class="btn btn-outline btn-primary  absolute inset-x-20 left-20  ">See More</button>
                </Link>

            </div>
        </div>
    );
};

export default Reviews;