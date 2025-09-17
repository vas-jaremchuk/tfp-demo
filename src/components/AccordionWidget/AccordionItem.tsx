import React from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { AccordionData } from './types';
import { AccordionButton } from './AccordionButton';

interface AccordionItemProps {
  item: AccordionData;
  isOpen: boolean;
  onToggle: () => void;
  isLast?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
  isLast = false
}) => {
  return (
    <div className={`border-t border-t-gray-300 ${isLast ? 'border-b border-b-gray-300' : ''}`}>
      <button
        onClick={onToggle}
        className={`block py-4 group w-full text-left ${isOpen ? 'font-black' : ''}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <div className="container mx-auto flex flex-row justify-between items-center">
          <h4 className="w-9/12 text-xl md:text-2xl font-serif">
            {item.title}
          </h4>
          <span className="bg-white text-gray-800 justify-center gap-2 size-14 rounded-full flex items-center border border-gray-300 transition-all group-hover:text-white group-hover:border-blue-600 group-hover:bg-blue-600">
            {isOpen ? (
              <Minus size={24} className="text-current" />
            ) : (
              <Plus size={24} className="text-current" />
            )}
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div
          id={`accordion-content-${item.id}`}
          className="overflow-hidden container mx-auto py-4 animate-in slide-in-from-top-2 duration-300"
        >
          <div className="md:flex gap-6">
            <div className="space-y-4">
              <p className="paragraph text-gray-800">
                {item.content}
              </p>
              
              {item.buttons && item.buttons.length > 0 && (
                <div className="tfp-buttons">
                  <div className="max-w-fit inline-block space-y-4">
                    {item.buttons.map((button, index) => (
                      <AccordionButton
                        key={index}
                        button={button}
                        className={index === 0 ? 'mb-4' : ''}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};