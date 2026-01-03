// Translation types for type safety
export type Language = 'en' | 'ps' | 'fa'; // English, Pashto, Dari

export interface HomeTranslations {
  hero: {
    title: string;
    description: string;
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
  heading: string;
  services: {
    title: string;
    heading: string;
    texts: string[];
  }[];
  bannerHeading: string;
  bannerTexts: string[];
}

export interface ContactTranslations {
  heading: string;
  subheading: string;
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    subject: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    submitButton: string;
    submitting: string;
  };
  info: {
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    hours: string;
    hoursValue: string;
  };
  supportMessage: string;
}

export interface NavigationTranslations {
  links: {
    home: string;
    doctors: string;
    services: string;
    contact: string;
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
  contact: ContactTranslations;
  navigation: NavigationTranslations;
  footer: FooterTranslations;
}
