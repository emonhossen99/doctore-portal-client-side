import { React, useState } from 'react';


const Review = () => {
    

    return (
        <div className='w-50% text-center'>
            <label htmlFor="my-modal-3" className="btn modal-button w-full m-auto  max-w-xs">open modal</label>
 
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div >
    );
};

export default Review;