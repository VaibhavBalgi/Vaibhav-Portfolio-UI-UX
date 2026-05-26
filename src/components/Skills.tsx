import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const tools = [
  { name: "Figma", img: "/TOOLS/figma-svgrepo-com.svg" },
  { name: "Lovable", img: "/TOOLS/lovable-color.svg" },
  { name: "GitHub", img: "/TOOLS/github-svgrepo-com.svg" },
  { name: "Photoshop", img: "/TOOLS/adobe-photoshop-svgrepo-com.svg" },
  { name: "Canva", img: "/TOOLS/Canva_Logo_1.png" },
  { name: "Antigravity", img: "/TOOLS/antigravity.webp" },
  { name: "Vibecoding", icon: Sparkles },
  { name: "HTML", img: "/TOOLS/html-5-svgrepo-com.svg" },
  { name: "CSS", img: "/TOOLS/css3-svgrepo-com.svg" },
  { name: "JavaScript", img: "/TOOLS/js-svgrepo-com.svg" },
];

export function Skills() {
  const containerRef = useRef(null);

  return (
    <section id="skills" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Custom Animated Header for Skills Section */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4"
          >
            <span className="w-8 h-px bg-primary" /> SKILLS & TOOLS
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient"
          >
            Tools I'm Learning.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            The software and languages I'm currently practicing with to build my projects.
          </motion.p>
        </div>

        {/* 3D Perspective Grid Container */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          style={{ perspective: "800px", transformStyle: "preserve-3d" }}
        >
          {tools.map((tool, i) => {
            // Cards begin flipping 300ms after the subtitle appears (0.18s + 0.3s = 0.48s)
            // Each card staggers by 60ms (0.06s)
            const cardDelay = 0.48 + (i * 0.06);
            
            return (
              <motion.div
                key={tool.name}
                // Starting State: Edge-on, invisible
                initial={{ 
                  opacity: 0, 
                  rotateY: 90 
                }}
                // Flip-in Animation
                whileInView={{ 
                  opacity: 1, 
                  rotateY: 0 
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 0.5, 
                  delay: cardDelay,
                  ease: [0.34, 1.56, 0.64, 1] // Custom bouncy spring easing
                }}
                // Hover State
                whileHover={{
                  rotateY: -8,
                  y: -4,
                  scale: 1.03,
                  boxShadow: "0 0 0 1.5px #E8722A, 0 8px 24px rgba(232,114,42,0.15)",
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
                style={{ 
                  transformOrigin: "left center",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden" 
                }}
                className="flex flex-col items-center justify-center p-8 glass rounded-3xl transition-colors gap-4 group"
              >
                {tool.img ? (
                  <img src={tool.img} alt={`${tool.name} icon`} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                ) : tool.icon ? (
                  <tool.icon className="w-12 h-12 text-muted-foreground group-hover:text-[#E8722A] transition-all duration-300 group-hover:scale-110" />
                ) : null}
                <span className="font-medium text-foreground/90">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
