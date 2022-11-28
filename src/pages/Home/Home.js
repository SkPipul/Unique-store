import React from 'react';
import Category from '../Category/Category';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Features></Features>
        </div>
    );
};

export default Home;