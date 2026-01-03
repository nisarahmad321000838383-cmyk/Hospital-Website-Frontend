import { ReviewsTranslations } from './types';

export const reviewsTranslations: Record<'en' | 'ps' | 'fa', ReviewsTranslations> = {
  en: {
    heading: 'What Our Mothers Say',
    reviews: [
      {
        name: 'Sarah Williams',
        job: 'First-time Mother',
        desc: 'The care I received from pregnancy through delivery was exceptional. The staff made me feel safe and supported every step of the way. I couldn\'t have asked for a better birthing experience!',
      },
      {
        name: 'Jessica Martinez',
        job: 'Mother of Twins',
        desc: 'Having twins was overwhelming, but the NICU team was incredible. They were knowledgeable, compassionate, and kept me informed throughout. My babies received the best possible care.',
      },
      {
        name: 'Lisa Thompson',
        job: 'Mother of Two',
        desc: 'From prenatal classes to postnatal support, everything was perfectly organized. The lactation consultants were amazing, and the private birthing suite made all the difference. Highly recommend!',
      },
    ],
  },
  ps: {
    heading: 'زموږ مورې څه وايي',
    reviews: [
      {
        name: 'سارا ویلیمز',
        job: 'لومړی ځل مور',
        desc: 'هغه پاملرنه چې ما د امیندوارۍ څخه تر زیږون پورې ترلاسه کړه غوره وه. کارکوونکو ما په هر ګام کې خوندي او ملاتړ احساس وکړ. زه د یوې ښې زیږون تجربې غوښتنه نشم کولی!',
      },
      {
        name: 'جیسیکا مارتینز',
        job: 'د دوه ماشومانو مور',
        desc: 'د دوه ماشومانو درلودل ستړیا وه، مګر د نیکیو ټیم عالي و. دوی پوهاوی، زړه راښکونکي وو، او ما ته یې په ټوله موده کې معلومات ورکول. زما ماشومانو غوره ممکنه پاملرنه ترلاسه کړه.',
      },
      {
        name: 'لیسا تامپسن',
        job: 'د دوه ماشومانو مور',
        desc: 'د زیږون دمخه ټولګیو څخه تر زیږون وروسته ملاتړ پورې، هر څه په بشپړه توګه تنظیم شوي و. د شیدې ورکولو مشاورین حیرانونکي وو، او د زیږون خصوصي کوټې ټول توپیر رامنځته کړ. خورا سپارښتنه کوم!',
      },
    ],
  },
  fa: {
    heading: 'مادران ما چه می‌گویند',
    reviews: [
      {
        name: 'سارا ویلیامز',
        job: 'مادر برای اولین بار',
        desc: 'مراقبتی که از بارداری تا زایمان دریافت کردم استثنایی بود. کارکنان باعث شدند در هر مرحله احساس امنیت و حمایت کنم. نمی‌توانستم تجربه زایمان بهتری داشته باشم!',
      },
      {
        name: 'جسیکا مارتینز',
        job: 'مادر دوقلوها',
        desc: 'داشتن دوقلوها خیلی سخت بود، اما تیم NICU فوق‌العاده بود. آنها دانش، دلسوزی داشتند و در طول مدت مرا مطلع نگه داشتند. نوزادانم بهترین مراقبت ممکن را دریافت کردند.',
      },
      {
        name: 'لیسا تامپسون',
        job: 'مادر دو فرزند',
        desc: 'از کلاس های قبل از زایمان تا پشتیبانی پس از زایمان، همه چیز کاملاً سازماندهی شده بود. مشاوران شیردهی فوق‌العاده بودند و اتاق خصوصی زایمان تفاوت زیادی ایجاد کرد. به شدت توصیه می‌کنم!',
      },
    ],
  },
};
