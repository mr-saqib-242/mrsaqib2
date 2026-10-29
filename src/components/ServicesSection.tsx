import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Check, X, Globe, Smartphone, Bot, Atom, Palette, Gem, Database, Video, Image, TrendingUp } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const renderIcon = (service: ServiceItem) => {
    if (service.iconEmoji) {
      return <span className="text-lg sm:text-2xl select-none">{service.iconEmoji}</span>;
    }

    switch (service.id) {
      case 'website-development':
        return <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />;
      case 'web-applications':
        return <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />;
      case 'ai-integration':
        return <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />;
      case 'react-javascript':
        return <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" />;
      case 'ui-ux-design':
        return <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
      case 'tailwind-css':
        return <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />;
      case 'database-apis':
        return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />;
      case 'video-editing':
        return <Video className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />;
      case 'graphic-design-branding':
        return <Image className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />;
      case 'digital-marketing':
        return <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600" />;
      default:
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
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
            id="services-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SERVICES & EXPERTISE</span>
          </div>

          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Specialized Digital Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From modern responsive websites and AI solutions to cinematic visual arts and branding.
          </p>
        </motion.div>

        {/* 10 Cards Grid with Staggered Scroll Animation - Double Grid on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveServiceModal(service)}
              className="glass-panel glass-card-interactive p-3.5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-white/90"
            >
              {/* Top Row: Icon Badge & Arrow */}
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-5 gap-1">
                  <div className={`w-9 h-9 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl ${service.bgLight} border ${service.borderColor} flex items-center justify-center shadow-xs group-hover:scale-110 sm:group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300 shrink-0`}>
                    {renderIcon(service)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {service.tagline && (
                      <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/70 truncate max-w-[110px]">
                        {service.tagline}
                      </span>
                    )}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-purple-600 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight mb-1 sm:mb-2.5 group-hover:text-[#6C5CE7] transition-colors leading-snug line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>
              </div>

              {/* Bottom Quick Deliverables Tags */}
              <div className="pt-2.5 sm:pt-4 border-t border-slate-100/80 flex flex-wrap gap-1 sm:gap-1.5">
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] sm:text-[11px] font-medium bg-slate-100/70 text-slate-600 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors truncate max-w-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal with Zoom Slide In/Out */}
      <AnimatePresence>
        {activeServiceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          >
            <motion.div
              id="service-detail-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
            >
              <button
                type="button"
                onClick={() => setActiveServiceModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className={`w-14 h-14 rounded-2xl ${activeServiceModal.bgLight} border ${activeServiceModal.borderColor} flex items-center justify-center`}>
                  {renderIcon(activeServiceModal)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{activeServiceModal.title}</h3>
                  <p className="text-xs text-purple-600 font-semibold">Specialized Practice • Saqib Visuals</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {activeServiceModal.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  What’s Included in Scope
                </h4>
                <ul className="space-y-2">
                  {activeServiceModal.detailedScope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeServiceModal.deliverables.map((item, idx) => (
                    <span key={idx} className="text-xs bg-purple-50 text-purple-700 font-medium px-3 py-1.5 rounded-lg border border-purple-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                type="button"
                onClick={() => setActiveServiceModal(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
