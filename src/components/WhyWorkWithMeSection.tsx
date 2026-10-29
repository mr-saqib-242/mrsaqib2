import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle, ShieldCheck, Zap, Code, Palette, Bot, MessageSquare, Headphones } from 'lucide-react';
import { WHY_WORK_WITH_ME, HERO_DATA, ABOUT_DATA } from '../data';

export const WhyWorkWithMeSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'responsive-design':
        return <Zap className="w-5 h-5 text-emerald-600" />;
      case 'fast-performance':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'clean-code':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'creative-uiux':
        return <Palette className="w-5 h-5 text-purple-600" />;
      case 'ai-solutions':
        return <Bot className="w-5 h-5 text-indigo-600" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5 text-teal-600" />;
      case 'support':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-20 md:py-28 relative bg-surface-container-low/30">
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
            id="why-work-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 hover:scale-105 transition-transform"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GUARANTEED STANDARD</span>
          </div>

          <h2 id="why-work-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Why Work With Me?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Seven non-negotiable core standards embedded into every single digital product, line of code, and visual deliverable.
          </p>
        </motion.div>

        {/* 7 Checkpoints Grid with Staggered Scroll Animation - Double Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {WHY_WORK_WITH_ME.slice(0, 6).map((item, idx) => (
            <motion.div
              key={item.id}
              id={`why-work-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between group hover:shadow-xl transition-all duration-300 cursor-default border border-white/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 sm:group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300 shadow-2xs">
                  <span className="font-black text-xs sm:text-base">✓</span>
                </div>
                <div>
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#6C5CE7] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-emerald-600">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                    <span className="truncate">Verified Quality</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Checkpoint 7: Reliable Support Banner Card spanning full-width */}
          <motion.div
            id="why-work-support-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="col-span-2 md:col-span-2 lg:col-span-3 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-100/70 via-white/80 to-indigo-100/70 border border-purple-200/60 backdrop-blur-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-lg sm:text-2xl font-bold shadow-md shrink-0 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                  <h3 className="text-sm sm:text-xl font-bold text-slate-900">
                    {WHY_WORK_WITH_ME[6]?.title || 'Reliable Support'}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Active SLA
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  {WHY_WORK_WITH_ME[6]?.description || 'Long-term assistance, rapid bug fixes, security audits, and post-launch maintenance to guarantee your digital presence never skips a beat.'}
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <motion.a
                href={HERO_DATA.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Live Portfolio</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Mission Quote Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:shadow-md transition-shadow"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#6C5CE7] text-white flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
            “
          </div>
          <div className="flex-1">
            <blockquote className="text-base sm:text-lg font-semibold text-slate-800 italic leading-relaxed">
              {ABOUT_DATA.missionQuote}
            </blockquote>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#6C5CE7]">
              — {HERO_DATA.name} • {HERO_DATA.brand}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
