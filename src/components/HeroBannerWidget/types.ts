export interface ButtonData {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  target?: string;
}

export interface HeroBannerData {
  title: {
    serif: string;
    sans: string[];
  };
  buttons: ButtonData[];
  backgroundImage?: string;
}
