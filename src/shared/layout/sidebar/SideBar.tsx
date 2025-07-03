import React from 'react';
import { SidebarProps } from './types';
import { SidebarItem } from './components/SidebarItem';
import { SidebarBrand } from './components/SidebarBrand';

export const Sidebar: React.FC<SidebarProps> = ({ 
  items = [], 
  onItemClick, 
  className = '',
  isCollapsed = false
}) => {
  return (
    <div className={`
      bg-white border-r border-gray-200 transition-all duration-300
      ${isCollapsed ? 'w-16' : 'w-64'}
      ${className}
    `}>
      <div className="p-4">
        <SidebarBrand isCollapsed={isCollapsed} />
        
        <nav className="space-y-2">
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={item.isActive || false}
              isCollapsed={isCollapsed}
              onClick={() => onItemClick?.(item)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};