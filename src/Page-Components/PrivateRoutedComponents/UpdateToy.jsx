import React, { useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import Loading from '../Loading';

const UpdateToy = () => {

    const {id}=useParams();

    const [toyData,setToyData]=useState({});
    const [processing,setProcessing]=useState(false);

    const modalRef=useRef();

    const loadData=async()=>{
        const res = await fetch(`https://toy-nivana.vercel.app/toy/${id}`);
        const data = await res.json();
        setToyData(data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const handleUpdate = async(e) => {
        e.preventDefault();
        setProcessing(true)
        const updatedData={
            price:e.target.price.value,
            quantity:e.target.quantity.value,
            detail_description:e.target.detail_description.value
        }
        modalRef.current.checked=true;

        const res= await fetch(`https://toy-nivana.vercel.app/toy/${toyData._id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedData)
        });

        const result=await res.json();
        setProcessing(false);
        if(result.modifiedCount==1)
            toast('✅ Your toy data has been updated successfully.');
        // modalRef.current.checked=false;
     }

    return (
        <div className='mx-auto w-10/12 mt-20 mb-24'>
            <h1 className='text-center font-bold text-5xl'>Update Your Toy</h1>

            <form className='grid  grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-12 py-10 shadow-md px-6 rounded-lg border w-10/12 sm:w-8/12 mx-auto bg-gray-50' onSubmit={handleUpdate}>

                <label htmlFor="name" className='mb-6  sm:col-span-2 text-gray-500'> <span className='font-medium text-slate-800'>Name :</span> {toyData.name} </label>

                <div className='flex flex-col gap-2'>

                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' min="0" placeholder='price $' required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="quantity">Available quantity</label>
                    <input type="number" name='quantity' min="0" placeholder='quantity'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2 sm:col-span-2'>
                    <label htmlFor="detail_description">Detail Description</label>
                    <input type="text" name='detail_description'  placeholder='toy description'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div>
                    <button className='px-10 py-2 mt-2 font-bold text-white bg-[#219EBC] rounded-lg' type='submit' >Update</button>
                </div>
            </form>

            <input type="checkbox" id="my-modal-5" className="modal-toggle" ref={modalRef}/>
            <label htmlFor="my-modal-5" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {processing?<Loading></Loading>: <label htmlFor="my-modal-5" className='font-medium text-lg my-2'>✅ Success</label> }
                    
                </label>
            </label>

        </div>
    );
};

export default UpdateToy;