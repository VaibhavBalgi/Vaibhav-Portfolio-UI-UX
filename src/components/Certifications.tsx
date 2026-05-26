import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, Gamepad2, CheckCircle2, Palette, Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./About";

export function Certifications() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCertOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    if (isCertOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isCertOpen]);

  return (
    <section id="certifications" className="relative py-28 border-t border-white/5 bg-gradient-to-b from-transparent via-[#080B10]/40 to-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#E8722A]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader 
          eyebrow="Credentials" 
          title="Verified Achievements" 
          description="A selection of my formal qualifications, industry internships, and design program accomplishments."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-6">
          {/* Left Side: Interactive Virtual Certificate Mockup Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div 
              onClick={() => setIsCertOpen(true)}
              className="relative w-full rounded-3xl overflow-hidden glass border border-[#E8722A]/15 hover:border-[#E8722A]/40 bg-[#0B0F17]/80 hover:bg-[#0E1420]/90 p-8 shadow-elegant hover:shadow-[0_0_50px_rgba(232,114,42,0.12)] transition-all duration-500 flex flex-col justify-between group cursor-pointer aspect-[4/3] sm:aspect-auto"
            >
              {/* Gold ribbon accent in corner */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-[-32px] w-32 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-[10px] text-black font-bold uppercase tracking-widest text-center py-1.5 rotate-45 shadow-sm border-y border-white/20">
                  Internship
                </div>
              </div>

              {/* Top part: Emblem and badge */}
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E8722A]/20 to-[#E8722A]/5 border border-[#E8722A]/30 flex items-center justify-center text-[#E8722A] group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#E8722A] tracking-wider uppercase bg-[#E8722A]/10 border border-[#E8722A]/20 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                </div>
              </div>

              {/* Middle: Certificate Text Layout */}
              <div className="my-8 space-y-4">
                <div className="space-y-1">
                  <div className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Industry Completion</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-[#E8722A] transition-colors">
                    UX Design & Game Design
                  </h3>
                </div>
                
                <p className="text-xs text-white/50 leading-relaxed font-medium">
                  Conducted detailed UI/UX audits and designed onboarding flows, alongside researching theoretical game mechanics, character movements, and AI scoreboarding systems.
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center gap-6">
                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-wider">Recipient</div>
                    <div className="text-xs font-semibold text-white/80 mt-0.5">Vaibhav Ganapati Balgi</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/30 uppercase tracking-wider">Period</div>
                    <div className="text-xs font-semibold text-white/80 mt-0.5">May 2025</div>
                  </div>
                </div>
              </div>

              {/* Bottom: Interactive Indicator */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[11px] text-white/45 font-semibold">
                <span className="group-hover:text-white transition-colors">Click to inspect credential</span>
                <span className="flex items-center gap-1 text-[#E8722A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  View PDF <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Takeaways & Focus Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="space-y-1.5">
                <span className="text-[11px] text-[#E8722A] font-bold uppercase tracking-widest">Professional Milestone</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Industry Design Internship</h3>
              </div>
              
              <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed">
                During this intensive design role, I specialized in conducting detailed UX audits to eliminate usability bottlenecks, crafting intuitive step-by-step user onboarding flows, and designing interactive gameplay dashboards and game mechanics.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {/* Highlight 1: UI/UX */}
                <div className="glass rounded-2xl p-5 border border-white/5 hover:border-[#E8722A]/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Palette className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-white">UI/UX Audit & Onboarding</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Conducted extensive UX audits to find bottlenecks, and designed modern user onboarding flows with high-fidelity Figma transitions and responsive layouts.
                  </p>
                </div>

                {/* Highlight 2: Game UI */}
                <div className="glass rounded-2xl p-5 border border-white/5 hover:border-[#E8722A]/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8722A]/10 flex items-center justify-center text-[#E8722A]">
                      <Gamepad2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-white">Game Design & Mechanics</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Learnt theoretical game mechanics, basic character movements and animation triggers, AI scoreboarding tracking, and core game design basics.
                  </p>
                </div>
              </div>

              {/* Core Skill Takeaways */}
              <div className="mt-8 space-y-3">
                <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Core Competencies Built</div>
                <div className="flex flex-wrap gap-2">
                  {["UX Audit", "User Onboarding", "Game Mechanics", "AI Scoreboarding", "Character Movement", "Game Design Basics"].map((skill) => (
                    <div key={skill} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/80 rounded-full px-3 py-1 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E8722A]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Actions Grid */}
            <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsCertOpen(true)}
                className="w-full sm:w-auto text-center rounded-full bg-[#E8722A] hover:bg-[#F2823A] text-white font-semibold px-8 py-3.5 text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E8722A]/10"
              >
                View PDF Certificate <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="/Certificate/certificate-64.pdf"
                download="Vaibhav_Balgi_Certificate"
                className="w-full sm:w-auto text-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Download Document <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal Viewer Overlay */}
      <AnimatePresence>
        {isCertOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/85 backdrop-blur-md px-0 md:px-6"
            onClick={() => setIsCertOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:w-[760px] h-[100vh] md:h-[88vh] bg-[#0D1117] rounded-t-[20px] md:rounded-[20px] flex flex-col shadow-[0_0_80px_rgba(232,114,42,0.1)] overflow-hidden border border-white/5"
            >
              {/* Shimmer line indicator */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8722A]/10 via-[#E8722A] to-[#E8722A]/10 bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />

              {/* Header inside modal */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-white/5 gap-4">
                <div>
                  <h2 className="text-[20px] font-bold text-white leading-tight">Internship Certificate</h2>
                  <p className="text-[12px] text-[#E8722A] mt-1">UX Design & Game Design Completion Credential · May 2025</p>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <a
                    href="/Certificate/certificate-64.pdf"
                    download="Vaibhav_Balgi_Certificate"
                    className="group items-center gap-1.5 rounded-full bg-[#E8722A] text-white px-5 py-2 text-[13px] font-semibold hover:bg-[#F2823A] transition-colors hidden sm:flex"
                  >
                    Download PDF <Download className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setIsCertOpen(false)}
                    className="rounded-full border border-white/15 text-white bg-transparent px-5 py-2 text-[13px] font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              {/* Body inside modal */}
              <div className="flex-1 w-full bg-[#F8F9FA] relative overflow-hidden flex flex-col">
                {/* Responsive preview fallback for small screens */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1117] p-8 text-center z-0 md:hidden">
                  <div className="w-full max-w-[280px] h-[340px] bg-[#080B10] rounded-2xl shadow-xl border border-[#E8722A]/15 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <Award className="w-16 h-16 text-[#E8722A] mb-4" />
                    <div className="text-base font-bold text-white">UX / Game Design</div>
                    <div className="text-[11px] text-[#E8722A] mt-1">Internship Certificate</div>
                    <p className="text-[11px] text-white/50 mt-6 leading-relaxed max-w-[200px]">
                      Your physical certificate file has been verified and loaded. Click below to download the official PDF immediately!
                    </p>
                  </div>

                  <a
                    href="/Certificate/certificate-64.pdf"
                    download="Vaibhav_Balgi_Certificate"
                    className="mt-8 rounded-full bg-[#E8722A] text-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#E8722A]/20"
                  >
                    Download Certificate ↓
                  </a>
                </div>

                {/* Desktop High-Fidelity sandboxed PDF Reader */}
                <iframe
                  src="/Certificate/certificate-64.pdf"
                  className="w-full h-full border-none z-10 hidden md:block bg-white"
                  title="UX & Game Design Internship Certificate PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
