import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, ShieldCheck, Zap, Layers, Clock, Eye } from 'lucide-react';
import { SPOTLIGHT_CASE_STUDY } from '../data';

interface CaseStudySpotlightProps {
  onOpenCaseStudy: () => void;
}

export const CaseStudySpotlight: React.FC<CaseStudySpotlightProps> = ({ onOpenCaseStudy }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="spotlight" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with premium glass background and entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/90 shadow-xl relative overflow-hidden"
        >
          {/* Subtle ambient light glow in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Image Showcase with Hover Zoom */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div
                onClick={onOpenCaseStudy}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800/40 bg-slate-950 group cursor-pointer"
              >
                {/* Image loading skeleton */}
                {!imgLoaded && (
                  <div className="w-full h-[320px] sm:h-[380px] bg-slate-900 animate-pulse flex items-center justify-center text-slate-500 text-xs">
                    Loading Aurora Fintech Showcase...
                  </div>
                )}

                <img
                  id="spotlight-case-study-img"
                  src={SPOTLIGHT_CASE_STUDY.imageUrl}
                  alt="Aurora Fintech Dashboard Case Study"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-108 transition-transform duration-700 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Hover Quick View Tag */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-950 text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#6C5CE7]" />
                    <span>Explore Interactive Case Study</span>
                  </span>
                </div>

                {/* Floating Tag inside picture */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Finova 3.0 Design System
                  </span>
                  <span className="text-[11px] text-purple-200 font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-purple-300" />
                    <span>8 min read</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Case Study Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div
                  id="spotlight-tag-pill"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SPOTLIGHT CASE STUDY</span>
                </div>
                <div
                  id="spotlight-reading-time-pill"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold hover:scale-105 transition-transform"
                  title="Estimated reading time: 8 minutes"
                >
                  <Clock className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>8 min read</span>
                </div>
              </div>

              <h2 id="spotlight-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {SPOTLIGHT_CASE_STUDY.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {SPOTLIGHT_CASE_STUDY.description}
              </p>

              {/* Challenge & Solution Cards with Hover Glow */}
              <div className="w-full space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100/80 flex items-start gap-3 hover:scale-[1.01] transition-transform">
                  <div className="w-6 h-6 rounded-lg bg-[#6C5CE7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">The Challenge</span>
                    <span className="text-xs text-slate-600 leading-relaxed">{SPOTLIGHT_CASE_STUDY.challenge}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100/80 flex items-start gap-3 hover:scale-[1.01] transition-transform">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">The Solution</span>
                    <span className="text-xs text-slate-600 leading-relaxed">{SPOTLIGHT_CASE_STUDY.solution}</span>
                  </div>
                </div>
              </div>

              {/* Impact Metrics with Hover Scale */}
              <div className="grid grid-cols-3 gap-3 w-full mb-8 pt-4 border-t border-slate-200/70">
                {SPOTLIGHT_CASE_STUDY.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center group cursor-default">
                    <p className="text-xl sm:text-2xl font-black text-slate-900 purple-gradient-text group-hover:scale-110 transition-transform">
                      {metric.value}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button with Spring Hover */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  id="spotlight-btn-view-study"
                  type="button"
                  onClick={onOpenCaseStudy}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 py-1">
                  <Clock className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>Estimated 8 min read</span>
                </span>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
