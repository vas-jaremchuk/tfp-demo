import type { Meta, StoryObj } from '@storybook/react';
import { ButtonWidget } from '../components/ButtonWidget';
import { mockButtonData } from '../data/mockButtonData';

const meta: Meta<typeof ButtonWidget> = {
  title: 'Atoms/ButtonWidget',
  component: ButtonWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button widget component that renders TFP styled buttons with primary and secondary variants.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Button data including label, href, and variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with team button
export const Default: Story = {
  args: {
    data: mockButtonData,
  },
};
