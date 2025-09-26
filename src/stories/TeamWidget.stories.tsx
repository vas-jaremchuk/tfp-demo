import type { Meta, StoryObj } from '@storybook/react';
import { TeamWidget } from '../components/TeamWidget';
import { mockTeamData, mockTeamDataSimple } from '../data/mockTeamData';

const meta: Meta<typeof TeamWidget> = {
  title: 'Molecules/TeamWidget',
  component: TeamWidget,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockTeamData,
    title: 'Une équipe dévouée et à votre écoute',
    content: 'Notre équipe est composée de spécialistes en fertilité qui cumulent des années d\'expérience dans le domaine. Toujours là pour répondre à vos préoccupations et offrir des conseils adaptés, elle fait de votre bien-être sa priorité absolue, tout au long de votre parcours chez nous.',
  },
};

export const WithImages: Story = {
  args: {
    data: mockTeamData,
    title: 'Meet Our Team',
    content: 'Our dedicated team of professionals is here to support you every step of the way.',
  },
  name: 'With Team Member Images',
};

export const Simple: Story = {
  args: {
    data: mockTeamDataSimple,
    title: 'Our Team',
    content: 'Get to know the people behind our success.',
  },
  name: 'Simple Team Layout',
};

export const SingleMember: Story = {
  args: {
    data: {
      members: [mockTeamData.members[0]]
    },
  },
  name: 'Single Team Member',
};

export const WithoutImages: Story = {
  args: {
    data: {
      members: mockTeamData.members.map(member => ({
        ...member,
        image: undefined,
        hasDecorativeSvg: true
      }))
    },
  },
  name: 'Without Images (Decorative SVG)',
};

export const MixedContent: Story = {
  args: {
    data: {
      members: [
        mockTeamData.members[0], // With image
        {
          ...mockTeamData.members[1],
          image: undefined,
          hasDecorativeSvg: true
        }, // Without image, with SVG
        mockTeamData.members[2], // With image
        {
          ...mockTeamData.members[3],
          hasDecorativeSvg: true
        } // Without image, with SVG
      ]
    },
  },
  name: 'Mixed Content (Images & SVG)',
};
