import React, { useState } from 'react';

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, color: 'bg-red-500', text: 'Item 1' },
    { id: 2, color: 'bg-blue-500', text: 'Item 2' },
    { id: 3, color: 'bg-green-500', text: 'Item 3' },
  ];

  const totalItems = items.length;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative w-64 h-64 overflow-hidden">
      <div
        className="absolute transition-transform duration-300"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className={`carousel-item h-64 ${item.color} flex justify-center items-center`}>
            <span className="text-white text-2xl">{item.text}</span>
          </div>
        ))}
      </div>
      
      <button onClick={prev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2">
        ▲
      </button>
      <button onClick={next} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2">
        ▼
      </button>
    </div>
  );
};

export default VerticalCarousel;