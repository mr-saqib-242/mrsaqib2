import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
  onOpenCaseStudy?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
  onOpenCaseStudy,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#6C5CE7] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{project.subtitle}</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-2 pr-8">
          {project.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/60 mb-6">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Role</span>
            <span className="text-xs font-semibold text-slate-800">{project.role}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Timeline</span>
            <span className="text-xs font-semibold text-slate-800">{project.timeline}</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Key Impact</span>
            <span className="text-xs font-bold text-emerald-600">{project.impactMetric}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Disciplines & Tools
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-purple-50 text-purple-700 px-3 py-1 rounded-lg border border-purple-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Case Breakdown */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Key Accomplishments
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
              <span>Created a comprehensive atomic design system with 250+ tokens and dark/light components.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
              <span>Conducted 24 moderated user testing sessions resulting in 96% task completion rate.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
              <span>Streamlined key conversion funnels, decreasing checkout friction by 40%.</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
          {project.id === 'finova' && onOpenCaseStudy && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenCaseStudy();
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-[#6C5CE7] hover:bg-[#5848d4] text-white font-semibold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01] transition-all"
            >
              <span>Read Full Case Study (8 min read)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className={`${
              project.id === 'finova' && onOpenCaseStudy ? 'py-3 px-4' : 'flex-1 py-3'
            } rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer`}
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
