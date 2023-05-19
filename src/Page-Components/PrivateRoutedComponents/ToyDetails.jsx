import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const ToyDetails = () => {

    const {id}=useParams();

    const [toyData,setToyData]=useState({});

    const loadData=async()=>{
        const res = await fetch(`https://toy-nivana.vercel.app/toy/${id}`);
        const data = await res.json();
        setToyData(data);
        console.log(toyData);
    }

    useEffect(()=>{
        loadData();
    },[])

    return (
        <div className='mt-20 mb-24 w-10/12 mx-auto'>
            <h1 className='font-bold text-5xl text-center mb-16'>Toy Details</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2'>

                <img src={toyData.picture} alt={toyData.name} className='' />

                <div className='flex flex-col gap-y-2 justify-center'>
                    <p className='text-gray-500'> <span className='font-medium text-slate-800'>Name :</span> {toyData.name}</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Seller Name : </span> {toyData.seller}</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Seller Email : </span> {toyData.seller_email}</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Price : </span> ${toyData.price}</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Rating : </span> {toyData.rating}⭐</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Available Quantity : </span> {toyData.quantity}</p>
                    <p className='text-gray-500'><span className='font-medium text-slate-800'>Detail Descirption: </span> {toyData.detail_description}</p>

                </div>

            </div>
            
        </div>
    );
};

export default ToyDetails;