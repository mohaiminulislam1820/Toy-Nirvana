import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToyRowData = ({data}) => {

    const navigate=useNavigate()

    const {seller,name,price,quantity,sub_category,_id}=data;

    return (
        <tr className='font-medium border'>
            <td className='pl-3'>{seller}</td>
            <td >{name}</td>
            <td >{sub_category}</td>
            <td >${price}</td>
            <td >{quantity}</td>
            <td className='pb-2'><button className='px-6 py-2 mt-4 font-bold text-white bg-[#219EBC] rounded-lg' onClick={()=>navigate(`/toy/${_id}`)}>View Details</button></td>
        </tr>
    );
};

export default ToyRowData;