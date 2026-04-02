import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, GraduationCap } from 'lucide-react'; 

const Education = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-black dark:text-white">Education</h1>

            {/* PUP Card */}
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl mb-8 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-800/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6 mb-8">
                    <div className="p-5 bg-rose-100 dark:bg-rose-950/50 rounded-2xl text-rose-800 dark:text-rose-500 shrink-0">
                        <GraduationCap size={40} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-rose-800 mb-1">Polytechnic University of the Philippines</h2>
                        <p className="text-gray-500 text-sm uppercase tracking-widest">Sta. Mesa, Manila</p>
                    </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">Diploma in Information Technology</h3>
                <p className="text-gray-400 mb-10 font-medium">2023 - Present</p>

                {/* GPA History Grid */}
                <div className="mb-10">
                    <h4 className="text-lg font-bold text-black dark:text-white flex items-center gap-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-3">
                        <BookOpen size={20} className="text-rose-800" /> Academic Performance (GPA)
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* SY 2526 */}
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-gray-800 hover:border-rose-800 transition-colors shadow-sm group">
                            <h5 className="font-bold text-black dark:text-white mb-4 group-hover:text-rose-800 transition-colors">SY 2025-2026 (3RD YEAR)</h5>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-200 dark:border-gray-800/50 pb-2">
                                    <span className="text-gray-600 dark:text-gray-400">First Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.25</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-gray-600 dark:text-gray-400">Second Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.00</span>
                                </div>
                            </div>
                        </div>

                        {/* SY 2425 */}
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-gray-800 hover:border-rose-800 transition-colors shadow-sm group">
                            <h5 className="font-bold text-black dark:text-white mb-4 group-hover:text-rose-800 transition-colors">SY 2024-2025 (2ND YEAR)</h5>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-200 dark:border-gray-800/50 pb-2">
                                    <span className="text-gray-600 dark:text-gray-400">First Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.34</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-200 dark:border-gray-800/50 pb-2">
                                    <span className="text-gray-600 dark:text-gray-400">Summer Semester (OJT)</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-gray-600 dark:text-gray-400">Second Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.35</span>
                                </div>
                            </div>
                        </div>

                        {/* SY 2324 */}
                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-gray-800 hover:border-rose-800 transition-colors shadow-sm md:col-span-2 group">
                            <h5 className="font-bold text-black dark:text-white mb-4 group-hover:text-rose-800 transition-colors">SY 2023-2024 (1ST YEAR)</h5>
                            
                            {/* Pinalitan ang grid ng space-y-3 para mag-stack vertically */}
                            <div className="space-y-3">
                                
                                {/* Nilagyan ng border-b at pb-2 para magkaroon ng linya sa ilalim */}
                                <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-200 dark:border-gray-800/50 pb-2">
                                    <span className="text-gray-600 dark:text-gray-400">First Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.26</span>
                                </div>
                                
                                {/* Walang border 'yung pangalawa kasi nasa pinakailalim na siya */}
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-gray-600 dark:text-gray-400">Second Semester</span>
                                    <span className="font-black text-rose-800 dark:text-rose-500">1.17</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-900/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="p-3 bg-white dark:bg-black rounded-full shrink-0 shadow-sm">
                        <Trophy size={24} className="text-rose-800" />
                    </div>
                    <div>
                        <h4 className="font-bold text-black dark:text-white mb-1">Overall Grade</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                            Consistent President's Lister with a running <strong>General Weighted Average (GWA) of 1.19</strong>.
                        </p>
                    </div>
                </div>
            </div>

        </motion.div>
    </div>
    );
};

export default Education;