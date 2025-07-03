import React from 'react';
import { MenuItem } from '../types';

interface SidebarItemProps {
  item: MenuItem;
  isActive: boolean;
  isCollapsed?: boolean;
  onClick: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  item, 
  isActive, 
  isCollapsed = false,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
        ${isActive 
          ? 'bg-teal-500 text-white shadow-md' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }
        ${isCollapsed ? 'justify-center px-2' : ''}
      `}
      title={isCollapsed ? item.label : undefined}
    >
      <span className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`}>
        {item.icon}
      </span>
      {!isCollapsed && (
        <>
          <span className="font-medium text-sm flex-1">
            {item.label}
          </span>
          {item.badge && (
            <span className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-200 text-gray-600'
              }
            `}>
              {item.badge}
            </span>
          )}
        </>
      )}
    </button>
  );
};