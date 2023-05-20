import React, { useEffect, useRef, useState } from 'react';
import ToyRowData from './ToyRowData';
import { toast } from 'react-toastify';
import Loading from '../Loading';

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    const ref = useRef();

    const loadData = async () => {
        const res = await fetch(`https://toy-nivana.vercel.app/toys`);
        const data = await res.json();

        setToys(data);
        setLoadingState(false);
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleSearch = async () => {
        const searchTerm = ref.current.value;

        if (searchTerm == '') {
            toast('⛔ ' + 'Enter a text to search!');
            return;
        }
        setLoadingState(true);
        const res = await fetch(`https://toy-nivana.vercel.app/search-toys?searchText=${searchTerm}`);
        const result = await res.json();

        setToys(result);
        setLoadingState(false);

        if (result.length == 0)
            toast('⚠️ No match found.');

    }


    return (
        <div className='w-10/12 mx-auto my-24'>

            <h1 className='text-5xl font-bold text-center mb-8'>List of all Toys</h1>

            <div className='mb-14 text-center'>
                <input type="text" className='border-2 px-4 py-2 rounded-md mr-4' ref={ref} placeholder='search by name' />

                <button className='px-6 py-2 mt-4 font-bold text-white bg-[#219EBC] rounded-lg' onClick={handleSearch}>Search</button>
            </div>

            <div className='overflow-x-auto rounded-lg'>
                {loadingState
                    ? <Loading></Loading>
                    : <table className=' border-2  w-full '>

                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='py-4 px-3 text-left'>Picture</th>
                                <th className='py-4 px-3 text-left'>Seller</th>
                                <th className='py-4 px-3 text-left'>Toy Name</th>
                                <th className='py-4 px-3 text-left'>Sub-category</th>
                                <th className='py-4 px-3 text-left'>Price</th>
                                <th className='py-4 px-3 text-left'>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {toys.map(toy => <ToyRowData key={toy._id} data={toy} />)}
                        </tbody>

                    </table>}
            </div>


        </div>
    );
};

export default AllToys;