import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-200 shadow-xl">
            <div className="card-body py-10">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nesciunt quae iste culpa quas rerum?</p>
                <div className='flex'>
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img src={review.img} />
                    </div>
                    <div className='px-8'>
                        <h1>{review.name}</h1>
                        <h1>{review.location}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;