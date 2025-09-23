import { HeroBannerData } from '../components/HeroBannerWidget/types';

export const mockHeroBannerData: HeroBannerData = {
  title: {
    serif: 'ON VOUS ACCOMPAGNE',
    sans: ['À CHAQUE ÉTAPE', 'DE VOTRE PARCOURS '],
  },
  backgroundImage: '/hero.jpg',
  buttons: [
    {
      label: 'Prendre Rendez-Vous',
      href: 'https://procrea.ca/prendre-rendez-vous',
      variant: 'primary',
    },
    {
      label: 'portail patient',
      href: 'https://procreaquebec.engagedmd.com/login',
      variant: 'secondary',
      target: '_blank',
    },
    {
      label: 'Pour les médecins référents',
      href: 'https://procrea.ca/medecins-referents',
      variant: 'secondary',
    },
  ],
};

export const simpleHeroBannerData: HeroBannerData = {
  title: {
    serif: 'WELCOME TO',
    sans: ['OUR PLATFORM', 'GET STARTED '],
  },
  buttons: [
    {
      label: 'Get Started',
      href: '/get-started',
      variant: 'primary',
    },
    {
      label: 'Learn More',
      href: '/about',
      variant: 'secondary',
    },
  ],
};
