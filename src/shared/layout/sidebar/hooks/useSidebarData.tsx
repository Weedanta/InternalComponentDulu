import { MenuItem } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserCheck, 
  Award, 
  Coffee 
} from 'lucide-react';

export const useSidebarData = () => {
  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      href: '/dashboard'
    },
    {
      id: 'admin',
      label: 'Daftar Admin',
      icon: <Users size={20} />,
      href: '/admin',
      badge: '12'
    },
    {
      id: 'kegiatan',
      label: 'Daftar Kegiatan',
      icon: <Calendar size={20} />,
      href: '/kegiatan',
      badge: 'New'
    },
    {
      id: 'panitia',
      label: 'Daftar Panitia',
      icon: <UserCheck size={20} />,
      href: '/panitia'
    },
    {
      id: 'kestari',
      label: 'Kestari',
      icon: <Award size={20} />,
      href: '/kestari'
    },
    {
      id: 'konsumsi',
      label: 'Konsumsi',
      icon: <Coffee size={20} />,
      href: '/konsumsi'
    }
  ];

  return { menuItems };
};