export interface NavigationTranslations {
  links: {
    home: string;
    doctors: string;
    services: string;
    contact: string;
  };
}

export const navigationTranslations: Record<'en' | 'ps' | 'fa', NavigationTranslations> = {
  en: {
    links: {
      home: 'Home',
      doctors: 'Doctors',
      services: 'Services',
      contact: 'Contact',
    },
  },
  ps: {
    links: {
      home: 'کور',
      doctors: 'ډاکټران',
      services: 'خدمتونه',
      contact: 'اړیکه',
    },
  },
  fa: {
    links: {
      home: 'خانه',
      doctors: 'دکتران',
      services: 'خدمات',
      contact: 'تماس',
    },
  },
};
