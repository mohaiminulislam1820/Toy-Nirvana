import React, { useState } from 'react';

import CategoryCardContainer from './CategoryCardContainer';

const ShopByCategory = () => {

    const subCategories = ['Mythical Animals', 'Sea Animals', 'Dinosaurs']

    const [selected, setSelected] = useState(subCategories[0]);


    return (
        <div className='my-24 w-10/12 mx-auto '>

            <h1 className='text-5xl font-bold text-center'>Shop By Category</h1>

            <div className='flex flex-wrap mt-12 mb-8 border-2 divide-x-2'>
                <button className={selected == subCategories[0] ? 'tab-default border-b-8 border-b-[#FFB703]' : 'tab-default'} onClick={() => setSelected(subCategories[0])}>{subCategories[0]}</button>

                <button className={selected == subCategories[1] ? 'tab-default border-b-8 border-b-[#FFB703]' : 'tab-default'} onClick={() => setSelected(subCategories[1])}>{subCategories[1]}</button>

                <button className={selected == subCategories[2] ? 'tab-default border-b-8 border-b-[#FFB703]' : 'tab-default'} onClick={() => setSelected(subCategories[2])}>{subCategories[2]}</button>

            </div>

            <CategoryCardContainer selected={selected}></CategoryCardContainer>

        </div>
    );
};

export default ShopByCategory;