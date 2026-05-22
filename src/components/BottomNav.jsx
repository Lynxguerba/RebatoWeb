import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Award, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function BottomNav() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center gap-2 px-4 py-3 bg-[var(--card-color)]/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-800 shadow-xl"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => clsx(
              "p-3 rounded-full transition-all duration-300 flex items-center justify-center relative group",
              isActive ? "text-pink-500 bg-pink-500/10" : "text-gray-500 hover:text-pink-500 hover:bg-pink-500/5"
            )}
            title={item.name}
          >
            {({ isActive }) => (
              <>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[var(--card-color)] px-3 py-1 rounded-md text-xs border border-gray-200 dark:border-gray-800 shadow-lg">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 border-2 border-pink-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </motion.nav>
    </div>
  );
}
