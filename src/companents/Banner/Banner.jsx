import React, { useState, useEffect } from 'react';
import './Banner.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/asaxiy1.webp', 
    '/asaxiy2.webp',
    '/asaxiy3.webp',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(nextSlide, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container3">
      <div className="carusell">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carusel1" onClick={prevSlide}>‹</button>
            <button className="carusel1" onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;


