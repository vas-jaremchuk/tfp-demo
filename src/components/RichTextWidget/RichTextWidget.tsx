import React from 'react';
import { RichTextWidgetData } from './types';

interface RichTextWidgetProps {
  data: RichTextWidgetData;
  className?: string;
}

export const RichTextWidget: React.FC<RichTextWidgetProps> = ({
  data,
  className = '',
}) => {
  return (
    <div 
      data-rich-text="" 
      className={`tfp-rich-text ${className}`}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
};
