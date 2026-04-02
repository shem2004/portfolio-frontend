import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Mail, Phone, MapPin, X } from 'lucide-react';

// --- DATA PARA SA LOOPING PROJECTS & EXPERIENCE ---
const experienceData = [
  {
    title: "GLAM-ID",
    type: "Capstone Project",
    desc: "An NFC-based loyalty and client information system for FG Aesthetic Centre. Built with Python Flask and MySQL.",
    tags: ["Python", "Flask", "NFC", "MySQL"]
  },
  {
    title: "Product & UI/UX Design",
    type: "Capstone Project",
    desc: "Led the visual identity and product design using Adobe Photoshop, including mock-up booth designs and the overall website interface.",
    tags: ["Photoshop", "UI/UX", "Product Design", "Web Design"]
  },
  {
    title: "Marketing & QA Intern",
    type: "NTEK Systems Inc. (300 Hrs)",
    desc: "Conducted application testing, social media marketing design, web scraping, and competitor/market research utilizing SWOT analysis.",
    tags: ["QA Testing", "Marketing", "Web Scraping", "SWOT Analysis"]
  },
  {
    title: "IT Asset Management",
    type: "Adventus IT Services",
    desc: "Streamlined UAT processes and hardware diagnostics for laptop redeployment at Adventus IT Services.",
    tags: ["Hardware", "Diagnostics", "UAT", "SharePoint"]
  }
];

// --- DATA PARA SA DESIGN PORTFOLIO WHEEL (WITH AIRPODS) ---
const designProjects = [
  { id: 1, img: '/samples/PRODUCT DESIGN.png', fullImg: '/samples/PRODUCT DESIGN.png', title: 'FG Aesthetic Branding', expl: 'Created using Adobe Photoshop for product mockups and marketing assets.' },
  { id: 2, img: '/samples/sydney.png', fullImg: '/samples/sydney.png', title: 'Digital Illustration', expl: 'A Sydney Opera House concept art drawn purely in Medibang Paint Pro.' },
  { id: 3, img: '/samples/booth.png', fullImg: '/samples/booth.png', title: 'Capstone Booth Mockup', expl: 'Designed the physical booth layout and banners using Photoshop.' },
  { id: 4, img: '/samples/airpods.PNG', video: '/videos/AirPods_Animation.mp4', fullImg: '/samples/airpods.PNG', title: '3D AirPods Animation', expl: 'Modelled and rendered in Blender 5.0 for a personal advertisement project. Features a modern and techy vibe.' },
  { id: 5, img: '/samples/coffee.png', fullImg: '/samples/coffee.png', title: 'Social Media Kit', expl: 'A personal project on coffee shop ad poster for social media posting designed via Canva.' },
  { id: 6, img: '/samples/PRODUCT DESIGN 2.png', fullImg: '/samples/PRODUCT DESIGN 2.png', title: 'UI Concept Art', expl: 'Website interface visualization edited in Photoshop.' },
];

// --- LAG-FREE COMPONENT: MAY INTERSECTION OBSERVER ---
const CubeBackground = ({ maskStyle }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useRef(true); 

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { isVisible.current = entry.isIntersecting; }, { rootMargin: "100px" });
    if (containerRef.current) observer.observe(containerRef.current);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight * 1.2; };
    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible.current) return; 
      time += 0.015; 
      const isDark = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
      ctx.fillStyle = isDark ? '#000000' : '#ffffff'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const colors = { top: '#171717', left: '#0a0a0a', right: '#000000', stroke: '#525252' };
      const size = window.innerWidth < 768 ? 45 : 80; 
      const step = size + 2; 
      const offsetX = canvas.width / 2;
      const offsetY = canvas.height * 0.15;
      const rangeX = Math.ceil(canvas.width / step) + 1;
      const rangeY = Math.ceil(canvas.height / step) + 1;

      for (let row = -rangeY; row < rangeY; row++) {
        for (let col = -rangeX; col < rangeX; col++) {
          const x = offsetX + (col - row) * step;
          const y = offsetY + (col + row) * (step / 2);
          if (x < -step*2 || x > canvas.width + step*2 || y < -step*2 || y > canvas.height + step*2) continue;
          const uniqueSeed = Math.sin(col * 12.9898 + row * 78.233); 
          const wave1 = Math.sin(time * 0.8 + (col * 0.2) + uniqueSeed * 5);
          const wave2 = Math.cos(time * 0.5 + (row * 0.3) - uniqueSeed * 3);
          const wave3 = Math.sin(time * 0.3 + (col + row) * 0.1);
          const combinedWave = (wave1 + wave2 + wave3) / 3;
          const h = Math.max(5, size * 1.5 + (combinedWave * size * 2.8)); 

          ctx.lineWidth = 1;
          ctx.strokeStyle = colors.stroke;
          ctx.fillStyle = colors.top; ctx.beginPath(); ctx.moveTo(x, y - h); ctx.lineTo(x + size, y - h - size / 2); ctx.lineTo(x, y - h - size); ctx.lineTo(x - size, y - h - size / 2); ctx.fill(); ctx.stroke();
          ctx.fillStyle = colors.left; ctx.beginPath(); ctx.moveTo(x - size, y - h - size / 2); ctx.lineTo(x, y - h); ctx.lineTo(x, y); ctx.lineTo(x - size, y - size / 2); ctx.fill(); ctx.stroke();
          ctx.fillStyle = colors.right; ctx.beginPath(); ctx.moveTo(x, y - h); ctx.lineTo(x + size, y - h - size / 2); ctx.lineTo(x + size, y - size / 2); ctx.lineTo(x, y); ctx.fill(); ctx.stroke();
        }
      }
    };
    animate();
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animationFrameId); observer.disconnect(); };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden" style={{ maskImage: maskStyle || 'none', WebkitMaskImage: maskStyle || 'none' }}>
      <canvas ref={canvasRef} className="block w-full h-full opacity-90 dark:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const Portfolio = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Parallax Setup
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 250]); 
  const textY = useTransform(scrollY, [0, 800], [0, -150]); 
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://portfolio-backend-qn7t.onrender.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await response.json();
      if (data.status === 'success') { setStatus('Message sent successfully!'); setFormData({ name: '', email: '', message: '' }); }
    } catch (error) { setStatus('Failed to send message.'); }
  };

  const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full relative overflow-x-hidden bg-white dark:bg-black transition-colors cursor-default"> 
    
      {/* Hero Section (With Parallax & Cinematic Reveal) */}
      <section className="relative pt-48 pb-20 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        
        {/* PARALLAX LAYER 1: Ang Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <CubeBackground maskStyle="linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)" />
        </motion.div>

        {/* PARALLAX LAYER 2: Ang Text */}
        <motion.div className="max-w-5xl mx-auto text-center relative z-10 pointer-events-auto" style={{ y: textY, opacity: textOpacity }}>
          <motion.div {...fadeInUp}>
            <span className="px-4 py-1.5 rounded-full bg-rose-100/80 dark:bg-rose-950/50 backdrop-blur-md text-rose-800 dark:text-rose-400 text-sm font-semibold mb-6 inline-block border border-rose-200 dark:border-rose-900 shadow-sm">
              BSIT Student @ PUP Sta. Mesa
            </span>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 uppercase tracking-[0.1em] leading-none cursor-default flex flex-col items-center drop-shadow-xl dark:drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
              }}
            >
              <span className="block text-white transition-colors overflow-visible">
                {"SHEM ISAIAH".split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: 'blur(10px)', scale: 1.1 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)', 
                        scale: 1, 
                        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
                      }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>

              <span className="block text-rose-700 dark:text-rose-500 mt-2 md:mt-4 overflow-visible pb-4">
                {"DELA VEGA".split("").map((char, index) => (
                  <motion.span 
                    key={`dela-${index}`} 
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: 'blur(10px)', scale: 1.1 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)', 
                        scale: 1, 
                        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
                      }
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtext and Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12 hover:scale-105 transition-all duration-300 cursor-default px-4 drop-shadow-sm font-medium">
              Building the future of digital experiences through clean code and intuitive UI/UX design. Well Experienced in Python, React, and Systems Configuration.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shemisaiah0@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(159,18,57,0.4)] transition-all shadow-lg">
                  Let's Talk <Mail size={18} />
                </a>
                <a href="/cv/cv.pdf" download="Shem-Isaiah-Dela-Vega-CV.pdf" className="px-8 py-4 rounded-2xl font-bold border-2 border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all text-center hover:scale-105 text-black dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-sm shadow-lg">
                  Download CV
                </a>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>  
      </section>

      {/* About Me */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative w-full max-w-md mx-auto lg:max-w-none group">
            <div className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 -rotate-90 flex items-center justify-center p-2 bg-neutral-950/90 rounded-full shadow-lg border border-neutral-800 z-20 pointer-events-none transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-4 min-w-[150px]">
                <span className="text-xs sm:text-sm font-black tracking-[0.5em] uppercase text-rose-500 flex items-center justify-center leading-none pl-[0.5em]">Hover Me</span>
            </div>
            <div className="aspect-[2/3] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-900 border-2 border-rose-800/20 shadow-2xl relative z-10">
                <img src="/shem2.jpg" alt="Shem Isaiah Dela Vega" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-800/20 rounded-full blur-2xl z-0" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center lg:text-left">
            <motion.h2 variants={staggerItem} className="text-sm font-bold text-rose-800 tracking-[0.2em] uppercase mb-4 inline-block">The Narrative</motion.h2>
            <motion.h3 variants={staggerItem} className="text-3xl sm:text-4xl font-bold mb-6 leading-tight inline-block">BRIDGING TECHNICAL RIGOR WITH CREATIVE VISION</motion.h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed text-justify">
              <motion.p variants={staggerItem} className="group transition-all duration-300" style={{ textJustify: 'inter-word', letterSpacing: '0.01em' }}>
              I am <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">an Information Technology</strong> student at the <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">Polytechnic University of the Philippines (PUP) Sta. Mesa</strong>, driven by a passion for creating systems that are as functional as they are elegant.
              </motion.p>
              <motion.p variants={staggerItem} className="group transition-all duration-300" style={{ textJustify: 'inter-word', letterSpacing: '0.01em' }}>
                  My background is built on a foundation of academic excellence, maintaining a <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">President's Lister</strong> standing with a strong emphasis on problem-solving and collaboration. Beyond the classroom, I’ve completed a <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">500-hour training requirement</strong> at <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">Adventus IT Services</strong>, where I refined my skills in <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">User Acceptance Testing (UAT)</strong> and hardware diagnostics. Additionally, I work part-time as a <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">Data Management Assistant</strong>, responsible for the accurate data entry and reconciliation of high-volume financial logs into cloud-based systems, maintaining 100% accuracy in automated reporting across multiple business units.
              </motion.p>
              <motion.p variants={staggerItem} className="group transition-all duration-300" style={{ textJustify: 'inter-word', letterSpacing: '0.01em' }}>
                  As a designer and developer, I specialize in <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">UI/UX Design</strong> and <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">Python (Flask)</strong> development. Whether I’m documenting asset retrieval or architecting an NFC-based system like <strong className="text-black dark:text-white inline-block group-hover:scale-105 group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-all duration-300">GLAM-ID</strong>, my goal is always the same: delivering professional-grade excellence with every line of code.
              </motion.p>
            </div>
            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 sm:gap-6 mt-10 border-t border-gray-200 dark:border-gray-800 pt-8 text-left">
              <div><p className="text-xl sm:text-2xl font-bold text-black dark:text-white">1.19</p><p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">GWA Average</p></div>
              <div><p className="text-xl sm:text-2xl font-bold text-black dark:text-white">TESDA NCII & NCIII</p><p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Certified Pro</p></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
 
      {/* Projects Loop */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16"><div className="flex justify-between items-end"><div><h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects and Work Experience</h2><div className="h-1.5 w-20 bg-rose-800 rounded-full"></div></div></div></div>
        
        <div className="relative w-full overflow-hidden flex whitespace-nowrap py-12">
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" />
            <style>{`@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } } .animate-marquee { animation: marquee 35s linear infinite; } .animate-marquee:hover { animation-play-state: paused; }`}</style>
            
            <div className="flex gap-4 sm:gap-8 w-max px-4 animate-marquee">
              {[...experienceData, ...experienceData].map((item, index) => (
                <div key={index} className="w-[280px] sm:w-[350px] md:w-[450px] whitespace-normal flex-shrink-0">
                  <ProjectCard title={item.title} type={item.type} desc={item.desc} tags={item.tags} />
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Skills / Tech Stack (Interactive Ticker) */}
      <section className="py-24 bg-white/50 dark:bg-black/30 backdrop-blur-sm border-y border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col items-center">
        <div className="max-w-6xl mx-auto px-6 w-full text-center">
          <h2 className="text-3xl font-bold mb-12 italic text-black dark:text-white">Technical Proficiency</h2>
          <SkillsTicker />
        </div>
      </section>

      {/* --- DESIGN PORTFOLIO REVOLVING WHEEL --- */}
      <section className="py-20 md:py-32 px-6 lg:px-12 relative overflow-hidden bg-gray-100 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800/50">
        <style>{`.responsive-radius { --wheel-radius: -7.5rem; } @media (min-width: 640px) { .responsive-radius { --wheel-radius: -10rem; } } @media (min-width: 1024px) { .responsive-radius { --wheel-radius: -11.5rem; } } @media (min-width: 1280px) { .responsive-radius { --wheel-radius: -13rem; } }`}</style>
        <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24 items-center">
          <motion.div {...fadeInUp} className="z-20 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-sm font-bold text-rose-800 tracking-[0.2em] uppercase mb-4">Creative Gallery</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter text-black dark:text-white leading-tight">Graphic & Visual Design</h3>
            <div className="space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify font-light px-2 lg:px-0">
              <p>Exploring digital creativity through visual storytelling. Beyond code, I possess experience in branding, product visualization, and digital illustration.</p>
              <p>My toolkit includes <strong className="text-black dark:text-white font-medium">Adobe Photoshop</strong>, <strong className="text-black dark:text-white font-medium">Medibang Paint Pro</strong>, <strong className="text-black dark:text-white font-medium">Canva</strong>, and <strong className="text-black dark:text-white font-medium">Blender</strong> for 3D conceptual renders. I aim to bridge technical rigor with elegant, intuitive visual communication.</p>
            </div>
          </motion.div>

          <div className="relative w-full aspect-square flex items-center justify-center mx-auto max-w-[320px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] min-h-[350px] sm:min-h-[480px] lg:min-h-[550px] xl:min-h-[650px] responsive-radius">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center z-[40]">
              <div className="relative w-full h-full hover:scale-110 transition-transform duration-300">
                <img src="/logo (3).png" alt="Shem Isaiah Logo" className="absolute inset-0 w-full h-full object-contain dark:invert" />
                <motion.div animate={{ backgroundPosition: ["200% center", "-200% center"] }} transition={{ duration: 3, ease: "linear", repeat: Infinity }} className="absolute inset-0 w-full h-full" style={{ backgroundImage: "linear-gradient(120deg, transparent 25%, rgba(159,18,57,0.9) 50%, rgba(190,18,60,0.9) 60%, transparent 75%)", backgroundSize: "200% auto", WebkitMaskImage: "url('/logo.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url('/logo (3).png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
              </div>
            </div>
            <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
                {designProjects.map((proj, index) => {
                    const angle = (360 / designProjects.length) * index;
                    return (
                        <div key={index} className="absolute flex items-center justify-center pointer-events-auto" style={{ transform: `rotate(${angle}deg) translateY(var(--wheel-radius))` }}>
                            <motion.div 
                                className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-gray-200 dark:bg-neutral-900 rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-pointer overflow-hidden z-20 bg-black"
                                animate={{ rotate: [-angle, -angle - 360] }}
                                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                                whileHover={{ scale: 1.15, zIndex: 50 }}
                                onClick={() => setSelectedDesign(proj)}
                            >
                                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GET IN TOUCH SECTION --- */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <CubeBackground maskStyle="linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)" />
        <div className="max-w-3xl mx-auto relative z-10 pointer-events-auto">
          <motion.div {...fadeInUp} className="bg-white/70 dark:bg-black/70 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-white/50 dark:border-gray-800/50">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black dark:text-white drop-shadow-sm">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-white/80 dark:bg-neutral-900/80 focus:ring-2 focus:ring-rose-800 outline-none transition-all shadow-inner" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-white/80 dark:bg-neutral-900/80 focus:ring-2 focus:ring-rose-800 outline-none transition-all shadow-inner" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-white/80 dark:bg-neutral-900/80 focus:ring-2 focus:ring-rose-800 outline-none transition-all shadow-inner resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              <button type="submit" className="w-full py-4 bg-rose-800 text-white rounded-xl font-bold hover:bg-rose-900 hover:shadow-[0_0_20px_rgba(159,18,57,0.4)] transition-all transform hover:scale-[1.02]">Send Message</button>
              {status && <p className="text-center mt-4 text-rose-800 font-medium bg-rose-100 dark:bg-rose-950/30 py-2 rounded-lg">{status}</p>}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 px-6 bg-black text-white relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"> 
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Contact Details</h3>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <p className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"><Mail size={18}/> shemisaiah0@gmail.com</p>
              <p className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"><Phone size={18}/> 09955974186</p>
              <p className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"><MapPin size={18}/> Imus, Cavite</p>
            </div>
          </div>
          <div className="md:text-right flex flex-col items-center md:items-end">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 italic text-white">Polytechnic University of the Philippines</h3>
            <p className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm">Information Technology</p>
            <p className="text-rose-600 mt-2 font-mono">PRESIDENT'S LISTER</p>
          </div>
        </div>
      </footer>

      {/* DESIGN MODAL/POP-OUT */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDesign(null)} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center cursor-pointer">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 20, stiffness: 300 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-neutral-950 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-8 relative cursor-default">
                <button onClick={() => setSelectedDesign(null)} className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-500 hover:text-black dark:hover:text-white transition-colors z-10"><X size={20}/></button>
                <div className="grid md:grid-cols-5 gap-6 sm:gap-10 mt-8 sm:mt-6">
                    <div className="md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-black flex items-center justify-center min-h-[300px]">
                        {selectedDesign.video ? (
                            <video src={selectedDesign.video} controls autoPlay loop className="w-full h-auto object-contain max-h-[60vh]" />
                        ) : (
                            <img src={selectedDesign.fullImg} alt={selectedDesign.title} className="w-full h-auto object-cover" />
                        )}
                    </div>
                    <div className="md:col-span-2 space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tighter uppercase">{selectedDesign.title}</h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">{selectedDesign.expl}</p>
                        <div className="pt-4 sm:pt-6"><span className="px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-800 dark:text-rose-500 text-xs font-semibold border border-rose-200 dark:border-rose-900">Design Sample</span></div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- ADVANCED 3D TILT PROJECT CARD ---
const ProjectCard = ({ title, type, desc, tags }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5, boxShadow: "0px 20px 40px rgba(159,18,57,0.3)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className="h-full flex flex-col group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 transition-all shadow-xl shadow-gray-200/50 dark:shadow-none relative z-10 hover:z-50 cursor-pointer"
    >
      <span className="text-[10px] sm:text-xs font-bold text-rose-800 dark:text-rose-500 uppercase tracking-wider mb-2 block">{type}</span>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex justify-between items-center text-black dark:text-white group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-colors">
        {title} <ExternalLink size={18} className="sm:w-5 sm:h-5" />
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(t => <span key={t} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-[10px] sm:text-xs rounded-full font-medium">{t}</span>)}
      </div>
    </motion.div>
  );
}

// --- BAGONG SKILLS TICKER COMPONENT (FIXED CONSISTENT ANIMATION) ---
const SkillsTicker = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

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

  const currentItems = activeTab === 'All' ? Object.values(skillsData).flat() : skillsData[activeTab];

  useEffect(() => {
    const checkOverflow = () => { if (containerRef.current && contentRef.current) { setIsOverflowing(contentRef.current.scrollWidth > containerRef.current.clientWidth); } };
    checkOverflow(); window.addEventListener('resize', checkOverflow); return () => window.removeEventListener('resize', checkOverflow);
  }, [activeTab]);

  const displayItems = isOverflowing ? [...currentItems, ...currentItems, ...currentItems, ...currentItems, ...currentItems] : currentItems;
  const categories = ['All', ...Object.keys(skillsData)];
  const animationDuration = `${currentItems.length * 4}s`;

  return (
    <div className="w-full flex flex-col items-center">
      <style>{`@keyframes marquee-skills-home { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } } .animate-marquee-skills-home { animation-name: marquee-skills-home; animation-timing-function: linear; animation-iteration-count: infinite; } .animate-marquee-skills-home:hover { animation-play-state: paused; }`}</style>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveTab(category)} className={`px-5 py-2 text-sm sm:text-base rounded-full font-bold transition-all duration-300 ${activeTab === category ? 'bg-rose-800 text-white shadow-[0_0_20px_rgba(159,18,57,0.5)] scale-105' : 'bg-gray-200 dark:bg-neutral-900 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-neutral-800'}`}>
            {category}
          </button>
        ))}
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden py-4 min-h-[140px]">
        {isOverflowing && (
            <><div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" /><div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" /></>
        )}

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -15 }} 
            transition={{ duration: 0.25, ease: "easeInOut" }} 
            className={`flex gap-4 sm:gap-6 px-4 ${isOverflowing ? 'w-max animate-marquee-skills-home' : 'w-full justify-center flex-wrap'}`} 
            style={{ animationDuration: isOverflowing ? animationDuration : 'auto' }}
          >
            {displayItems.map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[150px] p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-lg group hover:border-rose-800 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-3 group-hover:scale-110 transition-transform">
                  <img src={skill.img} alt={skill.name} className={`w-full h-full object-contain ${skill.name === "Flask" ? "dark:invert" : ""}`} />
                </div>
                <h4 className="font-bold text-xs md:text-sm text-black dark:text-white group-hover:text-rose-800 transition-colors text-center">{skill.name}</h4>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div ref={contentRef} className="absolute invisible top-0 left-0 flex gap-4 sm:gap-6 px-4 w-max pointer-events-none">{currentItems.map((_, index) => (<div key={`measure-${index}`} className="min-w-[120px] md:min-w-[150px] p-5"></div>))}</div>
      </div>
    </div>
  );
};

export default Portfolio;