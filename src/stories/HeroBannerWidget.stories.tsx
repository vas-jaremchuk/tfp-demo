import type { Meta, StoryObj } from '@storybook/react';
import { HeroBannerWidget } from '../components/HeroBannerWidget';
import { mockHeroBannerData, simpleHeroBannerData } from '../data/mockHeroBannerData';

const meta: Meta<typeof HeroBannerWidget> = {
  title: 'Atoms/HeroBannerWidget',
  component: HeroBannerWidget,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A hero banner widget component inspired by the Procrea fertility clinic website. Features a multi-line title with serif and sans-serif typography, and customizable action buttons.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Hero banner data including title and buttons',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with full Procrea data
export const Default: Story = {
  args: {
    data: mockHeroBannerData,
  },
};

// Simple hero banner with minimal content
export const Simple: Story = {
  args: {
    data: simpleHeroBannerData,
  },
};

// Hero banner with custom styling
export const CustomStyled: Story = {
  args: {
    data: {
      title: {
        serif: 'DISCOVER OUR',
        sans: ['INNOVATIVE SOLUTIONS', 'FOR YOUR BUSINESS '],
      },
      buttons: [
        {
          label: 'View Demo',
          href: '/demo',
          variant: 'primary',
        },
        {
          label: 'Contact Sales',
          href: '/contact',
          variant: 'secondary',
          target: '_blank',
        },
      ],
    },
    className: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  },
};

// Hero banner with single button
export const SingleButton: Story = {
  args: {
    data: {
      title: {
        serif: 'GET STARTED',
        sans: ['TODAY', ' '],
      },
      buttons: [
        {
          label: 'Sign Up Now',
          href: '/signup',
          variant: 'primary',
        },
      ],
    },
  },
};

// Hero banner with no buttons (title only)
export const TitleOnly: Story = {
  args: {
    data: {
      title: {
        serif: 'WELCOME TO',
        sans: ['OUR AMAZING', 'PLATFORM '],
      },
      buttons: [],
    },
  },
};
