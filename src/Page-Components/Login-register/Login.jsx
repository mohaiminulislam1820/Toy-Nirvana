import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth Components/AuthProvider';

const Login = () => {

    const { signInWithEmail, signInWithGoogle, currentLocation, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const from = currentLocation?.state?.from || '/';

    const [errorMsg, setErrorMsg] = useState('');

    const errorMsgHandler = (msg) => {
        setErrorMsg('⛔ ' + msg);
        setTimeout(() => setErrorMsg(''), 4000);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email == '' || password == '') {
            errorMsgHandler('Cannot submit empty email and password fields');
            return;
        }

        try {

            const loggedUser = await signInWithEmail(email, password);

            loggedUser.user ? navigate(from, { replace: true }) : '';
        }
        catch (error) {
            errorMsgHandler(error.code);
        }
        finally {
            setLoading(false);
        }

    }

    const handleGoogleSignIn = async () => {
        try {
            const loggedUser = await signInWithGoogle();

            loggedUser.user ? navigate(from, { replace: true }) : '';
        }

        catch (error) {
            errorMsgHandler(error.code);
        }

    }


    return (
        <div className='mt-16 w-10/12 sm:w-8/12 lg:w-6/12 mx-auto border rounded-lg py-10 shadow-lg bg-slate-100'>
            <h1 className='text-center font-bold text-4xl mb-2'>Welcome Back!</h1>
            <p className='text-gray-600 text-center'>Login to coninue</p>

            <form className='w-10/12 mx-auto mt-8' onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="email">
                        Enter Your Email
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name="email" type="email" placeholder="Email" />
                </div>

                <div className="mb-6">
                    <label className="block  font-bold mb-4" htmlFor="email">
                        Enter Your Password
                    </label>
                    <input className="shadow  border rounded w-full py-3 px-3 " name="password" type="password" placeholder="password ******" />
                </div>

                <button type='submit' className='px-10 py-3 font-bold text-white bg-[#219EBC] rounded-lg'>Sign In</button>
                <p className='text-red-400 my-2 ml-4 inline'>{errorMsg}</p>
            </form>

            <p className='text-center mt-4 text-gray-500'>No Account? <span onClick={() => navigate('/register')} className='text-[#219EBC] font-bold cursor-pointer'>Sign Up</span> here</p>

            <p className='text-center'>Or</p>

            <div className=' mt-6 flex justify-center items-center'>

                <button className='font-bold px-10 py-3 bg-[#fff] border-2  rounded-lg shadow-md' onClick={handleGoogleSignIn}>Login with <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo" className='w-8 ml-3 inline' /></button>
            </div>

        </div>
    );
};

export default Login;