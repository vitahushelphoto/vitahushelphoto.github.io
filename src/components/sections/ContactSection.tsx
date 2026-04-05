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
      value: "+48 791 613 941",
      action: () => window.open('tel:+48791613941'),
      ariaLabel: "Call Vita Hushel"
    },
    {
      icon: Mail,
      label: `✉️ ${t.contact.email}`,
      value: "vitahushelphoto@gmail.com",
      action: () => window.open('mailto:vitahushel@gmail.com'),
      ariaLabel: "Send email to Vita Hushel"
    },
    {
      icon: MessageCircle,
      label: `💬 ${t.contact.social.whatsapp}`,
      value: "WhatsApp",
      action: () => window.open('https://wa.me/48791613941', '_blank'),
      ariaLabel: "WhatsApp"
    },
    {
      icon: Send,
      label: `💬 ${t.contact.social.telegram}`,
      value: "Telegram",
      action: () => window.open('https://t.me/vitahushelphoto', '_blank'),
      ariaLabel: "Telegram"
    },
    {
      icon: MessageCircle,
      label: "💬 Viber",
      value: "+48 791 613 941",
      action: () => window.open('viber://chat?number=%2B+48791613941', '_blank'),
      ariaLabel: "Contact via Viber"
    },
    {
      icon: Instagram,
      label: `📱 ${t.contact.social.instagram}`,
      value: "@vitahushel_photo",
      action: () => window.open('https://instagram.com/vitahushel_photo', '_blank'),
      ariaLabel: "Instagram"
    },
    {
      icon: Facebook,
      label: "📱 Facebook",
      value: "Vita Hushel",
      action: () => window.open('https://facebook.com/vitahushel', '_blank'),
      ariaLabel: "Facebook"
    }
  ];

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
                  <h3 className="font-medium text-foreground mb-2">📍 {language === 'uk' ? 'Локація' : language === 'pl' ? 'Lokalizacja' : 'Location'}</h3>
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

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-card rounded-lg shadow-soft">
              <h3 className="font-medium text-foreground mb-4">🕒 {language === 'uk' ? 'Графік роботи' : language === 'pl' ? 'Godziny pracy' : 'Working hours'}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'uk' ? 'Пн–Пт:' : language === 'pl' ? 'Pon–Pt:' : 'Mon–Fri:'}</span>
                  <span className="text-foreground">10:00–18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{language === 'uk' ? 'Сб–Нд:' : language === 'pl' ? 'Sob–Nd:' : 'Sat–Sun:'}</span>
                  <span className="text-foreground">{language === 'uk' ? 'за попереднім записом' : language === 'pl' ? 'po wcześniejszym umówieniu' : 'by appointment'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-card rounded-lg shadow-soft overflow-hidden h-[500px]">
              {/* Placeholder for Google Maps - replace with actual Google Maps embed */}
              <div className="w-full h-full bg-soft-gray flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Interactive map will be embedded here using Google Maps API
                  </p>
                  <Button
                    onClick={() => window.open('https://maps.google.com/?q=Wolsztyn,+64-200,+Poland', '_blank')}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    aria-label="Open location in Google Maps"
                  >
                    View on Google Maps
                  </Button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-warm-beige/50 rounded-full"></div>
              </div>
              
              {/* Replace above div with actual Google Maps iframe when ready:
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1234567890123!2d-73.98765432109876!3d40.75432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzE1LjYiTiA3M8KwNTknMTUuNiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vita Hushel Photography Location"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
