import { motion } from 'framer-motion';
import { Code2, Monitor, Layers } from 'lucide-react';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    { 
      icon: Code2, 
      name: 'HTML5', 
      shadowColor: 'rgba(234, 88, 12, 0.4)',
      iconColor: '#ea580c', 
      glassBg: 'rgba(255, 237, 213, 0.3)', 
    },
    { 
      icon: Monitor, 
      name: 'CSS3', 
      shadowColor: 'rgba(37, 99, 235, 0.4)',
      iconColor: '#2563eb', 
      glassBg: 'rgba(219, 234, 254, 0.3)', 
    },
    { 
      icon: Layers, 
      name: 'Bootstrap / Tailwind', 
      shadowColor: 'rgba(147, 51, 234, 0.4)',
      iconColor: '#9333ea',
      glassBg: 'rgba(243, 232, 255, 0.3)', 
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* About Me Section */}
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
        <div className="p-8 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-lg leading-relaxed text-gray-700 dark:text-gray-300 text-lg hover:border-pink-500/30 transition-colors duration-500">
          I am a dedicated BSIT student with a passion for building clean, functional, and user-centric web applications. 
          Focusing on the modern web stack, I strive to turn complex problems into simple, beautiful digital experiences.
        </div>
      </motion.div>

      {/* Tech Stack - 3D Isometric Layers */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-pink-500 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mt-16 pt-8 pb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              initial="hidden"
              animate="show"
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Isometric 3D Scene */}
              <div 
                className="relative w-32 h-32 mb-12 transition-transform duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(60deg) rotateZ(-45deg)',
                }}
              >
                {/* 1. Subtle glowing shadow */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl blur-xl"
                  style={{ backgroundColor: tech.shadowColor }}
                  variants={{
                    hidden: { translateZ: -20, opacity: 0 },
                    show: { translateZ: -20, opacity: 1 },
                    hover: { translateZ: -40, scale: 1.1, opacity: 0.8 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                
                {/* 2. Matte clay base (white background) */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 shadow-sm"
                  style={{ transformStyle: 'preserve-3d' }}
                  variants={{
                    hidden: { translateZ: 0 },
                    show: { translateZ: 0 },
                    hover: { translateZ: 15 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 rounded-3xl border border-white/80 dark:border-white/10 pointer-events-none" />
                </motion.div>

                {/* 3. Frosted glassmorphism layer */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl backdrop-blur-md border border-white/60 dark:border-white/20 overflow-hidden"
                  style={{ backgroundColor: tech.glassBg }}
                  variants={{
                    hidden: { translateZ: 20 },
                    show: { translateZ: 20 },
                    hover: { translateZ: 45 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent dark:from-white/10 dark:to-transparent pointer-events-none" />
                </motion.div>

                {/* 4. Floating icon layer */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  variants={{
                    hidden: { translateZ: 40 },
                    show: { translateZ: 40 },
                    hover: { translateZ: 80 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <tech.icon 
                    size={56} 
                    color={tech.iconColor} 
                    strokeWidth={1.5} 
                    style={{ 
                      filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.15))',
                    }} 
                  />
                </motion.div>
              </div>

              {/* Label */}
              <motion.span 
                className="font-bold text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300"
                variants={{
                  hover: { color: tech.iconColor }
                }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
