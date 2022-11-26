import closestIndexTo from 'date-fns/fp/closestIndexTo';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading/Loading';
import DoctorTable from './DoctorTable';

const ManegeDoctor = () => {
    const {data : doctors,isLoading,refetch} = useQuery('doctor', () =>  fetch('http://localhost:5000/doctors',{
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
            <h1 className='text-2xl'>Welcome To Mange Doctor : {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorTable
                            key={doctor._id}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            ></DoctorTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManegeDoctor;