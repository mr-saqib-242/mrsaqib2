import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Award, Star } from 'lucide-react';
import { AWARDS_DATA, AWARDS_IMAGE_URL } from '../data';

export const AwardsSection: React.FC = () => {
  const [sculptureLoaded, setSculptureLoaded] = useState(false);

  return (
    <section id="awards" className="py-20 md:py-28 relative">
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
            id="awards-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECOGNITION</span>
          </div>

          <h2 id="awards-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Craft, Innovation & Impact
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Honored by global design institutions for excellence in product design, aesthetics and digital user experience.
          </p>
        </motion.div>

        {/* 2-Column Grid: Left 3D Glass Sculpture, Right Award Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Sculpture with Tilt Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[380px] rounded-3xl overflow-hidden glass-panel p-4 shadow-xl border border-white/90 group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] flex items-center justify-center">
                
                {!sculptureLoaded && (
                  <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center text-slate-500 text-xs">
                    Loading 3D Iridescent Sculpture...
                  </div>
                )}

                <img
                  id="awards-sculpture-img"
                  src={AWARDS_IMAGE_URL}
                  alt="3D Iridescent Glass Design Trophy Sculpture"
                  referrerPolicy="no-referrer"
                  onLoad={() => setSculptureLoaded(true)}
                  className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${
                    sculptureLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-300 animate-bounce" />
                    <span className="text-xs font-semibold">Excellence in Design</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">4 Global Accolades</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Awards Grid - Double Grid on Mobile */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-4">
            {AWARDS_DATA.map((award, index) => (
              <motion.div
                key={award.id}
                id={`award-item-${award.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel p-3.5 sm:p-5 rounded-2xl flex flex-col justify-between group hover:bg-white/95 transition-all duration-300 shadow-xs hover:shadow-xl border border-white/80 cursor-default"
              >
                <div>
                  {/* Top row: Icon and Year */}
                  <div className="flex items-center justify-between gap-1 mb-2 sm:mb-3">
                    <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl ${award.colorClass} flex items-center justify-center font-bold text-xs sm:text-base shrink-0 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {award.symbol}
                    </div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-slate-400 font-mono group-hover:text-[#6C5CE7] transition-colors">
                      {award.year}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-[#6C5CE7] transition-colors leading-snug line-clamp-2 mb-1 sm:mb-1.5">
                    {award.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {award.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="mt-2.5 sm:mt-3 pt-2 border-t border-slate-100/80">
                  <span className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 truncate inline-block max-w-full group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
                    {award.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

