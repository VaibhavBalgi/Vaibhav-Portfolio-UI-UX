import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Instagram, Sparkles, Figma, Code, Heart, Image as ImageIcon, Braces } from "lucide-react";
import avatar3D from "../assets/3d_hero_avatar.png";

export function Hero() {
  // Link animation progress directly to scroll position
  const { scrollY } = useScroll();

  // Add a spring physics layer to the scroll for smooth acceleration/deceleration and re-entry bounce
  const smoothScroll = useSpring(scrollY, {
    stiffness: 70,
    damping: 18,
    mass: 0.8
  });

  // Map scroll progress (0 to 500px) to the split-apart transform and blur values
  const leftX = useTransform(smoothScroll, [0, 500], [0, -150]);
  const rightX = useTransform(smoothScroll, [0, 500], [0, 150]);
  const elementOpacity = useTransform(smoothScroll, [0, 400], [1, 0]);
  
  // Progressive blur mapping (0px to 12px)
  const blurValue = useTransform(smoothScroll, [0, 500], [0, 12]);
  const elementFilter = useMotionTemplate`blur(${blurValue}px)`;

  // Background fades out slightly after the elements (100px to 600px)
  const bgOpacity = useTransform(smoothScroll, [100, 600], [1, 0]);

  const skills = [
    { name: "Figma", subtitle: "UI Design", icon: Figma, position: "top-[5%] left-[5%]", delay: 0, duration: 4.2 },
    { name: "HTML/CSS", subtitle: "Frontend", icon: Code, position: "top-[15%] right-[0%]", delay: 0.5, duration: 3.8 },
    { name: "Photoshop", subtitle: "Graphics", icon: ImageIcon, position: "top-[45%] -left-[10%]", delay: 1, duration: 4.5 },
    { name: "Lovable", subtitle: "App Dev", icon: Heart, position: "top-[55%] -right-[5%]", delay: 1.5, duration: 3.5 },
    { name: "GitHub", subtitle: "Version Control", icon: Github, position: "bottom-[15%] left-[0%]", delay: 2, duration: 4.8 },
    { name: "JavaScript", subtitle: "Logic", icon: Braces, position: "bottom-[5%] right-[10%]", delay: 2.5, duration: 3.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 pb-20 lg:pb-0 bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-background">
      {/* Background Elements */}
        <motion.div 
          style={{ opacity: bgOpacity, willChange: "opacity" }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          {/* Left edge glow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-[#E8722A]" />
          
          {/* Right edge glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-[#E8722A]" />
          
          {/* Square Line Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Side: Scroll-linked Wrapper */}
            <motion.div 
              style={{ x: leftX, opacity: elementOpacity, filter: elementFilter, willChange: "transform, filter, opacity" }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10 bg-black/20 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E8722A]" />
                Available for new opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white"
              >
                Hi, I'm <span className="text-[#E8722A]">Vaibhav</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-2xl sm:text-3xl lg:text-4xl text-white/80 font-medium"
              >
                UI/UX Designer & Web Designer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed"
              >
                Designing clean user experiences and building modern web interfaces.
                <br />
                I create UI/UX designs, frontend concepts, and usability-focused digital experiences while continuously improving my design and development skills.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4 items-center"
              >
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#E8722A] text-black font-medium px-7 py-3.5 hover:scale-[1.02] transition shadow-[0_0_20px_rgba(232,114,42,0.4)]"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white font-medium px-7 py-3.5 hover:bg-white/10 transition"
                >
                  Contact Me
                </a>

                <div className="flex items-center gap-2 ml-2">
                  {[
                    { Icon: Github, href: "https://github.com/VaibhavBalgi" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-balgi" },
                    { Icon: Instagram, href: "https://www.instagram.com/its__vaibhav__47" },
                    { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavbalgi3456@gmail.com" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#E8722A] hover:border-[#E8722A] transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Scroll-linked Wrapper */}
            <motion.div 
              style={{ x: rightX, opacity: elementOpacity, filter: elementFilter, willChange: "transform, filter, opacity" }}
              className="relative w-full h-[500px] lg:h-[600px] items-center justify-center hidden md:flex"
            >
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E8722A] opacity-30 blur-[80px]" />
              
              {/* Clockwise Dashed Ring */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-[320px] h-[320px] rounded-full border border-dashed border-[#E8722A]/40"
                />
              </motion.div>
              
              {/* Counter-Clockwise Dashed Ring */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-[420px] h-[420px] rounded-full border border-dashed border-[#E8722A]/30"
                />
              </motion.div>

              {/* Profile Image Container */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-20 w-56 h-56 rounded-full overflow-hidden shadow-[0_0_40px_rgba(232,114,42,0.3)] bg-[#0D1117] flex items-center justify-center border-2 border-[#E8722A]/20"
              >
                <img 
                  src={avatar3D} 
                  alt="Vaibhav 3D Avatar" 
                  className="w-full h-full object-cover scale-[1.1]"
                />
              </motion.div>

              {/* Floating Skill Badges */}
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + skill.delay * 0.2, type: "spring", bounce: 0.4 }}
                  className={`absolute z-30 ${skill.position}`}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, skill.duration % 2 === 0 ? 5 : -5, 0]
                    }}
                    transition={{ 
                      y: { duration: skill.duration, repeat: Infinity, ease: "easeInOut", delay: skill.delay },
                      rotate: { duration: skill.duration * 1.5, repeat: Infinity, ease: "easeInOut", delay: skill.delay }
                    }}
                    className="flex items-center gap-3 p-2.5 pr-4 rounded-xl bg-[#0D1117]/80 backdrop-blur-md border border-[#E8722A]/40 shadow-[0_0_15px_rgba(232,114,42,0.15)]"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E8722A]/10 text-[#E8722A]">
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{skill.name}</p>
                      <p className="text-[10px] text-white/50">{skill.subtitle}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
}


