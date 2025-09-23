import type { Meta, StoryObj } from '@storybook/react';
import { RichTextWidget } from '../components/RichTextWidget';
import { mockRichTextData } from '../data/mockRichTextData';

const meta: Meta<typeof RichTextWidget> = {
  title: 'Components/RichTextWidget',
  component: RichTextWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A rich text widget component that renders HTML content with TFP styling classes.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Rich text data containing HTML content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the wrapper',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with team content
export const Default: Story = {
  args: {
    data: mockRichTextData,
  },
};
