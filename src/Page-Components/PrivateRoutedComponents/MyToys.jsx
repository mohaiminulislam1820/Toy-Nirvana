import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Auth Components/AuthProvider';
import MyToyRowDetails from './MyToyRowDetails';
import {toast} from 'react-toastify'

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);
    const refId = useRef(null);

    const loadData = async () => {
        const res = await fetch(`https://toy-nivana.vercel.app/toys/${user.email}`);
        const data = await res.json();

        setMyToys(data);
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleDelete = async (id) => {
        const res = await fetch(`https://toy-nivana.vercel.app/toy/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();

        if (result.deletedCount == 1) {
            toast("✅  Successfully deleted the toy.");
            const remainingToys = myToys.filter(myToy => myToy._id !== id);
            setMyToys(remainingToys);
        };
    }

    return (
        <div className='w-10/12 mx-auto mt-20 mb-24'>
            <h1 className='text-center font-bold text-5xl mb-10'>Your Toys</h1>

            <div className='overflow-x-scroll'>
                <table className=' border-2 w-full'>
                    <thead>
                        <tr >
                            <th className='py-4 px-3 text-left'>Photo Url</th>
                            <th className='py-4 px-3 text-left'>Toy Name</th>
                            <th className='py-4 px-3 text-left'>Seller</th>
                            <th className='py-4 px-3 text-left'>Seller Email</th>
                            <th className='py-4 px-3 text-left'>Sub-category</th>
                            <th className='py-4 px-3 text-left'>Price</th>
                            <th className='py-4 px-3 text-left'>Rating</th>
                            <th className='py-4 px-3 text-left'>Quantity</th>
                            <th className='py-4 px-3 text-left'>Detail Description</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {myToys.map(myToy => <MyToyRowDetails key={myToy._id} myToyData={myToy} refId={refId} />)}
                    </tbody>

                </table>

            </div>

            {/* modal */}

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">Are you sure you want to delete this toy?</h3>
                    <label htmlFor='my-modal-4' className='px-6 py-2 bg-blue-500 text-white font-bold mr-4 rounded-lg' onClick={() => handleDelete(refId.current)}>Yes</label>
                    <label htmlFor='my-modal-4' className='px-6 py-2 bg-yellow-500 font-bold rounded-lg'>No</label>
                </label>
            </label>

        </div>
    );
};

export default MyToys;