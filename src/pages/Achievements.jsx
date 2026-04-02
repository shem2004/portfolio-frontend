import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Achievements = () => {
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
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC II</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Computer Systems Servicing</p>
                <p className="text-gray-500 text-sm">Certified competent in computer hardware servicing and network configuration.</p>
            </div>

            {/* TESDA NC III */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">TESDA NC III</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Visual Graphics Designing</p>
                <p className="text-gray-500 text-sm">Advanced certification for complex designing and UI/UX interface.</p>
            </div>
            {/* YZNAL CORPORATION PHOTOSHOP */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Photoshop</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Photoshop at YZNAL Corporation.</p>
            </div>
            {/* YZNAL CORPORATION PHOTOSHOP */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">YZNAL Corporation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Graphic Design using Illustrator</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Graphic Design using Adobe Illustrator at YZNAL Corporation.</p>
            </div>
            {/* HP Programs */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">HP Programs</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Design Thinking, Digital Business Skills, and AI for Business
                  Professionals</p>
                <p className="text-gray-500 text-sm">Certificate of Completion in Design Thinking, Digital Business Skills, and AI for Business
                  Professionals at HP Programs.</p>
            </div>
            {/* Google Coursera */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">Google Coursera</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Google Cybersecurity Professional Certificate</p>
                <p className="text-gray-500 text-sm">Awarded for mastering foundational cybersecurity practices, including threat detection, network security, and risk mitigation.</p>
            </div>
            {/* Google Coursera */}
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl hover:border-rose-800 transition-colors group">
                 <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-black dark:text-white" />
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-rose-800 transition-colors">Google Coursera</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Google UI/UX Design Professional Certificate</p>
                <p className="text-gray-500 text-sm">Awarded for mastering foundational UI/UX design practices, including user research, wireframing, and prototyping.</p>
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Achievements;