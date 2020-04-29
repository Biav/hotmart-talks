import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Location from '../Information/Location/Location';
import Realization from '../Information/Realization/Realization';
import Stamp from '../Information/Stamp/Stamp';
import Subscription from '../Subscription/Subscription';
import Testimonials from '../Testimonials/Testimonials';

const home = () => (
    <>
        <Banner/>
        <Testimonials/>
        <Location/>
        <Stamp/>
        <Realization/>
        <Subscription/>
        <Footer/>
    </>
);

export default home;