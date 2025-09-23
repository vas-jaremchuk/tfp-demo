import React from 'react';
import { HeroBannerData } from './types';

interface HeroBannerWidgetProps {
  data: HeroBannerData;
  className?: string;
}

export const HeroBannerWidget: React.FC<HeroBannerWidgetProps> = ({
  data,
  className = '',
}) => {
  return (
    <section 
      data-hero-widget="" 
      className={`tfp-hero tfp-hero-main tfp-hero py-5 md:py-12 px-4 md:min-h-[840px] [&_*]:text-left ${className}`}
      style={data.backgroundImage ? {
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      <div className="container mx-auto mb-[170px] md:mb-12">
        <div className="apos-area">
          <div className="tfp-heading container mx-auto font-serif text-light">
            <div className="apos-area">
              <div data-rich-text="" className="headings-text">
                <h1>
                  <span className="tfp-h1-serif">{data.title.serif}</span>
                </h1>
                {data.title.sans.map((line, index) => (
                  <p key={index}>
                    <span className="tfp-h1-sans-serif">{line}</span>
                    {index === data.title.sans.length - 1 && (
                      <>
                        <br />
                        <span className="tfp-h1-serif">DE FERTILITÉ</span>
                      </>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <div className="apos-area">
          <div className="tfp-buttons">
            <div className="max-w-fit inline-block">
              {data.buttons.map((button, index) => (
                <div key={index} className="mb-4">
                  <a
                    aria-label={button.label}
                    href={button.href}
                    target={button.target || '_self'}
                    className={`
                      tfp-button gap-2 justify-center transition-all hover:no-underline active:no-underline focus:no-underline text-4xs lg:text-2xs py-1 px-4 min-h-11 lg:min-h-14 lg:py-2 lg:px-6 lg:w-auto lg:h-auto rounded-full uppercase flex items-center border
                      ${button.variant === 'primary' 
                        ? 'bg-accent-medium text-primary-white border-accent-medium visited:text-primary-white hover:border-primary-black hover:bg-primary-black' 
                        : 'group bg-primary-white text-accent-medium border-primary-medium visited:text-primary-black hover:border-accent-medium hover:bg-accent-medium hover:text-primary-white'
                      }
                    `}
                  >
                    <span className={`
                      ${button.variant === 'primary' 
                        ? 'text-primary-white' 
                        : 'text-accent-medium group-hover:text-primary-white'
                      }
                    `}>
                      {button.label}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
