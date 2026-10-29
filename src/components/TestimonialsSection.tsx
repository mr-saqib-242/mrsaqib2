import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slide timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Motion variants for slide animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            id="testimonials-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Feedback from colleagues, founders and design leaders I've collaborated with.
          </p>
        </motion.div>

        {/* Carousel / Grid Showcase with Slide Animations */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl border border-white/90"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/30 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Top row: Quote icon & Star rating */}
            <div className="flex items-center justify-between mb-6">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6C5CE7] flex items-center justify-center shadow-xs"
              >
                <Quote className="w-6 h-6" />
              </motion.div>

              <div className="flex items-center gap-1 text-amber-400 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full text-xs font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-slate-700 ml-1">5.0</span>
              </div>
            </div>

            {/* Animated Slide Content */}
            <div className="min-h-[160px] sm:min-h-[140px] flex items-center relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <p className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed italic">
                    "{TESTIMONIALS_DATA[currentIndex].quote}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Footer with Animated Details */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 mt-4 border-t border-slate-200/70">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${TESTIMONIALS_DATA[currentIndex].avatarBg} flex items-center justify-center font-bold text-sm tracking-wider shadow-xs transform hover:scale-110 transition-transform`}
                  >
                    {TESTIMONIALS_DATA[currentIndex].avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {TESTIMONIALS_DATA[currentIndex].author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {TESTIMONIALS_DATA[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows with Spring Hover Animation */}
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  id="testimonial-prev-btn"
                  onClick={prev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 shadow-xs cursor-pointer transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  type="button"
                  id="testimonial-next-btn"
                  onClick={next}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xs cursor-pointer transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#6C5CE7]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
