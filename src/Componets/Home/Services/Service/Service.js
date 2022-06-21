import React from 'react';

const Service = ({ service }) => {
    const { img, name } = service;
    return (
        <div className="px-4 py-4 card lg : max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ullam necessitatibus neque,</p>
            </div>
        </div>
    );
};

export default Service;