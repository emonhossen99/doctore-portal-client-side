import React from 'react';

const Mybutton = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">{children}</button>
    );
};

export default Mybutton;