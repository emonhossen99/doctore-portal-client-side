import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';

const Bookingmodal = ({ date, treatment, setTreatment,refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const { _id, name, slots } = treatment;

    const handlesubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                alert(`Already Have An Appointment is, ${data.booking?.date} at ${data.booking?.slot}`)
                    
                }
                refetch()
                setTreatment(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-primary">Booking For {name}!</h3>


                    <form onSubmit={handlesubmit} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-secondary w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>
                                    {slot}</option>)
                            }
                        </select>
                        <input name='names' type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" required />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" required />
                        <input name='phone' type="text" placeholder="Enter Phone" className="input input-bordered w-full max-w-xs" required />

                        <input type="submit" value='APPOINTMENT' className="input input-bordered w-full max-w-xs bg-gradient-to-r from-secondary to-primary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;