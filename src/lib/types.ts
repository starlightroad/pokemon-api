export type HTMLTextElement = HTMLHeadingElement | HTMLParagraphElement;

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
  items?: NavItem[];
};

export type TopBarNavConfig = NavItem[];
