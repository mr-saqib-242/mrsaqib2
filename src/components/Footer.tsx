import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF, FaSnapchatGhost } from 'react-icons/fa';
import { HERO_DATA, SOCIAL_LINKS } from '../data';

interface FooterProps {
  onOpenProfile?: () => void;
  onReplayWelcome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProfile, onReplayWelcome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="pt-12 pb-24 lg:pb-12 border-t border-slate-200/80 bg-white/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
              SV
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm">{HERO_DATA.brand}</p>
              <p className="text-xs text-[#6C5CE7] font-semibold">{HERO_DATA.name} • {HERO_DATA.role}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-semibold text-slate-600">
            {onOpenProfile && (
              <button
                type="button"
                onClick={onOpenProfile}
                className="text-purple-700 font-bold hover:text-purple-900 transition-colors cursor-pointer bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200"
              >
                Profile Page
              </button>
            )}
            {onReplayWelcome && (
              <button
                id="footer-replay-welcome-btn"
                type="button"
                onClick={onReplayWelcome}
                className="text-purple-700 hover:text-[#6C5CE7] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>✨ Replay Intro</span>
              </button>
            )}
            <a href="#about" className="hover:text-[#6C5CE7] transition-colors">About</a>
            <a href="#services" className="hover:text-[#6C5CE7] transition-colors">Services</a>
            <a href="#why-work-with-me" className="hover:text-[#6C5CE7] transition-colors">Why Work With Me</a>
            <a href="#work" className="hover:text-[#6C5CE7] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[#6C5CE7] transition-colors">Contact</a>
          </div>

          {/* Social icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white hover:bg-emerald-50 text-emerald-600 border border-slate-200 flex items-center justify-center text-xs transition-colors"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white hover:bg-pink-50 text-pink-600 border border-slate-200 flex items-center justify-center text-xs transition-colors"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center text-xs transition-colors"
              title="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white hover:bg-blue-50 text-blue-600 border border-slate-200 flex items-center justify-center text-xs transition-colors"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={SOCIAL_LINKS.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white hover:bg-amber-50 text-amber-500 border border-slate-200 flex items-center justify-center text-xs transition-colors"
              title="Snapchat"
            >
              <FaSnapchatGhost />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xs cursor-pointer transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-slate-200/60 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Muhammad Saqib • Saqib Visuals. All rights reserved. Building Modern Digital Experiences with Innovation, Creativity & Technology.
        </div>
      </div>
    </footer>
  );
};
