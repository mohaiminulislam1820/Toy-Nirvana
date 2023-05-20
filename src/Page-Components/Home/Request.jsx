import React from 'react';

const Request = () => {
    return (
        <section className='w-10/12 mx-auto mt-28'>
            <h1 className='text-center font-bold text-5xl mb-8'>Tell Us Your Toy Wishes</h1>
            
            <p className='text-gray-500 text-center sm:px-10 mb-16'>We value our customers' feedback and want to make sure we're offering the toys you want to see on our site. That's why we've created the Toy Request Form. Simply fill out the form with details about the toy you wish we carried. Our team will review your request and do our best to add it to our collection. Help us make our toy marketplace even better by sharing your toy wishes with us!</p>

            <div className='border p-8 rounded-lg bg-gray-50 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-10/12 mx-auto'>

                <div className='flex flex-col gap-3 '>
                    <label className='font-medium text-gray-600' htmlFor="name">Your Name</label>

                    <input type="text" className='rounded-lg border py-2 px-4 ' placeholder='name' />

                </div>

                <div className='flex flex-col gap-3 '>
                    <label className='font-medium text-gray-600' htmlFor="email">Your Email</label>

                    <input type="email" className='rounded-lg border py-2 px-4' placeholder='email' />

                </div>

                <div className='flex flex-col gap-3 '>
                    <label className='font-medium text-gray-600' htmlFor="toy-name">Toy Name</label>

                    <input type="email" className='rounded-lg border py-2 px-4' placeholder='Toy name' />

                </div>

                <div className='flex flex-col gap-3 '>
                    <label className='font-medium text-gray-600' htmlFor="toy-category">Toy Category</label>

                    <input type="email" className='rounded-lg border py-2 px-4' placeholder='what category will this toy fit into' />

                </div>

                <div className='flex flex-col gap-3 col-span-1 sm:col-span-2'>
                    <label className='font-medium text-gray-600' htmlFor="name">Toy description</label>

                    <input type="email" className='rounded-lg border py-2 px-4 ' placeholder='describe the toy you want' />

                </div>

                <div>
                    <button className='px-10 py-2 mt-2 font-bold text-white bg-[#219EBC] rounded-lg' type='submit'>Submit</button>
                </div>

            </div>

        </section>
    );
};

export default Request;