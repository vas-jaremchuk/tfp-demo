export interface QuickLinkData {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface QuickLinksWidgetData {
  links: QuickLinkData[];
  className?: string;
}
