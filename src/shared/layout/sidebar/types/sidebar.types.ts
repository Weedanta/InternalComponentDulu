import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  href: string;
  badge?: string | number;
  isActive?: boolean;
}

export interface SidebarState {
  isCollapsed: boolean;
  activeMenuId: string;
}

export interface SidebarActions {
  toggleCollapse: () => void;
  setActiveMenu: (menuId: string) => void;
  setCollapsed: (collapsed: boolean) => void;
}

export interface SidebarContextType extends SidebarState, SidebarActions {
  menuItems: MenuItem[];
}

export interface SidebarContainerProps {
  children?: ReactNode;
  className?: string;
  defaultCollapsed?: boolean;
  defaultActiveMenu?: string;
}

export interface SidebarItemProps {
  item: MenuItem;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: (item: MenuItem) => void;
}

export interface SidebarBrandProps {
  isCollapsed: boolean;
  logoUrl?: string;
  title?: string;
}

export interface SidebarToggleProps {
  isCollapsed: boolean;
  onToggle: () => void;
}