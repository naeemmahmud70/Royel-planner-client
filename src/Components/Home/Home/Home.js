import React from 'react';
import Service from '../../Services/Service/Service';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import LatestEvents from '../LatestEvents/LatestEvents';
import Reviews from '../Reviews/Reviews';
import Header from './Header/Header';

const Home = () => {
    return (
       <section>
           <Header></Header>
           <Service></Service>
           <LatestEvents></LatestEvents>
           <Reviews></Reviews>
           <ContactForm></ContactForm>
           <Footer></Footer>
           
       </section>
    );
};

export default Home;