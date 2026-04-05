import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from './ui/button';

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on a blog page
  const isBlogPage = location.pathname === '/blog';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#hero', isRoute: false },
    { key: 'about', href: '#about', isRoute: false },
    { key: 'portfolio', href: '#portfolio', isRoute: false },
    { key: 'prices', href: '#prices', isRoute: false },
    { key: 'testimonials', href: '#testimonials', isRoute: false },
    { key: 'blog', href: '/blog', isRoute: true },
    { key: 'contact', href: '#contact', isRoute: false },
    { key: 'booking', href: '/booking', isRoute: true },
  ];

  // Filter nav items for blog page (only show home)
  const displayedNavItems = isBlogPage 
    ? navItems.filter(item => item.key === 'home')
    : navItems;

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      // Handle route navigation via Link component
      return;
    }
    
    // If we're not on the home page, navigate to home first with the anchor
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    
    // If we're on home page, scroll to the element
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const offset = 80; // Account for fixed header height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('#hero', false)}
              className="text-xl lg:text-2xl font-elegant font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {t.name}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {displayedNavItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="nav-link text-sm font-medium"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="nav-link text-sm font-medium"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </button>
              )
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-medium">
            <div className="px-4 py-6 space-y-4">
              {displayedNavItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="block w-full text-left text-foreground/80 hover:text-foreground font-medium py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="block w-full text-left text-foreground/80 hover:text-foreground font-medium py-2 transition-colors"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};