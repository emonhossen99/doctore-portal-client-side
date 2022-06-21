import React from 'react';

const infocart = ({ img,cardInfo,bgColor }) => {
    return (
        <div className={`card card-side px-4 py-4 shadow-xl ${bgColor}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white ">
                <h2 className="card-title">{cardInfo}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default infocart;