import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../EmailClient/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar layout component.
 * Acts as a semantic wrapper for the main sidebar navigation.
 * It accepts a className prop, which is used by the parent grid layout
 * to control its position (e.g., spanning multiple rows).
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn(className)}>
      {/* SidebarNav contains the actual content, styling, and logic for the sidebar */}
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
