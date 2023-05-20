import React from 'react';

const Gallery = () => {
  return (
    <section className='w-10/12 mx-auto mt-12 mb-28' >
      <h1 className='text-5xl font-bold text-center mb-6'>Toy Gallery</h1>

      <p className='text-center sm:px-6 text-gray-400 mb-16'>Welcome to our animal figure toy collection! Our gallery features a wide variety of high-quality animal figures that are perfect for imaginative play and learning. From farm animals to wild creatures, our collection has something for every animal lover. Each figure is carefully crafted with attention to detail and made from durable materials to withstand hours of play. Browse our gallery to find your child's new favorite animal friend!</p>

      <div className="carousel lg:h-[600px]" >
        <div id="slide1" className="carousel-item relative w-full" >
          <img src="https://i.ibb.co/2kZWcTN/e1b63b39-7f2a-4654-8c2b-58cc72a25ffa-1.jpg" className="h-full sm:w-10/12 mx-auto object-cover  rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/197NpKB/83d39085-26cb-4f7f-8943-cbe3621602b0-1.jpg" className="h-full sm:w-10/12 mx-auto object-cover rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/RzTJfMD/5722bfe0-5a13-4924-92dc-560f7fb2cac6-1.jpg" className="h-full sm:w-10/12 mx-auto object-cover  rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/RzQ7P10/69fde404-7234-4c37-b82b-cd3184df82ba.jpg" className="h-full sm:w-10/12 mx-auto object-cover rounded-lg" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;