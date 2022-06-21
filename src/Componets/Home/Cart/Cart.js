import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCart from './InfoCart/InfoCart'


const Cart = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
         <InfoCart bgColor ="bg-gradient-to-r from-secondary to-primary " cardInfo='Opening Hours' img={clock}></InfoCart>
         <InfoCart bgColor ="bg-accent" cardInfo='Our Location' img={marker}></InfoCart>
         <InfoCart bgColor ="bg-gradient-to-r from-secondary to-primary " cardInfo='Contact Us' img={phone}></InfoCart>
        </div>
    );
};
<h1>cart</h1>
export default Cart;