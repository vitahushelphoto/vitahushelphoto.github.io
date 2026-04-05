import React from 'react';
import { Instagram, Send, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { scrollToSection } from '../lib/scrollUtils';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', href: '#hero', isRoute: false },
    { key: 'about', href: '#about', isRoute: false },
    { key: 'portfolio', href: '#portfolio', isRoute: false },
    { key: 'prices', href: '#prices', isRoute: false },
    { key: 'testimonials', href: '#testimonials', isRoute: false },
    { key: 'contact', href: '#contact', isRoute: false },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/vitahushel_photo',
      label: 'Instagram',
      ariaLabel: t.contact.social.instagram || 'Instagram',
    },
    {
      icon: Send,
      href: 'https://t.me/vitahushelphoto',
      label: 'Telegram',
      ariaLabel: t.contact.social.telegram || 'Telegram',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/48791613941',
      label: 'WhatsApp',
      ariaLabel: t.contact.social.whatsapp || 'WhatsApp',
    },
  ];

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
              {t.meta.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
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
                  onClick={() => scrollToSection(item.href)}
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
              <a
                href="tel:+48791613941"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span>+48 791 613 941</span>
              </a>
              <a
                href="mailto:vitahushelphoto@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span>vitahushelphoto@gmail.com</span>
              </a>
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
            {/* Privacy Policy link - rendered as internal route */}
            <Link
              to="/privacy"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
