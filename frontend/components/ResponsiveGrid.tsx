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
  mobileCols?: number;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ 
  children, 
  desktopCols = 1, 
  mobileCols = 1, 
  className = '' 
}) => {
  return (
    <div 
      className={`grid-item cols-${desktopCols} mobile-cols-${mobileCols} ${className}`}
    >
      {children}
    </div>
  );
};

export { ResponsiveGrid, GridItem };