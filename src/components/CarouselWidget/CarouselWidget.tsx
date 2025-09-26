import React, { useEffect, useState, useRef, useCallback } from 'react';
import { CarouselWidgetProps } from './types';

export const CarouselWidget: React.FC<CarouselWidgetProps> = ({
  data,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesLength = 3;
  const slideWidth = 400 + 32; // slide width + gap

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, data.slides.length - 1));
  }, [data.slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, data.slides.length - 1)));
  }, [data.slides.length]);

  // Touch/Mouse drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    setCurrentX(clientX);
    const diff = clientX - startX;
    const newTranslateX = -currentSlide * slideWidth + diff;
    setTranslateX(newTranslateX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = slideWidth * 0.3;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide > 0) {
        prevSlide();
      } else if (diff < 0 && currentSlide < data.slides.length - 1) {
        nextSlide();
      }
    }
    
    setTranslateX(-currentSlide * slideWidth);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Update translateX when currentSlide changes
  useEffect(() => {
    if (!isDragging) {
      setTranslateX(-currentSlide * slideWidth);
    }
  }, [currentSlide, slideWidth, isDragging]);

  return (
    <section className={`${sectionClasses} ${className}`}>
      <div 
        ref={carouselRef}
        className={wrapperClasses}
        style={isCarousel ? { 
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
          cursor: isDragging ? 'grabbing' : 'grab'
        } : {}}
        onMouseDown={isCarousel ? handleMouseDown : undefined}
        onMouseMove={isCarousel ? handleMouseMove : undefined}
        onMouseUp={isCarousel ? handleMouseUp : undefined}
        onMouseLeave={isCarousel ? handleMouseLeave : undefined}
        onTouchStart={isCarousel ? handleTouchStart : undefined}
        onTouchMove={isCarousel ? handleTouchMove : undefined}
        onTouchEnd={isCarousel ? handleTouchEnd : undefined}
      >
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
            aria-label="Previous slide"
            disabled={currentSlide === 0}
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
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentSlide ? 'bg-accent-medium' : 'bg-primary-medium'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="tfp-carousel-button-next aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline"
            aria-label="Next slide"
            disabled={currentSlide === data.slides.length - 1}
          >
            <span className="icon-arrow-right text-3xl leading-none">→</span>
          </button>
        </div>
      )}
    </section>
  );
};
