import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Auth Components/AuthProvider';

const ToyCategoryCard = ({ toy }) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { picture, name, price, rating, _id } = toy;

    return (
        <div className='border shadow-lg p-4 rounded-lg' data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000">
            <img src={picture} alt="toy photo" className='h-[250px] w-full object-cover object-center mb-8 border rounded-lg' />

            <p className='mb-2'>Name : {name}</p>

            <p className='mb-2'>Price : ${price}</p>

            <p className='mb-2'>Rating : {rating}⭐</p>

            <button className='px-6 py-2 mt-4 font-bold text-white bg-[#219EBC] rounded-lg' onClick={() => {
                !user && toast('⚠️ You have to log in first to view details');
                navigate(`/toy/${_id}`)
            }
            }>View Details</button>
        </div>
    );
};

export default ToyCategoryCard;