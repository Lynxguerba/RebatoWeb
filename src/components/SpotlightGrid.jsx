import React, { useEffect, useRef } from 'react';

/**
 * SpotlightGrid - An advanced background component featuring two layered grids:
 * 1. A faint, slightly blurred base layer.
 * 2. A sharp, high-contrast spotlight layer revealed by the mouse cursor.
 */
const SpotlightGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      // Update CSS variables directly on the container for high-performance tracking
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      {/* 
        Base Layer: Very faint grid lines.
        Using a hardcoded gray with low opacity to avoid color inheritance issues.
      */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, #888 1px, transparent 1px),
            linear-gradient(to bottom, #888 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 
        Spotlight Layer: Sharp, high-contrast lines.
        Only visible within the radial gradient mask centered on the mouse.
      */}
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-50 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ec4899 1px, transparent 1px),
            linear-gradient(to bottom, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)`,
        }}
      />

      {/* Global alignment rails */}
      <div 
        className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-6 md:px-12 max-w-7xl mx-auto opacity-5"
        style={{
          maskImage: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black, transparent)`,
        }}
      >
        {[...Array(13)].map((_, i) => (
          <div 
            key={i} 
            className="h-full border-r border-zinc-500 last:border-r-0"
          />
        ))}
      </div>
    </div>
  );
};

export default SpotlightGrid;
