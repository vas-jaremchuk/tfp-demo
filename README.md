# TFT Demo - Accordion Widget

A React accordion widget component inspired by the Procrea Fertility website, built with TypeScript, Tailwind CSS v4, and Storybook.

## Features

- 🎯 **Faithful Recreation**: Matches the design and functionality of the original Procrea accordion
- ⚡ **Smooth Animations**: Elegant expand/collapse transitions
- 📱 **Responsive Design**: Works perfectly on all device sizes
- 🎨 **Customizable**: Easy to modify content, styling, and behavior
- 🔧 **TypeScript**: Full type safety and IntelliSense support
- 📚 **Storybook**: Interactive component documentation and testing

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

### Build

```bash
# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

## Component Structure

```
src/
├── components/
│   └── AccordionWidget/
│       ├── AccordionWidget.tsx      # Main accordion container
│       ├── AccordionItem.tsx        # Individual accordion item
│       ├── AccordionButton.tsx      # Action buttons within items
│       ├── types.ts                 # TypeScript interfaces
│       └── index.ts                 # Barrel exports
├── data/
│   └── mockAccordionData.ts         # Sample data from Procrea
├── stories/
│   └── AccordionWidget.stories.tsx  # Storybook stories
└── index.css                        # Global styles with Tailwind
```

## Usage

### Basic Usage

```tsx
import { AccordionWidget } from './components/AccordionWidget';
import { mockAccordionData } from './data/mockAccordionData';

function App() {
  return (
    <AccordionWidget
      title="Your Accordion Title"
      subtitle="SECTION SUBTITLE"
      description="Description text for your accordion section"
      items={mockAccordionData}
    />
  );
}
```

### Custom Data Structure

```tsx
const customItems = [
  {
    id: 'item-1',
    title: 'Custom Item Title',
    content: 'Your custom content goes here...',
    buttons: [
      {
        label: 'Learn More',
        href: '/learn-more',
        variant: 'secondary',
        showArrow: true
      },
      {
        label: 'Get Started',
        href: '/get-started',
        variant: 'primary',
        showArrow: true
      }
    ]
  }
];
```

## Storybook

The project includes comprehensive Storybook documentation with multiple story variants:

- **Default**: Full Procrea-inspired accordion with all features
- **Simple**: Streamlined version with fewer items
- **Minimal**: Basic accordion without header section
- **Single Item**: Accordion with just one expandable item
- **Without Buttons**: Text-only accordion items

Access Storybook at `http://localhost:6006` after running `npm run storybook`.

## Styling

The component uses Tailwind CSS v4 with a custom design system inspired by Procrea:

- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Colors**: Blue-based palette matching Procrea branding
- **Animations**: Smooth CSS transitions and keyframe animations
- **Responsive**: Mobile-first responsive design

## Technologies Used

- **React 19**: Latest React with modern features
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS v4**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Storybook 8**: Component development and documentation
- **Vite**: Fast build tool and dev server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests and stories
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- Design inspiration from [Procrea Fertility](https://procrea.ca/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [Storybook](https://storybook.js.org/)