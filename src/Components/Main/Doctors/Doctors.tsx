import Banner2 from '@/assets/Images/banner2.png';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';
import { useLanguage } from '@/contexts/LanguageContext';
import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

const Doctors = () => {
  const { t } = useLanguage();
  
  const doctorImages = [doc1, doc2, doc3, doc4];
  
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-bold text-center mb-20">
        {t.doctors.heading}
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {t.doctors.doctors.map((doctor, index) => (
          <Doctor key={index} doc={{ ...doctor, img: doctorImages[index] }} />
        ))}
      </div>
      <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {t.doctors.aboutHeading}
      </h4>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {t.doctors.aboutDescription}
      </div>
      <img className="m-auto" src={Banner2} />
    </SectionWrapper>
  );
};

export default Doctors;
