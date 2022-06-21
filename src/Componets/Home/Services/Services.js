import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service/Service';

const Services = () => {
    const services = [
        { id: 1, name: 'Flouride Services', img: flouride },
        { id: 2, name: 'cavity Services', img: cavity },
        { id: 3, name: 'whitening Services', img: whitening },
    ]
    return (
        <div>
            <h1 className='text-primary text-3xl mt-8 text-center'>OUR SERVICES</h1>
            <h1 className='text-5xl mb-8 text-center text-bold'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service.id} service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;