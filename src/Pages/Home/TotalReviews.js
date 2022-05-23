import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review';

const TotalReviews = () => {
    const [reviews, setRevews] = useReview();
    return (
        <div className='my-10'>
            <h2 className='text-primary text-3xl text-center'>Customer Reviews</h2>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }

        </div>
    );
};

export default TotalReviews;