import React, { useEffect, useState, useCallback, useMemo } from 'react';
import myStyles from './slideshow.module.css';
import image1 from '../images/1.jpeg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.jpeg';
import image4 from '../images/4.jpeg';
import image5 from '../images/5.jpeg';
import image6 from '../images/6.jpeg';
import image7 from '../images/7.jpeg';
import image8 from '../images/8.jpeg';

export const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [direction, setDirection] = useState('next');

  const slides = useMemo(() => [
    { id: 'slide-1', src: image1, alt: "Slide 1" },
    { id: 'slide-2', src: image2, alt: "Slide 2" },
    { id: 'slide-3', src: image3, alt: "Slide 3" },
    { id: 'slide-4', src: image4, alt: "Slide 4" },
    { id: 'slide-5', src: image5, alt: "Slide 5" },
    { id: 'slide-6', src: image6, alt: "Slide 6" },
    { id: 'slide-7', src: image7, alt: "Slide 7" },
    { id: 'slide-8', src: image8, alt: "Slide 8" },
  ], []);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  const nextSlide = useCallback(() => {
    setDirection('next');
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [currentIndex, slides.length]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const timeout = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeout);
  }, [nextSlide]);
  return (
    <section className={myStyles.container}>
      <div className={myStyles.slider_wrapper}>
        <div className={`${myStyles.slider} ${myStyles[direction]}`}>
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`${index === currentIndex ? myStyles.active :
                  index === previousIndex ? myStyles.previous : ''
                }`}/>
          ))}
        </div>

        <div className={myStyles.slider_indicators}>
          {slides.map((slide, index) => (
            <button
              key={`indicator-${slide.id}`}
              className={`${myStyles.indicator} ${index === currentIndex ? myStyles.indicator_active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}>
              <span className={myStyles.indicator_dot}></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
