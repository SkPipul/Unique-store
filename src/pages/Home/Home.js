import React from 'react';
import Category from '../Category/Category';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Offer from './Offer/Offer';
import Mobile from './Mobile/Mobile';
import FindYourBest from './FindYourBest/FindYourBest';
import Expectations from './Expectations/Expectations';
import Quality from './Quality/Quality';
import Perfection from './Perfection/Perfection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Category></Category>
            <Mobile></Mobile>
            <Advertise></Advertise>
            <FindYourBest></FindYourBest>
            <Expectations></Expectations>
            <Quality></Quality>
            <Perfection></Perfection>
            <Features></Features>
        </div>
    );
};

export default Home;