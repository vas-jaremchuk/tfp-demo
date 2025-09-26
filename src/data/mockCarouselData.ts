import { CarouselWidgetData } from '../components/CarouselWidget/types';

export const mockCarouselData: CarouselWidgetData = {
  slides: [
    {
      id: 'slide-1',
      link: {
        linkType: 'custom',
        customUrl: 'https://example.com/fertility-apps',
        target: '_blank'
      },
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Fertility apps on mobile phone',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Quatre applications de fertilité pour vous aider à concevoir',
          content: 'La technologie a fait tellement de progrès que les femmes utilisent aujourd\'hui des applications de fertilité pour augmenter leurs chances ...'
        }
      }
    },
    {
      id: 'slide-2',
      link: {
        linkType: 'custom',
        customUrl: 'https://example.com/ivf-steps',
        target: '_blank'
      },
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Professional holding a test tube',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Les différentes étapes de la Fécondation in Vitro',
          content: 'Qu\'est-ce que la Fécondation in vitro ? Littéralement, cette technique consiste à recueillir un maximum d\'ovocytes à maturité ...'
        }
      }
    },
    {
      id: 'slide-3',
      link: {
        linkType: 'custom',
        customUrl: 'https://example.com/male-health',
        target: '_blank'
      },
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Healthy lifestyle concept',
          srcset: '/placeholder.jpg 938w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'L\'impact des habitudes de vie sur la santé masculine et l\'infertilité',
          content: 'La fertilité est un reflet de la santé en général. L\'alcool, les drogues, le manque d\'exercice, le stress, le surplus de poids ...'
        }
      }
    }
  ]
};

// Mock data for carousel with more than 3 slides (will show navigation)
export const mockCarouselDataWithNavigation: CarouselWidgetData = {
  slides: [
    ...mockCarouselData.slides,
    {
      id: 'slide-4',
      link: {
        linkType: 'custom',
        customUrl: 'https://example.com/nutrition',
        target: '_blank'
      },
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Healthy nutrition for fertility',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Nutrition et fertilité: les aliments à privilégier',
          content: 'Une alimentation équilibrée joue un rôle crucial dans la fertilité. Découvrez les nutriments essentiels pour optimiser vos chances de conception ...'
        }
      }
    },
    {
      id: 'slide-5',
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Stress management and fertility',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Gestion du stress et impact sur la fertilité',
          content: 'Le stress chronique peut affecter négativement la fertilité. Apprenez des techniques de relaxation et de gestion du stress pour améliorer votre bien-être ...'
        }
      }
    }
  ]
};

// Simple carousel data without links
export const simpleCarouselData: CarouselWidgetData = {
  slides: [
    {
      id: 'simple-1',
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Medical consultation',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Consultation médicale',
          content: 'Prenez rendez-vous avec nos spécialistes pour un suivi personnalisé de votre parcours de fertilité.'
        }
      }
    },
    {
      id: 'simple-2',
      slideContent: {
        image: {
          src: '/placeholder.jpg',
          alt: 'Laboratory testing',
          srcset: '/placeholder.jpg 1600w, /placeholder.jpg 1140w, /placeholder.jpg 760w, /placeholder.jpg 570w, /placeholder.jpg 380w, /placeholder.jpg 190w'
        },
        richText: {
          title: 'Tests de laboratoire',
          content: 'Des analyses complètes pour évaluer votre fertilité et identifier les meilleures options de traitement.'
        }
      }
    }
  ]
};
