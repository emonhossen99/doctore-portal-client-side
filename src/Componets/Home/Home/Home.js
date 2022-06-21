import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';
import Dental from '../Dental/Dental';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
          <Banner></Banner>
          <Cart></Cart>
          <Services></Services>
          <Dental></Dental>
          <Appointment></Appointment>
          <Testimonial></Testimonial>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;<h1>This is A Home</h1>