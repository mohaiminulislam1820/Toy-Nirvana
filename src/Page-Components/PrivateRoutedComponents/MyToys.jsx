import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth Components/AuthProvider';
import MyToyRowDetails from './MyToyRowDetails';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);
    const [deletedId,setDeletedId]=useState(null);

    const loadData = async () => {
        const res = await fetch(`https://toy-nivana.vercel.app/toys/${user.email}`);
        const data = await res.json();

        setMyToys(data);
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        const remainingToys=myToys.filter(myToy=>myToy._id!==deletedId);
        setMyToys(remainingToys);
    }, [deletedId])

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
                        {myToys.map(myToy => <MyToyRowDetails key={myToy._id} myToyData={myToy} setDeletedId={setDeletedId} />)}
                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default MyToys;