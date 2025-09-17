import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonData } from './types';

interface AccordionButtonProps {
  button: ButtonData;
  className?: string;
}

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  button,
  className = ''
}) => {
  const baseClasses = "tfp-button gap-2 justify-center transition-all hover:no-underline active:no-underline focus:no-underline text-xs lg:text-sm py-1 px-4 min-h-11 lg:min-h-14 lg:py-2 lg:px-6 lg:w-auto lg:h-auto rounded-full uppercase flex items-center border";
  
  const variantClasses = button.variant === 'primary' 
    ? "bg-blue-600 text-white border-blue-600 visited:text-white hover:border-black hover:bg-black"
    : "group bg-white text-blue-600 border-gray-300 visited:text-black hover:border-blue-600 hover:bg-blue-600 hover:text-white";

  const textClasses = button.variant === 'primary'
    ? "text-white"
    : "text-blue-600 group-hover:text-white";

  return (
    <div className={className}>
      <a
        href={button.href}
        aria-label={button.label}
        className={`${baseClasses} ${variantClasses}`}
        target={button.target}
      >
        <span className={textClasses}>
          {button.label}
        </span>
        {button.showArrow && (
          <ArrowRight size={20} className="text-current" />
        )}
      </a>
    </div>
  );
};