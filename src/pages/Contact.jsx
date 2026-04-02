import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  // Form Logic
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      // BAGO: I-check kung ok yung response (Status 200-299)
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        // Kapag nag-fail (e.g., Error 500 galing sa backend)
        setStatus(data.detail || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to connect to the server.');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-12 text-center text-black dark:text-white">Get In Touch</h1>
        
        <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-xl border border-gray-200 dark:bg-black dark:border-gray-800 dark:text-white focus:ring-2 focus:ring-rose-800 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 rounded-xl border border-gray-200 dark:bg-black dark:border-gray-800 dark:text-white focus:ring-2 focus:ring-rose-800 outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                />
            </div>
            <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-4 rounded-xl border border-gray-200 dark:bg-black dark:border-gray-800 dark:text-white focus:ring-2 focus:ring-rose-800 outline-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
            ></textarea>
            
            <button type="submit" className="w-full py-4 bg-rose-800 text-white rounded-xl font-bold hover:bg-rose-900 transition-all flex justify-center items-center gap-2">
                Send Message <Send size={18} />
            </button>
            {status && <p className="text-center mt-4 text-rose-800 font-medium animate-pulse">{status}</p>}
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center hover:scale-105 transition-transform">
                    <Mail className="text-rose-800 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">shemisaiah0@gmail.com</span>
                </div>
                <div className="flex flex-col items-center hover:scale-105 transition-transform">
                    <Phone className="text-rose-800 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">0995 597 4186</span>
                </div>
                <div className="flex flex-col items-center hover:scale-105 transition-transform">
                    <MapPin className="text-rose-800 mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Imus, Cavite</span>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;