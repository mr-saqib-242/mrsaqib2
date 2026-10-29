import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Cpu, Database, Cloud } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGoogle,
  SiGit,
  SiDocker,
  SiVercel,
  SiLinux,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { TECH_STACK } from '../data';

type TechCategory = 'All' | 'Frontend' | 'Backend & APIs' | 'Databases & AI' | 'DevOps & Tools';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TechCategory>('All');

  const filteredTech =
    activeTab === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeTab);

  // Authentic developer brand color and icon mapping
  const getToolBrand = (name: string) => {
    switch (name) {
      case 'React.js':
        return {
          bg: 'bg-[#61DAFB]/10',
          border: 'border-[#61DAFB]/30',
          text: 'text-[#087ea4]',
          icon: <SiReact className="w-5 h-5 text-[#087ea4] animate-[spin_12s_linear_infinite]" title="React" />,
        };
      case 'Next.js':
        return {
          bg: 'bg-black/5',
          border: 'border-slate-400/30',
          text: 'text-slate-900',
          icon: <SiNextdotjs className="w-5 h-5 text-slate-900" title="Next.js" />,
        };
      case 'TypeScript':
        return {
          bg: 'bg-[#3178C6]/10',
          border: 'border-[#3178C6]/30',
          text: 'text-[#3178C6]',
          icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" title="TypeScript" />,
        };
      case 'Tailwind CSS':
        return {
          bg: 'bg-[#06B6D4]/10',
          border: 'border-[#06B6D4]/30',
          text: 'text-[#06B6D4]',
          icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" title="Tailwind CSS" />,
        };
      case 'JavaScript':
        return {
          bg: 'bg-[#F7DF1E]/15',
          border: 'border-[#F7DF1E]/35',
          text: 'text-amber-700',
          icon: <SiJavascript className="w-5 h-5 text-[#d4ad00]" title="JavaScript" />,
        };
      case 'HTML5 & CSS3':
        return {
          bg: 'bg-[#E34F26]/10',
          border: 'border-[#E34F26]/30',
          text: 'text-[#E34F26]',
          icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" title="HTML5 & CSS3" />,
        };
      case 'Node.js':
        return {
          bg: 'bg-[#5FA04E]/10',
          border: 'border-[#5FA04E]/30',
          text: 'text-[#417e33]',
          icon: <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" title="Node.js" />,
        };
      case 'Express.js':
        return {
          bg: 'bg-slate-100',
          border: 'border-slate-300',
          text: 'text-slate-800',
          icon: <SiExpress className="w-5 h-5 text-slate-800" title="Express.js" />,
        };
      case 'Python':
        return {
          bg: 'bg-[#3776AB]/10',
          border: 'border-[#3776AB]/30',
          text: 'text-[#3776AB]',
          icon: <SiPython className="w-5 h-5 text-[#3776AB]" title="Python" />,
        };
      case 'RESTful APIs':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-700',
          icon: <TbApi className="w-5 h-5 text-emerald-600" title="RESTful APIs" />,
        };
      case 'GraphQL':
        return {
          bg: 'bg-[#E10098]/10',
          border: 'border-[#E10098]/30',
          text: 'text-[#E10098]',
          icon: <SiGraphql className="w-5 h-5 text-[#E10098]" title="GraphQL" />,
        };
      case 'PostgreSQL':
        return {
          bg: 'bg-[#4169E1]/10',
          border: 'border-[#4169E1]/30',
          text: 'text-[#4169E1]',
          icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" title="PostgreSQL" />,
        };
      case 'MongoDB':
        return {
          bg: 'bg-[#47A248]/10',
          border: 'border-[#47A248]/30',
          text: 'text-[#367936]',
          icon: <SiMongodb className="w-5 h-5 text-[#47A248]" title="MongoDB" />,
        };
      case 'Redis':
        return {
          bg: 'bg-[#DC382D]/10',
          border: 'border-[#DC382D]/30',
          text: 'text-[#DC382D]',
          icon: <SiRedis className="w-5 h-5 text-[#DC382D]" title="Redis" />,
        };
      case 'Firebase':
        return {
          bg: 'bg-[#FFCA28]/15',
          border: 'border-[#FFCA28]/35',
          text: 'text-amber-800',
          icon: <SiFirebase className="w-5 h-5 text-[#FFA000]" title="Firebase" />,
        };
      case 'Gemini AI SDK':
        return {
          bg: 'bg-[#4285F4]/10',
          border: 'border-[#4285F4]/30',
          text: 'text-[#1a73e8]',
          icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" title="Gemini AI SDK" />,
        };
      case 'Git & GitHub':
        return {
          bg: 'bg-[#F05032]/10',
          border: 'border-[#F05032]/30',
          text: 'text-[#F05032]',
          icon: <SiGit className="w-5 h-5 text-[#F05032]" title="Git & GitHub" />,
        };
      case 'Docker':
        return {
          bg: 'bg-[#2496ED]/10',
          border: 'border-[#2496ED]/30',
          text: 'text-[#2496ED]',
          icon: <SiDocker className="w-5 h-5 text-[#2496ED]" title="Docker" />,
        };
      case 'Vercel':
        return {
          bg: 'bg-black/5',
          border: 'border-black/20',
          text: 'text-black',
          icon: <SiVercel className="w-5 h-5 text-black" title="Vercel" />,
        };
      case 'Linux / Bash':
        return {
          bg: 'bg-[#FCC624]/15',
          border: 'border-[#FCC624]/35',
          text: 'text-slate-800',
          icon: <SiLinux className="w-5 h-5 text-slate-800" title="Linux" />,
        };
      default:
        return {
          bg: 'bg-purple-100',
          border: 'border-purple-200',
          text: 'text-purple-600',
          icon: <Code2 className="w-5 h-5 text-purple-600" />,
        };
    }
  };

  const categories: { label: TechCategory; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Terminal className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Backend & APIs', icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: 'Databases & AI', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'DevOps & Tools', icon: <Cloud className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="tools" className="py-16 relative border-y border-slate-200/80 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C5CE7] mb-2 shadow-2xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRODUCTION TECH STACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Modern Engineering Stack &amp; Tools
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Type-safe, high-performance technologies battle-tested for scalable web platforms, APIs, and AI integrations.
            </p>
          </motion.div>

          {/* Category Filter Chips - Swipeable on Mobile with layoutId animation */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap sm:pb-0 whitespace-nowrap relative">
            {categories.map((cat) => {
              const isActive = activeTab === cat.label;
              return (
                <button
                  key={cat.label}
                  id={`tech-filter-${cat.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveTab(cat.label)}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-200 shrink-0 min-h-[36px] cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechTabIndicator"
                      className="absolute inset-0 bg-[#6C5CE7] rounded-xl shadow-md -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat.icon}
                    <span>{cat.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tool, index) => {
              const brand = getToolBrand(tool.name);
              return (
                <motion.div
                  key={tool.name}
                  id={`tool-badge-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -10 }}
                  transition={{ duration: 0.3, delay: (index % 5) * 0.03 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#6C5CE7]/40 transition-all duration-200 group flex flex-col justify-between cursor-default relative overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${brand.bg} border ${brand.border} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {brand.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#6C5CE7] transition-colors truncate">
                        {tool.name}
                      </p>
                      <span className="inline-block text-[10px] font-medium text-slate-400 mt-0.5 truncate max-w-full">
                        {tool.level || 'Production Ready'}
                      </span>
                      <div className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="truncate">{tool.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Proficiency Indicator Bar */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <div className="w-full bg-slate-100 rounded-full h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (index % 5) * 0.05, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#6C5CE7] to-[#00CEC9] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
