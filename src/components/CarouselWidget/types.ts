export interface CarouselLink {
  linkType: 'page' | 'article' | 'custom' | 'file';
  customUrl?: string;
  target?: string;
  _page?: Array<{ _url: string }>;
  _article?: Array<{ _url: string }>;
  _file?: Array<{ _url: string }>;
}

export interface CarouselSlide {
  id: string;
  link?: CarouselLink;
  slideContent: {
    image: {
      src: string;
      alt: string;
      srcset?: string;
    };
    richText: {
      title: string;
      content: string;
    };
  };
}

export interface CarouselWidgetData {
  slides: CarouselSlide[];
}

export interface CarouselWidgetProps {
  data: CarouselWidgetData;
  className?: string;
}
