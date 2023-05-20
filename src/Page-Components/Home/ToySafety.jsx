import React from 'react';

const ToySafety = () => {
    return (
        <section className='w-10/12 mx-auto mt-28'>

            <h1 className='text-center text-5xl font-bold mb-8'>Toy Safety</h1>

            <p className='text-gray-500 text-center sm:px-10 mb-16'>This section provides information about toy safety standards and guidelines to help parents and adults ensure that children can play safely with their toys.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6'>

                <img src="https://i.ibb.co/LCgYJHJ/0c355d4a-007c-482c-903b-cf533c773914-1.jpg" alt="animal toys in a yellow colored room" className='rounded-lg' />

                <div className='flex flex-col justify-center sm:px-10'>
                    <h3 className='font-medium text-3xl mb-4'>Keeping Toys Safe at Home</h3>

                    <p className='text-gray-500 mb-2'>• Check toys regularly to make sure that they aren't broken or unusable</p>

                    <p  className='text-gray-500 mb-2'>• Throw away broken toys or repair them right away.</p>

                    <p  className='text-gray-500 mb-2'>• Make sure kids know how to use toys. The best way to do this is by supervising kids as they play. This teaches kids how to play safely while having fun.</p>

                    <p  className='text-gray-500 mb-2'>• Read the instructions and warnings on the packaging. This will help you to ensure that the toy is safe for your child to use.</p>

                </div>
            </div>

        </section>
    );
};

export default ToySafety;