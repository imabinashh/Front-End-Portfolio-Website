import React, { useState } from "react";
import { Mail, Send, CheckCircle2, MessageSquare, Copy, Check, Sparkles, Clock, Globe, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { playClickSound, playSuccessSound } from "../utils/audio";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Time Role",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playClickSound();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccessSound();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    playSuccessSound();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100">
          Let's Build Something <span className="gradient-text">Extraordinary</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Whether you have an upcoming web project, engineering role opening, or just want to discuss frontend architecture, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Quick Copy Box */}
          <div className="p-6 rounded-3xl bg-[#0d121f]/90 border border-slate-800/90 shadow-xl backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400">Direct Email</span>
              <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                <Clock className="w-3 h-3" />
                <span>&lt; 2hr Response</span>
              </div>
            </div>
            
            <div className="text-lg font-bold font-mono text-cyan-300 break-all">
              {personalInfo.email}
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">@abinash</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">in/abinash-frontend</span>
            </a>
          </div>

          {/* Availability Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>Current Availability</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-light">
              Currently accepting full-time frontend engineering positions, high-impact consulting, and contract projects.
            </p>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0d121f]/90 border border-slate-800/90 shadow-2xl backdrop-blur-md">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formData.name}</span>. I've received your note and will get back to you shortly at <span className="text-cyan-300 font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", projectType: "Full-Time Role", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Project / Inquiry Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Full-Time Role">Full-Time Frontend Role</option>
                    <option value="Contract / Freelance">Contract / Project Build</option>
                    <option value="Design System Consulting">Design System Consulting</option>
                    <option value="Performance Audit">Web Performance / SEO Audit</option>
                    <option value="General Question">General Inquiry / Coffee Chat</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      <span>Dispatching Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

