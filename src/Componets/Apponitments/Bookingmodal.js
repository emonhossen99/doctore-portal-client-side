import { format } from 'date-fns';
import React from 'react';

const Bookingmodal = ({ date, treatment ,setTreatment}) => {
    const { _id,name, slots } = treatment;

    const handlesubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const names = event.target.names.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        console.log(_id,name,slot,names,email,phone);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-primary">Booking For {name}!</h3>


                    <form onSubmit={handlesubmit} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-secondary w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='names' type="text" placeholder="Enter Name" class="input input-bordered w-full max-w-xs" required/>
                        <input name='email' type="email" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" required/>
                        <input name='phone' type="text" placeholder="Enter Phone" class="input input-bordered w-full max-w-xs" required/>

                        <input type="submit" value='APPOINTMENT' class="input input-bordered w-full max-w-xs bg-gradient-to-r from-secondary to-primary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;