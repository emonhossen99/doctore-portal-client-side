import React from 'react';

const DoctorTable = ({ doctor, index,refetch }) => {
    const { name, email, specialty,img } = doctor

    const handleDoctor = email => {
         fetch(`http://localhost:5000/doctor/${email}`,{
            method : 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert(`Doctor ${name} is Deleted`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                <div class="w-16 rounded-xl">
                    <img src={img}  alt={name}/>
                </div>
                </div>
                </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDoctor(email)} class="btn btn-xs btn-outline btn-error">DELETE</button></td>
        </tr>
    );
};

export default DoctorTable;