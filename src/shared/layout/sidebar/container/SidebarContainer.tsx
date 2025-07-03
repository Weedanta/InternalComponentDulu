import React from 'react';
import { SidebarContainerProps } from '../types/sidebar.types';
import { SidebarProvider, useSidebarContext } from '../hooks/useSidebarState';
import { SidebarBrand } from '../component/SidebarBrand';
import { SidebarItem } from '../component/SidebarItem';
import { SidebarToggle } from '../component/SidebarToggle';

// Internal Sidebar Component
const SidebarInternal: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { 
    isCollapsed, 
    menuItems, 
    toggleCollapse, 
    setActiveMenu 
  } = useSidebarContext();

  const handleMenuClick = (item: any) => {
    setActiveMenu(item.id);
    // Handle navigation here if needed
    console.log(`Navigating to: ${item.label} (${item.href})`);
  };

  return (
    <aside className={`
      relative bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
      ${isCollapsed ? 'w-20' : 'w-72'}
      ${className}
    `}>
      {/* Toggle Button */}
      <SidebarToggle 
        isCollapsed={isCollapsed} 
        onToggle={toggleCollapse} 
      />

      {/* Sidebar Content */}
      <div className="h-full p-6 overflow-hidden">
        {/* Brand */}
        <SidebarBrand isCollapsed={isCollapsed} />

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={item.isActive || false}
              isCollapsed={isCollapsed}
              onClick={handleMenuClick}
            />
          ))}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-xl p-4 border border-purple-100">
              <h4 className="font-semibold text-sm text-gray-800 mb-1">Need Help?</h4>
              <p className="text-xs text-gray-600 mb-3">Check our documentation</p>
              <button className="w-full bg-purple-500 text-white text-xs py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Get Support
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

// Main Container Component with Provider
export const SidebarContainer: React.FC<SidebarContainerProps> = ({ 
  children,
  className = '',
  defaultCollapsed = false,
  defaultActiveMenu = 'dashboard'
}) => {
  return (
    <SidebarProvider 
      defaultCollapsed={defaultCollapsed}
      defaultActiveMenu={defaultActiveMenu}
    >
      <SidebarInternal className={className} />
      {children}
    </SidebarProvider>
  );
};

// Hook to access sidebar state from outside
export const useSidebar = () => {
  return useSidebarContext();
};