import { motion } from 'framer-motion';
import { Globe, Camera, Mail, Phone, ArrowRight, User, Briefcase, Award, Sparkles, MapPin, Code, Code2, Terminal, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Home() {
  const [age] = useState(() => {
    const today = new Date();
    const birth = new Date('December 17, 2003');
    let a = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      a--;
    }
    return a;
  });

  const socialLinks = [
    { icon: Globe, href: 'https://www.facebook.com/xgtx.bond', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
    { icon: Camera, href: 'https://www.instagram.com/allysarebato', label: 'Instagram', color: 'from-pink-500 to-purple-500' },
    { icon: Mail, href: 'mailto:rebato.ma.allysakrisebel@dnsc.edu.ph', label: 'Email', color: 'from-red-400 to-pink-500' },
    { icon: Phone, href: 'tel:+639631848217', label: 'Phone', color: 'from-green-400 to-emerald-500' },
  ];

  const quickLinks = [
    { title: 'About Me', desc: 'My journey & skills', icon: User, path: '/about', gradient: 'from-pink-500/10 to-purple-500/10' },
    { title: 'Projects', desc: 'View my portfolio', icon: Briefcase, path: '/projects', gradient: 'from-blue-500/10 to-cyan-500/10' },
    { title: 'Certificates', desc: 'My achievements', icon: Award, path: '/certificates', gradient: 'from-amber-500/10 to-orange-500/10' },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto w-full pt-4 md:pt-12"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* ── Left Column: Text & CTA ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-last lg:order-none">
          
          <motion.div
            variants={item}
            className="flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-full bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              Available for Work
            </span>
          </motion.div>

          <motion.div variants={item} className="space-y-4 mb-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-gray-900 dark:text-white">Hi, I'm</span><br />
              <span className="home-gradient-name inline-block">Allysa Rebato</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-lg leading-relaxed">
              A passionate BSIT Student at{' '}
              <span className="text-pink-500 font-semibold relative inline-block group cursor-pointer">
                DNSC
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </span>{' '}
              crafting beautiful and functional web experiences.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            <span className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/20">
              <Code size={16} /> Web Developer
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
              <MapPin size={16} className="text-blue-500" /> Panabo City
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
              <Sparkles size={16} className="text-amber-500" /> {age} Years Old
            </span>
          </motion.div>

          <motion.div variants={item} className="flex justify-center lg:justify-start gap-4 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group/social relative p-3.5 bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 rounded-xl text-gray-500 hover:text-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                title={social.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                <social.icon size={22} className="relative z-10 group-hover/social:animate-pulse" />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* ── Right Column: Interactive Profile & Floating Elements ── */}
        <motion.div variants={item} className="relative flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center">
          
          {/* Floating Decorators */}
          <motion.div animate={floatAnimation} className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 p-4 bg-[var(--card-color)]/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl text-blue-500 z-20 hidden md:block">
            <Code2 size={28} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 p-4 bg-[var(--card-color)]/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl text-pink-500 z-20 hidden md:block"
          >
            <MonitorSmartphone size={28} />
          </motion.div>

          <motion.div 
            animate={{ x: [0, -10, 0], y: [0, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/4 -right-8 p-3 bg-[var(--card-color)]/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-800 shadow-lg text-amber-500 z-20 hidden md:block"
          >
            <Terminal size={20} />
          </motion.div>

          {/* Profile Image Container */}
          <div className="relative group w-full h-full">
            {/* Ambient glows */}
            <div className="absolute inset-0 bg-pink-500/20 blur-[60px] rounded-full scale-125 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 translate-x-4 translate-y-4" />
            
            {/* Expanding rings */}
            <div className="absolute inset-0 rounded-full border border-pink-500/30 scale-[1.1] group-hover:scale-[1.2] group-hover:border-pink-500/10 transition-all duration-500" />
            
            <div className="relative w-full h-full rounded-full border-[6px] border-white dark:border-gray-900 shadow-2xl z-10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/684103674_18162934909438574_8051623269267552818_n.jpeg"
                alt="Ma. Allysa Krisebel Rebato"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 dark:opacity-0 group-hover:opacity-0 dark:group-hover:opacity-100"
              />
              <img
                src="/images/2f6d1c93-d9c4-4b87-a2b5-fbca4a70fe16.jpeg"
                alt="Ma. Allysa Krisebel Rebato"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 dark:opacity-100 group-hover:opacity-100 dark:group-hover:opacity-0"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Quick Navigation Section ── */}
      <motion.div variants={item} className="mt-20 lg:mt-24 w-full">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Explore My Portfolio</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link key={link.title} to={link.path}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/card relative p-6 rounded-3xl bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                {/* Background Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent group-hover/card:via-pink-500 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 group-hover/card:bg-pink-500 group-hover/card:text-white transition-colors duration-300 shadow-sm">
                      <link.icon size={24} />
                    </div>
                    <div className="p-2 rounded-full bg-transparent group-hover/card:bg-white/10 text-gray-300 dark:text-gray-600 group-hover/card:text-pink-500 transition-all duration-300">
                      <ArrowRight size={20} className="group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover/card:text-pink-500 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed group-hover/card:text-gray-600 dark:group-hover/card:text-gray-300 transition-colors duration-300">
                      {link.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
}

