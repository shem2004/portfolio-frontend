import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Maximize2, Sparkles, Code2, Images, PlayCircle } from 'lucide-react';

const albumMedia = [
  { id: 1, type: 'video', thumb: '/videos/AirPods_Animation.mp4', src: '/videos/AirPods_Animation.mp4', title: '3D Animation', desc: 'Modelled and rendered in Blender 5.0 for a personal advertisement project. Features a modern and techy vibe of 3D animation..' },
  { id: 2, type: 'image', thumb: '/samples/sydney.png', src: '/samples/sydney.png', title: 'Digital Illustration', desc: 'Sydney Opera House (Medibang Paint Pro).' },
  { id: 3, type: 'video', thumb: '/videos/minivlog.mp4', src: '/videos/minivlog.mp4', title: 'Cinematic Mini-Vlog', desc: 'Directed and edited a dynamic promotional vlog focused on personal branding and visual storytelling.' },
  { id: 4, type: 'image', thumb: '/samples/PRODUCT DESIGN.png', src: '/samples/PRODUCT DESIGN.png', title: 'Product Branding', desc: 'Aesthetic product mockups (Photoshop).' },
  { id: 5, type: 'image', thumb: '/samples/Modern4.png', src: '/samples/Modern4.png', title: 'Digital Illustration', desc: '3d Modern House (Medibang Paint Pro).' },
  { id: 6, type: 'image', thumb: '/samples/coffee.png', src: '/samples/coffee.png', title: 'Social Media Kit', desc: 'Coffee shop ad poster (Canva).' },
  { id: 7, type: 'video', thumb: '/videos/Client Benefit Post (LinkedIn).mp4', src: '/videos/Client Benefit Post (LinkedIn).mp4', title: 'Social Media Posting', desc: 'Ad video for app promotion.' },
  { id: 8, type: 'image', thumb: '/samples/website.png', src: '/samples/website.png', title: 'Mockup Website', desc: 'A proposal website design for PUP Library.' },
  { id: 9, type: 'image', thumb: '/samples/Modern5.png', src: '/samples/Modern5.png', title: 'Digital Illustration', desc: '3d Modern House (Medibang Paint Pro).' },
  { id: 10, type: 'image', thumb: '/samples/HAPPY.png', src: '/samples/HAPPY.png', title: 'Social Media Posting', desc: 'Ad Poster for app promotion.' },
  { id: 11, type: 'image', thumb: '/samples/booth.png', src: '/samples/booth.png', title: 'Booth Mockup', desc: 'Physical booth layout(Photoshop).' },
  { id: 12, type: 'image', thumb: '/samples/MOA.png', src: '/samples/MOA.png', title: 'Digital Illustration', desc: 'A personal project, SM Mall of Asia (Medibang Paint Pro).' },
  { id: 13, type: 'video', thumb: '/videos/PUP LEGACI.mp4', src: '/videos/PUP LEGACI.mp4', title: 'Website Presentation', desc: 'Website Presentation.' },
  { id: 14, type: 'image', thumb: '/samples/Dela Vega - News Paper.png', src: '/samples/Dela Vega - News Paper.png', title: 'News Paper Design', desc: 'A News Paper design for PUP Institute of Technology' },
  { id: 15, type: 'image', thumb: '/samples/Modern3.png', src: '/samples/Modern3.png', title: 'Digital Illustration', desc: '3d Modern House (Medibang Paint Pro).' },
  { id: 16, type: 'image', thumb: '/samples/IG POST2.png', src: '/samples/IG POST2.png', title: 'Social Media Posting', desc: 'Freelance Project for Instagram posting.' },
  { id: 17, type: 'image', thumb: '/samples/GLAM ID PRESENTATION.png', src: '/samples/GLAM ID PRESENTATION.png', title: 'GLAM-ID Presentation', desc: 'Presentation slides for the GLAM-ID project.' },
  { id: 18, type: 'image', thumb: '/samples/Doraemon.png', src: '/samples/Doraemon.png', title: 'Digital Illustration', desc: 'Doraemon House design (Medibang Paint Pro).' },
  { id: 19, type: 'video', thumb: '/videos/Refer a Provider Poster (LINKEDIN).mp4', src: '/videos/Refer a Provider Poster (LINKEDIN).mp4', title: 'Social Media Posting', desc: 'Ad video for app promotion.' },
  { id: 20, type: 'image', thumb: '/samples/Modern2.png', src: '/samples/Modern2.png', title: 'Digital Illustration', desc: '3d Modern House (Medibang Paint Pro).' },
  { id: 21, type: 'image', thumb: '/samples/Instagram Post.png', src: '/samples/Instagram Post.png', title: 'Social Media Posting', desc: 'Freelance Project for Instagram posting.' },
  { id: 22, type: 'image', thumb: '/samples/Modern1.png', src: '/samples/Modern1.png', title: 'Digital Illustration', desc: '3d Modern House (Medibang Paint Pro).' },
  { id: 23, type: 'image', thumb: '/samples/Modern6.png', src: '/samples/Modern6.png', title: 'Digital Illustration', desc: 'Guggnheim Museum (Medibang Paint Pro).' },
];

// --- PINALITAN ANG EXPL PROPERTIES PARA HINDI NA MAGKAHIWALAY ANG TEXT AT ICON ---
const designProjects = [
  { id: 1, video: '/videos/AirPods_Animation.mp4', src: '/videos/AirPods_Animation.mp4', title: '3D Animation', expl: <>Modelled and rendered in Blender 5.0 for a personal advertisement project. Features a modern and techy vibe of 3D animation. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Sparkles size={16}/> 3D Modeling</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Blender</span></div></> },
  { id: 2, img: '/samples/sydney.png', fullImg: '/samples/sydney.png', title: 'Digital Illustration', expl: <>A Sydney Opera House concept art drawn purely in Medibang Paint Pro. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Images size={16}/> Digital Illustration</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><Maximize2 size={16}/> Medibang Paint Pro</span></div></> },
  { id: 3, img: '/samples/booth.png', fullImg: '/samples/booth.png', title: 'Capstone Booth Mockup', expl: <>Designed the physical booth layout and banners using Photoshop. Used by FG Aesthetic to showcase products at events. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Images size={16}/> Booth Mockup</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Photoshop</span></div></> },
  { 
    id: 4, 
    img: '/samples/PRODUCT DESIGN.png', 
    fullImg: '/samples/PRODUCT DESIGN.png', 
    title: 'FG Aesthetic Branding', 
    expl: <>Created using Adobe Photoshop for product mockups and marketing assets. Featured are some of my sample works in NTEK Systems.<div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Sparkles size={16}/> Aesthetic</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Photoshop</span></div></> 
  },
  { id: 5, img: '/samples/coffee.png', fullImg: '/samples/coffee.png', title: 'Social Media Kit', expl: <>A personal project on coffee shop ad poster for social media posting designed via Canva. Includes story and feed posts. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Images size={16}/> Social Media Kit</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Canva</span></div></> },
  { id: 6, img: '/samples/PRODUCT DESIGN 2.png', fullImg: '/samples/PRODUCT DESIGN 2.png', title: 'UI Concept Art', expl: <>Website interface visualization edited in Photoshop. Conceptual design for an e-commerce landing page. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><Sparkles size={16}/> UI Concept Art</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Photoshop</span></div></> },
  { id: 7, video: '/videos/minivlog.mp4', src: '/videos/minivlog.mp4', title: 'Cinematic Mini-Vlog', expl: <>Directed and edited a dynamic promotional vlog focused on personal branding and visual storytelling. <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold text-rose-800 dark:text-rose-500 mt-3"><span className="flex items-center gap-1 whitespace-nowrap"><PlayCircle size={16}/> Video Editing</span> <span className="text-gray-300 dark:text-gray-700">|</span> <span className="flex items-center gap-1 whitespace-nowrap"><ExternalLink size={16}/> Premiere/CapCut</span></div></> },
];

const projectsData = [
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
    title: "Portfolio Website",
    type: "Web Development",
    desc: "A personal portfolio website built with React, Tailwind CSS, and Framer Motion for smooth animations and elegant UI.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Digital Illustration & Branding",
    type: "Creative Design",
    desc: "Created character concept art and brand identity frameworks using Medibang Paint Pro, Canva, and Adobe Illustrator.",
    tags: ["Illustration", "Branding", "Canva"]
  },
  {
    title: "GIG Market Designing",
    type: "NTEK Systems Inc.",
    desc: "Conducted application testing, market research, and SWOT analysis for the GIG Market app, alongside designing social media marketing materials.",
    tags: ["Marketing", "Social Media Design"]
  },
  {
    title: "Blender 3D Modelling",
    type: "Personal Project",
    desc: "Designed and rendered a low-poly 3D scene in Blender, showcasing skills in modeling, texturing, and lighting for conceptual art.",
    tags: ["3D Modeling", "Texturing", "Lighting"]
    }
];

const Projects = () => {
  const [liveDesigns, setLiveDesigns] = useState(designProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [selectedAlbumMedia, setSelectedAlbumMedia] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-qn7t.onrender.com/api/projects');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const dynamicData = data.map(item => ({
              id: item.id,
              img: item.image_url,
              fullImg: item.image_url,
              title: item.title,
              expl: <>{item.description} <span className="flex items-center gap-2 font-bold text-rose-800 dark:text-rose-500 mt-2"><Sparkles size={16}/> {item.category} | <ExternalLink size={16}/> Database</span></>
            }));
            setLiveDesigns([...designProjects, ...dynamicData]);
          }
        }
      } catch (error) {
        console.log("Database offline o walang laman. Ginagamit ang default projects.");
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveDesigns.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, [liveDesigns.length]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-center text-black dark:text-white uppercase tracking-tight">Creative & Technical Works</h1>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">A showcase of my capabilities ranging from visual branding and digital illustrations to full-stack system development.</p>

        {/* --- 1. 3D STACKED DESIGN GALLERY --- */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* TEXT SIDE (Dynamic) */}
          <div className="w-full lg:w-5/12 z-20 order-2 lg:order-1 text-center lg:text-left">
             <h2 className="text-xs sm:text-sm font-bold text-rose-800 tracking-[0.2em] uppercase mb-6 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles size={16} /> Featured Designs Gallery
             </h2>
             
             <div className="h-[200px] sm:h-[180px] relative"> 
                <AnimatePresence mode="wait">
                   <motion.div
                     key={currentIndex}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.4 }}
                     className="absolute inset-0"
                   >
                     <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 leading-tight tracking-tighter">
                        {liveDesigns[currentIndex]?.title}
                     </h3>
                     
                     <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                        {liveDesigns[currentIndex]?.expl}
                     </div>
                     
                     <button
                        onClick={() => setIsAlbumOpen(true)}
                        className="flex items-center gap-2 bg-rose-800 hover:bg-rose-900 text-white px-6 py-3 rounded-xl font-bold transition-all mx-auto lg:mx-0 shadow-[0_0_20px_rgba(159,18,57,0.4)] hover:shadow-[0_0_30px_rgba(159,18,57,0.6)] hover:scale-105"
                     >
                        <Images size={18} /> View Design Album
                     </button>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>

          {/* 3D STACK ANIMATION SIDE */}
          <div className="w-full lg:w-7/12 h-[300px] sm:h-[400px] md:h-[450px] relative flex justify-center items-center order-1 lg:order-2">
             {liveDesigns.map((proj, index) => {
                const diff = (index - currentIndex + liveDesigns.length) % liveDesigns.length;

                let animationProps = {};
                if (diff === 0) {
                  animationProps = { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 30, rotate: 0, filter: "blur(0px)" };
                } else if (diff === 1) {
                  animationProps = { x: "12%", y: "-6%", scale: 0.9, opacity: 0.7, zIndex: 20, rotate: 3, filter: "blur(3px)" };
                } else if (diff === 2) {
                  animationProps = { x: "24%", y: "-12%", scale: 0.8, opacity: 0.3, zIndex: 10, rotate: -2, filter: "blur(6px)" };
                } else if (diff === liveDesigns.length - 1) {
                  animationProps = { x: "-40%", y: "15%", scale: 1.1, opacity: 0, zIndex: 40, rotate: -10, filter: "blur(0px)" };
                } else {
                  animationProps = { x: "30%", y: "-15%", scale: 0.7, opacity: 0, zIndex: 0, rotate: 0, filter: "blur(10px)" };
                }

                return (
                  <motion.div
                    key={proj.id}
                    animate={animationProps}
                    transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }} 
                    className={`absolute w-4/5 md:w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-gray-200 dark:border-gray-800 bg-black ${diff === 0 ? 'cursor-pointer hover:shadow-[0_0_30px_rgba(159,18,57,0.5)]' : 'pointer-events-none'}`}
                    onClick={() => diff === 0 && setSelectedDesign(proj)}
                  >
                     {proj.video && diff === 0 ? (
                        <video src={proj.video} className="w-full h-full object-cover pointer-events-none" autoPlay loop muted playsInline />
                     ) : (
                        <img src={proj.img || proj.fullImg} alt={proj.title} className="w-full h-full object-cover" />
                     )}
                     
                     {diff !== 0 && <div className="absolute inset-0 bg-black/40" />}
                  </motion.div>
                )
             })}
          </div>
        </div>

        {/* --- 2. TECH & DEV PROJECTS --- */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white flex items-center gap-3">
                <Code2 className="text-rose-800" size={32} /> DESIGN / DEVELOPMMENT EXPERIENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((item, index) => (
                <ProjectCard 
                    key={index}
                    title={item.title} 
                    type={item.type}
                    desc={item.desc}
                    tags={item.tags}
                />
            ))}
            </div>
        </div>
      </motion.div>

      {/* --- DESIGN MODAL/POP-OUT PARA SA PAG-CLICK SA 3D IMAGE MISMO --- */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedDesign(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center cursor-pointer"
          >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} 
                className="bg-white dark:bg-neutral-950 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 shadow-2xl p-6 sm:p-8 relative cursor-default"
            >
                <button onClick={() => setSelectedDesign(null)} className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-gray-100 dark:bg-neutral-900 text-gray-500 hover:text-black dark:hover:text-white transition-colors z-10">
                    <X size={20}/>
                </button>
                <div className="grid md:grid-cols-5 gap-6 sm:gap-10 mt-8 sm:mt-6">
                    <div className="md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-black flex items-center justify-center min-h-[300px]">
                        {selectedDesign.video ? (
                            <video src={selectedDesign.src || selectedDesign.video} controls autoPlay loop className="w-full h-auto object-contain max-h-[60vh]" />
                        ) : (
                            <img src={selectedDesign.fullImg} alt={selectedDesign.title} className="w-full h-auto object-cover" />
                        )}
                    </div>
                    <div className="md:col-span-2 space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                        <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tighter uppercase">{selectedDesign.title}</h3>
                        
                        <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                            {selectedDesign.expl}
                        </div>
                        
                        <div className="pt-4 sm:pt-6">
                            <span className="px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-800 dark:text-rose-500 text-xs font-semibold border border-rose-200 dark:border-rose-900">Design Sample</span>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* --- YUNG POP-UP MODAL PARA SA ALBUM --- */}
        <AnimatePresence>
            {isAlbumOpen && (
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed inset-0 z-[100] bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl overflow-y-auto p-6 md:p-12">
                    <button onClick={() => setIsAlbumOpen(false)} className="absolute top-6 right-6 p-3 bg-gray-200 dark:bg-neutral-800 text-black dark:text-white rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 hover:text-rose-800 dark:hover:text-rose-500 transition-colors z-50">
                        <X size={24} />
                    </button>
                    <div className="max-w-6xl mx-auto mt-12 pb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 text-black dark:text-white">Design Album</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-12">A gallery of my graphic designs, visual arts, and video concepts.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {albumMedia.map((media) => (
                                <motion.div 
                                    key={media.id} 
                                    whileHover={{ scale: 1.03 }} 
                                    onClick={() => setSelectedAlbumMedia(media)} 
                                    onMouseEnter={(e) => {
                                        const vid = e.currentTarget.querySelector('video');
                                        if (vid) vid.play();
                                    }}
                                    onMouseLeave={(e) => {
                                        const vid = e.currentTarget.querySelector('video');
                                        if (vid) {
                                            vid.pause();
                                            vid.currentTime = 0; 
                                        }
                                    }}
                                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-neutral-900"
                                >
                                    {media.type === 'video' ? (
                                        <video src={media.thumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none" loop muted playsInline />
                                    ) : (
                                        <img src={media.thumb} alt={media.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    )}
                                    {media.type === 'video' && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <PlayCircle size={48} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
                                        </div>
                                    )}
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-white font-bold text-sm md:text-base truncate">{media.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      {/* --- FULLSCREEN MEDIA VIEWER PARA SA ALBUM --- */}
      <AnimatePresence>
        {selectedAlbumMedia && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedAlbumMedia(null)} className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md p-4 md:p-8 flex items-center justify-center">
                <button onClick={() => setSelectedAlbumMedia(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-rose-600 transition-colors z-50">
                    <X size={24}/>
                </button>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full flex flex-col bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
                    <div className="relative w-full flex items-center justify-center bg-black overflow-hidden p-2 md:p-6 min-h-[40vh]">
                        {selectedAlbumMedia.type === 'video' ? (
                            <video src={selectedAlbumMedia.src} controls autoPlay className="max-w-full max-h-[65vh] object-contain rounded-xl" />
                        ) : (
                            <img src={selectedAlbumMedia.src} alt={selectedAlbumMedia.title} className="max-w-full max-h-[65vh] object-contain rounded-xl" />
                        )}
                    </div>
                    <div className="p-6 md:p-8 bg-neutral-900 border-t border-neutral-800">
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedAlbumMedia.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{selectedAlbumMedia.desc}</p>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ title, type, desc, tags }) => (
  <motion.div whileHover={{ y: -5 }} className="flex flex-col h-full p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 hover:border-rose-800 transition-all shadow-xl shadow-gray-200/50 dark:shadow-none cursor-default">
    <span className="text-[10px] sm:text-xs font-bold text-rose-800 dark:text-rose-500 uppercase tracking-wider mb-2 block">{type}</span>
    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex justify-between items-start text-black dark:text-white group-hover:text-rose-800 transition-colors">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(t => <span key={t} className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-[10px] sm:text-xs rounded-full font-medium">{t}</span>)}
    </div>
  </motion.div>
);

export default Projects;