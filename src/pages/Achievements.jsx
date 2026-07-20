import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, TrendingUp, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  // State para ma-track kung anong certificate image ang i-o-open
  const [selectedCert, setSelectedCert] = useState(null);
  
  // State para sa mini-gallery index kapag maraming pictures (tulad ng HP Programs)
  const [certGalleryIndex, setCertGalleryIndex] = useState(0);

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-12 text-center text-black dark:text-white">Certifications</h1>

        <div className="grid md:grid-cols-2 gap-6">
            {/* TESDA NC II */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => setSelectedCert('/certifications/nc2.png')} 
            >
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC II</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Computer Systems Servicing</p>
                <p className="text-gray-500 text-sm">Certified competent in computer hardware servicing and network configuration.</p>
            </div>

            {/* TESDA NC III */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => setSelectedCert('/certifications/nc3.png')} 
            >
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC III</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Visual Graphics Designing</p>
                <p className="text-gray-500 text-sm">Advanced certification for complex designing and UI/UX interface.</p>
            </div>

            {/* YZNAL CORPORATION PHOTOSHOP */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => setSelectedCert('/certifications/photoshop.png')} 
            >
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Photoshop</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Photoshop at YZNAL Corporation.</p>
            </div>

            {/* YZNAL CORPORATION ILLUSTRATOR */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => setSelectedCert('/certifications/illustrator.png')} 
            >
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Illustrator</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Illustrator at YZNAL Corporation.</p>
            </div>

            {/* HP Programs (WITH SLIDESHOW / ARRAY OF IMAGES) */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => {
                setCertGalleryIndex(0); // Reset natin sa unang picture
                setSelectedCert([
                  '/certifications/ai.png', // PALITAN NG TOTOONG IMAGE LINK 1
                  '/certifications/design.png', // PALITAN NG TOTOONG IMAGE LINK 2
                  '/certifications/business.png'  // PALITAN NG TOTOONG IMAGE LINK 3
                ]);
              }} 
            >
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">HP Programs</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Design Thinking, Digital Business Skills, and AI for Business Professionals</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Design Thinking, Digital Business Skills, and AI for Business Professionals at HP Programs.</p>
            </div>

            {/* Google Coursera */}
            <div 
              className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group cursor-pointer"
              onClick={() => setSelectedCert('/certifications/ux.png')} 
            >
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">Google Coursera</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Google UI/UX Design Professional Certificate</p>
                <p className="text-gray-500 text-sm">Awarded for mastering foundational UI/UX design practices, including user research, wireframing, and prototyping.</p>
            </div>
        </div>

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
                            
                            {/* Navigation Buttons */}
                            {selectedCert.length > 1 && (
                                <>
                                    <button onClick={(e) => { e.stopPropagation(); setCertGalleryIndex(prev => prev === 0 ? selectedCert.length - 1 : prev - 1); }} className="absolute left-2 sm:left-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-colors z-20 shadow-md">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); setCertGalleryIndex(prev => prev === selectedCert.length - 1 ? 0 : prev + 1); }} className="absolute right-2 sm:right-6 p-2 sm:p-3 bg-black/60 hover:bg-rose-600 text-white rounded-full transition-colors z-20 shadow-md">
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