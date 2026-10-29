import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code, Cpu, Palette, ArrowRight, X } from 'lucide-react';
import { HERO_DATA } from '../data';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const GREETINGS = [
  { text: 'Hello', lang: 'English' },
  { text: 'خوش آمدید', lang: 'Urdu' },
  { text: 'Welcome', lang: 'Global' },
  { text: 'مرحباً', lang: 'Arabic' },
  { text: 'Bienvenue', lang: 'French' },
];

export const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(15);
  const [isFinishing, setIsFinishing] = useState(false);

  // Cycle through short greeting words
  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 450);

    return () => clearInterval(greetingInterval);
  }, []);

  // Smooth loading progression
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + jump, 100);
      });
    }, 280);

    return () => clearInterval(progressInterval);
  }, []);

  // Finish and dismiss when progress hits 100% or after 2.4s
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFinishing(true);
        setTimeout(onComplete, 600);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  // Safety maximum duration timeout
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      setIsFinishing(true);
      setTimeout(onComplete, 500);
    }, 3200);

    return () => clearTimeout(maxTimer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinishing(true);
    setTimeout(onComplete, 300);
  };

  return (
    <motion.div
      id="welcome-screen-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.98 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
    >
      {/* Background Animated Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Skip Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          id="welcome-skip-btn"
          type="button"
          onClick={handleSkip}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-semibold text-slate-300 hover:text-white transition-all border border-white/10 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md px-6">
        
        {/* Animated Avatar with Glowing Rings */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-6"
        >
          {/* Pulsing Back Rings */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 opacity-60 blur-md animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin-slow opacity-80" />

          {/* Profile Picture */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-[3px] bg-slate-950">
            <img
              src={HERO_DATA.portraitUrl}
              alt={HERO_DATA.name}
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>

          {/* Sparkle Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#6C5CE7] text-white flex items-center justify-center border-2 border-slate-950 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>
        </motion.div>

        {/* Dynamic Greeting Flipper */}
        <div className="h-9 mb-2 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={greetingIndex}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{GREETINGS[greetingIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Welcome Name Heading */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
        >
          <span>Welcome to </span>
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
            {HERO_DATA.brand}
          </span>
        </motion.h1>

        {/* Subtitle / Personal Intro */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-xs sm:text-sm text-slate-400 max-w-xs sm:max-w-sm mb-7 leading-relaxed"
        >
          <span className="font-bold text-slate-200">{HERO_DATA.name}</span>
          <span className="mx-1.5 text-purple-400">•</span>
          <span>Full-Stack Developer &amp; AI Enthusiast</span>
        </motion.p>

        {/* Loading Progress Bar & Percentage */}
        <div className="w-full max-w-xs space-y-2">
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/40">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
            <span className="flex items-center gap-1 text-slate-400">
              <Code className="w-3 h-3 text-purple-400" />
              <span>Initializing workspace...</span>
            </span>
            <span className="text-purple-300 font-bold">{progress}%</span>
          </div>
        </div>

        {/* Skill Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-slate-800/60 text-slate-400 text-xs"
        >
          <div className="flex items-center gap-1.5 hover:text-purple-300 transition-colors">
            <Code className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[11px]">Modern Code</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[11px]">AI Solutions</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5 hover:text-pink-300 transition-colors">
            <Palette className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[11px]">Visual Craft</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
