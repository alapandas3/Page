import React, { useState } from 'react';
import icon from './arrow.svg';

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const cards = [
    { id: 1, data: '1' },
    { id: 2, data: '2' },
    { id: 3, data: '3' },
    { id: 4, data: '4' },
    { id: 5, data: '5' },
    { id: 6, data: '6' },
    { id: 7, data: '7' },
  ];

  const handlePrev = () => {
    setStartIndex((startIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setStartIndex((startIndex + 1) % cards.length);
  };

  const getVisibleCardCount = () => {
    if (window.innerWidth >= 1024) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 4;
    } else {
      return 3;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="mt-4 text-md text-black bg-fuchsia-600 rounded-full p-3 mb-4" onClick={handlePrev}>
        <img src={icon} alt="" className="w-8 rotate-180" />
      </button>
      <div className="flex overflow-x-auto space-x-4 m-8  ">
        {[...cards, ...cards, ...cards].slice(startIndex, startIndex + getVisibleCardCount()).map((card, index) => (
          <div
            key={card.id}
            className="text-red-600 text-md p-6 bg-fuchsia-900 backdrop:blur-lg rounded-full shadow-lg"
          >
            <p className="text-white">{card.data}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-md text-black bg-purple-600 rounded-full p-3 mb-4" onClick={handleNext}>
        <img src={icon} alt="" className="w-8" />
      </button>
    </div>
  );
};

export default Carousel;
