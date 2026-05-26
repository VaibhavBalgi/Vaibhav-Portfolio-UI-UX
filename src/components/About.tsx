import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring, AnimatePresence } from "framer-motion";
import { Palette, Code2, Sparkles } from "lucide-react";

const focus = [
  {
    Icon: Palette,
    title: "UI/UX Design",
    desc: "Designing clean, intuitive, and modern interfaces focused on user experience and usability.",
  },
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, modern web applications with a focus on clean code and interactive elements.",
  },
  {
    Icon: Sparkles,
    title: "AI-Assisted Workflows",
    desc: "Leveraging modern AI tools to accelerate the design and development process while maintaining high quality.",
  },
];

export function About() {
  const containerRef = useRef(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsResumeOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isResumeOpen]);

  // Track scroll progress relative to this section entering the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animation when the top of About hits 95% down the viewport
    // End animation when the top of About reaches 30% from the top
    offset: ["start 95%", "start 30%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1
  });

  // Map progress to unblur and fade in
  const blurValue = useTransform(smoothProgress, [0, 1], [20, 0]);
  const sectionOpacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const sectionFilter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <section id="about" ref={containerRef} className="relative py-32">
      <motion.div
        style={{ opacity: sectionOpacity, filter: sectionFilter, willChange: "filter, opacity" }}
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <SectionHeader eyebrow="About Me" title="Designing digital experiences." />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden glass shadow-elegant aspect-[4/5]">
              <img
                src="/About/ChatGPT Image May 12, 2026, 11_07_38 PM.jpeg"
                alt="Portrait of Vaibhav, UI/UX designer and frontend developer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Based in India</div>
                <div className="text-sm font-semibold mt-1">Learning web development</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-xl text-foreground/80 leading-relaxed">
              I am a UI/UX designer and frontend developer with a strong passion for creating clean, usability-focused digital experiences. I enjoy the process of turning complex problems into elegant, user-friendly interfaces.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              My workflow blends modern design principles, frontend implementation, and AI-assisted tools to deliver polished and accessible web applications while continuously learning and refining my craft.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {focus.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-4 font-semibold">{title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Trigger Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-[22px] font-bold text-white">Curious about my full background?</h3>
            <p className="text-[13px] text-white/45 mt-1">Everything in one place — experience, skills, education and more.</p>
          </div>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="group rounded-full bg-[#E8722A] text-white font-semibold px-7 py-3 hover:shadow-[0_0_24px_rgba(232,114,42,0.3)] transition-all"
          >
            View My Resume <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

      </motion.div>

      {/* Resume Modal Overlay - Moved outside transformed container for proper fixed positioning */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/85 backdrop-blur-md px-0 md:px-6"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:w-[720px] h-[100vh] md:h-[88vh] bg-[#0D1117] rounded-t-[20px] md:rounded-[20px] flex flex-col shadow-[0_0_80px_rgba(232,114,42,0.08)] overflow-hidden"
            >
              {/* Animated Shimmer Top Border */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8722A]/10 via-[#E8722A] to-[#E8722A]/10 bg-[length:200%_100%]"
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border-b border-white/5 gap-4">
                <div>
                  <h2 className="text-[20px] font-bold text-white leading-tight">My Resume</h2>
                  <p className="text-[12px] text-[#E8722A] mt-1">UI/UX Designer & Frontend Developer · Updated May 2025</p>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <a
                    href="/Resume/Vaibhav_Balgi_Resume_.pdf"
                    download
                    className="group items-center gap-1 rounded-full bg-[#E8722A] text-white px-5 py-2 text-[13px] font-medium hover:bg-[#F2823A] transition-colors hidden sm:flex"
                  >
                    Download PDF <span className="group-hover:translate-y-[2px] transition-transform">↓</span>
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="rounded-full border border-white/15 text-white bg-transparent px-5 py-2 text-[13px] font-medium hover:bg-white/5 transition-colors"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              {/* PDF Body / Mobile Fallback */}
              <div className="flex-1 w-full bg-white relative overflow-hidden flex flex-col">
                {/* Fallback overlay (visible if PDF fails, or on mobile where PDF iframes are bad) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F9FA] p-8 text-center z-0 md:hidden">
                  <div className="w-full max-w-[280px] h-[340px] bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-gray-100 mb-4" />
                    <div className="w-32 h-4 rounded-full bg-gray-200 mb-2" />
                    <div className="w-24 h-3 rounded-full bg-[#E8722A]/20 mb-8" />

                    <div className="w-full space-y-3 blur-[2px] opacity-60">
                      <div className="h-2 w-full bg-gray-200 rounded-full" />
                      <div className="h-2 w-4/5 bg-gray-200 rounded-full" />
                      <div className="h-2 w-full bg-gray-200 rounded-full" />
                      <div className="h-2 w-2/3 bg-gray-200 rounded-full" />
                    </div>
                  </div>

                  <a
                    href="/Resume/Vaibhav_Balgi_Resume_.pdf"
                    download="Vaibhav_Balgi_resume"
                    className="mt-8 rounded-full bg-[#E8722A] text-white px-8 py-3 font-semibold shadow-lg shadow-[#E8722A]/20"
                  >
                    Download Resume ↓
                  </a>
                </div>

                {/* Desktop PDF Viewer */}
                <iframe
                  src="/Resume/Vaibhav_Balgi_Resume_.pdf"
                  className="w-full h-full border-none z-10 hidden md:block bg-white"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4">
        <span className="w-8 h-px bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
    </motion.div>
  );
}
