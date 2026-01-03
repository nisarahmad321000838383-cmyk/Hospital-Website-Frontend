import SectionWrapper from '../SectionWrapper';
import Review from './Review';
import { useLanguage } from '@/contexts/LanguageContext';
import user1 from '@/assets/Images/Users/user1.jpg';
import user2 from '@/assets/Images/Users/user2.jpg';
import user3 from '@/assets/Images/Users/user3.jpg';

const Reviews = () => {
  const { t } = useLanguage();
  
  const userImages = [user1, user2, user3];
  
  const reviewsWithImages = t.reviews.reviews.map((review, index) => ({
    ...review,
    img: userImages[index]
  }));
  
  return (
    <SectionWrapper id="reviews">
      <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
        {t.reviews.heading}
      </h3>
      <div className="items-center flex flex-col md:flex-row justify-center gap-5">
        {reviewsWithImages.map((user, index) => (
          <Review key={index} index={index} user={user} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Reviews;
