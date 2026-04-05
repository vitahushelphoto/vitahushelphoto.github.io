import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import heroBg from '../../assets/hero-bg.jpg';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-elegant font-bold text-white mb-6 leading-tight">
          {t.hero.title}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        
        <Button
          onClick={handleBookingClick}
          size="lg"
          className="hero-button bg-white text-primary hover:bg-white/90 font-medium px-8 py-4 text-base md:text-lg shadow-strong"
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
