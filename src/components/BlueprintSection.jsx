import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlueprintSection - A wrapper component that aligns with the global grid rails.
 */
export const BlueprintSection = ({ children, className = "" }) => {
  return (
    <section className={`relative border-l border-r border-zinc-200/20 dark:border-zinc-800/30 ${className}`}>
      {/* Top and Bottom Horizontal Borders (Blueprint Style) */}
      <div className="absolute top-0 left-[-1px] right-[-1px] h-[1px] bg-zinc-200/20 dark:border-zinc-800/30" />
      <div className="absolute bottom-0 left-[-1px] right-[-1px] h-[1px] bg-zinc-200/20 dark:border-zinc-800/30" />
      
      {/* Corner "L" markers (Blueprint Aesthetic) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-500/50 -translate-x-[1px] -translate-y-[1px]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pink-500/50 translate-x-[1px] -translate-y-[1px]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pink-500/50 -translate-x-[1px] translate-y-[1px]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pink-500/50 translate-x-[1px] translate-y-[1px]" />

      <div className="p-8 md:p-12">
        {children}
      </div>
    </section>
  );
};

/**
 * BlueprintHero - A Hero component following the blueprint aesthetic.
 */
export const BlueprintHero = () => {
  return (
    <div className="space-y-12">
      <BlueprintSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-pink-500/30 text-pink-500 bg-pink-500/5">
              System.Initialize(Blueprint)
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              STRUCTURAL <br />
              <span className="text-zinc-400 dark:text-zinc-600">AESTHETICS</span>
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-light">
              Designing digital experiences with mathematical precision and visible structural integrity. 
              The grid is not just a tool; it's the design.
            </p>
            
            <div className="mt-10 flex gap-4">
              <button className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-sm font-medium hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white dark:hover:text-white transition-all duration-300">
                Explore Work
              </button>
              <button className="px-8 py-3 border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:border-pink-500 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square lg:aspect-video bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden"
          >
            {/* Inner blueprint lines for the image area */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
            
            <div className="z-10 text-center">
              <div className="text-4xl font-mono text-zinc-300 dark:text-zinc-700 font-bold mb-2">IMAGE_RESERVED</div>
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">1080 x 720 px</div>
            </div>

            {/* Scanning line effect */}
            <div className="absolute inset-x-0 h-[1px] bg-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.5)] top-0 animate-[scan_4s_linear_infinite]" />
          </motion.div>
        </div>
      </BlueprintSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <BlueprintSection className="border-t-0 md:border-r-0">
          <h3 className="text-sm font-mono text-pink-500 mb-4 uppercase tracking-tighter">01. Precision</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Pixel-perfect alignment with the underlying mathematical grid structure.</p>
        </BlueprintSection>
        <BlueprintSection className="border-t-0 md:border-r-0 border-l-0 md:border-l-0">
          <h3 className="text-sm font-mono text-pink-500 mb-4 uppercase tracking-tighter">02. Visibility</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Revealing the internal logic of the layout as a core design element.</p>
        </BlueprintSection>
        <BlueprintSection className="border-t-0 border-l-0 md:border-l-0">
          <h3 className="text-sm font-mono text-pink-500 mb-4 uppercase tracking-tighter">03. Logic</h3>
          <p className="text-sm text-zinc-500 leading-relaxed">Every element has a designated coordinate in the blueprint.</p>
        </BlueprintSection>
      </div>
    </div>
  );
};
