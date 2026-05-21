import { useLocation, useOutlet } from 'react-router-dom';
import React from 'react';
import BottomNav from '../components/BottomNav';
import ThemeToggle from '../components/ThemeToggle';
import SpotlightGrid from '../components/SpotlightGrid';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Layer with Interactive Spotlight */}
      <SpotlightGrid />

      {/* Background Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-pink-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="fixed top-6 right-6 md:right-12 z-[100]">
        <ThemeToggle />
      </div>

      {/* Container with margins */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-32 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            {currentOutlet && React.cloneElement(currentOutlet, { key: location.pathname })}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav />
    </div>
  );
}
