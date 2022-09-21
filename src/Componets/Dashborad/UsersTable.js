import React from 'react';

const UsersTable = ({ patient,refetch }) => {
    const { email, _id,role } = patient

    const makeAdmit = () => {
        fetch(`https://morning-wave-20718.herokuapp.com/user/admit/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                alert('Failed To Make An Admit!!')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                alert('Failed To Make An Admit!!')
            }
        })

    }
    return (
        <tr>
            <th>{1}</th>
            <td>{_id}</td>
            <td>{email}</td>
            <td>{role !== 'admit' && <button onClick={makeAdmit } className="btn btn-xs">Make Admit</button>}</td>
            <td><button className="btn btn-xs">Remove Admit</button></td>
        </tr>
    );
};

export default UsersTable;