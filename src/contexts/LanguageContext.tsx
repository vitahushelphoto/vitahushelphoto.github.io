import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, translations, TranslationContent } from '../types/Language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

// FIXED: updateDocumentMeta extracted - no risk of triggering re-render
const updateDocumentMeta = (lang: Language) => {
  const t = translations[lang];
  const title = t.meta.title;
  const description = t.meta.description;

  document.documentElement.lang = lang;
  document.title = title;

  const setMeta = (selector: string, attr: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="twitter:title"]', 'content', title);
  setMeta('meta[property="twitter:description"]', 'content', description);
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('preferred-language') as Language;
    const lang = savedLang || 'en';
    // Apply meta immediately on first render (no useEffect needed)
    updateDocumentMeta(lang);
    return lang;
  });

  // FIXED: setLanguage is stable via useCallback - no infinite loop
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    updateDocumentMeta(lang);
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
