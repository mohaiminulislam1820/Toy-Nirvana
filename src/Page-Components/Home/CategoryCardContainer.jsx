import React, { useEffect, useState } from 'react';
import ToyCategoryCard from './ToyCategoryCard';
import Loading from '../Loading';

const CategoryCardContainer = ({ selected }) => {
    const [toys, setToys] = useState([]);

    const [loadingState, setLoadingState] = useState(true);

    const loadData = async () => {
        setLoadingState(true);
        const res = await fetch(`https://toy-nivana.vercel.app/category/${selected}`);
        const data = await res.json();

        setToys(data);
        setLoadingState(false);

    }

    useEffect(() => {
        loadData();
    }, [selected])

    if (loadingState)
        return <Loading></Loading>

    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

            {toys.map(toy => <ToyCategoryCard key={toy._id} toy={toy} />)}
        </div>
    );
};

export default CategoryCardContainer;