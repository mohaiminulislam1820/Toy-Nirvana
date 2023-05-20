import React from 'react';

const Banner = () => {
    return (
        <section className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[calc(100vh-200px)]'>
            <div className='flex flex-col justify-center' >
                <h1 className='font-bold text-5xl mb-6 '>Discover <br /> Endless Fun at <br />  <span className='text-[#219EBC]'>Toy</span>Nirvana
                </h1>

                <p className='text-gray-500 pr-4'>Welcome to ToyNirvana, your one-stop-shop for endless fun and play! Our wide selection of toys caters to kids of all ages and interests. We have something for everyone. Our toys are carefully selected for their quality, safety, and ability to inspire creativity and imagination. Come explore our world of play and discover endless fun at ToyNirvana!</p>

                <div>
                <button className='px-6 py-2 mt-4 font-bold text-white bg-[#219EBC] rounded-lg '>Shop Now</button>
                </div>

                
            </div>

            <img src="https://i.ibb.co/Hpnq3yd/b472b480-ebb3-4b10-a089-b28ac5dc1c2b.jpg" alt="colorful cartoon picture of children enjoying with toys" className='h-[calc(100%-60px)] w-full object-cover rounded-lg' />

        </section>
    );
};

export default Banner;