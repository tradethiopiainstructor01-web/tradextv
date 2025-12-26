import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  className?: string;
}

const ResponsiveGrid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div className={`responsive-grid ${className}`}>
      {children}
    </div>
  );
};

interface GridItemProps {
  children: ReactNode;
  desktopCols?: number;
  tabletCols?: number;
  mobileCols?: number;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ 
  children, 
  desktopCols = 1, 
  tabletCols = 2, // Default to 2 columns on tablet
  mobileCols = 4, // Default to full width on mobile
  className = '' 
}) => {
  return (
    <div 
      className={`grid-item cols-${desktopCols} tablet-cols-${tabletCols} mobile-cols-${mobileCols} ${className}`}
    >
      {children}
    </div>
  );
};

export { ResponsiveGrid, GridItem };