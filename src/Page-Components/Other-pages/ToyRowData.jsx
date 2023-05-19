import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToyRowData = ({ data }) => {

    const navigate = useNavigate()

    const { seller, name, price, quantity, sub_category, _id } = data;

    return (
        <tr className='font-medium border'>
            <td className='pl-3'>{seller}</td>
            <td className='pl-3'>{name}</td>
            <td className='pl-3'>{sub_category}</td>
            <td className='pl-3'>${price}</td>
            <td className='pl-3'>{quantity}</td>
            <td className='pb-2 pl-3'><button className='px-6 py-2 mx-4 mt-4 font-bold text-white bg-[#219EBC] rounded-lg' onClick={() => navigate(`/toy/${_id}`)}>View Details</button></td>
        </tr>
    );
};

export default ToyRowData;