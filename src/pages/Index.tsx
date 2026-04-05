import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { PricesSection } from '../components/sections/PricesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <PricesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
