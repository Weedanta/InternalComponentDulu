import React from 'react';

interface SidebarBrandProps {
  isCollapsed?: boolean;
}

export const SidebarBrand: React.FC<SidebarBrandProps> = ({ isCollapsed = false }) => {
  return (
    <div className={`flex items-center gap-2 mb-6 ${isCollapsed ? 'justify-center' : ''}`}>
      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs font-bold">R</span>
      </div>
      {!isCollapsed && (
        <span className="font-semibold text-gray-800">Rabraw</span>
      )}
    </div>
  );
};