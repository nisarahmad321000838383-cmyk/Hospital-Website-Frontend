import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  pageId: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, pageId, selectedPage, setSelectedPage }: Props) => {
  const handleLinkClick = () => {
    setSelectedPage(pageId);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === pageId
          ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
          : 'text-[#1d4d85]'
      } transition font-bold text-lg duration-500 hover:text-[#2b7dad]`}
      href={`#${pageId}`}
      onClick={handleLinkClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
