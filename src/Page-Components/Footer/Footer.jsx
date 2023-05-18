import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-32 bg-[#219EBC] py-10'>
            <div className='w-10/12 mx-auto '>
                <div className='flex items-center  gap-x-4'>
                    <img src="https://i.ibb.co/z2hZBst/0b69b1c6-7e63-4487-b9b4-f5025c39b3e4.jpg" alt="brand logo" className='w-16 rounded-full ' />
                    <h1 className='text-3xl font-bold text-white'>Toy<span className='text-[#FFB703]'>Nirvana</span></h1>
                </div>

                <p className='text-gray-50 mt-2 ml-8 mb-10'>Discover the world of fun with us.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10'>

                    <div className=''>
                        <h3 className='text-white font-semibold mb-4 text-lg'>Social Links</h3>
                        <div className="flex gap-6">
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28" height="28" viewBox="0 0 24 24" ><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28" height="28" viewBox="0 0 24 24" ><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></button>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="28" height="28" viewBox="0 0 24 24" ><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></button>
                        </div>
                    </div>

                    <div className='text-gray-50'>
                        <h3 className='font-semibold text-lg text-white mb-4'>Quick Links</h3>

                        <p>About</p>
                        <p>Contact us</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Community</p>

                    </div>

                    <div className='text-gray-200'>
                        <h4>Dhaka</h4>
                        <p>contact@toynirvana.com</p>
                        <p>+44 000 444 232</p>
                        <p>Road-55, Gulshan,Dhaka</p>
                    </div>

                    <div>
                        <h3 className='text-white text-xl mb-3 font-bold'>Get Your Newsletter About The Latest Offers</h3>
                        <input type="text" className='rounded px-4 py-3 block' placeholder='Your Email' />
                        <button className='px-6 py-2 bg-[#FFB703] rounded-lg mt-2 font-bold text-gray-600 '>Subscribe</button>
                    </div>

                </div>

                <p className='text-white font-medium mt-10'>© 2023 ToyNirvana. All rights reserved.</p>

            </div>

        </footer>
    );
};

export default Footer;