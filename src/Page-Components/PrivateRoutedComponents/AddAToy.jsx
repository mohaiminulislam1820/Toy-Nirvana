import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Auth Components/AuthProvider'
import {toast} from 'react-toastify'
import Loading from '../Loading';

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const [processing,setProcessing]=useState(false);

    const modalRef=useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let form = e.target;
        setProcessing(true);
        modalRef.current.checked=true;

        const data = {
            picture: form.pictureURL.value,
            name: form.name.value,
            seller: form.seller_name.value,
            seller_email: form.email.value,
            sub_category: form.sub_category.value,
            price: form.price.value,
            rating: form.rating.value,
            quantity: form.quantity.value,
            detail_description: form.detail_description.value
        }

        const res = await fetch('https://toy-nivana.vercel.app/addToy', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result=await res.json();
        
        if(result.insertedId)
            toast('✅ Your toy has been added successfully');

        setProcessing(false);
        form.reset();
    }

    return (
        <div className='mx-auto w-10/12 mt-20 mb-24'>
            <h1 className='text-center font-bold text-5xl'>Add Your Toy</h1>

            <form className='grid  grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-12 py-10 shadow-md px-6 lg:px-16 rounded-lg border bg-slate-50' onSubmit={handleSubmit}>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="pictureURL" className='font-medium'>Picture URL</label>
                    <input type="url" name='pictureURL'  placeholder='image url ex: https://example.com/img.jpg'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-medium'>Toy Name</label>
                    <input type="text" name='name'  placeholder='Toy name'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_name" className='font-medium'>Seller Name</label>
                    <input type="text" name='seller_name' required placeholder='your name' disabled={user.displayName ? true : false} defaultValue={user.displayName} className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='font-medium'>Seller Email</label>
                    <input type="email" name='email' className='px-4 py-2 border rounded-lg' required disabled defaultValue={user.email} />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="sub_category" className='font-medium'>Sub Category</label>
                    <div className='py-2 flex flex-wrap gap-y-1 gap-x-4'>
                        <div>
                            <input type="radio" name="sub_category" required value="Mythical Animals" className='mr-1' />
                            <label htmlFor="Mythical Animals">Mythical Animals</label>
                        </div>

                        <div>
                            <input type="radio" name="sub_category" value="Sea Animals" className='mr-1' />
                            <label htmlFor="Sea Animals">Sea Animals</label>
                        </div>

                        <div>
                            <input type="radio" name="sub_category" value="Dinosaurs" className='mr-1' />
                            <label htmlFor="Dinosaurs">Dinosaurs</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="price" className='font-medium'>Price</label>
                    <input type="number" name='price' min="0"  placeholder='price $'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="rating" className='font-medium'>Rating</label>
                    <input type="number" name='rating' placeholder='rating of your toy'  step="0.01" required min="0" max="5" className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="quantity" className='font-medium'>Available quantity</label>
                    <input type="number" name='quantity' min="0" placeholder='quantity of the toy available now'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div className='flex flex-col gap-2 sm:col-span-2'>
                    <label htmlFor="detail_description" className='font-medium'>Detail Description</label>
                    <input type="text" name='detail_description' placeholder='description of your toy'  required className='px-4 py-2 border rounded-lg' />
                </div>

                <div>
                    <button className='px-10 py-2 mt-2 font-bold text-white bg-[#219EBC] rounded-lg' type='submit' >Submit</button>
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

export default AddAToy;