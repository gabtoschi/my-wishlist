export interface HeaderLink {
  label: string;
  icon?: JSX.Element;
  internalLink?: string;
}

export interface HeaderProps {
  companyName: string;
  links?: HeaderLink[];
}
