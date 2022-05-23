import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from './Review';
import { Link } from 'react-router-dom';


const Reviews = () => {
    const [reviews, setRevews] = useReview();

    return (
        <div className='my-10'>
            <h2 className='text-primary text-3xl text-center'>Customer Reviews</h2>
            {
                reviews.slice(0, 4).map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
            <Link to='/totalreviews'>
                <button class="btn btn-outline btn-primary  absolute inset-x-20 left-20  ">See More</button>
            </Link>


        </div>
    );
};

export default Reviews;