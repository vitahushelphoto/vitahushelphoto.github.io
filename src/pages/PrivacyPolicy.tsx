import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: January 2025',
      sections: [
        {
          heading: '1. Who We Are',
          text: 'Vita Hushel Photography, based in Wolsztyn, 64-200, Poland. Contact: vitahushelphoto@gmail.com | +48 791 613 941.',
        },
        {
          heading: '2. What Data We Collect',
          text: 'When you use our booking form, we collect: your name, email address, phone number (optional), preferred session date and time, session type, and any message you provide.',
        },
        {
          heading: '3. Why We Collect It',
          text: 'We use your data solely to respond to your booking inquiry, confirm session details, and communicate with you about your photography session. We do not use your data for marketing without your explicit consent.',
        },
        {
          heading: '4. How Long We Keep It',
          text: 'Booking inquiry data is kept for a maximum of 12 months. If a session takes place, client photos and related data are kept for up to 3 years for record-keeping purposes.',
        },
        {
          heading: '5. Who We Share It With',
          text: 'Your data is not sold to third parties. We use the following processors: Supabase (email delivery infrastructure) and Resend (transactional email). Both are GDPR-compliant.',
        },
        {
          heading: '6. Your Rights (GDPR)',
          text: 'Under GDPR, you have the right to: access your personal data, correct inaccurate data, request deletion of your data, object to processing, and data portability. To exercise these rights, contact us at vitahushelphoto@gmail.com.',
        },
        {
          heading: '7. Cookies',
          text: 'This website uses only essential functional cookies (language preference stored in localStorage). No tracking or advertising cookies are used.',
        },
        {
          heading: '8. Contact',
          text: 'For any privacy-related questions, contact: vitahushelphoto@gmail.com',
        },
      ],
    },
    uk: {
      title: 'Політика конфіденційності',
      updated: 'Останнє оновлення: Січень 2025',
      sections: [
        {
          heading: '1. Хто ми',
          text: 'Віта Гушель Фотографія, Вольштин, 64-200, Польща. Контакт: vitahushelphoto@gmail.com | +48 791 613 941.',
        },
        {
          heading: '2. Які дані ми збираємо',
          text: 'Коли ви використовуєте форму бронювання, ми збираємо: ваше ім\'я, адресу електронної пошти, номер телефону (необов\'язково), бажану дату та час сесії, тип сесії та будь-яке повідомлення, яке ви надаєте.',
        },
        {
          heading: '3. Навіщо ми це збираємо',
          text: 'Ми використовуємо ваші дані виключно для відповіді на ваш запит бронювання та комунікації щодо вашої фотосесії. Ми не використовуємо ваші дані для маркетингу без вашої явної згоди.',
        },
        {
          heading: '4. Скільки часу ми зберігаємо дані',
          text: 'Дані запиту зберігаються максимум 12 місяців. Якщо сесія відбулася, пов\'язані дані зберігаються до 3 років.',
        },
        {
          heading: '5. З ким ми ділимося даними',
          text: 'Ваші дані не продаються третім сторонам. Ми використовуємо: Supabase та Resend для доставки електронної пошти. Обидва відповідають GDPR.',
        },
        {
          heading: '6. Ваші права (GDPR)',
          text: 'Відповідно до GDPR, ви маєте право на: доступ до ваших персональних даних, виправлення неточних даних, видалення ваших даних, заперечення обробки. Зверніться: vitahushelphoto@gmail.com.',
        },
        {
          heading: '7. Файли cookie',
          text: 'Цей сайт використовує лише необхідні функціональні cookie (мовні налаштування в localStorage). Відстежуючі або рекламні cookie не використовуються.',
        },
        {
          heading: '8. Контакт',
          text: 'З питань конфіденційності: vitahushelphoto@gmail.com',
        },
      ],
    },
    pl: {
      title: 'Polityka prywatności',
      updated: 'Ostatnia aktualizacja: Styczeń 2025',
      sections: [
        {
          heading: '1. Kim jesteśmy',
          text: 'Wiktoria Hushel Fotografia, Wolsztyn, 64-200, Polska. Kontakt: vitahushelphoto@gmail.com | +48 791 613 941.',
        },
        {
          heading: '2. Jakie dane zbieramy',
          text: 'Gdy korzystasz z formularza rezerwacji, zbieramy: imię i nazwisko, adres e-mail, numer telefonu (opcjonalnie), preferowaną datę i godzinę sesji, rodzaj sesji oraz wiadomość.',
        },
        {
          heading: '3. Po co zbieramy dane',
          text: 'Używamy Twoich danych wyłącznie do odpowiedzi na zapytanie o rezerwację i komunikacji w sprawie sesji fotograficznej. Nie używamy danych do marketingu bez Twojej wyraźnej zgody.',
        },
        {
          heading: '4. Jak długo przechowujemy dane',
          text: 'Dane zapytania są przechowywane maksymalnie 12 miesięcy. Jeśli sesja się odbyła, powiązane dane są przechowywane do 3 lat.',
        },
        {
          heading: '5. Z kim udostępniamy dane',
          text: 'Twoje dane nie są sprzedawane. Korzystamy z: Supabase i Resend do dostarczania wiadomości e-mail. Oba są zgodne z RODO.',
        },
        {
          heading: '6. Twoje prawa (RODO)',
          text: 'Na mocy RODO masz prawo do: dostępu do danych, sprostowania danych, usunięcia danych, sprzeciwu wobec przetwarzania. Kontakt: vitahushelphoto@gmail.com.',
        },
        {
          heading: '7. Pliki cookie',
          text: 'Ta strona używa tylko niezbędnych plików cookie (preferencje językowe w localStorage). Żadne pliki śledzące ani reklamowe nie są używane.',
        },
        {
          heading: '8. Kontakt',
          text: 'W sprawach prywatności: vitahushelphoto@gmail.com',
        },
      ],
    },
  };

  const lang = (language as 'en' | 'uk' | 'pl') || 'en';
  const c = content[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>{c.title}</span>
            </nav>

            <h1 className="text-3xl lg:text-4xl font-elegant font-semibold text-primary mb-2">
              {c.title}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">{c.updated}</p>

            <div className="space-y-8">
              {c.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
                  <p className="text-foreground/80 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/" className="text-primary hover:text-primary/80 transition-colors font-medium">
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
