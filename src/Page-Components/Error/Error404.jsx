import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <img src="https://i.ibb.co/FD9KFnQ/224735-P2-H3-ZG-700.jpg" alt="404 page not found image with a flustered woman holding a ice cream cone with some dropped" className='w-11/12 sm:w-8/12 mx-auto my-8 h-[500px] object-cover object-right-top rounded-lg' />

            <div className='flex justify-center'>
                <Link to='/' className='px-12 py-3 font-bold text-white bg-[#FB8500] rounded-lg '>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error404;