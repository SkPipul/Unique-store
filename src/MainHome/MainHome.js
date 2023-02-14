import React from 'react';
import { Link } from 'react-router-dom';

const MainHome = () => {
    return (
        <div>
            this is main home
            <Link to={'/login'}>start</Link>
        </div>
    );
};

export default MainHome;