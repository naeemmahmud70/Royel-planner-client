import React, { useEffect, useState } from 'react';
import ReviewCard from '../Home/ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className="fw-bold mt-5">Customer <span style={{color:'#FE3E01'}}>Reviews</span></h2>
        <div className="flex-style">
            {
                reviews.map(review=> <ReviewCard review={review}></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default Reviews;