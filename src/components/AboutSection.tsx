import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, User, Compass, Target, MapPin, Calendar, Briefcase, Zap } from 'lucide-react';
import { ABOUT_DATA, HERO_DATA } from '../data';

interface AboutSectionProps {
  onOpenExtendedBio?: () => void;
  onOpenProfile?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenExtendedBio, onOpenProfile }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            id="about-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO I AM</span>
          </div>

          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Designing with Empathy<br />
            Building with Purpose
          </h2>
        </motion.div>

        {/* Content Grid: Left Profile Card & Stats, Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Profile Card & Quick Stats with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Identity Card with Interactive Hover */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="glass-panel p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/80 relative overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <motion.img
                  whileHover={{ rotate: 4, scale: 1.05 }}
                  src={HERO_DATA.portraitUrl}
                  alt={HERO_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover object-top ring-2 ring-purple-500/30 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{HERO_DATA.brand}</h3>
                  <p className="text-xs text-[#6C5CE7] font-semibold">{HERO_DATA.role}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/70 text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-100/80">
                  <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-purple-600" />
                    Brand
                  </span>
                  <span className="font-bold text-slate-900 text-xs">{HERO_DATA.brand}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100/80">
                  <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    Age
                  </span>
                  <span className="font-bold text-slate-900 text-xs">{HERO_DATA.age}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    Location
                  </span>
                  <span className="font-bold text-slate-900 text-xs">{HERO_DATA.location}</span>
                </div>
              </div>
            </motion.div>

            {/* 3 Stats Cards with Micro-interactions */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  id={`about-stat-card-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="glass-panel p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-center flex flex-col items-center justify-center relative overflow-hidden group shadow-xs hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <span className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-0.5 sm:mb-1 purple-gradient-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Narrative with Motion Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl w-full border border-white/80 shadow-sm hover:shadow-xl transition-shadow duration-300">
              
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>Modern Digital Experiences</span>
              </div>

              <p id="about-narrative-text" className="text-slate-800 text-sm sm:text-lg leading-relaxed mb-6 font-normal">
                {ABOUT_DATA.narrative}
              </p>

              {/* Mission Highlight Box with Subtle Pulsing Aura */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-indigo-50/70 border border-purple-200/70 mb-6 shadow-2xs"
              >
                <p className="text-xs font-extrabold text-[#6C5CE7] uppercase tracking-wider mb-1">
                  My Core Mission:
                </p>
                <p className="text-xs sm:text-base font-bold text-slate-900 leading-snug">
                  "{ABOUT_DATA.mission}"
                </p>
              </motion.div>

              {/* Extra expandable points with smooth Spring Motion */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden mb-6 pt-5 border-t border-slate-200/70 space-y-3"
                  >
                    {ABOUT_DATA.extendedBio.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                    <div className="grid grid-cols-3 gap-3 pt-3">
                      <motion.div whileHover={{ y: -2 }} className="p-3 bg-purple-50/70 rounded-xl text-center border border-purple-100">
                        <User className="w-4 h-4 text-[#6C5CE7] mx-auto mb-1" />
                        <p className="text-[11px] font-bold text-slate-800">User Centered</p>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} className="p-3 bg-indigo-50/70 rounded-xl text-center border border-indigo-100">
                        <Compass className="w-4 h-4 text-[#6C5CE7] mx-auto mb-1" />
                        <p className="text-[11px] font-bold text-slate-800">Clean Code</p>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} className="p-3 bg-teal-50/70 rounded-xl text-center border border-teal-100">
                        <Target className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                        <p className="text-[11px] font-bold text-slate-800">Real Impact</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap items-center gap-3">
                {onOpenProfile && (
                  <motion.button
                    id="about-open-profile-page-btn"
                    type="button"
                    onClick={onOpenProfile}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>Open Dedicated Profile Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                )}

                <motion.button
                  id="about-toggle-more-btn"
                  type="button"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    if (onOpenExtendedBio) {
                      onOpenExtendedBio();
                    } else {
                      setIsExpanded(!isExpanded);
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>{isExpanded ? 'Show Less' : 'More About Me'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? '-rotate-90' : ''}`} />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

