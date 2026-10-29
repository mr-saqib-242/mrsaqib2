import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Globe, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF, FaSnapchatGhost } from 'react-icons/fa';
import { HERO_DATA, SOCIAL_LINKS } from '../data';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Website Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Website Development',
        message: '',
      });
    }, 800);
  };

  const socialsList = [
    {
      name: 'WhatsApp',
      url: SOCIAL_LINKS.whatsapp,
      icon: <FaWhatsapp className="w-4 h-4 text-emerald-500" />,
      badgeColor: 'hover:border-emerald-400 hover:bg-emerald-50/70',
    },
    {
      name: 'Instagram',
      url: SOCIAL_LINKS.instagram,
      icon: <FaInstagram className="w-4 h-4 text-pink-500" />,
      badgeColor: 'hover:border-pink-400 hover:bg-pink-50/70',
    },
    {
      name: 'TikTok',
      url: SOCIAL_LINKS.tiktok,
      icon: <FaTiktok className="w-4 h-4 text-slate-800" />,
      badgeColor: 'hover:border-slate-400 hover:bg-slate-100',
    },
    {
      name: 'Facebook',
      url: SOCIAL_LINKS.facebook,
      icon: <FaFacebookF className="w-4 h-4 text-blue-600" />,
      badgeColor: 'hover:border-blue-400 hover:bg-blue-50/70',
    },
    {
      name: 'Snapchat',
      url: SOCIAL_LINKS.snapchat,
      icon: <FaSnapchatGhost className="w-4 h-4 text-amber-500" />,
      badgeColor: 'hover:border-amber-400 hover:bg-amber-50/70',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div
            id="contact-tag-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200/60 text-[#6C5CE7] text-xs font-bold tracking-wider uppercase mb-4 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Have a Project in Mind?<br />
            Let's Create Something Amazing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out to discuss your design vision, collaborate, or simply say hello.
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Availability with Slide-in */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6 border border-white/90 shadow-sm">
              
              {/* Availability Status */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 w-fit">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold text-emerald-800">
                  Available for new projects (Q2 2025)
                </span>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/70 border border-slate-200/60 group hover:border-purple-300 transition-colors gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-[#6C5CE7] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 truncate sm:break-normal">{HERO_DATA.email}</p>
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    onClick={copyEmail}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </motion.button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-white/70 border border-slate-200/60 hover:border-indigo-300 transition-colors group gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{HERO_DATA.phone}</p>
                    </div>
                  </div>
                  <motion.a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    Chat
                  </motion.a>
                </div>

                {/* Website */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 border border-slate-200/60 hover:border-purple-300 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Official Website</p>
                      <p className="text-sm font-bold text-slate-900">mrsaqib242.vercel.app</p>
                    </div>
                  </div>
                  <motion.a
                    href={HERO_DATA.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800"
                    title="Open Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-200/60 hover:border-rose-300 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-slate-900">{HERO_DATA.location}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Live Link Preview Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
                    <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Link Preview Card</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Active OG Tags
                  </span>
                </div>

                {/* WhatsApp Chat Preview Balloon */}
                <div className="rounded-xl overflow-hidden bg-white border border-emerald-200/60 shadow-xs">
                  <div className="relative h-28 sm:h-32 bg-slate-900 overflow-hidden">
                    <img
                      src={HERO_DATA.portraitUrl}
                      alt="Muhammad Saqib Portfolio Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        mrsaqib242.vercel.app
                      </span>
                      <span className="text-[10px] text-slate-300 font-mono">1200×630 OG</span>
                    </div>
                  </div>
                  <div className="p-2.5">
                    <p className="text-xs font-bold text-slate-900 line-clamp-1">
                      Muhammad Saqib — Saqib Visuals | Full-Stack &amp; AI Specialist
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                      Engineering Scalable Full-Stack Applications, AI Systems &amp; High-Performance Modern Web Products.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <motion.a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out Muhammad Saqib (Saqib Visuals) Portfolio — Full-Stack Developer & AI Specialist: https://mrsaqib242.vercel.app')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold shadow-xs transition-colors"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>Share on WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 text-[11px] font-bold shadow-2xs transition-colors"
                  >
                    <Send className="w-3 h-3" />
                    <span>Direct Chat</span>
                  </motion.a>
                </div>
              </div>

              {/* Social Channels List with Double Grid on Mobile */}
              <div className="pt-2 border-t border-slate-200/70">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Connect on Social Media
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {socialsList.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-white/80 border border-slate-200/80 transition-all text-xs font-semibold text-slate-700 hover:text-slate-900 shadow-2xs ${social.badgeColor}`}
                    >
                      {social.icon}
                      <span className="truncate">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Brand Tagline */}
              <div className="pt-3 border-t border-slate-200/70 text-center">
                <p className="text-xs font-bold text-slate-900">
                  ✨ {HERO_DATA.brand}
                </p>
                <p className="text-[11px] text-slate-500 italic mt-0.5">
                  Where Creativity Meets Technology.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form with Slide-in */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/90 shadow-lg">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                    Thank you for reaching out. I’ve received your note and will reply within 24 hours.
                  </p>
                  <motion.button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white text-sm text-slate-900 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white text-sm text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white text-sm text-slate-900 transition-all cursor-pointer"
                    >
                      <option value="Mobile App">Mobile App Design (iOS / Android)</option>
                      <option value="Web Application">Web Application / SaaS Dashboard</option>
                      <option value="Design System">Design System & Component Kit</option>
                      <option value="Full Redesign">Complete Product Redesign</option>
                      <option value="Consultation">Design Advisory & Advisory Audit</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Tell me about your product, timeline, and what goals you're looking to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:bg-white text-sm text-slate-900 transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-2xl bg-[#6C5CE7] hover:bg-[#5848d4] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
