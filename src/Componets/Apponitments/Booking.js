import React from 'react';

const Booking = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className='font-bold text-primary text-xl'>{name}</h2>
                <p>{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500 '>Not Spaces Available</span>
                }</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase btn-sm">BOOK APPOINTMENT
                        </label>
                </div>
            </div>
        </div>
    );
};

export default Booking;