import type { Meta, StoryObj } from '@storybook/react';
import { AccordionWidget } from '../components/AccordionWidget';
import { mockAccordionData } from '../data/mockAccordionData';
import { AccordionData } from '../components/AccordionWidget/types';

const meta: Meta<typeof AccordionWidget> = {
  title: 'Molecules/AccordionWidget',
  component: AccordionWidget,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An accordion widget component inspired by the Procrea fertility clinic website. Features expandable sections with smooth animations and customizable content.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title of the accordion section',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle displayed above the main title',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the title',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items to display',
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
    title: 'Une approche holistique et une vaste gamme de services en plein cœur de la ville de Québec',
    subtitle: 'NoS SERVICES',
    description: 'Chez Procrea Fertilité, nous offrons une vaste gamme de services personnalisés.\nNotre équipe dévouée vous aidera à déterminer le plan de traitement qui vous convient le mieux.',
    items: mockAccordionData,
  },
};

// Simple accordion with fewer items
const simpleItems: AccordionData[] = [
  {
    id: 'item-1',
    title: 'Getting Started',
    content: 'Learn the basics of our platform and how to get started with your first project.',
    buttons: [
      {
        label: 'Read Documentation',
        href: '/docs',
        variant: 'secondary',
        showArrow: true
      },
      {
        label: 'Start Tutorial',
        href: '/tutorial',
        variant: 'primary',
        showArrow: true
      }
    ]
  },
  {
    id: 'item-2',
    title: 'Advanced Features',
    content: 'Explore advanced features and capabilities to enhance your workflow.',
    buttons: [
      {
        label: 'Learn More',
        href: '/advanced',
        variant: 'secondary',
        showArrow: true
      }
    ]
  },
  {
    id: 'item-3',
    title: 'Support & Help',
    content: 'Get help from our support team or browse our comprehensive knowledge base.',
    buttons: [
      {
        label: 'Contact Support',
        href: '/support',
        variant: 'primary',
        showArrow: false
      }
    ]
  }
];

export const Simple: Story = {
  args: {
    title: 'Frequently Asked Questions',
    subtitle: 'HELP CENTER',
    description: 'Find answers to common questions and get the help you need.',
    items: simpleItems,
  },
};

// Minimal accordion without header
export const MinimalNoHeader: Story = {
  args: {
    items: simpleItems.slice(0, 2),
  },
};

// Single item accordion
export const SingleItem: Story = {
  args: {
    title: 'Single Section',
    items: [simpleItems[0]],
  },
};

// Accordion with no buttons
const itemsWithoutButtons: AccordionData[] = [
  {
    id: 'info-1',
    title: 'Company Information',
    content: 'We are a leading technology company focused on innovation and excellence in software development.',
  },
  {
    id: 'info-2',
    title: 'Our Mission',
    content: 'To provide cutting-edge solutions that empower businesses to achieve their goals through technology.',
  },
  {
    id: 'info-3',
    title: 'Contact Details',
    content: 'You can reach us at info@company.com or call us at +1 (555) 123-4567 during business hours.',
  }
];

export const WithoutButtons: Story = {
  args: {
    title: 'About Our Company',
    subtitle: 'INFORMATION',
    items: itemsWithoutButtons,
  },
};