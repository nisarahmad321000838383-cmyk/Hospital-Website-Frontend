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

export const footerTranslations: Record<'en' | 'ps' | 'fa', FooterTranslations> = {
  en: {
    departments: {
      title: 'Departments',
      items: [
        'Prenatal Care',
        'Delivery Services',
        'NICU',
        'Gynecology',
        'Fertility',
        'More Services',
      ],
    },
    quickLinks: {
      title: 'Quick Links',
    },
    contact: {
      title: 'Contact Us',
      address: ['Kabul, Afghanistan'],
      phone: '+93 799 76 96 26',
    },
  },
  ps: {
    departments: {
      title: 'څانګې',
      items: [
        'د زیږون دمخه پاملرنه',
        'د زیږون خدمتونه',
        'نیکیو',
        'ګاینیکالوژي',
        'زیږون',
        'نور خدمتونه',
      ],
    },
    quickLinks: {
      title: 'چټک لینکونه',
    },
    contact: {
      title: 'موږ سره اړیکه ونیسئ',
      address: ['کابل، افغانستان'],
      phone: '۶۹ ۹۶ ۷۶ ۷۹۹ ۹۳+',
    },
  },
  fa: {
    departments: {
      title: 'بخش‌ها',
      items: [
        'مراقبت قبل از زایمان',
        'خدمات زایمان',
        'واحد مراقبت ویژه نوزادان',
        'زنان',
        'باروری',
        'خدمات بیشتر',
      ],
    },
    quickLinks: {
      title: 'لینک‌های سریع',
    },
    contact: {
      title: 'تماس با ما',
      address: ['کابل، افغانستان'],
      phone: '۶۹ ۹۶ ۷۶ ۷۹۹ ۹۳+',
    },
  },
};
