// Translation types for type safety
export type Language = 'en' | 'ps' | 'fa'; // English, Pashto, Dari

export interface HomeTranslations {
  hero: {
    title: string;
    description: string;
    buttonText: string;
  };
  stats: {
    specialists: string;
    deliveries: string;
    care: string;
    suites: string;
    safety: string;
  };
}

export interface DoctorsTranslations {
  heading: string;
  doctors: {
    name: string;
    job: string;
  }[];
  aboutHeading: string;
  aboutDescription: string;
}

export interface ServicesTranslations {
  services: {
    title: string;
    heading: string;
    texts: string[];
  }[];
  buttonText: string;
  bannerHeading: string;
  bannerTexts: string[];
}

export interface ReviewsTranslations {
  heading: string;
  reviews: {
    name: string;
    job: string;
    desc: string;
  }[];
}

export interface NavigationTranslations {
  links: {
    home: string;
    doctors: string;
    services: string;
    reviews: string;
  };
}

export interface FooterTranslations {
  departments: {
    title: string;
    items: string[];
  };
  quickLinks: {
    title: string;
  };
  contact: {
    title: string;
    address: string[];
    phone: string;
  };
}

export interface Translations {
  home: HomeTranslations;
  doctors: DoctorsTranslations;
  services: ServicesTranslations;
  reviews: ReviewsTranslations;
  navigation: NavigationTranslations;
  footer: FooterTranslations;
}
