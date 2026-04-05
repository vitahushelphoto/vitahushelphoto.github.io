import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

export const PricesSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
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

  const handleBookingClick = () => {
    window.open('/booking', '_self');
  };

  const packages = [
    {
      key: 'portrait' as const,
      popular: false
    },
    {
      key: 'family' as const,
      popular: true
    },
    {
      key: 'children' as const,
      popular: false
    },
    {
      key: 'wedding' as const,
      popular: false
    },
    {
      key: 'event' as const,
      popular: false
    },
    {
      key: 'studio' as const,
      popular: false
    }
  ];

  return (
    <section 
      id="prices" 
      ref={sectionRef}
      className="py-20 lg:py-32 section-gradient"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
            {t.prices.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.prices.subtitle}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const packageData = t.prices.packages[pkg.key];
            return (
              <div
                key={pkg.key}
                className={`relative bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${pkg.popular ? 'ring-2 ring-primary/20 scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {t.prices.mostPopular}
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-elegant font-semibold text-primary mb-2">
                      {packageData.title}
                    </h3>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {packageData.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {packageData.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {packageData.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={handleBookingClick}
                    className={`w-full transition-all duration-200 ${
                      pkg.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {t.prices.bookNow}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">
            {t.prices.additionalInfo.delivery}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.prices.additionalInfo.originals}
          </p>
        </div>
      </div>
    </section>
  );
};
