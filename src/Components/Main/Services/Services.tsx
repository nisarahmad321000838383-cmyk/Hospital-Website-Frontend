import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';
import { useLanguage } from '@/contexts/LanguageContext';
import prenatalCare from '@/assets/Images/Icons/Neurology.png';
import delivery from '@/assets/Images/Icons/Cardiology.png';
import postnatalCare from '@/assets/Images/Icons/Orthopoedics.png';
import nicu from '@/assets/Images/Icons/Surgery.png';
import breastfeeding from '@/assets/Images/Icons/Dentistry.png';
import gynecology from '@/assets/Images/Icons/Radiology.png';
import fertility from '@/assets/Images/Icons/Urology.png';
import pediatrics from '@/assets/Images/Icons/Medicine.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

const Services = () => {
  const { t } = useLanguage();
  const [SelectService, setSelectService] = useState<SelectedService>(
    SelectedService.Delivery
  );

  const serviceImages = [
    prenatalCare, delivery, postnatalCare, nicu, 
    breastfeeding, gynecology, fertility, pediatrics, seeMoreImage
  ];
  
  const serviceIds = [
    'prenatalcare', 'delivery', 'postnatalcare', 'nicu',
    'breastfeeding', 'gynecology', 'fertility', 'pediatrics', 'seemore'
  ];

  const servicesWithImages = t.services.services.map((service, index) => ({
    ...service,
    img: serviceImages[index],
    id: serviceIds[index]
  }));

  const selectedServiceData = servicesWithImages.find(
    (service) => service.id === SelectService
  );
  
  return (
    <SectionWrapper id="services">
      <h2 className="text-4xl font-bold text-center mb-10">{t.services.heading}</h2>
      <div className=" flex flex-col justify-between lg:flex-row gap-10 lg:gap-5">
        <div className="grid grid-cols-3 gap-5">
          {servicesWithImages?.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={SelectService}
              setSelectService={setSelectService}
            />
          ))}
        </div>
        <div className="lg:min-w-[345px]">
          <h3 className="text-xl xs:text-2xl font-bold mb-6">
            {selectedServiceData?.heading}
          </h3>
          <ul className=" lg:ml-5 min-h-[310px] sm:min-h-[225px] md:min-h-[190px] lg:min-h-[375px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
        </div>
      </div>
      <Banner1 />
    </SectionWrapper>
  );
};

export default Services;
