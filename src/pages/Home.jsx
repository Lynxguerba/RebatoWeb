import { motion } from 'framer-motion';
import { Globe, Camera, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

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

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto w-full">
      <motion.div 
        className="relative group flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full scale-110 group-hover:opacity-0 transition-opacity duration-500"></div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10 overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <img 
            src="/images/684103674_18162934909438574_8051623269267552818_n.jpeg"
            alt="Ma. Allysa Krisebel Rebato"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 dark:opacity-0 group-hover:opacity-0 dark:group-hover:opacity-100"
          />
          <img 
            src="/images/2f6d1c93-d9c4-4b87-a2b5-fbca4a70fe16.jpeg"
            alt="Ma. Allysa Krisebel Rebato"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 dark:opacity-100 group-hover:opacity-100 dark:group-hover:opacity-0"
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ma. Allysa Krisebel Rebato
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-6 leading-relaxed">
          BSIT Student at <span className="text-pink-500 font-semibold">Davao del Norte State College</span>
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm border border-gray-300 dark:border-gray-700">
            Age: {age}
          </span>
          <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 shadow-sm border border-pink-200 dark:border-pink-800/50">
            Web Developer
          </span>
        </div>

        <div className="flex justify-center md:justify-start gap-6">
          <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.facebook.com/xgtx.bond" target="_blank" rel="noreferrer" className="p-3 bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 rounded-full text-gray-500 hover:text-pink-500 shadow-sm hover:shadow-md transition-all">
            <Globe size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/allysarebato" target="_blank" rel="noreferrer" className="p-3 bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 rounded-full text-gray-500 hover:text-pink-500 shadow-sm hover:shadow-md transition-all">
            <Camera size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="mailto:rebato.ma.allysakrisebel@dnsc.edu.ph" className="p-3 bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 rounded-full text-gray-500 hover:text-pink-500 shadow-sm hover:shadow-md transition-all">
            <Mail size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href="tel:+639631848217" className="p-3 bg-[var(--card-color)] border border-gray-200 dark:border-gray-800 rounded-full text-gray-500 hover:text-pink-500 shadow-sm hover:shadow-md transition-all">
            <Phone size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
