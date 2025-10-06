import type { Meta, StoryObj } from '@storybook/react';
import { QuickLinksWidget } from '../components/QuickLinksWidget';
import { mockQuickLinksData } from '../data/mockQuickLinksData';

const meta: Meta<typeof QuickLinksWidget> = {
  title: 'Atoms/QuickLinksWidget',
  component: QuickLinksWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A quick links widget component that displays a list of navigation links with arrow icons and hover effects.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Quick links data containing an array of link objects',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with Procrea quick links
export const Default: Story = {
  args: {
    data: mockQuickLinksData,
  },
};

// Single link case
export const SingleLink: Story = {
  args: {
    data: {
      links: [
        {
          label: "Get Started",
          href: "/get-started",
          ariaLabel: "Get Started with our platform",
        },
      ],
    },
  },
};
