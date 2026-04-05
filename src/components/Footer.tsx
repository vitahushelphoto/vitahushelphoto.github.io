import React from 'react';
import { Instagram, Send, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'prices', href: '#prices' },
    { key: 'booking', href: '#booking' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/vitahushel',
      label: 'Instagram',
      ariaLabel: t.contact.social.instagram || 'Instagram',
    },
    {
      icon: Send,
      href: 'https://t.me/vitahushel',
      label: 'Telegram',
      ariaLabel: t.contact.social.telegram || 'Telegram',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/48791613941',
      label: 'WhatsApp',
      ariaLabel: t.contact.social.whatsapp || 'WhatsApp',
    },
    {
      icon: Phone,
      href: 'tel:+48791613941',
      label: 'Phone',
      ariaLabel: 'Call Vita Hushel',
    },
    {
      icon: Mail,
      href: 'mailto:vitahushel@gmail.com',
      label: 'Email',
      ariaLabel: 'Send email to Vita Hushel',
    },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-elegant font-semibold mb-4">
              {t.name}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Professional photographer specializing in capturing life's most precious moments with artistic elegance. Creating timeless memories that last a lifetime.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.slice(0, 3).map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      aria-label={social.ariaLabel}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">{t.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">{t.contact.email}</span>
              </div>
              <div className="mt-4">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
