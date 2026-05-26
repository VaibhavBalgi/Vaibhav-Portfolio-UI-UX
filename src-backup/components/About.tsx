import { motion } from "framer-motion";
import { Palette, Code2, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.png";

const focus = [
  {
    Icon: Palette,
    title: "UI/UX Design",
    desc: "User research, wireframes, prototypes, and pixel-perfect interfaces in Figma.",
  },
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Production React with TypeScript, Tailwind, and accessible component systems.",
  },
  {
    Icon: Sparkles,
    title: "AI-assisted Workflows",
    desc: "Leveraging modern AI tools to ship faster without compromising design quality.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="About" title="Designer & developer in one." />

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
                src={portrait}
                alt="Portrait of Vaibhav, UI/UX designer and frontend developer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Based in India</div>
                <div className="text-sm font-semibold mt-1">Designing since 2022</div>
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
              I'm a UI/UX designer and frontend developer who loves the rare space where craft meets code.
              I design interfaces that feel obvious to use, then turn them into fast, accessible React
              applications.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              My approach blends user research, modern design systems, and AI-assisted workflows to ship
              polished products quickly — without losing the human details that make great software feel
              effortless.
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
      </div>
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
