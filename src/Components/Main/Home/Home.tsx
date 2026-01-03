import hero from '@/assets/Images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-7xl text-4xl font-bold">
            {t.home.hero.title}
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            {t.home.hero.description}
          </p>
        </div>
        <div className="max-w-xs md:max-w-none relative group">
          {/* Animated background blob */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-opacity duration-1000"></div>
          
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-300 rounded-full opacity-40 animate-bounce-slow"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full opacity-30 animate-bounce-slower"></div>
          
          {/* Main image container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-pink-400/20 group-hover:from-blue-400/30 group-hover:to-pink-400/30 transition-all duration-500"></div>
            <img 
              src={hero} 
              alt="Maternity care" 
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
