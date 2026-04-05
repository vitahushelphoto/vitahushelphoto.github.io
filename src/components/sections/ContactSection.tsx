import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
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

  const contactMethods = [
    {
      icon: Phone,
      label: `📞 ${t.contact.phone}`,
      value: '+48 791 613 941',
      action: () => window.open('tel:+48791613941'),
      ariaLabel: 'Call Vita Hushel',
    },
    {
      icon: Mail,
      label: `✉️ ${t.contact.email}`,
      value: 'vitahushelphoto@gmail.com',
      action: () => window.open('mailto:vitahushelphoto@gmail.com'),
      ariaLabel: 'Send email to Vita Hushel',
    },
    {
      icon: MessageCircle,
      label: `💬 ${t.contact.social.whatsapp}`,
      value: 'WhatsApp',
      action: () => window.open('https://wa.me/48791613941', '_blank'),
      ariaLabel: 'WhatsApp',
    },
    {
      icon: Send,
      label: `💬 ${t.contact.social.telegram}`,
      value: 'Telegram',
      action: () => window.open('https://t.me/vitahushelphoto', '_blank'),
      ariaLabel: 'Telegram',
    },
    {
      icon: MessageCircle,
      label: '💬 Viber',
      value: '+48 791 613 941',
      action: () => window.open('viber://chat?number=%2B48791613941', '_blank'),
      ariaLabel: 'Contact via Viber',
    },
    {
      // FIXED: consistent Instagram handle vitahushel_photo
      icon: Instagram,
      label: `📱 ${t.contact.social.instagram}`,
      value: '@vitahushel_photo',
      action: () => window.open('https://instagram.com/vitahushel_photo', '_blank'),
      ariaLabel: 'Instagram @vitahushel_photo',
    },
    {
      icon: Facebook,
      label: '📱 Facebook',
      value: 'Vita Hushel',
      action: () => window.open('https://facebook.com/vitahushel', '_blank'),
      ariaLabel: 'Facebook',
    },
  ];

  // Translated labels for working hours section
  const workingHoursLabel = {
    en: 'Working hours',
    uk: 'Графік роботи',
    pl: 'Godziny pracy',
  };
  const monFriLabel = { en: 'Mon–Fri:', uk: 'Пн–Пт:', pl: 'Pon–Pt:' };
  const satSunLabel = { en: 'Sat–Sun:', uk: 'Сб–Нд:', pl: 'Sob–Nd:' };
  const appointmentLabel = {
    en: 'by appointment',
    uk: 'за попереднім записом',
    pl: 'po wcześniejszym umówieniu',
  };
  const locationLabel = { en: 'Location', uk: 'Локація', pl: 'Lokalizacja' };

  const lang = language as 'en' | 'uk' | 'pl';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-cream"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Address */}
            <div className="mb-8 p-6 bg-card rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    📍 {locationLabel[lang]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Button
                    key={index}
                    onClick={method.action}
                    variant="ghost"
                    className="w-full justify-start p-4 h-auto bg-card hover:bg-accent/50 transition-colors group"
                    aria-label={method.ariaLabel}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-foreground">{method.label}</div>
                        <div className="text-muted-foreground text-sm">{method.value}</div>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-card rounded-lg shadow-soft">
              <h3 className="font-medium text-foreground mb-4">
                🕒 {workingHoursLabel[lang]}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{monFriLabel[lang]}</span>
                  <span className="text-foreground">10:00–18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{satSunLabel[lang]}</span>
                  <span className="text-foreground">{appointmentLabel[lang]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* FIXED: Real Google Maps embed for Wolsztyn, Poland */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-card rounded-lg shadow-soft overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39370.123!2d16.0966!3d52.1006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b3b3b3b3b3b%3A0x0!2sWolsztyn%2C+64-200!5e0!3m2!1suk!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${t.name} - ${locationLabel[lang]}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
