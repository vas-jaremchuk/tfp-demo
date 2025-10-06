import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', '*'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8f9fa',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#212529',
        },
      ],
    },
  },
};

export default preview;