import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Packages></Packages>
            <Services></Services>
        </div>
    );
};

export default Home;