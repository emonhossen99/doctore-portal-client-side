import { React, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointments, setAppointment] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div>
            <h1>THIS IS AN MY APPOINTMENT : {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment,index) =><tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;