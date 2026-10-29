import React from 'react';
import { X, Download, Printer, Briefcase, GraduationCap, Award, Wrench, CheckCircle } from 'lucide-react';
import { HERO_DATA } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown cv download
    const cvText = `
MUHAMMAD SAQIB — Saqib Visuals
Full-Stack Developer • AI Enthusiast • Creative Visual Artist
Email: ${HERO_DATA.email} | Phone: ${HERO_DATA.phone} | Location: ${HERO_DATA.location}
Website: ${HERO_DATA.website}

MISSION:
"Turn ideas into professional digital products that make an impact."

CORE SERVICES & SKILLS:
- Premium Website & Web Application Development
- React.js, Next.js, Node.js, TypeScript & Modern JavaScript
- AI Integration & Workflow Automation
- UI/UX Design & High-Fidelity Prototyping
- Tailwind CSS & Responsive Systems
- Database & REST API Architecture
- Video Editing & Cinematic Production
- Graphic Design & Brand Identity
- Digital Marketing & SEO Strategy

WHY WORK WITH ME:
1. Fast & Reliable: Timely delivery without compromising quality.
2. Clean & Modern Design: Aesthetic, functional, and user-centric layouts.
3. Problem Solver: Transforming challenges into smart digital solutions.
4. Continuous Learner: Always exploring the latest tools and tech.
5. Client-Focused: Clear communication, transparency, and dedication.
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Saqib_Saqib_Visuals_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="cv-modal-card"
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-100 mb-5 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-3.5">
            <img
              src={HERO_DATA.portraitUrl}
              alt={HERO_DATA.name}
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-top ring-2 ring-purple-500/30 shadow-sm shrink-0"
            />
            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                Curriculum Vitae
              </h2>
              <p className="text-[11px] sm:text-xs font-semibold text-[#6C5CE7] mt-0.5">
                Muhammad Saqib • Saqib Visuals
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Content Sheet */}
        <div className="space-y-6 text-left">
          
          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Passionate developer and creative professional dedicated to designing high-quality digital experiences. Specializing in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content. Mission: Turn ideas into professional digital products that make an impact.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#6C5CE7]" />
              <span>Work Experience</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
                  <h4 className="text-sm font-bold text-slate-900">Lead Full-Stack Engineer</h4>
                  <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">2022 – Present</span>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-2">Finova Global • Full-time</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Architected high-throughput fintech APIs processing $2.4B+ volume. Built reactive TypeScript/React Native frontends, PostgreSQL ledger transactions, and low-latency Redis caching.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
                  <h4 className="text-sm font-bold text-slate-900">Senior Full-Stack Developer</h4>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">2020 – 2022</span>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-2">CloudEdge Technologies • Full-time</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered enterprise SaaS telemetry platforms streaming 100k+ WebSocket events per minute with Next.js, Node.js, and automated GitHub Actions CI/CD pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Accolades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>Education</span>
              </div>
              <h4 className="text-xs font-bold text-slate-900">BS in Computer Science</h4>
              <p className="text-[11px] text-slate-500">Software Engineering &amp; Distributed Systems</p>
              <p className="text-[11px] text-slate-400 mt-1">First Class Honors • Graduated 2020</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span>Recognition</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• GitHub Open Source Excellence (2024)</li>
                <li>• Awwwards Developer Site of the Day (2024)</li>
                <li>• Global AI Systems Hackathon (2023)</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 pt-5 sm:pt-6 border-t border-slate-100 mt-6">
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-[#6C5CE7] hover:bg-[#5848d4] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xs cursor-pointer transition-all min-h-[44px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-full cursor-pointer transition-all min-h-[44px]"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-slate-500 hover:text-slate-800 text-xs font-semibold cursor-pointer min-h-[44px] flex items-center justify-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
