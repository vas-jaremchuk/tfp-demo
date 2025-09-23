import React from 'react';
import { QuickLinksWidgetData } from './types';

interface QuickLinksWidgetProps {
  data: QuickLinksWidgetData;
  className?: string;
}

export const QuickLinksWidget: React.FC<QuickLinksWidgetProps> = ({
  data,
  className = '',
}) => {
  return (
    <div className={`tfp-quick-links ${className}`}>
      {data.links.map((link, index) => (
        <div key={index} className="my-5">
          <a 
            aria-label={link.ariaLabel || link.label}
            href={link.href}
            className="group inline-flex items-center"
          >
            <div className="bg-primary-white icon-button text-accent-medium justify-center size-14 rounded-full inline-flex items-center border border-primary-medium transition-all group-hover:border-accent-medium group-hover:bg-accent-medium group-visited:text-accent-medium group-hover:text-primary-white group-active:text-primary-white group-hover:no-underline group-focus:no-underline mr-4 flex-none">
              <span className="icon-arrow-right text-3xl leading-none"></span>
            </div>
            <span className="text-accent-medium text-xs md:text-base font-sans-serif no-underline uppercase">
              {link.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};
