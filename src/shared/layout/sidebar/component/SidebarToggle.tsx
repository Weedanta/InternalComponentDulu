import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SidebarToggleProps } from '../types/sidebar.types';

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ 
  isCollapsed, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        absolute -right-3 top-8 z-50 w-6 h-6 bg-white border border-gray-200 
        rounded-full flex items-center justify-center shadow-md
        hover:shadow-lg transition-all duration-200 hover:bg-gray-50
        ${isCollapsed ? 'rotate-180' : ''}
      `}
      title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      {isCollapsed ? (
        <ChevronRight size={14} className="text-gray-600" />
      ) : (
        <ChevronLeft size={14} className="text-gray-600" />
      )}
    </button>
  );
};