import ContactDiv from './ContactDiv';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '@/assets/Images/Logo.png';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-[#dbeafe] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold">
          <img width={50} src={Logo} alt="Logo" />
          {t.footer.contact.address.map((address, index) => (
            <p className="my-3" key={index}>
              {address}
            </p>
          ))}
          <p>{t.footer.contact.phone}</p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-bold text-lg">{t.footer.departments.title}</p>
            <ul>
              {t.footer.departments.items.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg">{t.footer.quickLinks.title}</p>
            <ul>
              <li>{t.navigation.links.home}</li>
              <li>{t.navigation.links.doctors}</li>
              <li>{t.navigation.links.services}</li>
              <li>{t.navigation.links.contact}</li>
            </ul>
          </div>
        </div>
        <ContactDiv />
      </div>
    </div>
  );
};

export default Footer;
