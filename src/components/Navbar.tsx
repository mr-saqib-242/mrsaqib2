import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Home,
  Layers,
  Briefcase,
  Terminal,
  UserCheck,
  MessageSquare,
  Cpu,
  Award,
  GitBranch,
  HelpCircle,
  Send,
  User,
  Quote,
  Zap,
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { HERO_DATA, SOCIAL_LINKS } from '../data';

interface NavbarProps {
  onContactClick: () => void;
  onOpenCaseStudy: () => void;
  onOpenProfile?: () => void;
  onReplayWelcome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContactClick,
  onOpenCaseStudy,
  onOpenProfile,
  onReplayWelcome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        'home',
        'about',
        'services',
        'tools',
        'work',
        'developer-workbench',
        'process',
        'awards',
        'testimonials',
        'faq',
        'contact',
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'Profile', href: '#profile', id: 'profile', isProfile: true, icon: UserCheck },
    { label: 'Case Study', href: '#case-studies', id: 'case-studies', isCaseStudy: true, icon: Sparkles },
    { label: 'Services', href: '#services', id: 'services', icon: Layers },
    { label: 'Stack', href: '#tools', id: 'tools', icon: Cpu },
    { label: 'Work', href: '#work', id: 'work', icon: Briefcase },
    { label: 'Workbench', href: '#developer-workbench', id: 'developer-workbench', icon: Terminal },
    { label: 'Process', href: '#process', id: 'process', icon: GitBranch },
    { label: 'Awards', href: '#awards', id: 'awards', icon: Award },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials', icon: Quote },
    { label: 'FAQ', href: '#faq', id: 'faq', icon: HelpCircle },
    { label: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. FIXED TOP NAVBAR (Fixed seamlessly on Mobile & Desktop)
          ───────────────────────────────────────────────────────────── */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs py-2 sm:py-2.5'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-2xs py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Profile Pic */}
          <a
            id="navbar-brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
          >
            <div className="relative shrink-0">
              <img
                src={HERO_DATA.portraitUrl}
                alt={HERO_DATA.name}
                referrerPolicy="no-referrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover object-top ring-2 ring-[#6C5CE7]/40 shadow-xs group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-sm sm:text-base leading-tight group-hover:text-[#6C5CE7] transition-colors">
                  Saqib Visuals
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-bold bg-purple-50 text-[#6C5CE7] border border-purple-200/70">
                  PRO
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] text-slate-500 font-medium leading-none">
                  Full-Stack Dev &amp; AI
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (Pill Style) */}
          <nav
            id="desktop-nav-links"
            className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/80 shadow-2xs"
          >
            {navLinks.slice(0, 9).map((link) => {
              if (link.isProfile) {
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    type="button"
                    onClick={onOpenProfile}
                    className="px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 text-purple-700 bg-purple-100/70 hover:bg-purple-200/80 border border-purple-300/60 flex items-center cursor-pointer shadow-2xs"
                  >
                    <span>Profile Page</span>
                  </button>
                );
              }

              if (link.isCaseStudy) {
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    type="button"
                    onClick={onOpenCaseStudy}
                    className="px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 text-[#6C5CE7] hover:bg-purple-100/70 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
                  </button>
                );
              }

              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDesktopNavPill"
                      className="absolute inset-0 bg-[#6C5CE7] rounded-full shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onReplayWelcome && (
              <button
                id="nav-replay-welcome-btn"
                type="button"
                onClick={onReplayWelcome}
                title="Play Welcome Intro"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-700 bg-purple-100/60 hover:bg-purple-200/70 border border-purple-200 transition-all cursor-pointer hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Intro</span>
              </button>
            )}

            <button
              id="nav-cta-contact-button"
              type="button"
              onClick={onContactClick}
              className="flex items-center gap-1.5 bg-[#6C5CE7] hover:bg-[#5848d4] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Clean Top Actions (Fixed Header for Mobile) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* WhatsApp Direct Quick Action */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat directly on WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xs transition-transform active:scale-95"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-4.5 h-4.5" />
            </a>

            {/* Mobile Menu Drawer Toggle Button */}
            <motion.button
              id="nav-mobile-toggle"
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-900 text-white shadow-xs cursor-pointer border border-slate-800"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-purple-300" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. MOBILE DRAWER OVERLAY (Slide-down full menu when hamburger is pressed)
            ───────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop Blur */}
              <motion.div
                key="backdrop"
                id="mobile-drawer-backdrop-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Animated Mobile Sheet Menu */}
              <motion.div
                key="drawer"
                id="mobile-drawer-card"
                initial={{ opacity: 0, y: -20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="lg:hidden fixed inset-x-3 top-[56px] z-50 p-4 sm:p-5 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl max-h-[82vh] overflow-y-auto"
              >
                {/* Drawer Header with Profile Card */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={HERO_DATA.portraitUrl}
                      alt={HERO_DATA.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-[#6C5CE7]/30 shadow-xs"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                        {HERO_DATA.name}
                      </h4>
                      <p className="text-[11px] text-[#6C5CE7] font-bold">
                        Full-Stack Software Engineer
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-emerald-700 font-semibold">
                          Available for New Projects
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured Standalone Pages (Profile & Finova) */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenProfile) onOpenProfile();
                    }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 text-left cursor-pointer hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <UserCheck className="w-4 h-4 text-purple-700" />
                      <span className="text-[9px] bg-purple-600 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">
                        View
                      </span>
                    </div>
                    <p className="text-xs font-bold text-purple-950 group-hover:text-purple-700">
                      Profile Page
                    </p>
                    <p className="text-[10px] text-purple-600">Bio, Skills &amp; Credentials</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCaseStudy();
                    }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 text-left cursor-pointer hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-700" />
                      <span className="text-[9px] bg-[#6C5CE7] text-white font-bold px-1.5 py-0.5 rounded-full uppercase">
                        Fintech
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#6C5CE7]">
                      Case Study
                    </p>
                    <p className="text-[10px] text-slate-500">Finova Architecture</p>
                  </button>
                </div>

                {/* Navigation Links Grid */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 py-1">
                    Explore Sections
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {navLinks
                      .filter((l) => !l.isProfile && !l.isCaseStudy)
                      .map((link) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.id;
                        return (
                          <a
                            key={link.id}
                            id={`mobile-nav-link-${link.id}`}
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollTo(link.href);
                            }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isActive
                                ? 'bg-[#6C5CE7] text-white shadow-xs'
                                : 'bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-purple-700 border border-slate-100'
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                            <span className="truncate">{link.label}</span>
                          </a>
                        );
                      })}
                  </div>
                </div>

                {/* Bottom Drawer Actions */}
                <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onContactClick();
                      }}
                      className="py-2.5 px-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5848d4] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Let's Talk</span>
                    </button>
                  </div>

                  {onReplayWelcome && (
                    <button
                      id="mobile-nav-replay-intro"
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onReplayWelcome();
                      }}
                      className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Replay Welcome Intro Animation</span>
                    </button>
                  )}

                  {/* Social Icons inside drawer */}
                  <div className="flex items-center justify-center gap-3 pt-2 text-slate-500">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 hover:text-slate-900 transition-colors"
                      title="GitHub"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-pink-50 hover:text-pink-600 transition-colors"
                      title="Instagram"
                    >
                      <FaInstagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 hover:text-black transition-colors"
                      title="TikTok"
                    >
                      <FaTiktok className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      title="Facebook"
                    >
                      <FaFacebookF className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          3. SLEEK MOBILE FLOATING BOTTOM BAR DOCK (STRICTLY 5 ITEMS: Home, Services, Work, Profile, Talk)
          ───────────────────────────────────────────────────────────── */}
      <nav
        id="mobile-fixed-bottom-dock"
        aria-label="Mobile Navigation Dock"
        className="lg:hidden fixed bottom-3 inset-x-3 sm:inset-x-8 z-40 select-none pointer-events-none"
      >
        <div className="max-w-md mx-auto pointer-events-auto bg-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl p-1.5 grid grid-cols-5 gap-1 text-white items-center">
          
          {/* 1. Home */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollTo('#home')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative ${
              activeSection === 'home'
                ? 'text-[#a29bfe] font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeSection === 'home' && (
              <motion.span
                layoutId="bottomNavActiveIndicator"
                className="absolute inset-0 bg-white/12 rounded-xl border border-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Home className="w-4 h-4 mb-1 relative z-10" />
            <span className="text-[10px] leading-none relative z-10 font-semibold">Home</span>
          </motion.button>

          {/* 2. Services */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollTo('#services')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative ${
              activeSection === 'services'
                ? 'text-[#a29bfe] font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeSection === 'services' && (
              <motion.span
                layoutId="bottomNavActiveIndicator"
                className="absolute inset-0 bg-white/12 rounded-xl border border-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Layers className="w-4 h-4 mb-1 relative z-10" />
            <span className="text-[10px] leading-none relative z-10 font-semibold">Services</span>
          </motion.button>

          {/* 3. Work */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => scrollTo('#work')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative ${
              activeSection === 'work'
                ? 'text-[#a29bfe] font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {activeSection === 'work' && (
              <motion.span
                layoutId="bottomNavActiveIndicator"
                className="absolute inset-0 bg-white/12 rounded-xl border border-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Briefcase className="w-4 h-4 mb-1 relative z-10" />
            <span className="text-[10px] leading-none relative z-10 font-semibold">Work</span>
          </motion.button>

          {/* 4. Profile */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              if (onOpenProfile) {
                onOpenProfile();
              } else {
                scrollTo('#about');
              }
            }}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative text-purple-300 hover:text-white"
          >
            <div className="relative mb-1">
              <UserCheck className="w-4 h-4 text-purple-400" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" />
            </div>
            <span className="text-[10px] font-bold leading-none text-purple-300">Profile</span>
          </motion.button>

          {/* 5. Talk */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={onContactClick}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative ${
              activeSection === 'contact'
                ? 'text-emerald-400 font-bold'
                : 'text-emerald-400/95 hover:text-emerald-300'
            }`}
          >
            {activeSection === 'contact' && (
              <motion.span
                layoutId="bottomNavActiveIndicator"
                className="absolute inset-0 bg-emerald-500/20 rounded-xl border border-emerald-400/30"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Send className="w-4 h-4 mb-1 relative z-10 text-emerald-400" />
            <span className="text-[10px] leading-none relative z-10 font-bold text-emerald-400">Talk</span>
          </motion.button>

        </div>
      </nav>
    </>
  );
};
