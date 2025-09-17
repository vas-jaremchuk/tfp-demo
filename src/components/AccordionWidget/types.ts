export interface ButtonData {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  target?: string;
  showArrow?: boolean;
}

export interface AccordionData {
  id: string;
  title: string;
  content: string;
  buttons?: ButtonData[];
}