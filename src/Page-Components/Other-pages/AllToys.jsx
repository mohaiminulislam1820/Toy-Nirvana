import React, { useEffect, useRef, useState } from 'react';
import ToyRowData from './ToyRowData';
import { toast } from 'react-toastify';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    const ref = useRef();

    const loadData = async () => {
        const res = await fetch(`https://toy-nivana.vercel.app/toys`);
        const data = await res.json();

        setToys(data);
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleSearch = async () => {
        const searchTerm = ref.current.value.toLowerCase();

        if (searchTerm == '') {
            toast('⛔ ' + 'Enter a text to search!');
            return;
        }

        const res = await fetch(`https://toy-nivana.vercel.app/toys`);

        const allToys = await res.json();

        const data = allToys.filter(toy => toy.name.toLowerCase().includes(searchTerm));

        setToys(data);

        if (data.length == 0)
            toast('⚠️ No match found.');

    }

    return (
        <div className='w-10/12 mx-auto my-24'>

            <h1 className='text-5xl font-bold text-center mb-8'>List of all Toys</h1>

            <div className='mb-14 text-center'>
                <input type="text" className='border-2 px-4 py-2 rounded-md mr-4' ref={ref} placeholder='search by name' />

                <button className='px-6 py-2 mt-4 font-bold text-white bg-[#219EBC] rounded-lg' onClick={handleSearch}>Search</button>
            </div>

            <div className='overflow-x-scroll'>
                <table className=' border-2 w-full'>

                    <thead>
                        <tr >
                            <th className='p-3'>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {toys.map(toy => <ToyRowData key={toy._id} data={toy} />)}
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllToys;