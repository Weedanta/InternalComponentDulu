export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
  badge?: string | number;
}

export interface SidebarProps {
  items?: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
  className?: string;
  isCollapsed?: boolean;
}
