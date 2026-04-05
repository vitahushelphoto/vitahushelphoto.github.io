import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../contexts/LanguageContext';

const Booking: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Full Page Google Form Section */}
        <section className="w-full">
          <div className="w-full">
            {/* Full Page Google Form Embed */}
            <iframe
              src={t.booking.formUrl}
              className="w-full border-0"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title={t.booking.title}
              style={{ height: '100vh', minHeight: '800px' }}
            >
              Loading...
            </iframe>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Booking;
