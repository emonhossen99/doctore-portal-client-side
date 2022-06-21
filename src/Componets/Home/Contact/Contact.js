import React from 'react';
import Mybutton from '../../Shered/MyButton/Mybutton';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='my-8' style={{
            background : `url(${appointment})`
        }}>
            <div className='text-center py-8' >
            <h1 className='text-primary text-3xl '>CONTACT US</h1>
            <h1 className='text-5xl mb-8 text-bold text-white'>Stay Connected With Us</h1>
            <input type="text" placeholder="Enter Your Email" className="input input-bordered input-xs w-full max-w-xs mb-4 h-10 lg:max-w-lg" />
            <br />

            <input type="text" placeholder="Enter Your Subject" className="input input-bordered input-sm w-full max-w-xs lg:max-w-lg mb-4 h-10" />
            <br />
            <textarea type="text" placeholder="Enter Your Massage" className="input input-bordered  w-full max-w-xs mb-4 h-40 lg:max-w-lg" />
            <br />
            <Mybutton>Contacts</Mybutton>
            </div>
        </div>
    );
};

export default Contact;