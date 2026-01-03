// Main translations export file
import { homeTranslations } from './home';
import { doctorsTranslations } from './doctors';
import { servicesTranslations } from './services';
import { reviewsTranslations } from './reviews';
import { navigationTranslations } from './navigation';
import { footerTranslations } from './footer';
import { Translations, Language } from './types';

// Combine all translations
export const translations: Record<Language, Translations> = {
  en: {
    home: homeTranslations.en,
    doctors: doctorsTranslations.en,
    services: servicesTranslations.en,
    reviews: reviewsTranslations.en,
    navigation: navigationTranslations.en,
    footer: footerTranslations.en,
  },
  ps: {
    home: homeTranslations.ps,
    doctors: doctorsTranslations.ps,
    services: servicesTranslations.ps,
    reviews: reviewsTranslations.ps,
    navigation: navigationTranslations.ps,
    footer: footerTranslations.ps,
  },
  fa: {
    home: homeTranslations.fa,
    doctors: doctorsTranslations.fa,
    services: servicesTranslations.fa,
    reviews: reviewsTranslations.fa,
    navigation: navigationTranslations.fa,
    footer: footerTranslations.fa,
  },
};

// Export types
export type { Language, Translations } from './types';
