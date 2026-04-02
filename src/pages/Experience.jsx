import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-8 text-black dark:text-white">Internship & Work Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* BAGONG DAGDAG: Part-Time Work */}
            <ProjectCard 
              title="Data Management Assistant" 
              type="BITE MILL (Part-Time)"
              desc="Responsible for the accurate data entry and reconciliation of high-volume financial logs into cloud-based systems, maintaining 100% accuracy in automated reporting across multiple business units."
              tags={["Data Entry", "Financial Logs", "Cloud Systems", "Reporting"]}
            />

            {/* GLAM-ID Project */}
            <ProjectCard 
              title="GLAM-ID" 
              type="Capstone Project"
              desc="An NFC-based loyalty and client information system for FG Aesthetic Centre. Built with Python Flask and MySQL. Designed to streamline client data management."
              tags={["Python", "Flask", "NFC", "MySQL"]}
            />

            {/* Adventus Work */}
            <ProjectCard 
              title="IT Asset Management" 
              type="ADVENTUS IT SERVICES"
              desc="Streamlined UAT processes and hardware diagnostics for laptop redeployment at Adventus IT Services. Handled sensitive IT assets and ensured hardware compliance."
              tags={["Hardware", "Diagnostics", "UAT", "SharePoint"]}
            />

            {/* NTEK Systems, Inc. */}
            <ProjectCard 
              title="QA Testing & Marketing" 
              type="NTEK SYTEMS INC."
              desc="Conducted application testing, market research, and SWOT analysis for the GIG Market app, alongside designing social media marketing materials."
              tags={["QA Testing", "Marketing", "Social Media Design"]}
            />

        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, type, desc, tags }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="group p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 hover:border-rose-800 transition-all shadow-xl shadow-gray-200/50 dark:shadow-none"
  >
    <div className="flex items-center gap-2 mb-2">
        <Briefcase size={16} className="text-rose-800" />
        <span className="text-xs font-bold text-rose-800 dark:text-rose-500 uppercase tracking-wider block">{type}</span>
    </div>
    
    <h3 className="text-2xl font-bold mb-4 flex justify-between items-center text-black dark:text-white group-hover:text-rose-800 dark:group-hover:text-rose-500 transition-colors">
      {title} <ExternalLink size={20} />
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(t => <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-xs rounded-full font-medium text-gray-600 dark:text-gray-300">{t}</span>)}
    </div>
  </motion.div>
);

export default Experience;