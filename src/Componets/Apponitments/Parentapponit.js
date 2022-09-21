import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading/Loading';
import Booking from './Booking';
import Bookingmodal from './Bookingmodal';

const Parentapponit = ({ date }) => {

    const [treatment,setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')

    const {data : services,isLoading,refetch} = useQuery(['available',formattedDate], () => fetch(`https://morning-wave-20718.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }

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
                  refetch={refetch}
                  ></Bookingmodal>
            }
        </div>
    );
};

export default Parentapponit;