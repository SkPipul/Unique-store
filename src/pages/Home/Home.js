import React from 'react';
import Category from '../Category/Category';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Features></Features>
        </div>
    );
};

export default Home;