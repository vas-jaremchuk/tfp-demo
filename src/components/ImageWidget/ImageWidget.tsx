import React from 'react';
import { ImageWidgetData } from './types';

interface ImageWidgetProps {
  data: ImageWidgetData;
  className?: string;
}

export const ImageWidget: React.FC<ImageWidgetProps> = ({
  data,
  className = '',
}) => {
  return (
    <figure className={`tfp-image-widget__wrapper ${className}`} style={{ margin: 0 }}>
      <img
        className="tfp-image-widget"
        data-apos-test="image-widget"
        srcSet={data.srcset}
        src={data.src}
        alt={data.alt}
      />
    </figure>
  );
};
