import { motion } from 'framer-motion';

export default function PortalLoader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Portal Container */}
      <motion.div
        className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[100px] border-4 border-pink-500 flex items-center justify-center"
        initial={{ scale: 0.5, rotateX: 60, opacity: 0 }}
        animate={{ scale: [0.5, 1, 10], rotateX: [60, 20, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{ perspective: 1000 }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-[100px] shadow-[0_0_100px_rgba(236,72,153,0.8)] border border-pink-400"></div>
        {/* Deep rings */}
        <motion.div 
          className="absolute inset-4 rounded-[100px] border-2 border-pink-600/50"
          animate={{ scale: [1, 0.8, 1.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-8 rounded-[100px] border-2 border-pink-700/30"
          animate={{ scale: [1, 0.6, 2] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="text-pink-500 font-bold text-2xl tracking-widest uppercase z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Entering<br/>Portfolio
        </motion.div>
      </motion.div>

      {/* Starfield / Particles background could go here for extra effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black z-[-1]"></div>
    </motion.div>
  );
}
