import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isOverflowing, setIsOverflowing] = useState(false);
  
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Kumpletong listahan ng skills
  const skillsData = {
    Frontend: [
      { name: "React / JSX", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML5 & CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "Framer Motion", img: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
      { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    ],
    Backend: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
      { name: "RESTful APIs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Pydantic", img: "https://cdn.worldvectorlogo.com/logos/python-3.svg" },
      { name: "JWT Auth", img: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
    ],
    Database: [
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "SQLAlchemy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" },
      { name: "MS Access", img: "https://cdn.worldvectorlogo.com/logos/microsoft-access-2013.svg" },
    ],
    Design: [
      { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: "Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "UI / UX", img: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
      { name: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
      { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
      { name: "Medibang Pro", img: "https://cdn.worldvectorlogo.com/logos/wacom-1.svg" } 
    ]
  };

  const currentItems = activeTab === 'All'
    ? Object.values(skillsData).flat()
    : skillsData[activeTab];

  // Smart Overflow Logic
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        setIsOverflowing(contentRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    checkOverflow(); 
    window.addEventListener('resize', checkOverflow); 
    return () => window.removeEventListener('resize', checkOverflow);
  }, [activeTab]);

  const displayItems = isOverflowing
    ? [...currentItems, ...currentItems, ...currentItems, ...currentItems, ...currentItems]
    : currentItems;

  const categories = ['All', ...Object.keys(skillsData)];
  const animationDuration = `${currentItems.length * 4}s`;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
      
      {/* 1. TOP SECTION: THE ANIMATED TICKER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white uppercase tracking-tight">Technical Proficiency</h1>
        
        <style>
          {`
            @keyframes marquee-skills-page {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-skills-page {
              animation-name: marquee-skills-page;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
            .animate-marquee-skills-page:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 text-sm sm:text-base rounded-full font-bold transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-rose-800 text-white shadow-[0_0_20px_rgba(159,18,57,0.5)] scale-105' 
                  : 'bg-gray-200 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-neutral-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* The Marquee Display */}
        <div ref={containerRef} className="relative w-full overflow-hidden py-4 min-h-[160px]">
          {isOverflowing && (
              <>
                  <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" />
              </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-4 sm:gap-6 px-4 ${isOverflowing ? 'w-max animate-marquee-skills-page' : 'w-full justify-center flex-wrap'}`}
              style={{ animationDuration: isOverflowing ? animationDuration : 'auto' }}
            >
              {displayItems.map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`} 
                  className="flex flex-col items-center justify-center min-w-[130px] md:min-w-[160px] p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-lg group hover:border-rose-800 transition-colors cursor-pointer"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 mb-4 group-hover:scale-110 transition-transform">
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain ${skill.name === "Flask" ? "dark:invert" : ""}`} 
                    />
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-black dark:text-white group-hover:text-rose-800 transition-colors text-center">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Invisible Measuring Div */}
          <div ref={contentRef} className="absolute invisible top-0 left-0 flex gap-4 sm:gap-6 px-4 w-max pointer-events-none">
            {currentItems.map((_, index) => (
              <div key={`measure-${index}`} className="min-w-[130px] md:min-w-[160px] p-6"></div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 2. BOTTOM SECTION: THE STATIC COMPREHENSIVE LIST */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full mt-24 pt-16 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Complete Skill Overview</h2>
            <p className="text-gray-500">A structured list of my technical capabilities for quick reading.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div 
                key={`list-${category}`} 
                className="bg-gray-50 dark:bg-neutral-900/40 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-rose-800/50 transition-colors"
            >
              <h3 className="text-lg font-black text-rose-800 dark:text-rose-500 mb-6 uppercase tracking-widest border-b border-gray-200 dark:border-gray-800 pb-4">
                  {category}
              </h3>
              <ul className="space-y-4">
                {skills.map(skill => (
                  <li key={`item-${skill.name}`} className="flex items-center gap-4 group">
                    <span className="w-8 h-8 p-1.5 bg-white dark:bg-black rounded-lg flex items-center justify-center shadow-sm border border-gray-200 dark:border-gray-800 group-hover:scale-110 transition-transform">
                      <img 
                        src={skill.img} 
                        alt={skill.name} 
                        className={`w-full h-full object-contain ${skill.name === "Flask" ? "dark:invert" : ""}`} 
                      />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Skills;