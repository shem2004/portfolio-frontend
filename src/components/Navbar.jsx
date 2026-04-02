import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-rose-800 dark:text-rose-600" : "hover:text-rose-800 dark:hover:text-rose-600";

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-900">
      {/* TINAASAN ANG PADDING (py-6) AT GAP PARA LUMAKI ANG NAVBAR OVERALL */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        
        {/* LOGO SECTION - PINALAKI ANG LOGO AT TEXT */}
        <Link to="/" className="flex items-center gap-4 group">
            {/* Pinalaki ang container ng logo mula w-8 h-8 papuntang w-12 h-12 */}
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                
                {/* Layer 1: Base Logo */}
                <img 
                  src="/logo (3).png" 
                  alt="Shem Isaiah Logo" 
                  className="absolute inset-0 w-full h-full object-contain dark:invert" 
                />

                {/* Layer 2: Animated Gradient Shine Overlay (Walang binago sa animation) */}
                <motion.div 
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: "linear-gradient(120deg, transparent 25%, rgba(159,18,57,0.9) 50%, rgba(190,18,60,0.9) 60%, transparent 75%)",
                    backgroundSize: "200% auto",
                    WebkitMaskImage: "url('/logo.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: "url('/logo (3).png')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center"
                  }}
                />
            </div>

            <span className="font-bold tracking-tight text-2xl text-black dark:text-white group-hover:text-rose-800 transition-colors">

            |         <span className="ml-2">SΛIΛH</span>

            </span>
        </Link>

        {/* Desktop Links - PINALAKI ANG TEXT (text-base) AT GAP (gap-10) */}
        <div className="hidden md:flex items-center gap-10 font-medium text-base text-gray-600 dark:text-gray-400">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/projects" className={isActive('/projects')}>Projects</Link>
          <Link to="/experience" className={isActive('/experience')}>Experience</Link>
          <Link to="/achievements" className={isActive('/achievements')}>Achievements</Link>
          <Link to="/skills" className={isActive('/skills')}>Skills</Link>
          <Link to="/education" className={isActive('/education')}>Education</Link>
          {/* Pinalaki ang Contact button padding at text */}
          <Link to="/contact" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
            Contact / About
          </Link>
        </div>

        {/* Theme Toggle & Mobile Menu - PINALAKI ANG ICONS */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-3 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 hover:scale-110 transition-transform"
          >
            {/* Pinalaki ang icon size mula 18 papuntang 24 */}
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-rose-800" />}
          </button>
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Pinalaki ang menu icon mula 24 papuntang 32 */}
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - PINALAKI DIN ANG LINKS */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-900 bg-white dark:bg-black"
          >
            <div className="flex flex-col p-8 gap-8 text-lg font-medium text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/achievements" onClick={() => setIsMenuOpen(false)}>Achievements</Link>
              <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
              <Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;