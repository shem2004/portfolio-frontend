import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, TrendingUp, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  // State para ma-track kung anong certificate image ang i-o-open
  const [selectedCert, setSelectedCert] = useState(null);
  
  // State para sa mini-gallery index kapag maraming pictures (tulad ng HP Programs)
  const [certGalleryIndex, setCertGalleryIndex] = useState(0);

  // Framer Motion animation variants for staggered cards
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div 
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1 
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.2 } } }} 
            className="text-4xl md:text-6xl font-black mb-16 text-center text-black dark:text-white uppercase tracking-tight"
        >
            Certifications
        </motion.h1>

        {/* --- GRID OF CARDS (With Staggered Animation) --- */}
        <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
        >
            {/* TESDA NC II */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/nc2.png')} 
            >
                {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/nc2.png" 
                      alt="TESDA NC II Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                {/* DETAILS BELOW IMAGE */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC II</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Computer Systems Servicing</p>
                <p className="text-gray-500 text-sm">Certified competent in computer hardware servicing and network configuration.</p>
            </motion.div>

            {/* TESDA NC III */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/nc3.png')} 
            >
                 {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/nc3.png" 
                      alt="TESDA NC III Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC III</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Visual Graphics Designing</p>
                <p className="text-gray-500 text-sm">Advanced certification for complex designing and UI/UX interface.</p>
            </motion.div>

            {/* YZNAL CORPORATION PHOTOSHOP */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/photoshop.png')} 
            >
                 {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/photoshop.png" 
                      alt="YZNAL Photoshop Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Photoshop</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Photoshop at YZNAL Corporation.</p>
            </motion.div>

            {/* YZNAL CORPORATION ILLUSTRATOR */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/illustrator.png')} 
            >
                 {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/illustrator.png" 
                      alt="YZNAL Illustrator Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Illustrator</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Illustrator at YZNAL Corporation.</p>
            </motion.div>

            {/* HP Programs (ARRAY OF IMAGES) */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => {
                setCertGalleryIndex(0); // Reset in case multi-image opened before
                setSelectedCert([
                  '/certifications/ai.PNG', 
                  '/certifications/design.PNG', 
                  '/certifications/business.PNG'
                ]);
              }} 
            >
                 {/* PREVIEW IMAGE CONTAINER (Shows first image) */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/ai.png" 
                      alt="HP Programs Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">HP Programs</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Design Thinking, Digital Business Skills, and AI for Business Professionals</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Design Thinking, Digital Business Skills, and AI for Business Professionals at HP Programs.</p>
            </motion.div>

            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/prompting.png')} 
            >
                 {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/prompting.png" 
                      alt="Google Prompting Essentials Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">Google Coursera</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Google Prompting Essentials</p>
                <p className="text-gray-500 text-sm">Awarded for demonstrating proficiency in prompt engineering, optimizing AI interactions, and effectively leveraging generative AI tools.</p>
            </motion.div>

            {/* Google Coursera */}
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
              className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-all group cursor-pointer flex flex-col"
              onClick={() => setSelectedCert('/certifications/ux.png')} 
            >
                 {/* PREVIEW IMAGE CONTAINER */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800">
                    <motion.img 
                      src="/certifications/ux.png" 
                      alt="Google UX Preview" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                </div>
                 {/* DETAILS BELOW IMAGE */}
                 <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">Google Coursera</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Google UI/UX Design Professional Certificate</p>
                <p className="text-gray-500 text-sm">Awarded for mastering foundational UI/UX design practices, including user research, wireframing, and prototyping.</p>
            </motion.div>
        </motion.div>

      </motion.div>

      {/* --- POP-UP MODAL PARA SA CERTIFICATE IMAGE / GALLERY --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setSelectedCert(null)} 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
          >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }} 
                animate={{ scale: 1, y: 0 }} 
                exit={{ scale: 0.9, y: 20 }} 
                transition={{ type: "spring", damping: 20, stiffness: 300 }} 
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-5xl w-full flex flex-col bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 cursor-default"
            >
                {/* CLOSE BUTTON */}
                <button 
                  onClick={() => setSelectedCert(null)} 
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-black/50 hover:bg-rose-600 text-white transition-colors z-50 backdrop-blur-md"
                >
                    <X size={20}/>
                </button>
                
                {/* IMAGE AREA (DYNAMIC BAKA ARRAY O SINGLE STRING) */}
                <div className="w-full bg-black flex items-center justify-center p-4 sm:p-8 min-h-[50vh] relative group">
                    {Array.isArray(selectedCert) ? (
                        // KAPAG ARRAY (Maraming Pictures tulad ng HP Programs)
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img 
                              src={selectedCert[certGalleryIndex]} 
                              alt="Certificate Verification" 
                              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg" 
                            />
                            
                            {/* Navigation Buttons (arrows show on hover of group) */}
                            {selectedCert.length > 1 && (
                                <>
                                    <button 
                                      onClick={(e) => { 
                                        e.stopPropagation(); 
                                        setCertGalleryIndex(prev => prev === 0 ? selectedCert.length - 1 : prev - 1); 
                                      }} 
                                      className="absolute left-2 sm:left-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-all z-20 shadow-md md:opacity-0 md:group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button 
                                      onClick={(e) => { 
                                        e.stopPropagation(); 
                                        setCertGalleryIndex(prev => prev === selectedCert.length - 1 ? 0 : prev + 1); 
                                      }} 
                                      className="absolute right-2 sm:right-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-all z-20 shadow-md md:opacity-0 md:group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    
                                    {/* Mga tuldok sa baba ng picture */}
                                    <div className="absolute bottom-4 flex gap-2 z-20">
                                        {selectedCert.map((_, i) => (
                                            <div key={i} className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${i === certGalleryIndex ? 'bg-rose-600 scale-125' : 'bg-white/50'}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        // KAPAG SINGLE STRING LANG (Isang Picture tulad ng ibang certs)
                        <img 
                          src={selectedCert} 
                          alt="Certificate Verification" 
                          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-lg" 
                        />
                    )}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Achievements;