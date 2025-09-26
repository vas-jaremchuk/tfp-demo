import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TeamWidgetProps } from './types';

export const TeamWidget: React.FC<TeamWidgetProps> = ({
  data,
  className = '',
  title,
  content,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideWidth = 400 + 56; // slide width + margin

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, data.members.length - 1));
  }, [data.members.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, data.members.length - 1)));
  }, [data.members.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeModal) return; // Don't navigate when modal is open
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(data.members.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, nextSlide, prevSlide, goToSlide, data.members.length]);

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
    const threshold = slideWidth * 0.3; // 30% of slide width
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide > 0) {
        prevSlide();
      } else if (diff < 0 && currentSlide < data.members.length - 1) {
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

  const closeModal = () => {
    setActiveModal(null);
  };

  const DecorativeSvg = () => (
    <svg className="text-primary-medium absolute right-0 bottom-0 max-w-full" width="248" height="217" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3059_3777)" fill="currentColor">
        <path d="M266.198 211.126c-2.914-3.117-5.364-5.814-7.891-8.442-2.897-3.025-5.903-5.949-8.774-8.999-13.937-14.778-24.944-31.444-32.203-50.46-4.564-11.947-7.073-24.358-7.191-37.148-.042-4.643.581-9.336 1.373-13.92.766-4.481 3.68-7.793 7.494-10.11 3.63-2.207 6.072-5.367 8.084-8.94 3.386-6.015.657-12.528-6.122-13.926-2.694-.557-5.709-.413-8.429.151-4.126.86-6.998 4.525-7.006 8.906 0 3.151.379 6.437 1.347 9.428 2.29 7.069-.076 12.849-4.455 18.098-3.132 3.75-7.596 4.988-12.101 3.758-7.469-2.04-14.745-4.744-22.105-7.187-.202-.068-.32-.346-.741-.826.648-.885 1.305-1.87 2.046-2.797 7.79-9.749 16.438-18.654 25.508-27.231 10.475-9.9 21.145-19.666 29.92-31.209a159.587 159.587 0 0 0 5.313-7.456c1.028-1.525 2.063-1.845 3.63-.741 6.509 4.591 13.187 8.973 19.553 13.758 4.11 3.093 8.034 6.513 11.613 10.204 11.916 12.284 21.171 26.22 27.149 42.414 4.506 12.208 7.04 24.712 7.731 37.577.303 5.595-.488 11.274-1.103 16.885-.522 4.718-1.331 9.428-2.324 14.071-1.803 8.417-4.725 16.48-9.011 23.953-3.714 6.48-7.596 12.875-11.815 19.034-2.619 3.816-5.995 7.119-9.49 11.172v-.017ZM53.903 228.07c-3.048.472-4.43-1.719-5.962-3.025-9.583-8.131-18.535-16.927-25.794-27.24-4.21-5.973-7.772-12.352-11.023-18.923-4.084-8.266-7.158-16.86-9.162-25.808-.96-4.28-1.179-8.745-1.533-13.152-1.456-18.199.792-35.859 7.706-52.862 9.254-22.757 24.311-40.948 43.747-55.726.185-.143.438-.194.926-.404.573.64 1.247 1.306 1.82 2.056 10.837 14.373 23.545 26.843 38.147 37.409 7.654 5.544 16.025 9.69 24.901 12.84 4.623 1.643 8.724 4.07 11.974 7.752 1.095 1.247 1.929 2.721 3.04 4.314-1.347.817-2.231 1.449-3.2 1.929a13353.58 13353.58 0 0 1-39.789 19.665c-1.086.539-2.29.978-3.486 1.146-2.46.354-4.135-.556-4.927-2.915-1.819-5.393-2.72-10.844.784-15.95 2.096-3.058 3.073-6.563 3.099-10.018.033-3.74-.927-7.583-4.918-9.588-3.285-1.651-8.775-.918-11.765 1.938-1.574 1.508-2.93 3.345-4 5.258-2.391 4.254-1.557 8.324 1.373 12.031a94.762 94.762 0 0 0 4.825 5.603c5.255 5.687 5.541 12.596 4.943 19.716-.219 2.544-.446 5.114-.918 7.616-2.652 14.021-5.103 28.083-8.16 42.01-3.73 17.036-8 33.955-12.025 50.932-.252 1.062-.396 2.149-.623 3.396Z"></path>
        <path d="M208.463 248.459c-.749.607-1.069 1.054-1.49 1.18-6.813 1.963-13.6 4.027-20.472 5.755-3.478.876-7.141 1.002-10.686 1.668-11.874 2.224-23.874 1.567-35.832 1.516-4.589-.016-9.187-.328-13.76-.766-3.099-.295-6.189-.91-9.229-1.626-5.482-1.281-10.981-2.545-16.362-4.171-5.878-1.778-11.714-3.766-17.407-6.041-7.225-2.89-14.18-6.353-20.505-10.995-3.276-2.402-3.335-2.25-1.499-6.328 3.158-7.01 6.585-13.927 9.314-21.097a2305.851 2305.851 0 0 0 18.779-51.303c1.835-5.19 2.762-10.701 4.11-16.068.142-.581.327-1.154.64-2.224 1.49.371 2.888.59 4.176 1.07 10.956 4.112 21.869 8.35 32.867 12.352 2.013.733 2.746 1.71 3.369 3.724 1.583 5.148 3.343 10.287 5.6 15.166 10.231 22.159 25.356 40.72 43.267 57.074 7.63 6.968 15.798 13.338 23.731 19.977.353.295.715.59 1.406 1.146l-.017-.009ZM135.773.463c5.364-.16 10.72-.413 16.084-.463 3.528-.026 7.057.244 10.585.379 15.747 1.129 31.048 4.406 45.836 9.875 6.055 2.24 11.924 4.97 18.434 7.709-2.476 3.016-4.405 5.645-6.611 8.021-10.164 10.953-21.112 21.072-33.364 29.675-5.238 3.673-10.788 6.909-16.228 10.287a19.788 19.788 0 0 1-3.646 1.795c-3.655 1.348-7.267 1.66-10.383-1.272-3.217-3.025-4.345-6.867-3.571-11.105.236-1.306 1.39-2.595 2.426-3.573 2.585-2.46 5.431-4.65 8.008-7.12 6.729-6.428 5.28-14.651-3.124-18.771-8.724-4.28-17.912.893-19.301 10.928-.809 5.83.674 11.222 3.503 16.311 1.44 2.595 2.602 5.25 2.568 8.358-.042 3.657-1.701 6.176-4.96 7.49-2.147.869-4.471 1.627-6.762 1.753-11.537.649-22.955 0-33.777-4.617-8.816-3.766-16.816-8.88-23.764-15.444C72 45.27 66.661 39.448 61.238 33.727c-1.575-1.668-2.838-3.631-4.489-5.788C80.951 11.694 107.293 3.04 135.773.463ZM263.2 214.353a112.738 112.738 0 0 1-20.817 17.045c-7.385 4.693-15.107 8.872-23.006 13.472-3.529-3.185-7.023-6.235-10.392-9.42-4.556-4.305-9.002-8.720-13.499-13.076a148.14 148.14 0 0 1-19.276-22.841c-.202-.287-.252-.675-.412-1.113 2.13-2.03 4.227-4.103 6.4-6.083 8.109-7.423 15.739-15.267 21.937-24.417 1.549-2.292 3.275-2.427 5.111-.455 12.388 13.304 26.341 24.881 40.388 36.339 4.345 3.547 8.859 6.892 13.574 10.557l-.008-.008ZM163.006 99.075c7.731 1.323 14.948 3.227 21.516 7.153 9.44 5.637 14.964 13.742 15.806 24.797.944 12.377-.825 24.206-6.593 35.429-4.253 8.274-9.095 16.067-15.343 22.968-1.626 1.795-3.419 3.429-5.407 5.417-3.116-5.459-5.709-10.599-7.511-16.05a223.076 223.076 0 0 1-5.28-18.814c-2.737-11.653-3.369-23.558-3.722-35.472-.262-8.939 2.298-17.23 6.534-25.428ZM131.933 105.327c-.708 7.077-1.769 13.405-1.861 19.749-.093 6.218.791 12.445 1.271 19.118-1.423-.177-2.737-.228-3.991-.514-13.6-3.092-26.19-8.611-38.022-15.908-.522-.32-1.06-.648-1.49-1.07-1.423-1.407-1.364-2.906.261-4.035.893-.624 1.962-1.02 2.99-1.424 8.825-3.48 17.667-6.918 26.492-10.406 3.436-1.356 6.813-2.864 10.249-4.238 1.212-.488 2.501-.775 4.101-1.264v-.008Z"></path>
      </g>
    </svg>
  );

  return (
    <section data-team-widget="" className={`team-widget my-16 md:my-28 ${className}`}>
      <div className="main-container">
        {(title || content) && (
          <div className="mb-8 md:mb-16 container mx-auto px-4">
            <div className="apos-area">
              <div data-rich-text="" className="tfp-rich-text">
                {title && <h3>{title}</h3>}
                {content && <p className="paragraph">{content}</p>}
              </div>
            </div>
          </div>
        )}
        
        <div className="team-widget__team px-4 md:px-14">
          <div 
            className="tfp-team-members tfp-carousel overflow-hidden"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Team Members Carousel */}
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-300 ease-in-out'}`}
              style={{ 
                transform: `translateX(${translateX}px)`,
                width: `${data.members.length * (400 + 56)}px`
              }}
            >
              {data.members.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex-shrink-0 w-[400px] h-auto group block relative min-h-[484px] sm:min-h-[600px] border border-primary-light bg-primary-white pt-12 px-8 ${
                    member.image ? 'flex flex-col justify-between' : ''
                  }`}
                  onClick={() => setActiveModal(member.id)}
                  style={{ marginRight: index < data.members.length - 1 ? '56px' : '0', cursor: 'pointer' }}
                >
                  <div>
                    <p className="tfp-h5-serif mb-2">{member.name}</p>
                    {member.credentials && (
                      <p className="tfp-surtitres mb-4">{member.credentials}</p>
                    )}
                    <p className="mb-4">{member.title}</p>
                  </div>
                  
                  {member.image ? (
                    <div className="relative">
                      <img
                        srcSet={member.image.srcset}
                        src={member.image.src}
                        alt={member.image.alt}
                        width="1200"
                        height="1500"
                        className="object-cover w-full h-[360px] sm:h-[460px]"
                      />
                    </div>
                  ) : (
                    member.hasDecorativeSvg && <DecorativeSvg />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="tfp-carousel-navigation justify-center flex flex-row container w-fit gap-5 mx-auto items-center mt-12">
              <button
                onClick={prevSlide}
                className="tfp-carousel-button-prev aspect-square w-auto select-none bg-transparent text-primary-dark justify-center text-sm gap-2 size-11 rounded-full flex items-center border border-primary-medium transition-all hover:text-primary-white hover:border-accent-medium hover:bg-accent-medium visited:text-primary-black active:text-primary-black hover:no-underline"
                aria-label="Previous slide"
                disabled={currentSlide === 0}
              >
                <span className="icon-arrow-left text-3xl leading-none">←</span>
              </button>
              
              <div className="tfp-carousel-fraction text-primary-black whitespace-nowrap text-2xs">
                {currentSlide + 1} / {data.members.length}
              </div>
              
              <div className="tfp-carousel-pagination w-auto">
                {data.members.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full mx-1 transition-colors ${
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
                disabled={currentSlide === data.members.length - 1}
              >
                <span className="icon-arrow-right text-3xl leading-none">→</span>
              </button>
            </div>

            {/* Modals */}
            <div className="tfp-team-members__modals">
              {data.members.map((member) => (
                <div
                  key={`modal-${member.id}`}
                  className={`fixed inset-0 flex items-center justify-center z-50 ${
                    activeModal === member.id ? 'block' : 'hidden'
                  }`}
                  style={{ display: activeModal === member.id ? 'flex' : 'none' }}
                >
                  <div className="fixed inset-0 bg-gray-800 opacity-75" onClick={closeModal}></div>
                  
                  <div
                    className="bg-primary-light overflow-hidden transform transition-all sm:max-w-3xl sm:w-full py-14 px-4 md:px-10 z-10 max-h-full sm:max-h-[90vh] overflow-y-auto [&_.apos-area]:flex [&_.apos-area]:flex-col [&_.apos-area]:gap-6 [&_.tfp-buttons>div]:max-w-full [&_.tfp-buttons>div]:w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <header className="w-full flex justify-end">
                      <button
                        onClick={closeModal}
                        aria-label="Close modal"
                        className="text-primary-black justify-center gap-2 w-11 h-11 rounded-full flex items-center transition-all hover:border-accent-medium"
                      >
                        <span className="icon-cross text-3xl leading-none block">×</span>
                      </button>
                    </header>
                    
                    <div>
                      {member.image && (
                        <img
                          srcSet={member.image.srcset}
                          src={member.image.src}
                          alt={member.image.alt}
                          width="1200"
                          height="1500"
                          className="object-cover w-32 h-32 mb-4 object-top"
                        />
                      )}
                      
                      <p className="tfp-h5-serif mb-2">{member.name}</p>
                      {member.credentials && (
                        <p className="tfp-surtitres mb-4">{member.credentials}</p>
                      )}
                      <p className="mb-4">{member.title}</p>
                    </div>
                    
                    {member.bio && (
                      <div className="apos-area">
                        <div data-rich-text="" className="tfp-rich-text">
                          <p className="paragraph">{member.bio}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
