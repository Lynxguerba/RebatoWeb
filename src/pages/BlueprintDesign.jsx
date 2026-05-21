import React from 'react';
import { BlueprintHero, BlueprintSection } from '../components/BlueprintSection';
import { motion } from 'framer-motion';

const BlueprintDesign = () => {
  return (
    <div className="py-12">
      <BlueprintHero />
      
      <div className="mt-24 space-y-24">
        {/* Project Section with Blueprint Style */}
        <section>
          <div className="flex justify-between items-end mb-8 px-4">
            <h2 className="text-3xl font-bold tracking-tighter">FEATURED_PROJECTS</h2>
            <div className="text-xs font-mono text-zinc-400">OFFSET_X: [0.00]</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <BlueprintSection key={i} className="group cursor-pointer">
                <div className="relative aspect-video mb-6 bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 px-2 py-1 bg-zinc-900 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    PRJ_{String(i).padStart(3, '0')}
                  </div>
                  <div className="h-full w-full flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-mono text-xl">
                    PROJECT_PREVIEW_{i}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Project Terminal {i}</h3>
                <p className="text-sm text-zinc-500 mb-6">Implementing high-performance structural components with React and Tailwind CSS.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-zinc-200 dark:border-zinc-800">REACT</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-zinc-200 dark:border-zinc-800">TYPESCRIPT</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-zinc-200 dark:border-zinc-800">TAILWIND</span>
                </div>
              </BlueprintSection>
            ))}
          </div>
        </section>

        {/* Technical Specs / About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase">Technical_Stack</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              My development environment is optimized for precision and scalability. I prioritize type safety, 
              modular architecture, and visual consistency.
            </p>
            <div className="space-y-4">
              {['Frontend', 'Backend', 'Design', 'DevOps'].map((cat) => (
                <div key={cat} className="flex items-center justify-between py-2 border-b border-zinc-200/20 dark:border-zinc-800/20">
                  <span className="text-xs font-mono text-zinc-400 uppercase">{cat}</span>
                  <div className="h-1 w-24 bg-zinc-100 dark:bg-zinc-900 relative">
                    <div className="absolute inset-y-0 left-0 bg-pink-500 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <BlueprintSection>
              <div className="font-mono text-[10px] text-pink-500/50 mb-8 overflow-hidden whitespace-nowrap">
                {Array(10).fill('01010111 01100101 01101100 01100011 01101111 01101101 01100101').join(' ')}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'React 19', value: 'LATEST' },
                  { label: 'Node.js', value: 'STABLE' },
                  { label: 'Tailwind 4', value: 'V4.0.0' },
                  { label: 'TypeScript', value: 'V5.x' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase mb-1">{stat.label}</div>
                    <div className="text-lg font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 border-l-2 border-pink-500 bg-pink-500/5">
                <p className="text-sm italic text-zinc-600 dark:text-zinc-400">
                  "The blueprint is the most honest form of design. It reveals the intent, the structure, and the logic without the distraction of superficiality."
                </p>
              </div>
            </BlueprintSection>
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-12 border-t border-zinc-200/20 dark:border-zinc-800/20 text-center">
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">
          &copy; 2026 Structural Dynamics / All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default BlueprintDesign;
