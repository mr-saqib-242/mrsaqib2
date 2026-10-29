import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, Smartphone, Monitor, Globe, Layers, BarChart3, CreditCard, ZoomIn } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack App' | 'Web Application' | 'AI Solution'>('All');

  const categories: Array<'All' | 'Full-Stack App' | 'Web Application' | 'AI Solution'> = [
    'All',
    'Full-Stack App',
    'Web Application',
    'AI Solution',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div
            id="work-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOFTWARE BUILDS</span>
          </div>

          <h2 id="work-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Production systems engineered with strict TypeScript type safety, resilient databases, low latency, and modern AI pipelines.
          </p>
        </motion.div>

        {/* Filter Tabs with Hover Animation & Active layoutId Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4.5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-white/70 hover:bg-white border border-slate-200/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTabPill"
                    className="absolute inset-0 bg-slate-900 rounded-full shadow-md -z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects 3-Column Bento Grid with Staggered PopLayout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectProject(project)}
                className="glass-panel glass-card-interactive rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between border border-white/90 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Preview Graphic / Mockup Banner with Zoom on Hover */}
                <div className={`w-full h-56 sm:h-64 bg-gradient-to-br ${project.gradient} p-6 relative flex items-center justify-center overflow-hidden`}>
                  
                  {/* Visual Representation based on project type */}
                  {project.type === 'finova' && (
                    <div className="relative w-full max-w-[240px] h-full flex items-center justify-center">
                      {/* Floating Glass Mobile Mockup with Zoom Slide effect */}
                      <div className="w-48 bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-purple-500/30 transform -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5">
                            <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-300">Finova Pay</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono mb-0.5">Total Balance</p>
                        <p className="text-base font-extrabold text-white mb-3">$84,250.00</p>
                        <div className="flex gap-1.5">
                          <span className="text-[9px] bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded">Send</span>
                          <span className="text-[9px] bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded">Receive</span>
                          <span className="text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Cards</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.type === 'dashboard' && (
                    <div className="w-full max-w-[260px] bg-white rounded-xl shadow-xl p-4 border border-slate-200/80 transform group-hover:scale-110 transition-all duration-500">
                      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-1.5">
                          <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                          <span className="text-[10px] font-bold text-slate-800">Growth Metrics</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+34.8%</span>
                      </div>
                      {/* Simulated Mini Chart Bars with dynamic hover */}
                      <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
                        <div className="w-3 bg-blue-100 rounded-t h-[40%] group-hover:h-[50%] transition-all duration-300"></div>
                        <div className="w-3 bg-blue-200 rounded-t h-[60%] group-hover:h-[70%] transition-all duration-300"></div>
                        <div className="w-3 bg-blue-300 rounded-t h-[50%] group-hover:h-[65%] transition-all duration-300"></div>
                        <div className="w-3 bg-indigo-400 rounded-t h-[75%] group-hover:h-[85%] transition-all duration-300"></div>
                        <div className="w-3 bg-indigo-500 rounded-t h-[65%] group-hover:h-[75%] transition-all duration-300"></div>
                        <div className="w-3 bg-[#6C5CE7] rounded-t h-[95%] group-hover:h-[100%] transition-all duration-300"></div>
                      </div>
                    </div>
                  )}

                  {project.type === 'landing' && (
                    <div className="w-full max-w-[250px] bg-white/90 backdrop-blur rounded-xl shadow-xl p-4 border border-slate-200 transform rotate-2 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                      <div className="w-8 h-1.5 bg-slate-300 rounded-full mb-2"></div>
                      <div className="w-24 h-3 bg-slate-800 rounded-md mb-2"></div>
                      <div className="w-36 h-2 bg-slate-300 rounded-md mb-3"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-14 h-4 bg-[#6C5CE7] rounded-full"></div>
                        <div className="w-10 h-4 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                  )}

                  {/* Hover Quick Zoom Pill Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-3.5 h-3.5 text-[#6C5CE7]" />
                      <span>Zoom Slide Preview</span>
                    </span>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs border border-white group-hover:scale-105 transition-transform">
                    {project.impactMetric}
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-[#6C5CE7] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#6C5CE7] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {project.architectureSummary && (
                      <div className="mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] font-mono text-slate-600 flex items-start gap-1.5">
                        <span className="text-[#6C5CE7] font-bold shrink-0">Arch:</span>
                        <span className="line-clamp-2">{project.architectureSummary}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-[#6C5CE7] group-hover:translate-x-1 transition-transform">
                      <span>View Tech Specs &amp; Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
