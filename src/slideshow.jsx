import React, { useEffect, useState } from 'react';
import './slideshow.css';

export const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 'slide-1',
      src: './images/1.jpeg',
    },
    {
      id: 'slide-2',
      src: './images/2.jpeg',
    },
    {
      id: 'slide-3',
      src: './images/3.jpeg',
    },
    {
      id: 'slide-4',
      src: './images/4.jpeg',
    },
    {
      id: 'slide-5',
      src: './images/5.jpeg',
    },
    {
      id: 'slide-6',
      src: './images/6.jpeg',
    },
    {
      id: 'slide-7',
      src: './images/7.jpeg',
    },
    {
      id: 'slide-8',
      src: './images/8.jpeg',
    },
  ];

  const showSlide = (index) => {
    const slidesElements = document.querySelectorAll('.slider img');
    slidesElements.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    showSlide(currentIndex);
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          {slides.map(slide => (
            <img key={slide.id} id={slide.id} src={slide.src} alt={slide.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;