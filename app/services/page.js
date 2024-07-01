'use client';
import 'flowbite';
import { useEffect, useState } from 'react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Initialisation des composants JavaScript de Flowbite
        import('flowbite');
    }, []);

    const handleSelect = (index) => {
      setActiveIndex(index);  // Mettre à jour l'index actif
  };

    return (
      <div id="default-carousel" className="relative" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-full">
          {/* Slides */}
          {['logo.png', 'totoro.png', 'zelda.png'].map((img, index) => (
              <div key={img} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'}`}>
                  <img src={`/images/${img}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-none" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt={`Slide ${index + 1}`} />
              </div>
          ))}
      </div>
      {/* Carousel indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 bottom-5">
          {['logo.png', 'totoro.png', 'zelda.png'].map((_, index) => (
              <button key={index} type="button" className={`w-3 h-3 rounded-full bg-black ${index === activeIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`} onClick={() => handleSelect(index)} aria-label={`Slide ${index + 1}`}>
              </button>
          ))}
      </div>
      {/* Navigation arrows */}
      {/* Previous button */}
      <button type="button" className="absolute left-0 z-30 p-4 cursor-pointer group focus:outline-none" style={{ top: '50%', left: '30%', transform: 'translateY(-50%)' }} onClick={() => handleSelect((activeIndex - 1 + 3) % 3)}>
          {/* Previous icon */}
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-opacity-75 bg-black bg-opacity-50">
              <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
              </svg>
          </span>
      </button>
      {/* Next button */}
      <button type="button" className="absolute right-0 z-30 p-4 cursor-pointer group focus:outline-none" style={{ top: '50%', right: '30%', transform: 'translateY(-50%)' }} onClick={() => handleSelect((activeIndex + 1) % 3)}>
          {/* Next icon */}
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-opacity-75 bg-black bg-opacity-50">
              <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
              </svg>
          </span>
      </button>
  </div>
);
}