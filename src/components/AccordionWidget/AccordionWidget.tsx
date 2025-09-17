import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { AccordionData } from './types';

interface AccordionWidgetProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items: AccordionData[];
  className?: string;
}

export const AccordionWidget: React.FC<AccordionWidgetProps> = ({
  title,
  subtitle,
  description,
  items,
  className = ''
}) => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setOpenTab(openTab === itemId ? null : itemId);
  };

  return (
    <section className={`tfp-accordion my-16 md:my-28 mx-auto px-4 container ${className}`}>
      <div className="md:w-8/12 mx-auto">
        {(title || subtitle || description) && (
          <div className="mb-8 md:mb-16 text-center">
            {subtitle && (
              <p className="paragraph">
                <span className="tfp-surtitres text-blue-600">{subtitle}</span>
              </p>
            )}
            {title && (
              <h2 className="tfp-h2-serif text-3xl md:text-4xl font-serif mb-4">
                {title}
              </h2>
            )}
            {description && (
              <div className="tfp-text-lg text-lg text-gray-700 space-y-2">
                {description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="accordion-container">
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openTab === item.id}
              onToggle={() => handleToggle(item.id)}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};