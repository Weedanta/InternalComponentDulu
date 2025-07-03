import React from 'react';
import { SidebarBrandProps } from '../types/sidebar.types';

export const SidebarBrand: React.FC<SidebarBrandProps> = ({ 
  isCollapsed, 
  logoUrl,
  title = 'Rabraw' 
}) => {
  return (
    <div className={`flex items-center gap-3 mb-8 ${isCollapsed ? 'justify-center' : ''}`}>
      <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
        {logoUrl ? (
          <img src={logoUrl} alt={title} className="w-6 h-6" />
        ) : (
          <span className="text-white text-sm font-bold">R</span>
        )}
      </div>
      {!isCollapsed && (
        <div className="flex flex-col">
          <span className="font-bold text-xl text-gray-800">{title}</span>
          <span className="text-xs text-gray-500">Admin Panel</span>
        </div>
      )}
    </div>
  );
};