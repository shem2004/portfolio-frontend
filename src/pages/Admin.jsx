import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Admin = () => {
  // Authentication State
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  
  // Project Form State
  const [formData, setFormData] = useState({ title: '', description: '', image_url: '', category: 'UI/UX' });
  const [status, setStatus] = useState('');

  // --- LOGIN FUNCTION ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('Logging in...');
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('adminToken', data.token); // I-save sa browser para hindi log-out nang log-out
        setStatus('');
      } else {
        setStatus(data.detail || 'Login failed.');
      }
    } catch (error) {
      setStatus('Cannot connect to server.');
    }
  };

  // --- LOGOUT FUNCTION ---
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('adminToken');
    setStatus('Logged out successfully.');
  };

  // --- UPLOAD FUNCTION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving project...');
    try {
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Dito natin pinapakita ang VIP Token!
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Project added successfully! 🎉');
        setFormData({ title: '', description: '', image_url: '', category: 'UI/UX' });
      } else {
        setStatus(data.detail || 'Failed to add project.');
      }
    } catch (error) {
      setStatus('Failed to connect to the server.');
    }
  };

  // --- UI: KUNG HINDI PA NAKA-LOGIN ---
  if (!token) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-md mx-auto min-h-screen flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
          <h1 className="text-3xl font-black mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" placeholder="Username" required
              className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none"
              value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})}
            />
            <input 
              type="password" placeholder="Password" required
              className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none"
              value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            />
            <button type="submit" className="w-full py-4 bg-rose-800 text-white rounded-xl font-bold hover:bg-rose-900 transition-all">Login</button>
            {status && <p className="text-center mt-4 text-rose-800 font-medium">{status}</p>}
          </form>
        </motion.div>
      </div>
    );
  }

  // --- UI: KUNG NAKA-LOGIN NA (Upload Form) ---
  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-black text-black dark:text-white">Admin Dashboard</h1>
            <button onClick={handleLogout} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm rounded-lg hover:bg-rose-800 hover:text-white transition-all">Logout</button>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Project Title" required className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Image Filename (e.g., /samples/img.png)" required className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none" value={formData.image_url} onChange={(e) => setFormData({...formData, image_url: e.target.value})} />
                    <select className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        <option value="UI/UX">UI/UX Design</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Dev">Web Development</option>
                    </select>
                </div>
                <textarea placeholder="Project Description" rows="4" required className="w-full p-4 rounded-xl border dark:bg-black dark:border-gray-800 focus:ring-2 focus:ring-rose-800 outline-none" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
                <button type="submit" className="w-full py-4 bg-rose-800 text-white rounded-xl font-bold hover:bg-rose-900 transition-all">Upload Project</button>
                {status && <p className="text-center mt-4 text-rose-800 font-medium">{status}</p>}
            </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;