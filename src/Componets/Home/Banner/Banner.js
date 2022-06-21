import React from 'react';
import chair from '../../../assets/images/chair.png'
import Mybutton from '../../Shered/MyButton/Mybutton';

const Banner = () => {
    return (
        <div className="hero min-h-screen neutral-content bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse object-cover">
                <img src={chair} className="h-48 w-[400px] object-cover md:h-full md:w-48 lg:h-full lg:w-[400px] shadow-2xl " alt=''/>
                <div className='mb-5'>
                    <h1 className="text-5xl font-bold">Your New Smail Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Mybutton>Get Started</Mybutton>

                </div>
            </div>
        </div>
    );
};

export default Banner;