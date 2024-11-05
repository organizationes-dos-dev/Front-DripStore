import './Hero.css';
import { useState } from 'react';
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";
import Ornament from '../../assets/Ornament 11.png';

const slides = [
  {
    title: "Melhores ofertas personalizadas",
    subtitle: "Queima de estoque Nike🔥",
    description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: TenisNike
  },
  {
    title: "Novidades de Verão",
    subtitle: "Coleção Verão 2024 ☀️",
    description: "Aproveite as melhores ofertas da nova coleção de verão.",
    image: TenisNike 
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (Math.abs(dragOffset) > 50) {
      dragOffset > 0 ? handlePrevSlide() : handleNextSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragOffset) > 50) {
      dragOffset > 0 ? handlePrevSlide() : handleNextSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section 
      className="banner"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="banner-content"
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease'
        }}
      >
        <div className="banner-text">
          <p id="title-amarelo">{slides[currentSlide].title}</p>
          <h1 className='titleBanner'>{slides[currentSlide].subtitle}</h1>
          <p className='paragraphBanner'>{slides[currentSlide].description}</p>
          <button className='btnBanner' type="button">Ver ofertas</button>
        </div>
        <div className="banner-image">
          <img src={slides[currentSlide].image} alt="Imagem do slide"/>
        </div>
        <img src={Ornament} id="ornament" alt="Ornamento decorativo"/>
      </div>
      <div className="carousel-controls">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={currentSlide === index ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}