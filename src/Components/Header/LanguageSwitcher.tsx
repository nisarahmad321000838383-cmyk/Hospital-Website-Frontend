import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/translations/types';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ps', label: 'پښتو', flag: '🇦🇫' },
    { code: 'fa', label: 'دری', flag: '🇦🇫' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
            language === lang.code
              ? 'bg-primary text-white shadow-md'
              : 'bg-white/50 hover:bg-white/80 text-gray-700'
          }`}
          title={lang.label}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
