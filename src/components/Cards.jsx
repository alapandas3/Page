import React, { useState } from 'react';

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
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < cards.length - 5) {
      setStartIndex(startIndex + 1);
    }
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
      <button className="bg-gray-200 mt-4 text-lg text-gray-600 rounded-full p-4 mb-4" onClick={handlePrev}>
        &lt;
      </button>
      <div className="flex overflow-x-auto space-x-6 m-10 ">
        {cards.slice(startIndex, startIndex + getVisibleCardCount()).map((card) => (
          <div key={card.id} className="text-red-600 text-lg p-6 bg-slate-800 rounded-2xl shadow-lg">
            <p className='text-white'>{card.data}</p>
          </div>
        ))}
      </div>
      <button className="bg-gray-200 mt-4 text-lg text-gray-600 rounded-full p-4 mb-4" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
