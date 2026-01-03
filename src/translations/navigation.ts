export interface NavigationTranslations {
  links: {
    home: string;
    doctors: string;
    services: string;
    reviews: string;
  };
}

export const navigationTranslations: Record<'en' | 'ps' | 'fa', NavigationTranslations> = {
  en: {
    links: {
      home: 'Home',
      doctors: 'Doctors',
      services: 'Services',
      reviews: 'Reviews',
    },
  },
  ps: {
    links: {
      home: 'کور',
      doctors: 'ډاکټران',
      services: 'خدمتونه',
      reviews: 'بیاکتنې',
    },
  },
  fa: {
    links: {
      home: 'خانه',
      doctors: 'دکتران',
      services: 'خدمات',
      reviews: 'نظرات',
    },
  },
};
