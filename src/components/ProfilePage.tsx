import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  MessageCircle,
  Share2,
  Calendar,
  Briefcase,
  Layers,
  Star
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF, FaSnapchatGhost } from 'react-icons/fa';
import { HERO_DATA, SERVICES_DATA, SOCIAL_LINKS } from '../data';

const EXACT_WHY_WORK_WITH_ME = [
  {
    emoji: '🚀',
    title: 'Fast & Reliable',
    description: 'Timely delivery without compromising quality.',
  },
  {
    emoji: '🎯',
    title: 'Clean & Modern Design',
    description: 'Aesthetic, functional, and user-centric layouts.',
  },
  {
    emoji: '💡',
    title: 'Problem Solver',
    description: 'Transforming challenges into smart digital solutions.',
  },
  {
    emoji: '🔄',
    title: 'Continuous Learner',
    description: 'Always exploring the latest tools and tech.',
  },
  {
    emoji: '🤝',
    title: 'Client-Focused',
    description: 'Clear communication, transparency, and dedication.',
  },
];

interface ProfilePageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onBackToHome, onContactClick }) => {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyFullProfileText = () => {
    const text = `
╔══════════════════════════════╗
🚀 MUHAMMAD SAQIB
✨ Saqib Visuals
╚══════════════════════════════╝

💎 Full-Stack Developer • AI Enthusiast • Creative Visual Artist

> Building Modern Digital Experiences with Innovation, Creativity & Technology.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

👨‍💻 WHO I AM
Hi! I'm Muhammad Saqib, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content.

My mission is simple:
Turn ideas into professional digital products that make an impact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ SERVICES
🌐 Premium Website Development
📱 Responsive Web Applications
🤖 AI Integration & Automation
⚛️ React.js & Modern JavaScript
🎨 UI/UX Design
💎 Tailwind CSS
🗄️ Database & REST APIs
🎬 Video Editing
🖼️ Graphic Design & Branding
📈 Digital Marketing

━━━━━━━━━━━━━━━━━━━━━━━━━━━

⭐ WHY WORK WITH ME
🚀 Fast & Reliable: Timely delivery without compromising quality.
🎯 Clean & Modern Design: Aesthetic, functional, and user-centric layouts.
💡 Problem Solver: Transforming challenges into smart digital solutions.
🔄 Continuous Learner: Always exploring the latest tools and tech.
🤝 Client-Focused: Clear communication, transparency, and dedication.

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📬 LET’S CONNECT & BUILD SOMETHING GREAT!
📞 Phone: +92 347 8936242
📧 Email: mrsaqib242242@gmail.com
🌐 Website: https://mrsaqib242.vercel.app
📍 Location: Faisalabad, Pakistan

💬 WhatsApp: https://wa.me/923478936242
📸 Instagram: https://www.instagram.com/mr_saqib242
🎵 TikTok: https://www.tiktok.com/@mr_saqib_242
👥 Facebook: https://web.facebook.com/muhammad.saqib.718278
👻 Snapchat: https://www.snapchat.com/add/mrsaqib242

✨ Saqib Visuals — Where Creativity Meets Technology.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-100 text-slate-900 selection:bg-purple-200">
      
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 px-4 sm:px-8 py-2.5 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-3">
            <span className="text-xs font-extrabold text-[#6C5CE7]">Saqib Visuals</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-600 font-medium">Software Engineer Profile</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Profile Canvas */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Banner Box: ASCII Header Frame */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/90 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />

          {/* Profile Header with Real Picture */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-8 p-5 rounded-2xl bg-white/80 border border-purple-100 shadow-xs">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-purple-500/20 shadow-lg bg-purple-100">
                <img
                  src={HERO_DATA.portraitUrl}
                  alt={HERO_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Active
              </span>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {HERO_DATA.name}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-[#6C5CE7] font-bold">
                  {HERO_DATA.brand}
                </span>
              </div>
              <p className="text-sm font-semibold text-purple-700 mb-2">
                {HERO_DATA.role}
              </p>
              <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                {HERO_DATA.bio}
              </p>
            </div>
          </div>

          {/* Core Engineering Architecture Focus Panel */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-6 mb-8 text-left shadow-lg border border-slate-800 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wide">
                  SYSTEM PROFILE &amp; SPECIALIZATION
                </span>
              </div>
              <span className="text-[11px] font-mono text-purple-300 bg-purple-950/80 px-2.5 py-0.5 rounded-md border border-purple-800/60">
                v2.4.0 • Enterprise Ready
              </span>
            </div>

            <div className="mt-4">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Muhammad Saqib <span className="text-purple-400 font-normal">| Saqib Visuals</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Full-Stack Developer • AI Enthusiast • Creative Visual Artist
              </p>
              <p className="mt-2 text-xs sm:text-sm text-purple-200/90 italic border-l-2 border-purple-500 pl-3 py-0.5">
                "Building Modern Digital Experiences with Innovation, Creativity &amp; Technology."
              </p>
            </div>

            {/* Core Capability Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-slate-800/80">
              {[
                'Full-Stack Web Development',
                'React 19 & Next.js Architecture',
                'AI Model & API Integration',
                'High-Concurrency REST APIs',
                'Responsive UI/UX Engineering',
                'Cloud Deployment & CI/CD',
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/60"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Identity Grid: Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 text-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Brand</span>
              <span className="text-sm font-extrabold text-purple-700">Saqib Visuals</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 text-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Age</span>
              <span className="text-sm font-extrabold text-slate-900">17 Years</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 text-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Location</span>
              <span className="text-sm font-extrabold text-slate-900">Faisalabad, PK</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/70 border border-slate-200/70 text-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Status</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full inline-block">Available</span>
            </div>
          </div>

          <div className="h-px bg-slate-200/80 my-8" />

          {/* Section 1: WHO I AM */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👨‍💻</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                WHO I AM
              </h2>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 border border-slate-200/70 space-y-4">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                Hi! I'm <strong className="font-bold text-slate-900">Muhammad Saqib</strong>, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content.
              </p>

              <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200/80">
                <span className="text-xs font-extrabold uppercase text-[#6C5CE7] tracking-wider block mb-1">
                  My mission is simple:
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900">
                  Turn ideas into professional digital products that make an impact.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-slate-200/80 my-8" />

          {/* Section 2: SERVICES */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⚡</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                SERVICES
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {SERVICES_DATA.map((service, idx) => (
                <div
                  key={service.id}
                  className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-200/70 hover:border-purple-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xl sm:text-2xl select-none shrink-0 mt-0.5">
                    {service.iconEmoji || '✨'}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-slate-200/80 my-8" />

          {/* Section 3: WHY WORK WITH ME */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">⭐</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                WHY WORK WITH ME
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {EXACT_WHY_WORK_WITH_ME.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-200/70 hover:bg-white hover:border-purple-300 transition-all"
                >
                  <span className="text-xl sm:text-2xl select-none shrink-0 mt-0.5">
                    {item.emoji}
                  </span>
                  <div>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-base block sm:inline">
                      {item.title}:{' '}
                    </span>
                    <span className="text-slate-600 text-[11px] sm:text-base font-normal line-clamp-3 sm:line-clamp-none">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-slate-200/80 my-8" />

          {/* Section 4: LET’S CONNECT & BUILD SOMETHING GREAT! */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📬</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                LET’S CONNECT & BUILD SOMETHING GREAT!
              </h2>
            </div>

            {/* Direct Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              
              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Phone</p>
                    <p className="text-sm font-extrabold text-slate-900">{HERO_DATA.phone}</p>
                  </div>
                </div>
                <a
                  href={`tel:${HERO_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                >
                  Call
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6C5CE7] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Email</p>
                    <p className="text-sm font-extrabold text-slate-900 truncate max-w-[170px] sm:max-w-[200px]">
                      {HERO_DATA.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Website */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Official Website</p>
                    <p className="text-sm font-extrabold text-slate-900">mrsaqib242.vercel.app</p>
                  </div>
                </div>
                <a
                  href={HERO_DATA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 flex items-center gap-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">Location</p>
                  <p className="text-sm font-extrabold text-slate-900">{HERO_DATA.location}</p>
                </div>
              </div>

            </div>

            {/* Social Channels Pill Badges */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Direct Social & Messaging Channels
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-emerald-400 hover:bg-emerald-50/60 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-pink-400 hover:bg-pink-50/60 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <FaInstagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>

                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-slate-400 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <FaTiktok className="w-4 h-4 text-slate-900" />
                  <span>TikTok</span>
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/60 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <FaFacebookF className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>

                <a
                  href={SOCIAL_LINKS.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-amber-400 hover:bg-amber-50/60 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <FaSnapchatGhost className="w-4 h-4 text-amber-500" />
                  <span>Snapchat</span>
                </a>

                <a
                  href={HERO_DATA.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 hover:border-purple-400 hover:bg-purple-50/60 text-slate-800 text-xs font-bold transition-all shadow-2xs"
                >
                  <Globe className="w-4 h-4 text-purple-600" />
                  <span>Official Website</span>
                </a>
              </div>
            </div>

          </section>

          {/* Footer of the Box */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                ✨ Saqib Visuals — Where Creativity Meets Technology.
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                © {new Date().getFullYear()} Muhammad Saqib. All rights reserved.
              </p>
            </div>
            
            <button
              type="button"
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md cursor-pointer transition-all"
            >
              Explore Full Portfolio
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};
