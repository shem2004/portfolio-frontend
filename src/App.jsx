import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import Navbar from './components/Navbar';

// Import Pages
import Portfolio from './Portfolio';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Admin from './pages/Admin';

// --- BACKGROUND EFFECT (Fluid Aurora - Subtle & Dark) ---
const BackgroundEffect = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 100, -50, 0], y: [0, 50, -50, 0], rotate: [0, 60, -60, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-900/30 rounded-full blur-[120px] mix-blend-screen"
    />
    <motion.div
      animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 50, 0], y: [0, -50, 50, 0], rotate: [0, -60, 60, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-rose-900/30 rounded-full blur-[100px] mix-blend-screen"
    />
  </div>
);

// --- CUBAN'S EDGE STYLE LOADER ---
const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter Animation (0 to 100)
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800); // Wait a bit before lifting curtain
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Speed of counting

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // The "Curtain Lift" Effect
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between p-6 md:p-12 font-sans overflow-hidden"
    >
      
      {/* TOP SECTION: Header Text */}
      <div className="flex justify-between items-start">
        <div className="overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
                className="text-xl md:text-2xl font-bold tracking-tighter"
             >
                SΛIΛH ΛRCHIVE
             </motion.h1>
        </div>
        <div className="overflow-hidden text-right hidden md:block">
            <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
                className="text-sm font-medium text-gray-400"
            >
                PORTFOLIO &copy; 2026
            </motion.p>
        </div>
      </div>

      {/* CENTER SECTION: Big Reveal Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4">
            <div className="overflow-hidden mb-2">
                <motion.h2 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                    className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase"
                >
                    SHEM ISAIAH |
                </motion.h2>
            </div>
            <div className="overflow-hidden">
                 <motion.h2 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
                    className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-white uppercase"
                >
                    PORTFOLIO
                </motion.h2>
            </div>
      </div>

      {/* BOTTOM SECTION: Counter & Footer */}
      <div className="flex justify-between items-end border-t border-gray-800 pt-4">
         <div className="w-1/2 md:w-1/4">
            <p className="text-xs text-gray-500 mb-2">SYSTEM STATUS</p>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-mono">ONLINE</span>
            </div>
         </div>

         {/* THE PERCENTAGE COUNTER */}
         <div className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            {count}%
         </div>
      </div>

    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kapag nagbago ang URL (pathname), ibabalik niya sa pinakataas (x: 0, y: 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        
        {isLoading ? (
          <Loader key="loader" setLoading={setIsLoading} /> 
        ) : (
          <motion.div 
            key="app-content"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }} 
            className="min-h-screen text-black dark:text-white transition-colors duration-500 font-sans selection:bg-rose-900/30"
          >
            
            <div className="fixed inset-0 -z-20 bg-white dark:bg-black transition-colors duration-500" />
            <BackgroundEffect />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          
          </motion.div>
        )}
      
      </AnimatePresence>
    </Router>
  );
}

export default App;