import { SelectedPage } from '@/Components/Shared/Types';
import Link from './Link';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ selectedPage, setSelectedPage }: Props) => {
  const { t } = useLanguage();
  
  const links = [
    { label: t.navigation.links.home, page: SelectedPage.Home },
    { label: t.navigation.links.doctors, page: SelectedPage.Doctors },
    { label: t.navigation.links.services, page: SelectedPage.Services },
    { label: t.navigation.links.contact, page: SelectedPage.Contact },
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.page}
          page={link.label}
          pageId={link.page}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </>
  );
};

export default Links;
