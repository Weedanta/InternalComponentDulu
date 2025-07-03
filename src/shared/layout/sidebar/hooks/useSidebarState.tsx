'use client';
import { useState, useCallback, useContext, createContext, ReactNode } from 'react';
import { useSidebarData } from './UseSidebarData';
import type { SidebarContextType, SidebarState } from '../types/sidebar.types';

// Context for sharing sidebar state
const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarContext = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within SidebarProvider');
  }
  return context;
};

// Hook for sidebar state management
export const useSidebarState = (
  defaultCollapsed: boolean = false,
  defaultActiveMenu: string = 'dashboard'
) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [activeMenuId, setActiveMenuId] = useState(defaultActiveMenu);
  const { menuItems } = useSidebarData(); // ✅ Gunakan hook yang sudah diimport

  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  const setActiveMenu = useCallback((menuId: string) => {
    setActiveMenuId(menuId);
  }, []);

  const setCollapsed = useCallback((collapsed: boolean) => {
    setIsCollapsed(collapsed);
  }, []);

  // Add active state to menu items
  const menuItemsWithActiveState = menuItems.map(item => ({
    ...item,
    isActive: item.id === activeMenuId
  }));

  return {
    // State
    isCollapsed,
    activeMenuId,
    menuItems: menuItemsWithActiveState,
    
    // Actions
    toggleCollapse,
    setActiveMenu,
    setCollapsed
  };
};

// Provider component
export const SidebarProvider: React.FC<{ 
  children: ReactNode;
  defaultCollapsed?: boolean;
  defaultActiveMenu?: string;
}> = ({ 
  children, 
  defaultCollapsed = false, 
  defaultActiveMenu = 'dashboard' 
}) => {
  const sidebarState = useSidebarState(defaultCollapsed, defaultActiveMenu);

  return (
    <SidebarContext.Provider value={sidebarState}>
      {children}
    </SidebarContext.Provider>
  );
};