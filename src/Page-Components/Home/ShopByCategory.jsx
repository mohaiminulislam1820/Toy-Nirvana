import React, { useState } from 'react';

import CategoryCardContainer from './CategoryCardContainer';

const ShopByCategory = () => {

    const subCategories = ['Mythical Animals', 'Sea Animals', 'Dinosaurs']

    const [selected, setSelected] = useState(subCategories[0]);


    return (
        <div className='my-24 w-10/12 mx-auto '>

            <h1 className='text-5xl font-bold text-center'>Shop By Category</h1>

            <div className='  mt-12 mb-8 border-2 grid grid-cols-3 divide-x-2 rounded-lg w-10/12 md:w-8/12 mx-auto '>
                <button className={selected == subCategories[0] ? 'tab-default bg-[#8ECAE6]' : 'tab-default text-[#023047]'} onClick={() => setSelected(subCategories[0])}>{subCategories[0]}</button>

                <button className={selected == subCategories[1] ? 'tab-default bg-[#8ECAE6] ' : 'tab-default text-[#023047]'} onClick={() => setSelected(subCategories[1])}>{subCategories[1]}</button>

                <button className={selected == subCategories[2] ? 'tab-default bg-[#8ECAE6] ' : 'tab-default text-[#023047]'} onClick={() => setSelected(subCategories[2])}>{subCategories[2]}</button>

            </div>

            <CategoryCardContainer selected={selected}></CategoryCardContainer>

        </div>
    );
};

export default ShopByCategory;