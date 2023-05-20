import React from 'react';

const Gallery = () => {
  return (
    <section className='w-10/12 mx-auto mt-12 mb-28' >
      <h1 className='text-5xl font-bold text-center mb-6'>Toy Gallery</h1>

      <p className='text-center sm:px-6 text-gray-600 mb-16'>Welcome to our animal figure toy collection! Our gallery features a wide variety of high-quality animal figures that are perfect for imaginative play and learning. From farm animals to wild creatures, our collection has something for every animal lover. Each figure is carefully crafted with attention to detail and made from durable materials to withstand hours of play. Browse our gallery to find your child's new favorite animal friend!</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 sm:w-10/12 mx-auto'>
        <img src="https://i.ibb.co/2kZWcTN/e1b63b39-7f2a-4654-8c2b-58cc72a25ffa-1.jpg" className=" object-cover border  rounded-lg" alt="toys photo" data-aos="slide-right" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000" />
        <img src="https://i.ibb.co/197NpKB/83d39085-26cb-4f7f-8943-cbe3621602b0-1.jpg" className="object-cover border rounded-lg" alt="toys photo" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000"/>
        <img src="https://i.ibb.co/RzTJfMD/5722bfe0-5a13-4924-92dc-560f7fb2cac6-1.jpg" className="object-cover border rounded-lg" alt="toys photo" data-aos="slide-left" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000"/>
        <img src="https://i.ibb.co/RzQ7P10/69fde404-7234-4c37-b82b-cd3184df82ba.jpg" className=" object-cover border rounded-lg" alt="toys photo" data-aos="slide-right" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000"/>
        <img src="https://i.ibb.co/CtDhdW6/031906bf-bcf9-45e8-b692-4df37f7ab742.jpg" className='object-cover border rounded-lg' alt="toys photo" data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000"/>
        <img src="https://i.ibb.co/TMg2Yxw/a3c34b1d-8311-4226-b1f0-5842f54ae6a3.jpg" className='object-cover border rounded-lg' alt="toys photo" data-aos="slide-left" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-duration="1000"/>

      </div>

    </section>
  );
};

export default Gallery;