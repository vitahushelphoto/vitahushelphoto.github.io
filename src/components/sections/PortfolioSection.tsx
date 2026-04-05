import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

// Import portfolio images
import wedding1 from '../../assets/portfolio/wedding-1.jpg';
import portrait1 from '../../assets/portfolio/portrait-1.jpg';
import family1 from '../../assets/portfolio/family-1.jpg';
import landscape1 from '../../assets/portfolio/landscape-1.jpg';
import maternity1 from '../../assets/portfolio/maternity-1.jpg';
import event1 from '../../assets/portfolio/event-1.jpg';

const portfolioItems = [
  {
    id: 1,
    src: wedding1,
    alt: 'Beautiful wedding photography of bride and groom in elegant outdoor setting',
    category: 'Wedding',
    caption: 'Sarah & Michael - Garden Wedding'
  },
  {
    id: 2,
    src: portrait1,
    alt: 'Professional portrait photography of woman in natural lighting',
    category: 'Portrait',
    caption: 'Professional Headshot Session'
  },
  {
    id: 3,
    src: family1,
    alt: 'Happy family of four during golden hour outdoor photography session',
    category: 'Family',
    caption: 'The Johnson Family'
  },
  {
    id: 4,
    src: landscape1,
    alt: 'Stunning landscape photography with mountains and golden hour lighting',
    category: 'Landscape',
    caption: 'Mountain Serenity'
  },
  {
    id: 5,
    src: maternity1,
    alt: 'Elegant maternity photography session with expecting mother',
    category: 'Maternity',
    caption: 'Expecting Joy'
  },
  {
    id: 6,
    src: event1,
    alt: 'Professional event photography capturing celebration moments',
    category: 'Event',
    caption: 'Corporate Celebration'
  }
];

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % portfolioItems.length : 0
    );
  };

  const prevImage = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + portfolioItems.length) % portfolioItems.length : 0
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <section 
        id="portfolio" 
        ref={sectionRef}
        className="py-20 lg:py-32 bg-background"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item group transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <div className="text-center text-white">
                      <div className="font-medium text-lg mb-1">{item.category}</div>
                      <div className="text-sm opacity-90">{item.caption}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:text-white hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <img
              src={portfolioItems[selectedImage].src}
              alt={portfolioItems[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <div className="font-medium text-lg">
                {portfolioItems[selectedImage].caption}
              </div>
              <div className="text-sm opacity-75">
                {selectedImage + 1} of {portfolioItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
