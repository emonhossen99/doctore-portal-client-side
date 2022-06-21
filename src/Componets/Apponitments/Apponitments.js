import React from 'react';
import { useState } from 'react';
import Footer from '../Shered/Footer/Footer';
import Addapointment from './Addapointment';
import Parentapponit from './Parentapponit';

const Apponitments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Addapointment date={date} setDate={setDate}></Addapointment>
            <Parentapponit date={date}></Parentapponit>
            <Footer></Footer>
        </div>
    );
};

export default Apponitments;