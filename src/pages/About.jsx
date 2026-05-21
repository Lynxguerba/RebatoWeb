import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Layout, Smartphone } from 'lucide-react';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

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
      icon: FaHtml5, 
      name: 'HTML5', 
      shadowColor: 'rgba(227, 79, 38, 0.4)',
      iconColor: '#E34F26', 
      glassBg: 'rgba(255, 237, 213, 0.3)', 
    },
    { 
      icon: FaCss3Alt, 
      name: 'CSS3', 
      shadowColor: 'rgba(21, 114, 182, 0.4)',
      iconColor: '#1572B6', 
      glassBg: 'rgba(219, 234, 254, 0.3)', 
    },
    { 
      icon: SiTailwindcss, 
      name: 'Tailwind CSS', 
      shadowColor: 'rgba(6, 182, 212, 0.4)',
      iconColor: '#06b6d4',
      glassBg: 'rgba(207, 250, 254, 0.3)', 
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left: Image & Annotations */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px] p-4">
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-zinc-800/80 bg-gradient-to-br from-pink-100 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 group">
              <div className="absolute inset-0 bg-pink-500/10 dark:bg-purple-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/images/aboutme-profile.png" 
                alt="Profile Cutout" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            
            {/* Annotation 1 (Top Right) */}
            <div className="absolute top-2 -right-4 sm:-right-8 md:-right-12 z-20 flex flex-col items-center rotate-3 sm:rotate-6 animate-bounce" style={{ animationDuration: '4s' }}>
              <span 
                className="text-pink-500 text-lg sm:text-xl font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-xl shadow-lg border border-pink-100 dark:border-pink-900/30 whitespace-nowrap"
                style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
              >
                Aspiring Web Developer 🚀
              </span>
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-pink-400 mt-1 -ml-10 transform -rotate-12">
                <path d="M70,10 Q40,40 20,80" />
                <path d="M20,80 L25,55 M20,80 L45,75" />
              </svg>
            </div>

            {/* Annotation 2 (Bottom Left) */}
            <div className="absolute bottom-6 -left-4 sm:-left-8 md:-left-12 z-20 flex flex-col items-center -rotate-3 sm:-rotate-6 animate-bounce" style={{ animationDuration: '5s' }}>
               <span 
                 className="text-purple-500 text-lg sm:text-xl font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-xl shadow-lg border border-purple-100 dark:border-purple-900/30 whitespace-nowrap"
                 style={{ fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
               >
                DNSC Student 🎓
              </span>
              <svg width="50" height="50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-purple-400 -mt-2 ml-16 transform rotate-12">
                <path d="M20,80 Q50,50 80,20" />
                <path d="M80,20 L55,25 M80,20 L75,45" />
              </svg>
            </div>
            
            {/* Subtle Background Blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right: Modern Typography Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-8">
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg md:text-[1.35rem] font-light tracking-wide">
                My name is <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Ma. Allysa Krisebel Rebato</span>, a dedicated <span className="font-semibold text-zinc-800 dark:text-white border-b-2 border-pink-200 dark:border-pink-500/30">IT student</span> and aspiring <span className="font-semibold text-zinc-800 dark:text-white border-b-2 border-purple-200 dark:border-purple-500/30">Web Developer</span>. My journey in tech is driven by a deep fascination with how code can transform ideas into interactive, visually stunning realities.
              </p>
              
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg md:text-[1.35rem] font-light tracking-wide">
                Currently studying at <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 drop-shadow-sm">Davao del Norte State College</span>, I specialize in crafting clean, user-centric interfaces. Whether I'm designing responsive layouts, debugging complex logic, or bringing creative concepts to life on the screen, my goal is always to deliver digital experiences that are as intuitive as they are beautiful.
              </p>
            </div>
            
            {/* Elegant Accent Line */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center gap-4">
               <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
               <span className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500">UI/UX • Frontend</span>
            </div>
          </div>
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

      {/* Education Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-pink-500 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          Education
        </h2>
        <div className="relative border-l-2 border-pink-500/20 ml-4 md:ml-6 space-y-12">
          
          <motion.div variants={item} className="relative pl-8 md:pl-12 group">
            <div className="absolute -left-[21px] top-1 p-2 bg-[var(--card-color)] border-2 border-pink-500 rounded-full shadow-lg group-hover:bg-pink-500 group-hover:text-white text-pink-500 transition-colors duration-300">
              <GraduationCap size={20} />
            </div>
            <div className="p-6 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Science in Information Technology</h3>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Davao del Norte State College</span>
                <span className="flex items-center gap-1.5"><Calendar size={16} /> Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing my degree, focusing on modern web technologies, software engineering principles, and creative UI/UX design.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* What I Do */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-pink-500 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-pink-500"></span>
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={item} className="p-8 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              <Layout size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">UI/UX Development</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Crafting visually appealing, accessible, and highly interactive user interfaces using modern CSS frameworks and React.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-8 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-pink-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Smartphone size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ensuring applications work flawlessly across all devices and screen sizes, from mobile phones to large desktop monitors.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
