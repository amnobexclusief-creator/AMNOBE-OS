'use client';

import { useState, useEffect } from 'react';
import BuddyChat from '../components/BuddyChat';

export default function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'buddy', label: 'Buddy AI', icon: '🤖' },
    { id: 'memory', label: 'Memory', icon: '🧠' },
    { id: 'studio', label: 'Content Studio', icon: '🎬' },
    { id: 'planner', label: 'Planner', icon: '📅' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'experts', label: 'AI Experts', icon: '👥' },
    { id: 'automations', label: 'Automatiseringen', icon: '⚙️' },
  ];

  return (
    <main className={`min-h-screen flex transition-colors ${theme === 'light' 
      ? 'bg-zinc-100 text-zinc-900' 
      : 'bg-black text-white'}`}>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none" />

      {/* Sidebar with Glassmorphism */}
      <div className={`w-72 border-r flex flex-col z-50 transition-all ${
        theme === 'light' 
          ? 'bg-white/80 border-zinc-200 backdrop-blur-xl' 
          : 'bg-zinc-950/80 border-gray-800 backdrop-blur-xl'
      }`}>
        
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-2xl flex items-center justify-center text-black font-bold text-3xl shadow-lg">
              A
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">AMNOBE OS</h1>
              <p className="text-xs opacity-70 -mt-1">v0.1 ALPHA</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-3 py-6">
          <div className={`px-3 mb-4 text-xs font-medium uppercase tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-gray-500'}`}>
            Hoofdmenu
          </div>
          
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl mb-1 text-left transition-all ${
                activePage === item.id 
                  ? 'bg-yellow-400 text-black font-medium shadow-md' 
                  : theme === 'light'
                    ? 'hover:bg-white/70 text-zinc-700'
                    : 'hover:bg-white/5 text-gray-300 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[15px]">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Glass Toggle */}
        <div className="p-6 border-t border-white/10 mt-auto">
          <div 
            onClick={toggleTheme}
            className={`group flex items-center justify-between rounded-3xl px-5 py-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md ${
              theme === 'light' 
                ? 'bg-white/70 hover:bg-white border border-zinc-200' 
                : 'bg-white/5 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl transition-transform duration-500 group-hover:rotate-12">
                {theme === 'dark' ? '🌙' : '☀️'}
              </span>
              <div>
                <p className="font-medium">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
                <p className="text-xs opacity-70">Klik om te wisselen</p>
              </div>
            </div>

            <div className={`relative w-14 h-8 rounded-full transition-all duration-500 flex items-center p-1 shadow-inner ${
              theme === 'dark' ? 'bg-zinc-700' : 'bg-yellow-400'
            }`}>
              <div 
                className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-500 ${
                  theme === 'dark' ? 'translate-x-0' : 'translate-x-6'
                }`}
              >
                <span className={`text-xs transition-transform duration-500 ${theme === 'dark' ? '' : 'rotate-45'}`}>
                  {theme === 'dark' ? '●' : '☀️'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative">
        <div className="max-w-5xl mx-auto px-10 py-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className={`text-5xl font-bold tracking-tighter ${theme === 'light' ? 'text-yellow-600' : 'text-yellow-400'}`}>
                {activePage === 'dashboard' ? 'Dashboard' : menuItems.find(m => m.id === activePage)?.label}
              </h1>
              <p className={`text-xl mt-2 ${theme === 'light' ? 'text-zinc-600' : 'text-gray-400'}`}>
                Welkom terug bij je eigen AI Operating System
              </p>
            </div>
            
            <div className="text-right">
              <p className={`text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-gray-500'}`}>30 juni 2026</p>
              <p className="text-lg font-medium">00:32</p>
            </div>
          </div>

          {activePage === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "🤖 Start een gesprek met Buddy AI",
                "🧠 Bekijk je Memory Vault",
                "🎬 Open Content Studio",
                "📅 Open de Week Planner",
                "📊 Bekijk Analytics",
                "⚙️ Beheer Automatiseringen"
              ].map((text, i) => (
                <div 
                  key={i} 
                  className={`border rounded-3xl p-8 transition-all hover:scale-[1.02] cursor-pointer backdrop-blur-xl ${
                    theme === 'light' 
                      ? 'bg-white/70 border-zinc-200 hover:border-yellow-400' 
                      : 'bg-zinc-900/70 border-gray-700 hover:border-yellow-400/40'
                  }`}
                >
                  <p className="text-2xl mb-4">{text}</p>
                  <button className={`text-sm font-medium ${theme === 'light' ? 'text-yellow-600' : 'text-yellow-400'} hover:underline`}>
                    Nu openen →
                  </button>
                </div>
              ))}
            </div>
          )}

          {activePage === 'buddy' && (
            <div className="border rounded-3xl p-6 backdrop-blur-xl transition-colors">
              <BuddyChat />
            </div>
          )}

          {activePage !== 'dashboard' && activePage !== 'buddy' && (
            <div className={`border rounded-3xl p-16 text-center backdrop-blur-xl transition-colors ${
              theme === 'light' 
                ? 'bg-white/70 border-zinc-200' 
                : 'bg-zinc-900/70 border-gray-700'
            }`}>
              <p className="text-4xl mb-6">🚧</p>
              <h3 className="text-2xl font-medium mb-3">
                {menuItems.find(m => m.id === activePage)?.label} module
              </h3>
              <p className={`max-w-md mx-auto ${theme === 'light' ? 'text-zinc-600' : 'text-gray-400'}`}>
                Dit gedeelte is nog in ontwikkeling.<br />
                We bouwen dit samen verder!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}