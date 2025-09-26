import React, { useEffect, useRef, useState } from 'react';
import { CarouselWidgetProps } from './types';

export const CarouselWidget: React.FC<CarouselWidgetProps> = ({
  data,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
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
    ? "swiper-slide sm:w-[400px] group block border-b border-primary-main relative [&_.apos-area>*]:mb-6 [&_img]:object-cover [&_img]:w-full [&_img]:h-[216px] [&_img]:sm:h-[270px]"
    : "w-full md:w-4/12 group block border-b border-primary-main relative [&_.apos-area>*]:mb-6 [&_img]:object-cover [&_img]:w-full [&_img]:h-[216px] [&_img]:sm:h-[270px]";

  const sectionClasses = isCarousel 
    ? "tfp-carousel overflow-x-clip swiper-container my-16 md:my-28"
    : "my-16 md:my-28";

  const wrapperClasses = isCarousel
    ? "swiper-wrapper lg:px-0 px-4 my-12"
    : "flex flex-col md:flex-row items-baseline container mx-auto gap-8 md:gap-14 px-4 my-12";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length);
  };

  return (
    <section className={`${sectionClasses} ${className}`}>
      <div className={wrapperClasses}>
        {data.slides.map((item, index) => {
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
                <h4>{item.slideContent.richText.title}</h4>
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
                  <span className="icon-arrow-right-up text-3xl leading-none">↗</span>
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
      
      {isCarousel && (
        <div className="tfp-carousel-navigation justify-center flex flex-row container w-fit px-4 gap-5 mx-auto items-center">
          <button
            onClick={prevSlide}
            className="tfp-carousel-button-prev aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline"
          >
            <span className="icon-arrow-left text-3xl leading-none">←</span>
          </button>
          <div className="tfp-carousel-fraction text-primary-dark whitespace-nowrap">
            {currentSlide + 1} / {data.slides.length}
          </div>
          <div className="tfp-carousel-pagination w-auto">
            {data.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentSlide ? 'bg-accent-medium' : 'bg-primary-medium'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="tfp-carousel-button-next aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline"
          >
            <span className="icon-arrow-right text-3xl leading-none">→</span>
          </button>
        </div>
      )}
    </section>
  );
};
