export interface TeamMember {
  id: string;
  name: string;
  credentials?: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    srcset?: string;
  };
  bio?: string;
  hasDecorativeSvg?: boolean;
}

export interface TeamWidgetData {
  members: TeamMember[];
}

export interface TeamWidgetProps {
  data: TeamWidgetData;
  className?: string;
  title?: string;
  content?: string;
}
