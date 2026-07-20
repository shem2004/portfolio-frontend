import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Maximize2, Sparkles, Code2, Images, PlayCircle, ChevronLeft, ChevronRight, Download } from 'lucide-react';

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

const automationSlides = [
  { 
    id: 1, 
    img: '/samples/bi1.png', 
    gallery: ['/samples/bi1.png', '/samples/bi2.png', '/samples/bi3.png', '/samples/bi4.png'],
    title: 'IT Helpdesk Analytics Dashboard', 
    desc: 'Interactive Power BI dashboard tracking ticket volumes and KPIs. Cleaned raw dataset via Power Query Editor by splitting delimited columns and handling null values.',
    downloadFile: '/samples/WA_Fn-UseC_-IT-Help-Desk.pbix'
  },
  { 
    id: 2, 
    img: '/samples/idp1.png', 
    gallery: ['/samples/idp1.png', '/samples/idp2.png'],
    title: 'Intelligent Document Processing', 
    desc: 'Automated data extraction workflow routing using AI Builder. Engineered to significantly reduce manual data entry and improve accuracy across departments.',
    downloadFile: null
  },
  { 
    id: 3, 
    img: '/samples/pa1.png', 
    gallery: ['/samples/pa1.png', '/samples/pa2.png', '/samples/pa3.png'],
    title: 'Enterprise Workflow Orchestration', 
    desc: 'End-to-end task routing and polling triggers in Power Automate. Built complex logic to automate inter-departmental task routing and dynamic data synchronization.',
    downloadFile: null
  },
  {
    title: "Analytics Engineering Pipeline",
    type: "Data Engineering Project",
    desc: "Built a modern data pipeline transforming raw datasets in Google BigQuery into analytics-ready dimensional models. Orchestrated ETL/ELT workflows using dbt (Data Build Tool), writing complex SQL CTEs to generate Fact and Dimension tables while ensuring data lineage visibility.",
    tags: ["dbt", "Google BigQuery", "SQL", "Data Modeling", "ETL/ELT"]
  }
];

const Projects = () => {
  const [liveDesigns, setLiveDesigns] = useState(designProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [selectedAlbumMedia, setSelectedAlbumMedia] = useState(null);
  
  // State for Automation & Mini-gallery
  const [autoIndex, setAutoIndex] = useState(0);
  const [modalGalleryIndex, setModalGalleryIndex] = useState(0);

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
        console.log("Database offline o walang laman.");
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

  useEffect(() => {
    const autoTimer = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % automationSlides.length);
    }, 10000); // Slower movement (10s)
    return () => clearInterval(autoTimer);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-center text-black dark:text-white uppercase tracking-tight">Creative & Technical Works</h1>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">A showcase of my capabilities ranging from visual branding and digital illustrations to full-stack system development.</p>

        {/* --- 1. AUTOMATION & ANALYTICS SHOWCASE (FEATURE PORTED FROM PORTFOLIO) --- */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white flex items-center gap-3">
                <Sparkles className="text-rose-800" size={32} /> AUTOMATION & ANALYTICS SHOWCASE
            </h2>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center bg-gray-50 dark:bg-neutral-900/40 p-6 sm:p-10 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-xl">
              {/* LEFT: SLIDESHOW IMAGE (Clickable to Gallery) */}
              <div 
                className="w-full lg:w-3/5 relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black group cursor-pointer"
                onClick={() => {
                  setModalGalleryIndex(0);
                  setSelectedDesign({
                    gallery: automationSlides[autoIndex].gallery,
                    title: automationSlides[autoIndex].title,
                    expl: automationSlides[autoIndex].desc,
                    tag: 'Automation Showcase',
                    downloadFile: automationSlides[autoIndex].downloadFile
                  });
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={autoIndex}
                    src={automationSlides[autoIndex].img}
                    alt={automationSlides[autoIndex].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </AnimatePresence>
              </div>

              {/* RIGHT: DESCRIPTION BESIDE IT */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={autoIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-4 leading-tight">
                      {automationSlides[autoIndex].title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-light mb-6">
                      {automationSlides[autoIndex].desc}
                    </p>

                    {/* PREVIEW DOWNLOAD BUTTON */}
                    {automationSlides[autoIndex].downloadFile && (
                        <a 
                            href={automationSlides[autoIndex].downloadFile} 
                            download 
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-rose-800 hover:bg-rose-700 text-white text-sm font-bold shadow-[0_0_15px_rgba(159,18,57,0.5)] hover:shadow-[0_0_25px_rgba(159,18,57,0.8)] hover:scale-105 transition-all w-fit"
                        >
                            <Download size={16} /> Download File
                        </a>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-3 mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                  {automationSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAutoIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${autoIndex === idx ? 'w-12 bg-rose-800' : 'w-4 bg-gray-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* --- 2. 3D STACKED DESIGN GALLERY --- */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          <div className="w-full lg:w-5/12 z-20 order-2 lg:order-1 text-center lg:text-left">
             <h2 className="text-xs sm:text-sm font-bold text-rose-800 tracking-[0.2em] uppercase mb-6 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles size={16} /> Featured Designs Gallery
             </h2>
             <div className="h-[200px] sm:h-[180px] relative"> 
                <AnimatePresence mode="wait">
                   <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                     <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-4 leading-tight tracking-tighter">
                        {liveDesigns[currentIndex]?.title}
                     </h3>
                     <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                        {liveDesigns[currentIndex]?.expl}
                     </div>
                     <button onClick={() => setIsAlbumOpen(true)} className="flex items-center gap-2 bg-rose-800 hover:bg-rose-900 text-white px-6 py-3 rounded-xl font-bold transition-all mx-auto lg:mx-0 shadow-lg hover:scale-105">
                        <Images size={18} /> View Design Album
                     </button>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>

          <div className="w-full lg:w-7/12 h-[300px] sm:h-[400px] md:h-[450px] relative flex justify-center items-center order-1 lg:order-2">
             {liveDesigns.map((proj, index) => {
                const diff = (index - currentIndex + liveDesigns.length) % liveDesigns.length;
                let animationProps = {};
                if (diff === 0) { animationProps = { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 30, rotate: 0 }; } 
                else if (diff === 1) { animationProps = { x: "12%", y: "-6%", scale: 0.9, opacity: 0.7, zIndex: 20, rotate: 3 }; } 
                else if (diff === 2) { animationProps = { x: "24%", y: "-12%", scale: 0.8, opacity: 0.3, zIndex: 10, rotate: -2 }; } 
                else { animationProps = { x: "30%", y: "-15%", scale: 0.7, opacity: 0, zIndex: 0 }; }

                return (
                  <motion.div key={proj.id} animate={animationProps} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }} 
                    className={`absolute w-4/5 md:w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black ${diff === 0 ? 'cursor-pointer' : 'pointer-events-none'}`}
                    onClick={() => diff === 0 && setSelectedDesign({ ...proj, tag: 'Design Sample' })}
                  >
                     {proj.video && diff === 0 ? <video src={proj.video} className="w-full h-full object-cover" autoPlay loop muted playsInline /> : <img src={proj.img || proj.fullImg} className="w-full h-full object-cover" />}
                     {diff !== 0 && <div className="absolute inset-0 bg-black/40" />}
                  </motion.div>
                )
             })}
          </div>
        </div>

        {/* --- 3. TECH & DEV PROJECTS --- */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white flex items-center gap-3">
                <Code2 className="text-rose-800" size={32} /> DESIGN / DEVELOPMENT EXPERIENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((item, index) => (
                <ProjectCard key={index} {...item} />
            ))}
            </div>
        </div>
      </motion.div>

      {/* --- CINEMATIC MODAL WITH MINI GALLERY (FOR ALL PROJECTS) --- */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDesign(null)} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 20, stiffness: 300 }} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative cursor-default">
                <button onClick={() => setSelectedDesign(null)} className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-black/50 hover:bg-rose-600 text-white transition-colors z-50 backdrop-blur-md"><X size={20}/></button>
                
                <div className="w-full bg-black flex items-center justify-center p-4 sm:p-8 min-h-[40vh] border-b border-gray-200 dark:border-gray-800 relative group">
                    {selectedDesign.gallery ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={selectedDesign.gallery[modalGalleryIndex]} className="max-w-full max-h-[60vh] object-contain rounded-lg" />
                            {selectedDesign.gallery.length > 1 && (
                                <>
                                    <button onClick={(e) => { e.stopPropagation(); setModalGalleryIndex(prev => prev === 0 ? selectedDesign.gallery.length - 1 : prev - 1); }} className="absolute left-2 sm:left-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-colors z-20"><ChevronLeft size={24} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); setModalGalleryIndex(prev => prev === selectedDesign.gallery.length - 1 ? 0 : prev + 1); }} className="absolute right-2 sm:right-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-colors z-20"><ChevronRight size={24} /></button>
                                    <div className="absolute bottom-4 flex gap-2 z-20">
                                        {selectedDesign.gallery.map((_, i) => <div key={i} className={`w-2 h-2 rounded-full ${i === modalGalleryIndex ? 'bg-rose-600' : 'bg-white/50'}`} />)}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : selectedDesign.video ? <video src={selectedDesign.video} controls autoPlay loop className="max-w-full max-h-[60vh] object-contain rounded-lg" /> 
                      : <img src={selectedDesign.fullImg || selectedDesign.img} className="max-w-full max-h-[60vh] object-contain rounded-lg" />}
                </div>

                <div className="p-6 sm:p-10 overflow-y-auto">
                    <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tighter uppercase mb-4">{selectedDesign.title}</h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">{selectedDesign.expl}</p>
                    <div className="pt-6 flex flex-wrap gap-4 items-center">
                        <span className="px-4 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-800 dark:text-rose-500 text-xs font-semibold border border-rose-200 dark:border-rose-900">{selectedDesign.tag || "Project Detail"}</span>
                        {selectedDesign.downloadFile && <a href={selectedDesign.downloadFile} download onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-5 py-2 rounded-full bg-rose-800 hover:bg-rose-700 text-white text-sm font-bold shadow-lg transition-all"><Download size={16} /> Download File</a>}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESIGN ALBUM MODAL (ONE-TIME VIEW) --- */}
      <AnimatePresence>
            {isAlbumOpen && (
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed inset-0 z-[100] bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl overflow-y-auto p-6 md:p-12">
                    <button onClick={() => setIsAlbumOpen(false)} className="absolute top-6 right-6 p-3 bg-gray-200 dark:bg-neutral-800 text-black dark:text-white rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors z-50"><X size={24} /></button>
                    <div className="max-w-6xl mx-auto mt-12 pb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-12">Design Album</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {albumMedia.map((media) => (
                                <motion.div key={media.id} whileHover={{ scale: 1.03 }} onClick={() => setSelectedAlbumMedia(media)} className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-neutral-900">
                                    <img src={media.thumb} className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ title, type, desc, tags }) => (
  <motion.div whileHover={{ y: -5 }} className="flex flex-col h-full p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 hover:border-rose-800 transition-all shadow-xl cursor-default">
    <span className="text-[10px] sm:text-xs font-bold text-rose-800 dark:text-rose-500 uppercase tracking-wider mb-2 block">{type}</span>
    <h3 className="text-xl sm:text-2xl font-bold mb-3 flex justify-between items-center text-black dark:text-white">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">{tags.map(t => <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-[10px] rounded-full font-medium">{t}</span>)}</div>
  </motion.div>
);

export default Projects;