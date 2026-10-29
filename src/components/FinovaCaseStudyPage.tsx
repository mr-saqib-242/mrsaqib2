import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../data';

interface FinovaCaseStudyPageProps {
  onBackToHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenProject: (projectId: string) => void;
  onContactClick: () => void;
}

export const FinovaCaseStudyPage: React.FC<FinovaCaseStudyPageProps> = ({
  onBackToHome,
  onNavigateSection,
  onOpenProject,
  onContactClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen relative">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[60] bg-slate-200/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-sm">
          <div className="pointer-events-auto h-20 bg-surface-container-lowest/70 backdrop-blur-xl rounded-full shadow-[0_20px_40px_-15px_rgba(99,102,241,0.08)] flex items-center justify-between px-space-md lg:px-space-lg border border-white/80">
            {/* Brand */}
            <button
              type="button"
              onClick={onBackToHome}
              className="flex items-center gap-space-sm group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src={HERO_DATA.portraitUrl}
                  alt="Muhammad Saqib"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-body-md font-semibold text-on-surface tracking-tight leading-none">
                  Muhammad Saqib
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">
                  Saqib Visuals
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-space-xs p-1.5 bg-surface-container-low/60 rounded-full backdrop-blur-md">
              <button
                type="button"
                onClick={onBackToHome}
                className="px-space-md py-2 rounded-full font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                className="px-space-md py-2 rounded-full transition-all bg-primary-container text-on-primary-container font-semibold shadow-[0_10px_25px_-5px_rgba(139,92,246,0.25)] cursor-pointer"
              >
                Case Studies
              </button>
              <button
                type="button"
                onClick={() => onNavigateSection('about')}
                className="px-space-md py-2 rounded-full font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onNavigateSection('services')}
                className="px-space-md py-2 rounded-full font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => onNavigateSection('work')}
                className="px-space-md py-2 rounded-full font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer"
              >
                Archive
              </button>
              <button
                type="button"
                onClick={() => onNavigateSection('contact')}
                className="px-space-md py-2 rounded-full font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-space-sm">
              <div
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant border border-outline-variant/30 shadow-2xs"
                title="Estimated Reading Time: 8 minutes"
              >
                <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                <span>8 min read</span>
              </div>

              <button
                type="button"
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center justify-center px-space-md py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-body-sm text-body-sm font-semibold shadow-[0_10px_25px_-5px_rgba(139,92,246,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Book a Discovery Call
              </button>

              <button
                type="button"
                onClick={onBackToHome}
                title="View Muhammad Saqib Profile"
                className="p-0.5 rounded-full bg-surface-container-high shadow-[0_4px_12px_rgba(99,102,241,0.12)] cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              >
                <img
                  alt="Muhammad Saqib Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  src={HERO_DATA.portraitUrl}
                />
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-full text-on-surface hover:bg-surface-container"
                aria-label="Toggle navigation menu"
              >
                <span className="material-symbols-outlined text-xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pointer-events-auto max-w-7xl mx-auto px-margin-mobile pt-2">
            <div className="bg-surface-container-lowest/95 backdrop-blur-2xl rounded-2xl p-4 shadow-xl border border-white/80 space-y-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBackToHome();
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-on-surface hover:bg-surface-container font-medium text-sm"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-semibold text-sm"
              >
                Case Studies (Finova)
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('about');
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-on-surface hover:bg-surface-container font-medium text-sm"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('services');
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-on-surface hover:bg-surface-container font-medium text-sm"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('work');
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-on-surface hover:bg-surface-container font-medium text-sm"
              >
                Archive
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection('contact');
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-on-surface hover:bg-surface-container font-medium text-sm"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-surface-container">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm shadow-md"
                >
                  Book a Discovery Call
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-28 bg-background">
        <div className="flex flex-col w-full">
          {/* Decorative Ambient Chromatics */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-80 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[1400px] left-10 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section 1: Header & Context */}
            <section id="overview" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-lg pb-space-xl">
              {/* Standalone Page Control Bar (Compact & Clean) */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 bg-surface-container-lowest/80 backdrop-blur-md py-2 px-3.5 rounded-xl border border-white/80 shadow-2xs">
                {/* Breadcrumb Bar */}
                <nav className="flex items-center gap-1.5 text-xs text-on-surface-variant flex-wrap">
                  <button
                    type="button"
                    onClick={onBackToHome}
                    className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1 font-semibold text-primary"
                  >
                    <span className="material-symbols-outlined text-xs">arrow_back</span>
                    <span>Back to Portfolio</span>
                  </button>
                  <span className="text-outline-variant/60">/</span>
                  <span className="text-on-surface-variant">Case Studies</span>
                  <span className="text-outline-variant/60">/</span>
                  <span className="text-on-surface font-semibold truncate">Finova Digital Banking</span>
                </nav>

                {/* Compact Reading Time Pill */}
                <div
                  id="finova-reading-time-pill"
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold shadow-2xs shrink-0"
                  title="Estimated reading duration: ~8 minutes"
                >
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  <span>8 Min Read</span>
                </div>
              </div>

              {/* Chapter Quick Jump Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-space-md no-scrollbar">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant shrink-0 font-semibold mr-1">
                  Chapters:
                </span>
                <button
                  type="button"
                  onClick={() => scrollToChapter('overview')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => scrollToChapter('challenge')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  The Shift &amp; Problem
                </button>
                <button
                  type="button"
                  onClick={() => scrollToChapter('research')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  User Research
                </button>
                <button
                  type="button"
                  onClick={() => scrollToChapter('design-system')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  Design System
                </button>
                <button
                  type="button"
                  onClick={() => scrollToChapter('breakthroughs')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  UX Breakthroughs
                </button>
                <button
                  type="button"
                  onClick={() => scrollToChapter('outcomes')}
                  className="px-3 py-1 rounded-full bg-surface-container-high/70 hover:bg-primary/10 hover:text-primary text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  Impact &amp; Results
                </button>
              </div>

              {/* Meta Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
                <span className="px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1.5 shadow-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Featured Case Study 2024
                </span>
                <span
                  id="finova-meta-reading-time"
                  className="px-space-sm py-1 rounded-full bg-purple-100/90 text-[#6C5CE7] border border-purple-200/80 font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1.5 font-bold shadow-2xs"
                  title="Estimated Reading Time: 8 minutes"
                >
                  <span className="material-symbols-outlined text-sm text-[#6C5CE7]">schedule</span>
                  <span>8 Min Read</span>
                </span>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  Fintech &amp; Web3
                </span>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  Mobile iOS &amp; Android
                </span>
                <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  Design System
                </span>
                <span className="px-space-sm py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Independent Page
                </span>
              </div>

              {/* Main Case Title */}
              <div className="max-w-5xl">
                <h1 className="font-display text-display text-on-surface font-extrabold tracking-tight mb-space-sm">
                  Finova: Reimagining Global Liquidity &amp; Digital Banking
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-xl">
                  How we engineered a tactile, biometrics-first cross-border asset management suite, slashing a 42% onboarding drop-off rate and securely handling $2.4B+ in annualized multi-currency transactions.
                </p>
              </div>

              {/* Project Metadata Strip (Glass Plates) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-gutter">
                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                    My Role
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Lead Product Designer
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Design System Architect
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                    Reading Time
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    8 Min Read
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    ~2,200 Words · Deep Dive
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                    Timeline
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    16 Weeks
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Q1 2024 · Iterative Release
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                    Platform
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    iOS &amp; Android
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Responsive Web Dashboard
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60 col-span-2 sm:col-span-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">
                    Deliverables
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    End-to-End UX
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Motion Specs &amp; UI System
                  </span>
                </div>
              </div>
            </section>

            {/* Section 2: Hero Visual Showcase Card */}
            <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl">
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-high/40 p-space-sm md:p-space-md shadow-xl backdrop-blur-xl border border-white/60">
                <div className="relative rounded-2xl overflow-hidden w-full aspect-[16/9] md:aspect-[21/9] bg-surface-container-highest flex items-center justify-center">
                  <img
                    alt="Finova Global Banking Dashboard & Mobile Interface Showcase"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XrmH3ADyDvRwE-LMdW_kwNPaYf0Pl6wk3GJVqJqfxFV6836Q595j0b2e7AIQ94kddTM8Gz-ooF5zU7x9TcnmxtNKnpqxaYY646s302_bW_wWKGeiwzehlCcqu8SNmUEYoRp7UVhBBjkkq_bwqgZan52pm_fmd74XiWiZ7ignNpKfocZilCT1S9PgggU0HXAeKe4--K8yQWXHcSDcVjXFaGeYteTN3RjM-BOVJbYrnmwTOq9CikU3pTb_s"
                  />

                  {/* Overlay Refractive Badges */}
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-space-xs">
                    <div className="px-space-md py-2.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/60">
                      <span
                        className="material-symbols-outlined text-primary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        bolt
                      </span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                        Active Users: 1.8M+ Global
                      </span>
                    </div>

                    <div className="px-space-md py-2.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/60">
                      <span
                        className="material-symbols-outlined text-secondary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        trending_up
                      </span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                        Conversion Jump: +140%
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                    <div className="px-space-md py-2.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/60">
                      <span
                        className="material-symbols-outlined text-tertiary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                        App Store: 4.9 ★ (84k reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Executive Summary / Problem vs Solution */}
            <section id="challenge" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl scroll-mt-28">
              <div className="flex flex-col gap-space-xs mb-space-lg">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  Strategic Paradigm
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  The Problem &amp; The Architecture Shift
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Problem Card */}
                <div className="p-space-lg rounded-3xl bg-surface-container-low/70 backdrop-blur-xl shadow-md flex flex-col justify-between border border-white/60">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined">warning</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-medium">
                      The Challenge
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 mb-space-sm">
                      42% Funnel Leakage &amp; High Cognitive Friction
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      Legacy Finova combined fiat multi-currency accounts with Web3 cold-vault storage, creating erratic authentication steps. Onboarding required 14 separate screens; identity verification suffered from a 42% attrition rate, while volatile gas estimation left non-crypto natives stranded.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-error text-base">close</span>
                        14-step onboarding flow without clear progress indication
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-error text-base">close</span>
                        Complex cryptographic jargon intimidating traditional banking users
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-error text-base">close</span>
                        Fragmented balances spread across 4 distinct dashboard views
                      </li>
                    </ul>
                  </div>

                  <div className="mt-space-lg pt-space-md bg-surface-container/50 rounded-2xl p-space-sm flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Initial Drop-off
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-error">
                      42.4%
                    </span>
                  </div>
                </div>

                {/* Solution Card */}
                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-md flex flex-col justify-between border border-white/60">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined">auto_fix_high</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-medium">
                      The Strategic Solution
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1 mb-space-sm">
                      Tactile Biometrics &amp; Single-Canvas Liquidity
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      We reimagined the entire pipeline around a unified liquid asset canvas. Users execute fiat wire transfers and algorithmic crypto swaps with 0-friction biometric confirmation. The onboarding was compressed into a 3-minute flow with predictive identity scanning.
                    </p>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        Passkey &amp; Face ID native enclaves replacing manual key phrases
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        One-tap instant cross-border routing with real-time slippage shield
                      </li>
                      <li className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                        Adaptive telemetry surfaces key insights before users seek them
                      </li>
                    </ul>
                  </div>

                  <div className="mt-space-lg pt-space-md bg-primary-fixed/30 rounded-2xl p-space-sm flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary">
                      New KYC Completion Time
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      2.8 Mins
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Research Insights & Archetypes */}
            <section id="research" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl scroll-mt-28">
              <div className="flex flex-col gap-space-xs mb-space-lg">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                  User Discovery &amp; Quantitative Diagnostics
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Understanding Cross-Border Operators
                </h2>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-lg">
                <div className="p-space-md rounded-2xl bg-surface-container-high/60 border border-white/50 shadow-xs">
                  <span className="font-display-mobile text-display-mobile text-primary font-black block">
                    78%
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Demanded a single glance portfolio
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Instead of toggling fiat and web3 tabs separately
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-high/60 border border-white/50 shadow-xs">
                  <span className="font-display-mobile text-display-mobile text-secondary font-black block">
                    64%
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Abandoned due to gas fee confusion
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Solved via automated network fee abstraction
                  </span>
                </div>

                <div className="p-space-md rounded-2xl bg-surface-container-high/60 border border-white/50 shadow-xs">
                  <span className="font-display-mobile text-display-mobile text-tertiary font-black block">
                    91%
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-medium">
                    Preferred biometric instant validation
                  </p>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Over SMS 2FA codes for cross-border wires
                  </span>
                </div>
              </div>

              {/* Archetype Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-headline-sm text-headline-sm font-bold">
                      PT
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Fintech Power Trader
                      </h4>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        High Velocity · Low Latency
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                    Needs instantaneous market execution, deep book depth, and customizable telemetry charts. Frustrated by delayed transaction statuses and volatile slippage estimates during market peaks.
                  </p>
                  <div className="p-space-sm rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
                    <strong>Key Requirement:</strong> Single-tap split orders &amp; real-time candle charts with tactile feedback.
                  </div>
                </div>

                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-headline-sm text-headline-sm font-bold">
                      ES
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Global Sender &amp; Freelancer
                      </h4>
                      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                        Routine Remittances · Zero Ambiguity
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-sm">
                    Receives client retainers in USD and EUR, off-ramping to domestic currencies. Values predictability, upfront transfer fee transparency, and receipt automation for quarterly tax filings.
                  </p>
                  <div className="p-space-sm rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
                    <strong>Key Requirement:</strong> Automated tax-ready invoice exports &amp; fee guarantee locks for 30 minutes.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Design System & UI Architecture Showcase */}
            <section id="design-system" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl scroll-mt-28">
              <div className="flex flex-col gap-space-xs mb-space-lg">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  Under The Glass
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Atomic Design System: The Engine Behind Finova
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  To sustain rapid feature releases across international banking guidelines, we forged a comprehensive design system with 120+ modular Figma tokens, dark-mode refraction tokens, and accessible WCAG AAA tactile states.
                </p>
              </div>

              {/* Design System Image Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-high/40 p-space-sm md:p-space-md shadow-xl mb-space-lg backdrop-blur-xl border border-white/60">
                <div className="relative rounded-2xl overflow-hidden w-full aspect-[16/9] md:aspect-[21/9] bg-surface-container-highest flex items-center justify-center">
                  <img
                    alt="Finova Atomic Design System Component Library and Guidelines"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFtHtIqfM29_2dsAVBiLvx_rE9lIsYJbPpx3oJ7t68LXFcMS72cVX-3-117bA4uvrQRB2EpdAQGn6wbAMKdEqMyZgH7g5XtSTS4ER1pu7uikGNuPS5g4-FfPy28YGQfUTvHhMQGcAeAUvvT0Vj0G-BOMUCjofKLtOE1uWwa_Apgt796EWz8F843jhXN0EKEwMtQ012fUfJJx7vHK7RC05NAS1G30PfmTGGz8Uuu9k89pqYOjI17Kx"
                  />
                </div>
              </div>

              {/* Interactive Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Token Card */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-primary">palette</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Luminous Palette
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Built upon midnight obsidian, refractive quantum violets, and high-contrast alert mints for accessible financial readability.
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-10 rounded-md bg-on-background flex items-center justify-center text-on-primary font-label-sm text-label-sm shadow-xs">
                      #131B
                    </div>
                    <div className="h-10 rounded-md bg-primary flex items-center justify-center text-on-primary font-label-sm text-label-sm shadow-xs">
                      #6B38
                    </div>
                    <div className="h-10 rounded-md bg-secondary flex items-center justify-center text-on-secondary font-label-sm text-label-sm shadow-xs">
                      #4648
                    </div>
                    <div className="h-10 rounded-md bg-tertiary flex items-center justify-center text-on-tertiary font-label-sm text-label-sm shadow-xs">
                      #8127
                    </div>
                  </div>
                </div>

                {/* Typography System Card */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-secondary">text_fields</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Dual Type Engine
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Plus Jakarta Sans powers bold editorial titles while JetBrains Mono ensures zero-error digit alignments for live ticker decimals.
                  </p>
                  <div className="space-y-1 bg-surface-container-low p-space-sm rounded-xl">
                    <p className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                      Typography Scale
                    </p>
                    <p className="font-label-md text-label-md text-primary font-bold">
                      $245,892.15 USD
                    </p>
                  </div>
                </div>

                {/* Micro-Components Card */}
                <div className="p-space-md rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60">
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-tertiary">widgets</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Tactile Atoms
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Pre-assembled pill toggles, dynamic chart sparklines, stateful currency switcher chips, and authenticated biometric badges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                      Pill Tabs
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                      Active Swap
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm">
                      Sparkline v2
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Key Flows & Interactive Breakthroughs */}
            <section id="breakthroughs" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl scroll-mt-28">
              <div className="flex flex-col gap-space-xs mb-space-lg">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                  Core Deliverables
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Three Key UX Breakthroughs
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Feature 1 */}
                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md shadow-md">
                      <span className="material-symbols-outlined">sync_alt</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Instant Biometric Liquidity Swap
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Zero-latency currency swaps between fiat USD/EUR accounts and institutional crypto vaults with slippage lock protocols.
                    </p>
                  </div>
                  {/* Mini SVG Telemetry Preview */}
                  <div className="w-full bg-surface-container-low rounded-2xl p-space-sm">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        Execution Speed
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        142ms
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-2 rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md shadow-md">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Predictive Portfolio Telemetry
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Real-time expenditure tracking with ML forecasts, projecting upcoming bills against cross-chain yield opportunities.
                    </p>
                  </div>
                  {/* Sparkline Chart */}
                  <div className="w-full bg-surface-container-low rounded-2xl p-space-sm flex items-end justify-between h-14 px-4">
                    <div className="w-2.5 bg-secondary-fixed h-4 rounded-t" />
                    <div className="w-2.5 bg-secondary-fixed h-7 rounded-t" />
                    <div className="w-2.5 bg-secondary-fixed h-5 rounded-t" />
                    <div className="w-2.5 bg-secondary h-9 rounded-t" />
                    <div className="w-2.5 bg-secondary h-11 rounded-t" />
                    <div className="w-2.5 bg-primary h-12 rounded-t" />
                    <div className="w-2.5 bg-primary-container h-8 rounded-t" />
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="p-space-lg rounded-3xl bg-surface-container-lowest/80 backdrop-blur-md shadow-xs border border-white/60 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-space-md shadow-md">
                      <span className="material-symbols-outlined">verified_user</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                      Multi-Vault Security Architecture
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      Integrated biometric enclaves and social recovery protocols without requiring customers to hand-write 24-word seed phrases.
                    </p>
                  </div>
                  <div className="w-full bg-surface-container-low rounded-2xl p-space-sm flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary">fingerprint</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-medium">
                      Dual Enclave Protected
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Measurable Impact & Business Outcomes */}
            <section id="outcomes" className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl scroll-mt-28">
              <div className="p-space-xl rounded-3xl bg-surface-container-lowest/90 backdrop-blur-xl shadow-xl border border-white/80">
                <div className="flex flex-col gap-space-xs mb-space-lg text-center max-w-2xl mx-auto">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
                    Measurable Results
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Quantifiable Market Impact
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Validated through 6 months of live production data and post-launch analytics.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
                  <div className="p-space-md rounded-2xl bg-surface-container-low/70 border border-white/50 shadow-xs">
                    <span className="font-display text-display text-primary font-black block leading-none mb-space-xs">
                      +140%
                    </span>
                    <p className="font-headline-sm text-body-lg text-on-surface font-bold">
                      User Retention
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Measured across 90-day active cohorts
                    </span>
                  </div>

                  <div className="p-space-md rounded-2xl bg-surface-container-low/70 border border-white/50 shadow-xs">
                    <span className="font-display text-display text-secondary font-black block leading-none mb-space-xs">
                      -62%
                    </span>
                    <p className="font-headline-sm text-body-lg text-on-surface font-bold">
                      KYC Drop-off Rate
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Average completion under 3 minutes
                    </span>
                  </div>

                  <div className="p-space-md rounded-2xl bg-surface-container-low/70 border border-white/50 shadow-xs">
                    <span className="font-display text-display text-tertiary font-black block leading-none mb-space-xs">
                      $2.4B
                    </span>
                    <p className="font-headline-sm text-body-lg text-on-surface font-bold">
                      Total Volume
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Processed in first 6 months post-relaunch
                    </span>
                  </div>

                  <div className="p-space-md rounded-2xl bg-surface-container-low/70 border border-white/50 shadow-xs">
                    <span className="font-display text-display text-on-surface font-black block leading-none mb-space-xs">
                      2x
                    </span>
                    <p className="font-headline-sm text-body-lg text-on-surface font-bold">
                      Award Winner
                    </p>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Red Dot 2023 &amp; UX Design Gold
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Client Testimonial */}
            <section className="max-w-5xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-space-xl">
              <div className="p-space-lg md:p-space-xl rounded-3xl bg-surface-container-high/40 backdrop-blur-xl shadow-lg relative overflow-hidden border border-white/60">
                <span className="material-symbols-outlined absolute top-4 right-6 text-7xl text-primary/10 select-none pointer-events-none">
                  format_quote
                </span>
                <p className="font-headline-md text-headline-md text-on-surface font-semibold leading-relaxed mb-space-lg relative z-10">
                  &ldquo;Saqib transformed Finova with pristine design and ultra-fast frontend execution. His engineering and visual solutions cut our delivery cycle times significantly while delighting users.&rdquo;
                </p>
                <div className="flex items-center gap-space-sm relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-base shadow-sm">
                    ER
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-lg font-bold text-on-surface">
                      Elena Rostova
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Chief Product Officer, Finova Global
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Next Project Navigation & Call To Action */}
            <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pb-space-xl">
              {/* Project Prev / Next Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-space-xl">
                <button
                  type="button"
                  onClick={() => onOpenProject('analytics')}
                  className="p-space-lg rounded-3xl bg-surface-container-lowest/70 backdrop-blur-md shadow-xs hover:bg-surface-container-lowest transition-all group flex flex-col justify-between border border-white/60 text-left cursor-pointer hover:shadow-md"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Previous Project
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface font-bold mt-space-sm group-hover:text-primary transition-colors">
                    Analytics Telemetry Dashboard
                  </h4>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenProject('saas-landing')}
                  className="p-space-lg rounded-3xl bg-surface-container-lowest/70 backdrop-blur-md shadow-xs hover:bg-surface-container-lowest transition-all group flex flex-col justify-between md:items-end md:text-right border border-white/60 text-left cursor-pointer hover:shadow-md"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Next Project
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface font-bold mt-space-sm group-hover:text-primary transition-colors">
                    SaaS Design System Kit
                  </h4>
                </button>
              </div>

              {/* Discovery Call Banner */}
              <div className="rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-space-lg md:p-space-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg border border-white/80">
                <div className="max-w-xl">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold block mb-space-xs">
                    Start A Collaboration
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Ready to build your next breakthrough product?
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                    I am available for select product design and design system engagements for Q2 2025.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-space-sm">
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="px-space-lg py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-body-md text-body-md font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-space-xs cursor-pointer"
                  >
                    <span>Get In Touch</span>
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onBackToHome();
                      setTimeout(() => onNavigateSection('work'), 100);
                    }}
                    className="px-space-md py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container text-on-surface font-body-md text-body-md font-semibold transition-all cursor-pointer"
                  >
                    Browse All Case Studies
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-low/70 backdrop-blur-2xl mt-space-xl border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start pb-space-lg">
            <div className="md:col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium px-space-sm py-1 rounded-full bg-secondary-fixed/50">
                  Available for Q2 projects
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                Pioneering tactile interfaces &amp; digital architectures.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Based in New Delhi &amp; Bangalore, collaborating globally with high-growth technology pioneers and luxury brands.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Dispatch / Newsletter
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bi-weekly thoughts on computational aesthetics and system architecture.
              </p>
              {newsletterSubscribed ? (
                <div className="mt-space-xs p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                  Thank you for subscribing to Saqib Visuals Dispatch!
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex items-center mt-space-xs rounded-full bg-surface-container-lowest/80 p-1.5 shadow-[0_4px_16px_rgba(99,102,241,0.06)] border border-white"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="bg-transparent px-space-md py-2 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none flex-1"
                  />
                  <button
                    type="submit"
                    className="px-space-md py-2 rounded-full bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-[0_4px_14px_rgba(107,56,212,0.3)] hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-3 flex flex-col gap-space-sm md:items-end">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Digital Presence
              </span>
              <div className="flex flex-col md:items-end gap-space-xs">
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Dribbble
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="pt-space-md border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              © {new Date().getFullYear()} Muhammad Saqib (Saqib Visuals). All rights reserved.
            </p>
            <div className="flex items-center gap-space-md">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
              >
                Back to Top ↑
              </button>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Refractive Glass Engine v2.4
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
