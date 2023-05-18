import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth Components/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase-config/firebase-config';

const Register = () => {

    const navigate = useNavigate();

    const { signUpWithEmail, signOutUser } = useContext(AuthContext);

    const [errorMsg, setErrorMsg] = useState('');

    const errorMsgHandler = (msg) => {
        setErrorMsg('⛔ ' + msg);
        setTimeout(() => setErrorMsg(''), 4000);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        if (email == '' || password == '') {
            errorMsgHandler('Cannot submit empty email and password fields');
            return;
        }

        if (password.length < 6) {
            errorMsgHandler('Password length has to be at least 6 characters');
            return;
        }

        try {
            const newUser = await signUpWithEmail(email,password);

            if (newUser) {
                toast('✅ You have signed up successfully');

                await updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });

                await signOutUser();
                navigate('/login');
            }
        }

        catch (error) {
            errorMsgHandler(error.code);
        }



    }

    return (
        <div className='mt-16 w-10/12 sm:w-8/12 lg:w-6/12 mx-auto border rounded-lg py-10 shadow-lg bg-slate-100'>

            <h1 className='text-center font-bold text-4xl mb-4'>Sign Up 👋</h1>

            <p className='text-gray-400 text-center'>Already a member? <span onClick={() => navigate('/login')} className='text-[#219EBC] font-bold cursor-pointer' >Log In</span></p>

            <form className='w-10/12 mx-auto mt-8' onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="email">
                        Your Email
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name="email" type="email" placeholder="Email" />
                </div>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="email">
                        Your Password
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name="password" type="password" placeholder="password ******" />
                </div>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="name">
                        Your Name
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name='name' type="text" placeholder="Name" />
                </div>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name="photoURL" type="url" placeholder="https://example.com/image.jpg" />
                </div>

                <button type='submit' className='px-10 py-3 font-bold text-white bg-[#219EBC] rounded-lg'>Sign Up </button>

                <p className='text-red-400 my-2 ml-4 inline'>{errorMsg}</p>
            </form>

        </div>
    );
};

export default Register;