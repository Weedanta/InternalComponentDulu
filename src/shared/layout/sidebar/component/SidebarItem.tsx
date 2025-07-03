import React from 'react';
import { SidebarItemProps } from '../types/sidebar.types';

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  item, 
  isActive, 
  isCollapsed, 
  onClick 
}) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left 
        transition-all duration-300 ease-in-out
        ${isActive 
          ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25' 
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
        }
        ${isCollapsed ? 'justify-center px-3' : ''}
      `}
      title={isCollapsed ? item.label : undefined}
    >
      {/* Icon */}
      <span className={`
        flex-shrink-0 transition-colors duration-200
        ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}
      `}>
        {item.icon}
      </span>

      {/* Label and Badge */}
      {!isCollapsed && (
        <>
          <span className="font-medium text-sm flex-1 transition-colors duration-200">
            {item.label}
          </span>
          {item.badge && (
            <span className={`
              px-2 py-1 rounded-full text-xs font-medium transition-all duration-200
              ${isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
              }
            `}>
              {item.badge}
            </span>
          )}
        </>
      )}

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
      )}
    </button>
  );
};