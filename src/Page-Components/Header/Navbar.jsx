import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth Components/AuthProvider';
import Loading from '../Loading';

const Navbar = () => {

    const navigate = useNavigate();

    const { user, signOutUser, loading } = useContext(AuthContext);

    return (
        <nav className='w-10/12 mx-auto flex gap-x-24 gap-y-6 items-center justify-between flex-wrap mt-8 mb-12'>
            <div className='flex items-center flex-wrap ' onClick={() => navigate('/')}>
                <img loading='lazy' src="https://i.ibb.co/z2hZBst/0b69b1c6-7e63-4487-b9b4-f5025c39b3e4.jpg" alt="brand logo" className='w-24 rounded-full ' />
                <h1 className='text-5xl font-bold text-[#023047]'>Toy<span className='text-[#219EBC]'>Nirvana</span></h1>
            </div>

            <div className='flex flex-wrap gap-x-6'>
                <ActiveLink to={'/'}>Home</ActiveLink>

                <ActiveLink to={'/all-toys'}>All Toys</ActiveLink>

                {
                    user && <ActiveLink to={'/my-toys'}>My Toys</ActiveLink>
                }

{
                    user && <ActiveLink to={'/add-a-toy'}>Add A Toy</ActiveLink>
                }

                <ActiveLink to={'/blogs'}>Blogs</ActiveLink>
            </div>

            <div>
                {
                    loading ? <Loading></Loading>
                        : user
                            ? <div  className='flex flex-wrap gap-x-6 gap-y-6 items-center'>
                                <div className='relative'>

                                    <img src={user.photoURL || ''} alt="profile photo" className='profile-photo w-16 h-16 border-2 border-blue-300 object-cover inline  rounded-full' />

                                    <span className='hidden-unhovered font-medium absolute'>{user.displayName || 'Name not found'}</span>

                                </div>

                                <button className='font-bold bg-[#023047] text-white px-8 py-3 rounded-lg ' onClick={signOutUser}>Sign Out</button>
                            </div>
                            : <button onClick={() => navigate('/login')} className='px-8 py-3 font-bold bg-[#219EBC] text-white rounded-lg' type='button'>Login</button>
                }
            </div>
        </nav>
    );
};

export default Navbar;