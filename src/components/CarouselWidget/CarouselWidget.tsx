import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselWidgetProps } from './types';

export const CarouselWidget: React.FC<CarouselWidgetProps> = ({
  data,
  className = '',
}) => {
  const [isCarousel, setIsCarousel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const slidesLength = 3;

  useEffect(() => {
    setIsCarousel(data.slides.length > slidesLength);
  }, [data.slides.length]);

  const getPath = (link?: any): string => {
    if (!link) return '';
    
    if (link.linkType === 'page' && link._page && link._page[0]) {
      return link._page[0]._url;
    } else if (link.linkType === 'article' && link._article && link._article[0]) {
      return link._article[0]._url;
    } else if (link.linkType === 'custom') {
      return link.customUrl || '';
    } else if (link.linkType === 'file' && link._file && link._file[0]) {
      return link._file[0]._url;
    }
    return '';
  };

  const cardClasses = isCarousel 
    ? "flex-shrink-0 w-[400px] mr-8 group block border-b border-primary-main relative [&_.apos-area>*]:mb-6 [&_img]:object-cover [&_img]:w-full [&_img]:h-[216px] [&_img]:sm:h-[270px]"
    : "w-full md:w-4/12 group block border-b border-primary-main relative [&_.apos-area>*]:mb-6 [&_img]:object-cover [&_img]:w-full [&_img]:h-[216px] [&_img]:sm:h-[270px]";

  const sectionClasses = isCarousel 
    ? "tfp-carousel overflow-x-clip swiper-container my-16 md:my-28"
    : "my-16 md:my-28";

  const wrapperClasses = isCarousel
    ? "flex lg:px-0 px-4 my-12 transition-transform duration-300 ease-in-out"
    : "flex flex-col md:flex-row items-baseline container mx-auto gap-8 md:gap-14 px-4 my-12";

  if (!isCarousel) {
    return (
      <section className={`${sectionClasses} ${className}`}>
        <div className={wrapperClasses}>
          {data.slides.map((item) => {
            const path = getPath(item.link);
            const slideElement = (
              <div key={item.id} className="apos-area">
                <figure className="tfp-image-widget__wrapper" style={{ margin: 0 }}>
                  <img
                    className="tfp-image-widget"
                    loading="lazy"
                    data-apos-test="image-widget"
                    srcSet={item.slideContent.image.srcset}
                    src={item.slideContent.image.src}
                    alt={item.slideContent.image.alt}
                  />
                </figure>
                <div data-rich-text="" className="tfp-rich-text">
                  <h4 className="tfp-h4-serif">{item.slideContent.richText.title}</h4>
                  <p className="paragraph">{item.slideContent.richText.content}</p>
                </div>
              </div>
            );

            if (path) {
              return (
                <a
                  key={item.id}
                  href={path}
                  className={cardClasses}
                  target={item.link?.target === '_blank' ? '_blank' : '_self'}
                >
                  {slideElement}
                  <div className="bg-primary-black icon-button text-primary-white justify-center gap-2 size-14 rounded-full flex items-center border border-primary-black transition-all group-hover:border-accent-medium group-hover:bg-accent-medium absolute top-[140px] sm:top-[190px] right-[20px]">
                    <span className="icon-arrow-right-up text-3xl leading-none"></span>
                  </div>
                </a>
              );
            } else {
              return (
                <div key={item.id} className={cardClasses}>
                  {slideElement}
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  }

  return (
    <section className={`${sectionClasses} ${className}`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.activeIndex);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        navigation={{
          nextEl: '.tfp-carousel-button-next',
          prevEl: '.tfp-carousel-button-prev',
        }}
        pagination={{
          el: '.tfp-carousel-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper-wrapper-5d3c1f93e17f1fa3"
      >
        {data.slides.map((item) => {
          const path = getPath(item.link);
          const slideElement = (
            <div className="apos-area">
              <figure className="tfp-image-widget__wrapper" style={{ margin: 0 }}>
                <img
                  className="tfp-image-widget"
                  loading="lazy"
                  data-apos-test="image-widget"
                  srcSet={item.slideContent.image.srcset}
                  src={item.slideContent.image.src}
                  alt={item.slideContent.image.alt}
                />
              </figure>
              <div data-rich-text="" className="tfp-rich-text">
                <h4 className="tfp-h4-serif">{item.slideContent.richText.title}</h4>
                <p className="paragraph">{item.slideContent.richText.content}</p>
              </div>
            </div>
          );

          return (
            <SwiperSlide key={item.id} className={cardClasses}>
              {path ? (
                <a
                  href={path}
                  className="block"
                  target={item.link?.target === '_blank' ? '_blank' : '_self'}
                >
                  {slideElement}
                  <div className="bg-primary-black icon-button text-primary-white justify-center gap-2 size-14 rounded-full flex items-center border border-primary-black transition-all group-hover:border-accent-medium group-hover:bg-accent-medium absolute top-[140px] sm:top-[190px] right-[20px]">
                    <span className="icon-arrow-right-up text-3xl leading-none"></span>
                  </div>
                </a>
              ) : (
                slideElement
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      <div className="tfp-carousel-navigation justify-center flex flex-row container w-fit gap-5 mx-auto items-center">
        <div 
          className={`tfp-carousel-button-prev aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline${isBeginning ? ' swiper-button-disabled' : ''}`}
          tabIndex={isBeginning ? -1 : 0}
          role="button" 
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-5d3c1f93e17f1fa3"
          aria-disabled={isBeginning}
        >
          <span className="icon-arrow-left text-3xl leading-none"></span>
        </div>
        <div className="tfp-carousel-fraction text-primary-black whitespace-nowrap text-2xs">
          {currentSlide + 1} / {data.slides.length}
        </div>
        <div className="tfp-carousel-pagination w-auto swiper-pagination-bullets swiper-pagination-horizontal"></div>
        <div 
          className={`tfp-carousel-button-next aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline${isEnd ? ' swiper-button-disabled' : ''}`}
          tabIndex={isEnd ? -1 : 0}
          role="button" 
          aria-label="Next slide"
          aria-controls="swiper-wrapper-5d3c1f93e17f1fa3"
          aria-disabled={isEnd}
        >
          <span className="icon-arrow-right text-3xl leading-none"></span>
        </div>
      </div>
    </section>
  );
};
