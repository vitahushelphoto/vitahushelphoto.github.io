import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/Language';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

const languageOptions = [
  { code: 'en' as Language, label: 'EN', name: 'English' },
  { code: 'uk' as Language, label: 'UA', name: 'Українська' },
  { code: 'pl' as Language, label: 'PL', name: 'Polski' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languageOptions.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Select language"
        >
          <span className="font-medium">{currentLanguage?.label}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[120px] bg-background border border-border shadow-medium"
      >
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => setLanguage(option.code)}
            className={`cursor-pointer hover:bg-accent/50 transition-colors ${
              option.code === language ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <span className="font-medium">{option.label}</span>
            <span className="ml-2 text-sm text-muted-foreground">{option.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};