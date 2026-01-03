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

export const contactTranslations: Record<'en' | 'ps' | 'fa', ContactTranslations> = {
  en: {
    heading: 'Get In Touch',
    subheading: 'Have questions? We\'re here to help. Send us a message and we\'ll respond as soon as possible.',
    form: {
      name: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
      },
      email: {
        label: 'Email Address',
        placeholder: 'your.email@example.com',
      },
      phone: {
        label: 'Phone Number',
        placeholder: '+93 799 000 000',
      },
      subject: {
        label: 'Subject',
        placeholder: 'What is this regarding?',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us how we can help you...',
      },
      submitButton: 'Send Message',
      submitting: 'Sending...',
    },
    info: {
      title: 'Contact Information',
      addressLabel: 'Address',
      address: 'Kabul, Afghanistan',
      phoneLabel: 'Phone',
      phone: '+93 799 76 96 26',
      emailLabel: 'Email',
      email: 'info@maternityhospital.com',
      hours: 'Working Hours',
      hoursValue: '24/7 - Always Available',
    },
    supportMessage: "We're here to support you through every step of your journey to motherhood. Don't hesitate to reach out!",
  },
  ps: {
    heading: 'موږ سره اړیکه ونیسئ',
    subheading: 'پوښتنې لرئ؟ موږ د مرستې لپاره دلته یو. موږ ته پیغام واستوئ او موږ به ژر تر ژره ځواب درکړو.',
    form: {
      name: {
        label: 'بشپړ نوم',
        placeholder: 'خپل بشپړ نوم ولیکئ',
      },
      email: {
        label: 'بریښنالیک پته',
        placeholder: 'your.email@example.com',
      },
      phone: {
        label: 'د تلیفون شمیره',
        placeholder: '۰۰۰ ۰۰۰ ۷۹۹ ۹۳+',
      },
      subject: {
        label: 'موضوع',
        placeholder: 'دا د څه په اړه ده؟',
      },
      message: {
        label: 'پیغام',
        placeholder: 'موږ ته ووایاست چې موږ څنګه ستاسو سره مرسته کولای شو...',
      },
      submitButton: 'پیغام واستوئ',
      submitting: 'استول کیږي...',
    },
    info: {
      title: 'د اړیکې معلومات',
      addressLabel: 'پته',
      address: 'کابل، افغانستان',
      phoneLabel: 'تلیفون',
      phone: '۲۶ ۹۶ ۷۶ ۷۹۹ ۹۳+',
      emailLabel: 'بریښنالیک',
      email: 'info@maternityhospital.com',
      hours: 'د کار ساعتونه',
      hoursValue: '۲۴/۷ - تل شتون لري',
    },
    supportMessage: 'موږ د مورتوب ستاسو د سفر په هر ګام کې د مرستې لپاره دلته یو. د اړیکې څخه مه ډارېږئ!',
  },
  fa: {
    heading: 'با ما در تماس باشید',
    subheading: 'سوالی دارید؟ ما اینجا هستیم تا کمک کنیم. برای ما پیام بفرستید و ما در اسرع وقت پاسخ خواهیم داد.',
    form: {
      name: {
        label: 'نام کامل',
        placeholder: 'نام کامل خود را وارد کنید',
      },
      email: {
        label: 'آدرس ایمیل',
        placeholder: 'your.email@example.com',
      },
      phone: {
        label: 'شماره تلفن',
        placeholder: '۰۰۰ ۰۰۰ ۷۹۹ ۹۳+',
      },
      subject: {
        label: 'موضوع',
        placeholder: 'این در مورد چیست؟',
      },
      message: {
        label: 'پیام',
        placeholder: 'به ما بگویید چگونه می‌توانیم به شما کمک کنیم...',
      },
      submitButton: 'ارسال پیام',
      submitting: 'در حال ارسال...',
    },
    info: {
      title: 'اطلاعات تماس',
      addressLabel: 'آدرس',
      address: 'کابل، افغانستان',
      phoneLabel: 'تلفن',
      phone: '۲۶ ۹۶ ۷۶ ۷۹۹ ۹۳+',
      emailLabel: 'ایمیل',
      email: 'info@maternityhospital.com',
      hours: 'ساعات کاری',
      hoursValue: '۲۴/۷ - همیشه در دسترس',
    },
    supportMessage: 'ما برای حمایت از شما در هر مرحله از سفر مادری شما اینجا هستیم. از تماس با ما دریغ نکنید!',
  },
};
