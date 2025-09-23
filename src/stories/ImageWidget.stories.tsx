import type { Meta, StoryObj } from '@storybook/react';
import { ImageWidget } from '../components/ImageWidget';
import { mockImageData } from '../data/mockImageData';

const meta: Meta<typeof ImageWidget> = {
  title: 'Components/ImageWidget',
  component: ImageWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An image widget component that displays responsive images with srcset support. Follows the TFP image widget markup pattern.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Image data including src, alt text, and optional srcset',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with local image
export const Default: Story = {
  args: {
    data: mockImageData,
  },
};
