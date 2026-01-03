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
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="Maternity care" />
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
