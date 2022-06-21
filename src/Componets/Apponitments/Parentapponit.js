import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Booking from './Booking';
import Bookingmodal from './Bookingmodal';

const Parentapponit = ({ date }) => {

    const [services, setServices] = useState([])
    const [treatment,setTreatment] = useState(null)

    useEffect(() => {

        const url = `http://localhost:5000/services`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <p className='text-xl text-secondary text-center my-12'>Available For AppointMents {format(date, 'PP')}</p>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Booking
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Booking>)
                }
            </div>
            {
                treatment && <Bookingmodal
                 treatment={treatment}
                  date={date}
                  setTreatment={setTreatment}
                  ></Bookingmodal>
            }
        </div>
    );
};

export default Parentapponit;