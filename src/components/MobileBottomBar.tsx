import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, Terminal, Cpu, MessageSquare, User, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../data';

interface MobileBottomBarProps {
  currentView: 'home' | 'profile' | 'finova-case-study';
  onNavigateHome: () => void;
  onOpenProfile: () => void;
  onOpenCaseStudy: () => void;
  onContactClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentView,
  onNavigateHome,
  onOpenProfile,
  onOpenCaseStudy,
  onContactClick,
}) => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor scroll for subtle auto-hiding when scrolling fast downwards, but always accessible
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update active section on scroll
      if (currentView === 'home') {
        const sections = [
          { id: 'contact', tab: 'contact' },
          { id: 'developer-workbench', tab: 'terminal' },
          { id: 'work', tab: 'work' },
          { id: 'tools', tab: 'tools' },
          { id: 'home', tab: 'home' },
        ];

        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 150) {
              setActiveTab(s.tab);
              break;
            }
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, lastScrollY]);

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      id="mobile-bottom-dock"
      aria-label="Mobile Bottom Navigation Dock"
      className="lg:hidden fixed bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px] z-40 select-none pointer-events-none"
    >
      <div className="pointer-events-auto bg-white/90 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-xl shadow-purple-500/10 px-2 py-1.5 flex items-center justify-around gap-1">
        
        {/* Home */}
        <motion.button
          id="mobile-dock-home"
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={() => scrollToSection('home', 'home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 ${
            activeTab === 'home' && currentView === 'home'
              ? 'text-[#6C5CE7] bg-purple-50/80 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none">Home</span>
        </motion.button>

        {/* Work */}
        <motion.button
          id="mobile-dock-work"
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={() => scrollToSection('work', 'work')}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 ${
            activeTab === 'work' && currentView === 'home'
              ? 'text-[#6C5CE7] bg-purple-50/80 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none">Work</span>
        </motion.button>

        {/* Stack */}
        <motion.button
          id="mobile-dock-tools"
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={() => scrollToSection('tools', 'tools')}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 ${
            activeTab === 'tools' && currentView === 'home'
              ? 'text-[#6C5CE7] bg-purple-50/80 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none">Stack</span>
        </motion.button>

        {/* Terminal Workbench */}
        <motion.button
          id="mobile-dock-terminal"
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={() => scrollToSection('developer-workbench', 'terminal')}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 ${
            activeTab === 'terminal' && currentView === 'home'
              ? 'text-emerald-700 bg-emerald-50 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Terminal className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none">Terminal</span>
        </motion.button>

        {/* Profile */}
        <motion.button
          id="mobile-dock-profile"
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={() => {
            if (currentView === 'profile') {
              onNavigateHome();
            } else {
              onOpenProfile();
            }
          }}
          className={`flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all duration-200 ${
            currentView === 'profile'
              ? 'text-purple-700 bg-purple-100/90 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-none">
            {currentView === 'profile' ? 'Main' : 'Profile'}
          </span>
        </motion.button>

        {/* WhatsApp Direct */}
        <motion.a
          id="mobile-dock-whatsapp"
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.88 }}
          className="flex flex-col items-center justify-center flex-1 py-1 rounded-xl text-emerald-600 hover:bg-emerald-50 transition-colors"
          title="Direct WhatsApp Chat"
        >
          <FaWhatsapp className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold leading-none">Chat</span>
        </motion.a>

      </div>
    </nav>
  );
};
