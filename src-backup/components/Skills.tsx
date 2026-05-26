import { motion } from "framer-motion";
import { SectionHeader } from "./About";
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
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Skills & tools"
          title="A modern, focused toolkit."
          description="The technologies and tools I use every day to design, build, and ship."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-8 glass rounded-3xl hover:border-primary/40 transition-colors shadow-card gap-4 group"
            >
              {tool.img ? (
                <img src={tool.img} alt={`${tool.name} icon`} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              ) : tool.icon ? (
                <tool.icon className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
              ) : null}
              <span className="font-medium text-foreground/90">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
