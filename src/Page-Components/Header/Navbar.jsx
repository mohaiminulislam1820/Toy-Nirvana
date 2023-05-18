import React from 'react';
import ActiveLink from './ActiveLink';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    return (
        <nav className='w-10/12 mx-auto flex gap-x-36 gap-y-6 items-center justify-between flex-wrap mt-8 mb-12'>
            <div className='flex items-center flex-wrap ' onClick={()=>navigate('/')}>
                <img loading='lazy' src="https://i.ibb.co/z2hZBst/0b69b1c6-7e63-4487-b9b4-f5025c39b3e4.jpg" alt="brand logo" className='w-24 rounded-full ' />
                <h1 className='text-5xl font-bold text-[#023047]'>Toy<span className='text-[#219EBC]'>Nirvana</span></h1>
            </div>

            <div className='flex flex-wrap gap-x-6'>
                <ActiveLink to={'/'}>Home</ActiveLink>

                <ActiveLink to={'/all-toys'}>All Toys</ActiveLink>

                <ActiveLink to={'/blog'}>Blog</ActiveLink>
            </div>

            <div>
                <button onClick={()=>navigate('/login')} className='px-8 py-3 font-bold bg-[#219EBC] text-white rounded-lg'  type='button'>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;