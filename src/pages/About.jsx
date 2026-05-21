import { motion } from 'framer-motion';
import { Code2, Monitor, Layers } from 'lucide-react';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-pink-500 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          About Me
        </h2>
        <div className="p-8 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-lg leading-relaxed text-gray-600 dark:text-gray-300 text-lg hover:border-pink-500/30 transition-colors duration-500">
          I am a dedicated BSIT student with a passion for building clean, functional, and user-centric web applications. 
          Focusing on the modern web stack, I strive to turn complex problems into simple, beautiful digital experiences.
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-pink-500 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <motion.div variants={item} className="group p-6 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 text-pink-500">
              <Code2 size={32} />
            </div>
            <span className="font-semibold text-lg group-hover:text-pink-500 transition-colors">HTML5</span>
          </motion.div>

          <motion.div variants={item} className="group p-6 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 text-pink-500">
              <Monitor size={32} />
            </div>
            <span className="font-semibold text-lg group-hover:text-pink-500 transition-colors">CSS3</span>
          </motion.div>

          <motion.div variants={item} className="group p-6 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 text-pink-500">
              <Layers size={32} />
            </div>
            <span className="font-semibold text-lg group-hover:text-pink-500 transition-colors">Bootstrap / Tailwind</span>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
