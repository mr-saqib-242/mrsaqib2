import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const AmbientBackgroundAnimation: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Animated Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C5CE7] via-[#9D84FF] to-[#00CEC9] origin-left z-[60] shadow-sm pointer-events-none"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Floating Animated Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Orb 1: Violet Top-Right */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -35, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-purple-300/35 to-indigo-200/25 blur-3xl"
        />

        {/* Orb 2: Indigo Left Mid */}
        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 40, -25, 0],
            scale: [1, 1.12, 1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-200/30 to-purple-200/20 blur-3xl"
        />

        {/* Orb 3: Cyan / Teal Floating Accent */}
        <motion.div
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -30, 35, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-2/3 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-teal-200/20 via-sky-200/25 to-transparent blur-3xl"
        />

        {/* Orb 4: Rose / Amber Soft Glow Bottom */}
        <motion.div
          animate={{
            x: [0, -25, 30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-20 left-1/3 w-[460px] h-[460px] rounded-full bg-gradient-to-t from-pink-200/25 via-purple-100/30 to-transparent blur-3xl"
        />

        {/* Gentle Ambient Grid Sparkles */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(108,92,231,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* Floating Interactive Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            id="btn-scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-white shadow-xl hover:shadow-purple-500/25 backdrop-blur-md border border-purple-400/30 flex items-center justify-center group cursor-pointer"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-purple-300" />
            <span className="sr-only">Scroll to top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
