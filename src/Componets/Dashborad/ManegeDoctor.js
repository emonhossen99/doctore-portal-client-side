import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading/Loading';

const ManegeDoctor = () => {
    const {data : doctor,isLoading} = useQuery('doctor', () =>  fetch('http://localhost:5000/doctors',{
        method : 'GET',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Welcome To Mange Doctor : {doctor.length}</h1>
        </div>
    );
};

export default ManegeDoctor;