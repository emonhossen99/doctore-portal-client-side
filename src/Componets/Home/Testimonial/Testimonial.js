import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review/Review';

const Testimonial = () => {
    const reviews = [
        {id : 1 , name : 'Emon',img :people1 ,location : 'Rajshahi'},
        {id : 2 , name : 'Siam',img :people2,location : 'Rajshahi'},
        {id : 3 , name : 'Rifat',img :people3,location : 'Rajshahi'}
    ]
    return (
        <div>
            <div className='flex justify-between mt-5'>
                <div>
                    <h1 className='text-primary text-3xl'>TESTIMONIAL</h1>
                    <h1 className='text-5xl text-bold'>What Are Sey Our Patients</h1>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;