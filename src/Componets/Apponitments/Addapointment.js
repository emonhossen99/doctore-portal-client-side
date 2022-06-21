import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Addapointment = ({date,setDate}) => {
    return (
        <div>
        <div className="hero min-h-screen neutral-content bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse object-cover">
                <img src={chair} className="h-48 w-[400px] object-cover md:h-full md:w-48 lg:h-full lg:w-[400px] shadow-2xl " alt='' />
                <div className='mb-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Addapointment;