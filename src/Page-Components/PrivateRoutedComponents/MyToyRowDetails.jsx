import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyToyRowDetails = ({myToyData,refId}) => {

    const navigate = useNavigate();
    const { seller, name, price, quantity, sub_category, _id,detail_description,rating,seller_email,picture } = myToyData;

    return (
        <tr className='font-medium border'>
            <td className='pl-3'><img src={picture} alt={name} className='w-20' /></td>
            <td className='pl-3'>{name}</td>
            <td className='pl-3'>{seller}</td>
            <td className='pl-3'>{seller_email}</td>
            <td className='pl-3'>{sub_category}</td>
            <td className='pl-3'>${price}</td>
            <td className='pl-3'>{rating}</td>
            <td className='pl-3'>{quantity}</td>
            <td className='pl-3'>{detail_description.slice(0,80)+'...'}</td>
            <td className='pb-2 pl-3'><button className='px-6 py-2 mt-4 font-bold text-white bg-[#FB8500] rounded-lg' onClick={() => navigate(`/update-toy/${_id}`)}>Update</button></td>
            <td className='pb-2 px-3'><label htmlFor="my-modal-4" onClick={()=>refId.current=_id} className="px-6 py-2 mt-4 block font-bold text-white bg-red-500 rounded-lg">Delete</label></td>

        </tr>
    );
};

export default MyToyRowDetails;