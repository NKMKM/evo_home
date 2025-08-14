import React from 'react';
import { useTranslation } from 'react-i18next';
import left_decoration from '../../assets/images/leftside_black_decoration.png';
import right_decoration from '../../assets/images/rightside_black_decoration.png';
import golden_star from '../../assets/icons/golden_star.png';
import gray_star from '../../assets/icons/gray_star.png';
import avatar from '../../assets/icons/avatar.png';
import first_review_first_image from '../../assets/images/reviews_images/first_review/first_review_first_image.png';
import first_review_second_image from '../../assets/images/reviews_images/first_review/first_review_second_image.png';
import first_review_third_image from '../../assets/images/reviews_images/first_review/first_review_third_image.png';
import second_review_first_image from '../../assets/images/reviews_images/second_review/second_review_first_image.jpg';
import second_review_second_image from '../../assets/images/reviews_images/second_review/second_review_second_image.jpg';
import second_review_third_image from '../../assets/images/reviews_images/second_review/second_review_third_image.jpg';
import third_review_first_image from '../../assets/images/reviews_images/third_review/third_review_first_image.png';
import third_review_second_image from '../../assets/images/reviews_images/third_review/third_review_second_image.png';
import third_review_third_image from '../../assets/images/reviews_images/third_review/third_review_third_image.png';

const Reviews = () => {
  const { t } = useTranslation('home/Reviews');
  const selectedLang = localStorage.getItem('language') || 'en';

  return (
    
    <main className={`home-reviews-bg-image w-full bg-cover px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-6 sm:gap-8 lg:gap-10 ${selectedLang === 'it' ? 'pb-10 sm:pb-12 lg:pb-16' : ''}`}>
      <header className="w-full lg:flex lg:flex-row lg:justify-between max-w-[1641px] mx-auto my-10 px-4 sm:px-6  lg:px-0">
        <img src={left_decoration} alt="left decoration" loading="lazy" className="w-[120px] sm:w-[180px] lg:w-[276px] h-auto hidden lg:block" />
        <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-[50px] left-[20px] text-center">{t('h')}</h2>
        <img src={right_decoration} alt="right decoration" loading="lazy" className="w-[120px] sm:w-[180px] lg:w-[276px] h-auto hidden lg:block" />
      </header>
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-[32px] italic font-light text-center max-w-[600px] mx-auto">{t('p')}</p>
      <section className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between w-full max-w-[1641px] mx-auto gap-y-15 sm:gap-y-15">
        {[
          {
            name: 'Marco Bianchi',
            date: '05.03.2024, 10:15',
            stars: [golden_star, golden_star, golden_star, golden_star, gray_star],
            text: 'first_review',
            images: [first_review_first_image, first_review_second_image, first_review_third_image],
            size: 'w-full sm:max-w-[453px] h-auto min-h-[380px] sm:min-h-[450px]',
          },
          {
            name: 'Matteo Romano',
            date: '12.02.2024, 14:37',
            stars: [golden_star, golden_star, golden_star, golden_star, golden_star],
            text: 'second_review',
            images: [second_review_first_image, second_review_second_image, second_review_third_image],
            size: `w-full sm:max-w-[450px] sm:left-[335px] lg:left-0 ${selectedLang === 'it' ? 'min-h-[380px] sm:min-h-[380px]' : 'min-h-[380px] sm:min-h-[450px]'}`,
          },
          {
            name: 'Valentina Russo',
            date: '22.03.2024, 18:52',
            stars: [golden_star, golden_star, golden_star, golden_star, golden_star],
            text: 'third_review',
            images: [third_review_first_image, third_review_second_image, third_review_third_image],
            size: 'w-full sm:max-w-[453px] h-auto min-h-[380px] sm:min-h-[380px]',
          },
        ].map((review, index) => (
          <div key={index} className={`relative flex flex-col ${review.size} bg-white p-4 sm:p-6 lg:p-8 shadow-2xl rounded-[10px] gap-5 sm:gap-6 bottom-3`}>
            <div className="flex flex-row gap-3 sm:gap-4 bottom-5">
              <div className="bg-gray-300 rounded-full w-10 sm:w-12 lg:w-[80px] h-10 sm:h-12 lg:h-[80px]">
                <img src={avatar} alt="avatar" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className="font-semibold text-sm sm:text-base lg:text-lg">{review.name}</h2>
                <p className="text-xs sm:text-sm lg:text-base">{review.date}</p>
                <ul className="flex flex-row gap-1 sm:gap-2">
                  {review.stars.map((star, i) => (
                    <li key={i} className="w-3 sm:w-4 lg:w-[14px] h-3 sm:h-4 lg:h-[14px]">
                      <img src={star} alt="star" loading="lazy" className="w-full h-full" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-[15px]">{t(review.text)}</p>
            <ul className="flex flex-row justify- gap-2 sm:gap-3 lg:gap-4">
              {review.images.map((img, i) => (
                <li key={i} className="w-[120px] sm:w-[120px] lg:w-[167px] h-[120px] sm:h-[120px] lg:h-[132px] bg-gray-200 rounded-md overflow-hidden">
                  <img 
                    src={img} 
                    alt={`review-${index + 1}-${i + 1}`} 
                    className="w-full h-full rounded-md object-cover" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#f3f4f6';
                    }}
                  />
                </li>
              ))}
            </ul>
            <div className="absolute bottom-[-30px] sm:bottom-[-40px] lg:bottom-[-50px] right-4 sm:right-6 lg:right-8 w-0 h-0 border-l-[40px] sm:border-l-[50px] lg:border-l-[60px] border-l-transparent border-r-0 border-r-transparent border-t-[40px] sm:border-t-[50px] lg:border-t-[60px] border-white" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Reviews;