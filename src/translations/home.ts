import { HomeTranslations } from './types';

export const homeTranslations: Record<'en' | 'ps' | 'fa', HomeTranslations> = {
  en: {
    hero: {
      title: 'Caring For Mothers & Babies With Love',
      description: 'Experience exceptional maternity care in a warm, supportive environment. From pregnancy through delivery and beyond, we\'re here for every step of your journey to motherhood.',
    },
    stats: {
      specialists: 'Maternity Specialists',
      deliveries: 'Successful Deliveries',
      care: 'Maternity Care',
      suites: 'Private Birthing Suites',
      safety: 'Mother & Baby Safety',
    },
  },
  ps: {
    hero: {
      title: 'د مور او ماشوم پاملرنه په مینه سره',
      description: 'د امیندوارۍ ځانګړې پاملرنه په ګرمه او ملاتړ چاپیریال کې تجربه کړئ. د امیندوارۍ څخه تر زیږون او بیا وروسته، موږ د مورتوب ستاسو د سفر په هره مرحله کې دلته یو.',
    },
    stats: {
      specialists: 'د زیږون متخصصین',
      deliveries: 'بریالي زیږونونه',
      care: 'د امیندوارۍ پاملرنه',
      suites: 'د زیږون خصوصي کوټې',
      safety: 'د مور او ماشوم خوندیتوب',
    },
  },
  fa: {
    hero: {
      title: 'مراقبت از مادران و نوزادان با عشق',
      description: 'مراقبت استثنایی بارداری را در یک محیط گرم و حمایتی تجربه کنید. از بارداری تا زایمان و فراتر از آن، ما برای هر مرحله از سفر مادری شما اینجا هستیم.',
    },
    stats: {
      specialists: 'متخصصین زایمان',
      deliveries: 'زایمان های موفق',
      care: 'مراقبت از بارداری',
      suites: 'اتاق های خصوصی زایمان',
      safety: 'امنیت مادر و نوزاد',
    },
  },
};
