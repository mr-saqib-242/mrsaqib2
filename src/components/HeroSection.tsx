import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Download, Sparkles, TrendingUp, Award, Code, Palette, Cpu, Sparkle } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroSectionProps {
  onOpenCV: () => void;
  onViewWork: () => void;
  onOpenProfile?: () => void;
}

const DYNAMIC_ROLES = [
  'Full-Stack Developer & UI/UX Specialist',
  'AI Solutions & Automation Architect',
  'Creative Graphic & Brand Technologist',
  'High-Performance Web App Builder',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV, onViewWork, onOpenProfile }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycling dynamic text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % DYNAMIC_ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content with Staggered Slide In */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-4"
            >
              <div
                id="hero-welcome-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/15 via-indigo-500/15 to-pink-500/15 border border-purple-300/60 text-purple-800 text-xs font-bold tracking-tight shadow-2xs hover:scale-105 transition-transform"
              >
                <span className="animate-wave text-sm" role="img" aria-label="Waving hand">👋</span>
                <span>Welcome to Saqib Visuals</span>
              </div>
              <div
                id="hero-greeting-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase hover:scale-105 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                <span>{HERO_DATA.tagline}</span>
              </div>
              <div
                id="hero-brand-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider hover:scale-105 transition-transform"
              >
                <span>✨ {HERO_DATA.brand}</span>
              </div>
            </motion.div>

            {/* Display Headings with Slide Up */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-3"
            >
              {HERO_DATA.name}
            </motion.h1>

            {/* Dynamic Morphing Role Text Animation */}
            <div className="min-h-[44px] sm:min-h-[50px] mb-4 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  id="hero-subtitle"
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold purple-gradient-text tracking-tight"
                >
                  {DYNAMIC_ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Subtitle Bio */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-6"
            >
              {HERO_DATA.bio}
            </motion.p>

            {/* Quick Profile Tag Badges with Hover Scale */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/70 hover:scale-105 hover:bg-purple-100 transition-all">
                🎂 Age: {HERO_DATA.age} ({HERO_DATA.ageBadge})
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/70 hover:scale-105 hover:bg-indigo-100 transition-all">
                📍 {HERO_DATA.location}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70 hover:scale-105 hover:bg-emerald-100 transition-all">
                ⚡ 10 Core Disciplines
              </span>
            </motion.div>

            {/* Action Buttons with Spring Hover Animation - Responsive Grid on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3.5 mb-8"
            >
              {onOpenProfile && (
                <motion.button
                  id="hero-btn-profile-page"
                  type="button"
                  onClick={onOpenProfile}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-xl transition-shadow cursor-pointer min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className="truncate">Profile Page</span>
                </motion.button>
              )}

              <motion.button
                id="hero-btn-view-work"
                type="button"
                onClick={onViewWork}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-xl transition-shadow cursor-pointer min-h-[44px]"
              >
                <span className="truncate">Explore Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform shrink-0" />
              </motion.button>

              <motion.a
                id="hero-btn-whatsapp"
                href="https://wa.me/923478936242"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-xl transition-shadow min-h-[44px]"
              >
                <span className="truncate">WhatsApp Chat</span>
              </motion.a>

              <motion.button
                id="hero-btn-download-cv"
                type="button"
                onClick={onOpenCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/80 hover:bg-white text-slate-800 text-xs sm:text-sm font-semibold px-3 sm:px-5 py-3 sm:py-3.5 rounded-full border border-slate-300/80 shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5 text-[#6C5CE7] shrink-0" />
                <span className="truncate">CV / Resume</span>
              </motion.button>
            </motion.div>

            {/* Trusted By Logos with Staggered Entrance */}
            <motion.div
              id="hero-trusted-by-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-full pt-6 border-t border-slate-200/70"
            >
              <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-4">
                Trusted by innovative teams worldwide
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-slate-400">
                {/* Google */}
                <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight hover:text-slate-700 hover:scale-110 transition-all">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                {/* Microsoft */}
                <div className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 hover:scale-110 transition-all">
                  <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                    <span className="bg-[#F25022]"></span>
                    <span className="bg-[#7FBA00]"></span>
                    <span className="bg-[#00A4EF]"></span>
                    <span className="bg-[#FFB900]"></span>
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-slate-600">Microsoft</span>
                </div>
                {/* Airbnb */}
                <div className="flex items-center gap-1 font-bold text-slate-600 hover:text-[#FF5A5F] hover:scale-110 transition-all">
                  <span className="text-sm tracking-tight">airbnb</span>
                </div>
                {/* HubSpot */}
                <div className="flex items-center gap-1 font-bold text-slate-600 hover:text-[#FF7A59] hover:scale-110 transition-all">
                  <span className="text-sm tracking-tight">HubSpot</span>
                </div>
                {/* Dribbble */}
                <div className="flex items-center gap-1 font-bold text-slate-600 hover:text-[#EA4C89] hover:scale-110 transition-all">
                  <span className="text-sm tracking-tight">Dribbble</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Visual with Slide-In, Hover Zoom & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative group mt-4 lg:mt-0"
          >
            <div className="relative w-[280px] xs:w-[300px] sm:w-[340px] md:w-[380px] max-w-[92vw]">
              
              {/* Soft decorative background circles with pulsing glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 via-indigo-200/40 to-pink-100/50 rounded-[200px] blur-2xl -z-10 transform scale-95 group-hover:scale-105 transition-transform duration-700" />

              {/* Arched Portrait Frame with Zoom on Hover */}
              <motion.div
                id="hero-portrait-frame"
                whileHover={{ scale: 1.02, rotateY: 4, rotateX: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="arch-frame w-full h-[370px] sm:h-[450px] md:h-[490px] overflow-hidden bg-gradient-to-b from-purple-50 via-indigo-50/50 to-indigo-100/60 relative flex items-end justify-center shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/25"
              >
                {/* Loading skeleton / fallback */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-purple-100 to-indigo-100">
                    <div className="w-24 h-24 rounded-full bg-white/70 shadow-sm flex items-center justify-center text-3xl font-bold text-[#6C5CE7] mb-3 animate-pulse">
                      MS
                    </div>
                    <p className="font-semibold text-slate-800">{HERO_DATA.name}</p>
                    <p className="text-xs text-slate-500">{HERO_DATA.brand}</p>
                  </div>
                )}

                <img
                  id="hero-portrait-image"
                  src={imageError ? HERO_DATA.portraitFallback : HERO_DATA.portraitUrl}
                  alt={`${HERO_DATA.name} - ${HERO_DATA.brand}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    if (!imageError) {
                      setImageError(true);
                    }
                  }}
                  className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'
                  }`}
                />

                {/* Animated shimmer sweep overlay on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Inner highlight ring */}
                <div className="absolute inset-0 pointer-events-none rounded-[178px_178px_46px_46px] border border-white/40 shadow-inner" />
              </motion.div>

              {/* Floating Orbiting Tech Badge: Full-Stack & AI */}
              <motion.div
                id="hero-badge-tech-stack"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 4, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                whileHover={{ scale: 1.08 }}
                className="absolute top-1/2 -left-4 sm:-left-10 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/90 text-xs font-bold text-slate-800 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] text-purple-700">⚡ React 19 • Next.js</span>
              </motion.div>

              {/* Floating Orbiting Tech Badge 2: AI Architect */}
              <motion.div
                id="hero-badge-ai-systems"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                whileHover={{ scale: 1.08 }}
                className="absolute top-1/3 -right-3 sm:-right-8 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/90 text-xs font-bold text-slate-800 cursor-default"
              >
                <Sparkle className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-spin-slow" />
                <span className="text-[11px] text-indigo-700">🤖 AI Systems</span>
              </motion.div>

              {/* Floating Badge 1: Age / Prodigy (Continuous Floating Loop) */}
              <motion.div
                id="hero-badge-experience"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.06 }}
                className="absolute -top-3 -left-2 sm:-left-8 glass-panel px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-2.5 sm:gap-3 shadow-lg cursor-default border border-white/90 max-w-[180px] sm:max-w-none"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-100 text-[#6C5CE7] flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">
                    {HERO_DATA.age}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                    {HERO_DATA.ageBadge}
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Innovation Impact (Continuous Floating Loop Offset) */}
              <motion.div
                id="hero-badge-impact"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                whileHover={{ scale: 1.06 }}
                className="absolute -bottom-3 -right-2 sm:-right-6 glass-panel px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-lg cursor-default min-w-[140px] sm:min-w-[160px] border border-white/90"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">
                    Product Impact
                  </span>
                  <div className="flex items-center gap-0.5 text-emerald-600 text-xs font-bold">
                    <TrendingUp className="w-3 h-3" />
                    <span>{HERO_DATA.impactMetric}</span>
                  </div>
                </div>
                {/* SVG Sparkline */}
                <div className="h-7 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 24" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,18 Q15,22 30,12 T60,10 T85,4 T100,2 L100,24 L0,24 Z"
                      fill="url(#sparklineGrad)"
                    />
                    <path
                      d="M0,18 Q15,22 30,12 T60,10 T85,4 T100,2"
                      fill="none"
                      stroke="#6C5CE7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Floating Sparkle Decorative Star */}
              <motion.div
                id="hero-sparkle-star"
                animate={{ rotate: [0, 180, 360], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute top-8 -right-3 w-8 h-8 rounded-full bg-white/95 shadow-md border border-purple-200/80 flex items-center justify-center text-[#6C5CE7]"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
