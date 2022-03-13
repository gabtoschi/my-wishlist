export interface HeaderLink {
  label: string;
  icon?: JSX.Element;
}

export interface HeaderProps {
  companyName: string;
  links?: HeaderLink[];
}
