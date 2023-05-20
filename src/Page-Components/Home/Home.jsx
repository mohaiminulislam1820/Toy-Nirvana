import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import Request from './Request';

const Home = () => {
    return (
        <main className='mt-10'>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Request></Request>
        </main>
    );
};

export default Home;