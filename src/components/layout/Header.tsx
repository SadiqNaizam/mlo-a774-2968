import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../EmailClient/TopHeader';

interface HeaderProps {
  className?: string;
}

/**
 * Header layout component.
 * Acts as a semantic wrapper for the top header bar.
 * The actual content and styling are encapsulated within the TopHeader component.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(className)}>
      {/* TopHeader contains the actual content, styling, and logic for the header */}
      <TopHeader />
    </header>
  );
};

export default Header;
