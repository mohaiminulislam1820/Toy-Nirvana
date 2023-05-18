import React from 'react';

const Gallery = () => {
    return (
        <section className='w-10/12 mx-auto my-28'>
            <h1 className='text-5xl font-bold text-center mb-6'>Toy Gallery</h1>

            <p className='text-center sm:px-6 text-gray-400 mb-16'>Welcome to our animal figure toy collection! Our gallery features a wide variety of high-quality animal figures that are perfect for imaginative play and learning. From farm animals to wild creatures, our collection has something for every animal lover. Each figure is carefully crafted with attention to detail and made from durable materials to withstand hours of play. Browse our gallery to find your child’s new favorite animal friend!</p>

            <div className="carousel w-full h-[400px] md:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3662643/pexels-photo-3662643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full sm:w-10/12 mx-auto object-cover object-center rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full sm:w-10/12 mx-auto object-cover object-center rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3662841/pexels-photo-3662841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full sm:w-10/12 mx-auto object-cover object-center rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://images.pexels.com/photos/3661247/pexels-photo-3661247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full sm:w-10/12 mx-auto object-cover object-center rounded-lg" />
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