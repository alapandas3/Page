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
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-gray-200 text-gray-600 rounded-full p-2 mb-4" onClick={handlePrev}>
        &lt;
      </button>
      <div className="flex overflow-x-auto space-x-4">
        {cards.slice(startIndex, startIndex + getVisibleCardCount()).map((card) => (
          <div key={card.id} className="text-red-600 p-4 shadow-lg">
            <p className='text-white'>{card.data}</p>
          </div>
        ))}
      </div>
      <button className="bg-gray-200 text-gray-600 rounded-full p-2 mb-4" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
