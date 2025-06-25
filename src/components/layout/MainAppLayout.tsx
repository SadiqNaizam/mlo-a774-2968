import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary page structure for the email client.
 * It uses a CSS Grid to create a two-column layout with a fixed sidebar
 * and a main content area that includes a fixed header and a scrollable body.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    // This grid defines the main application structure:
    // - A fixed-width sidebar (256px) that spans both rows.
    // - A flexible main content area (1fr).
    // - A fixed-height header row (64px, from h-16 in TopHeader).
    // - A flexible main content row (1fr) that fills remaining height.
    <div className="grid h-screen grid-cols-[256px_1fr] grid-rows-[64px_1fr] bg-background text-foreground">
      {/* Sidebar is placed in the first column and spans both rows */}
      <Sidebar className="row-span-2" />

      {/* Header is placed in the top-right grid cell */}
      <Header />

      {/* Main content is placed in the bottom-right grid cell and is made scrollable */}
      <main className="overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
