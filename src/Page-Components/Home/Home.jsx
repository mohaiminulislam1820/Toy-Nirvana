import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Request from './Request';
import ToySafety from './ToySafety';

const Home = () => {
    return (
        <main className='mt-10'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Request></Request>
            <ToySafety></ToySafety>
        </main>
    );
};

export default Home;