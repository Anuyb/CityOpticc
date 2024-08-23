'use client'
import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'http://cityoptic.mn/storage/uploads/banners/xScpAdEN5DjPMJuHXstENB5ARGHmrny35OUVP2xm.jpeg',
    },
    {
      url: 'http://cityoptic.mn/storage/uploads/banners/G6RsWqMRi3kVbogjDyh8QzjpkJQfR1vXP5RnEmei.jpeg',
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[400px] w-full m-auto py-0 px-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-0 bg-center bg-cover duration-500'
      ></div>
      
      <div className='flex top-0 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-400 border-black'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
