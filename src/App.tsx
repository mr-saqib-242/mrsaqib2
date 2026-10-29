/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CaseStudySpotlight } from './components/CaseStudySpotlight';
import { DesignProcessSection } from './components/DesignProcessSection';
import { AwardsSection } from './components/AwardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { DeveloperTerminalSection } from './components/DeveloperTerminalSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { FinovaCaseStudyPage } from './components/FinovaCaseStudyPage';
import { ProfilePage } from './components/ProfilePage';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { WelcomeAnimation } from './components/WelcomeAnimation';
import { AmbientBackgroundAnimation } from './components/AmbientBackgroundAnimation';
import { ProjectItem } from './types';
import { PROJECTS_DATA } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'finova-case-study' | 'profile'>('home');
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(() => {
    try {
      return !sessionStorage.getItem('saqib_welcome_seen');
    } catch {
      return true;
    }
  });

  const handleCompleteWelcome = () => {
    setShowWelcomeAnimation(false);
    try {
      sessionStorage.setItem('saqib_welcome_seen', 'true');
    } catch {
      // ignore
    }
  };

  const handleReplayWelcome = () => {
    setShowWelcomeAnimation(true);
  };

  // Sync route state with browser URL & history
  useEffect(() => {
    const evaluateRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const isProfile =
        hash.includes('profile') ||
        params.get('page') === 'profile' ||
        window.location.pathname.includes('/profile');
      const isCaseStudy =
        hash.includes('case-study') ||
        hash.includes('case-studies') ||
        hash.includes('finova') ||
        params.get('page') === 'case-study' ||
        params.get('page') === 'finova' ||
        window.location.pathname.includes('/case-study');

      if (isProfile) {
        setCurrentView('profile');
        document.title = 'Muhammad Saqib — Saqib Visuals | Official Standalone Profile';
      } else if (isCaseStudy) {
        setCurrentView('finova-case-study');
        document.title = 'Finova: Reimagining Global Liquidity & Digital Banking — Case Study | Muhammad Saqib';
      } else {
        setCurrentView('home');
        document.title = 'Muhammad Saqib — Saqib Visuals | Full-Stack Developer & AI Enthusiast';
      }
    };

    evaluateRoute();
    window.addEventListener('popstate', evaluateRoute);
    window.addEventListener('hashchange', evaluateRoute);
    return () => {
      window.removeEventListener('popstate', evaluateRoute);
      window.removeEventListener('hashchange', evaluateRoute);
    };
  }, []);

  const handleOpenProfilePage = () => {
    setCurrentView('profile');
    document.title = 'Muhammad Saqib — Saqib Visuals | Official Standalone Profile';
    window.history.pushState({ page: 'profile' }, '', '#/profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFinovaCaseStudy = () => {
    setCurrentView('finova-case-study');
    document.title = 'Finova: Reimagining Global Liquidity & Digital Banking — Case Study | Muhammad Saqib';
    window.history.pushState({ page: 'finova-case-study' }, '', '#/case-study/finova');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    document.title = 'Muhammad Saqib — Saqib Visuals | Full-Stack Developer & AI Enthusiast';
    window.history.pushState({ page: 'home' }, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentView('home');
    document.title = 'Muhammad Saqib — Saqib Visuals | Full-Stack Developer & AI Enthusiast';
    window.history.pushState({ page: 'home', section: sectionId }, '', `#${sectionId}`);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      document.title = 'Muhammad Saqib — Saqib Visuals | Full-Stack Developer & AI Enthusiast';
      window.history.pushState({ page: 'home', section: 'contact' }, '', '#contact');
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleViewWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSpotlightCaseStudy = () => {
    handleOpenFinovaCaseStudy();
  };

  return (
    <div className="min-h-screen relative text-slate-900 selection:bg-purple-100 selection:text-purple-700">
      {/* Ambient background soft light layers and motion effects */}
      <div className="ambient-bg" aria-hidden="true" />
      <AmbientBackgroundAnimation />

      {/* Interactive Welcome Intro Animation Screen */}
      <AnimatePresence>
        {showWelcomeAnimation && (
          <WelcomeAnimation onComplete={handleCompleteWelcome} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentView === 'profile' ? (
          <motion.div
            key="profile-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ProfilePage
              onBackToHome={handleBackToHome}
              onContactClick={handleContactClick}
            />
          </motion.div>
        ) : currentView === 'finova-case-study' ? (
          <motion.div
            key="finova-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <FinovaCaseStudyPage
              onBackToHome={handleBackToHome}
              onNavigateSection={handleNavigateSection}
              onOpenProject={(projId) => {
                const p = PROJECTS_DATA.find((item) => item.id === projId);
                if (p) setSelectedProject(p);
              }}
              onContactClick={handleContactClick}
            />
          </motion.div>
        ) : (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Navigation */}
            <Navbar
              onContactClick={handleContactClick}
              onOpenCaseStudy={handleOpenFinovaCaseStudy}
              onOpenProfile={handleOpenProfilePage}
              onReplayWelcome={handleReplayWelcome}
            />

            {/* Main Sections */}
            <main className="relative z-10">
              <HeroSection
                onOpenCV={() => setIsCVOpen(true)}
                onViewWork={handleViewWork}
                onOpenProfile={handleOpenProfilePage}
              />

              <AboutSection
                onOpenExtendedBio={() => setIsCVOpen(true)}
                onOpenProfile={handleOpenProfilePage}
              />

              <ServicesSection />

              <WhyWorkWithMeSection />

              <TechStackSection />

              <SelectedWorkSection
                onSelectProject={(proj) => {
                  if (proj.id === 'finova') {
                    handleOpenFinovaCaseStudy();
                  } else {
                    setSelectedProject(proj);
                  }
                }}
              />

              <CaseStudySpotlight
                onOpenCaseStudy={handleOpenSpotlightCaseStudy}
              />

              <DeveloperTerminalSection />

              <DesignProcessSection />

              <AwardsSection />

              <TestimonialsSection />

              <FAQSection />

              <ContactSection />
            </main>

            {/* Footer */}
            <Footer
              onOpenProfile={handleOpenProfilePage}
              onReplayWelcome={handleReplayWelcome}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactClick}
        onOpenCaseStudy={handleOpenFinovaCaseStudy}
      />
    </div>
  );
}
