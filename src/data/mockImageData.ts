import { ImageWidgetData } from '../components/ImageWidget/types';

export const mockImageData: ImageWidgetData = {
  src: '/image.jpg',
  alt: 'Sample image',
  srcset: '/image.jpg 610w, /image.jpg 570w, /image.jpg 380w, /image.jpg 190w',
};

export const procreaImageData: ImageWidgetData = {
  src: 'https://cdn.procrea.ca/attachments/o80vl3nbp8jns05avuewuh8k-pbl-procreaapril2024-590-1.full.png',
  alt: 'procrea team',
  srcset: 'https://cdn.procrea.ca/attachments/o80vl3nbp8jns05avuewuh8k-pbl-procreaapril2024-590-1.max.png 610w, https://cdn.procrea.ca/attachments/o80vl3nbp8jns05avuewuh8k-pbl-procreaapril2024-590-1.one-half.png 570w, https://cdn.procrea.ca/attachments/o80vl3nbp8jns05avuewuh8k-pbl-procreaapril2024-590-1.one-third.png 380w, https://cdn.procrea.ca/attachments/o80vl3nbp8jns05avuewuh8k-pbl-procreaapril2024-590-1.one-sixth.png 190w',
};
