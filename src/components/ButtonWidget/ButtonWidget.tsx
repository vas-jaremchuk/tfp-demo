import React from 'react';
import { ButtonWidgetData } from './types';

interface ButtonWidgetProps {
  data: ButtonWidgetData;
  className?: string;
}

export const ButtonWidget: React.FC<ButtonWidgetProps> = ({
  data,
  className = '',
}) => {
  const baseClasses = "tfp-button gap-2 justify-center transition-all hover:no-underline active:no-underline focus:no-underline text-4xs lg:text-2xs py-1 px-4 min-h-11 lg:min-h-14 lg:py-2 lg:px-6 lg:w-auto lg:h-auto rounded-full uppercase flex items-center border";
  
  const variantClasses = data.variant === 'secondary' 
    ? "group bg-primary-white text-accent-medium border-primary-medium visited:text-primary-black hover:border-accent-medium hover:bg-accent-medium hover:text-primary-white"
    : "bg-accent-medium text-primary-white border-accent-medium visited:text-primary-white hover:border-primary-black hover:bg-primary-black";

  const spanClasses = data.variant === 'secondary'
    ? "text-accent-medium group-hover:text-primary-white"
    : "text-primary-white";

  return (
    <div className={`tfp-buttons ${className}`}>
      <div className="max-w-fit inline-block">
        <div className="">
          <a
            aria-label={data.label}
            href={data.href}
            target={data.target || '_self'}
            className={`${baseClasses} ${variantClasses}`}
          >
            <span className={spanClasses}>
              {data.label}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
