import Header from "@/shared/layout/header/header";
import { SidebarContainer, useSidebar } from '@/shared/layout/sidebar';


export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <SidebarContainer 
        defaultCollapsed={false}
        defaultActiveMenu="dashboard"
        className="min-h-screen"
      />
      {children}
      
    </>
  );
}
