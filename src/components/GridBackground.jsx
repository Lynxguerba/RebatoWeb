import React from 'react';

/**
 * GridBackground - A dedicated background layer that generates a crisp, repeating 1px line grid.
 * Uses Pattern 1: Tailwind arbitrary background image value with CSS linear-gradients.
 */
const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* 
        The grid is created using two linear gradients: 
        one for vertical lines and one for horizontal lines.
        Adjust the '40px' to change the grid size.
        The colors use low opacity to remain subtle.
      */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(228, 228, 231, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(228, 228, 231, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* 
        Optional: Dark mode adjustment. 
        In Tailwind v4, we can use the 'dark' variant or just rely on CSS variables.
        Since we are using inline styles for the gradient, we can use a separate div for dark mode
        or use a CSS variable for the color.
      */}
      <div 
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(63, 63, 70, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(63, 63, 70, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 
        Pattern 2: Global vertical alignment rails.
        Stretched fixed structural container with subtle right borders.
      */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-6 md:px-12 max-w-7xl mx-auto">
        {[...Array(13)].map((_, i) => (
          <div 
            key={i} 
            className="h-full border-r border-zinc-200/20 dark:border-zinc-800/30 last:border-r-0"
          />
        ))}
      </div>

      {/* Radial fade to make the grid less prominent at the edges if desired */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-color)_100%)] opacity-40" />
    </div>
  );
};

export default GridBackground;
