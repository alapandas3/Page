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
      <button className=" mt-4 text-lg text-black bg-fuchsia-600 rounded-full p-6 mb-4" onClick={handlePrev}>
        &lt;
      </button>
      <div className="flex overflow-x-auto space-x-6 m-10 p-4 ">
        {cards.slice(startIndex, startIndex + getVisibleCardCount()).map((card) => (
          <div key={card.id} className="text-red-600 text-lg p-8 bg-fuchsia-900 backdrop:blur-lg rounded-2xl shadow-lg">
            <p className='text-white'>{card.data}</p>
          </div>
        ))}
      </div>
      <button className=" mt-4 text-lg text-black bg-purple-600 rounded-full p-6 mb-4" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
