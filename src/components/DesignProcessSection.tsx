import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export const DesignProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section id="process" className="py-20 md:py-28 relative">
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
            id="process-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 hover:scale-105 transition-transform shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING WORKFLOW</span>
          </div>

          <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Software Engineering Lifecycle
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From technical specifications and database models to type-safe frontend UI, backend APIs, and zero-downtime deployment.
          </p>
        </motion.div>

        {/* 5-Step Process Grid with Staggered Scroll Animations - Double Grid on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === step.step;
            const isLast = index === PROCESS_STEPS.length - 1;
            return (
              <motion.div
                key={step.step}
                id={`process-card-${step.step}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(step.step)}
                className={`glass-panel p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isLast ? 'col-span-2 md:col-span-1' : ''
                } ${
                  isSelected
                    ? 'ring-2 ring-[#6C5CE7] bg-white/95 shadow-xl -translate-y-1'
                    : 'hover:bg-white/80 hover:shadow-md shadow-xs'
                }`}
              >
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <span
                      className={`text-lg sm:text-2xl font-black transition-colors ${
                        isSelected ? 'purple-gradient-text scale-110' : 'text-slate-300 group-hover:text-slate-500'
                      }`}
                    >
                      {step.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#6C5CE7] animate-pulse"></span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-[#6C5CE7] transition-colors leading-snug line-clamp-2 sm:line-clamp-none">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    {step.description}
                  </p>
                </div>

                {/* Activities Breakdown */}
                <div className="pt-2.5 sm:pt-4 border-t border-slate-100/80 space-y-1 sm:space-y-1.5">
                  {step.activities.slice(0, 3).map((act, i) => (
                    <div key={i} className="flex items-start gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-slate-500 group-hover:text-slate-700 transition-colors">
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#6C5CE7] shrink-0 mt-0.5" />
                      <span className="truncate">{act}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
