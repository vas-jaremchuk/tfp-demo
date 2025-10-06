import type { Meta, StoryObj } from '@storybook/react';
import { CarouselWidget } from '../components/CarouselWidget';
import { mockCarouselData, mockCarouselDataWithNavigation, simpleCarouselData } from '../data/mockCarouselData';

const meta: Meta<typeof CarouselWidget> = {
  title: 'Molecules/CarouselWidget',
  component: CarouselWidget,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A carousel widget component that displays slides with images and rich text content. When there are more than 3 slides, it shows navigation controls with pagination and arrow buttons.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Carousel data containing an array of slides with images and content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the carousel wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with 3 slides (no navigation)
export const Default: Story = {
  args: {
    data: mockCarouselData,
  },
};

// Carousel with navigation (more than 3 slides)
export const WithNavigation: Story = {
  args: {
    data: mockCarouselDataWithNavigation,
    className: 'px-4 md:px-14',
  },
};

// Simple carousel with minimal content
export const Simple: Story = {
  args: {
    data: simpleCarouselData,
  },
};

// Single slide carousel
export const SingleSlide: Story = {
  args: {
    data: {
      slides: [mockCarouselData.slides[0]],
    },
  },
};

// Carousel without links (no clickable slides)
export const WithoutLinks: Story = {
  args: {
    data: {
      slides: mockCarouselData.slides.map(slide => ({
        ...slide,
        link: undefined,
      })),
    },
  },
};

// Custom styled carousel
// export const CustomStyled: Story = {
//   args: {
//     data: mockCarouselData,
//     className: 'bg-gray-50 rounded-lg p-4',
//   },
// };
