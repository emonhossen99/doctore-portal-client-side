import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Mybutton from '../../Shered/MyButton/Mybutton';
const Appointment = () => {
    return (
        <section className='mt-5' style={{
            background : `url(${appointment})`
        }}>
            <div className='flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-120px]' src={doctor} alt="" />
                </div>
                <div className='flex-1  py-5'>
                    <h1 className="text-2xl text-primary font-bold mb-3"> Appointment</h1>
                    <h1 className="text-5xl font-bold text-white">Make Appointment Today !</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                   <Mybutton>Get Started</Mybutton>
                </div>
            </div>
        </section>
    );
};

export default Appointment;