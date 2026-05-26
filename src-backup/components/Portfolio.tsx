import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./About";
import { ProjectModal, type ProjectId } from "./ProjectModal";
import uxAudit from "@/assets/project-ux-audit.jpg";
import uiGallery from "@/assets/project-ui-gallery.jpg";
import frontend from "@/assets/project-frontend.jpg";

export function Portfolio() {
  const [active, setActive] = useState<ProjectId | null>(null);

  const open = (id: ProjectId) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActive(id);
  };

  const cardKeyDown = (id: ProjectId) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
  };

  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I'm proud of."
          description="A close look at recent case studies — design systems, audits, and shipped products."
        />

        <div className="space-y-10">
          {/* PROJECT 1 — UX Audit */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            role="button"
            tabIndex={0}
            onClick={() => setActive("ux-audit")}
            onKeyDown={cardKeyDown("ux-audit")}
            className="group glass rounded-3xl overflow-hidden shadow-elegant cursor-pointer hover:border-primary/40 hover:shadow-elegant transition-all"
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 relative overflow-hidden">
                <img
                  src={uxAudit}
                  alt="UX audit dashboard with before and after comparison"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs">
                  Case study
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col">
                <div className="text-xs font-mono text-primary tracking-widest">01 — UX AUDIT</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  Fintech dashboard heuristic review
                </h3>
                <p className="mt-3 text-muted-foreground">
                  A complete UX audit identifying friction points across onboarding, navigation, and key
                  flows — backed by Nielsen's heuristics and accessibility scoring.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["+38%", "Task success"],
                    ["AA", "WCAG level"],
                    ["12", "Heuristics fixed"],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-2xl bg-muted/50 p-3">
                      <div className="text-lg font-bold text-gradient-accent">{n}</div>
                      <div className="text-[10px] text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {[
                    "Before/after comparison of core flows",
                    "Accessibility & contrast improvements",
                    "Prioritized findings with severity scores",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={open("ux-audit")}
                  className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all self-start"
                >
                  Read case study <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* PROJECT 2 — UI/UX Gallery bento */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-primary tracking-widest">02 — UI/UX SHOWCASE</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight">Figma design gallery</h3>
              </div>
              <button
                onClick={open("ui-design")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
              >
                View all <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => setActive("ui-design")}
              onKeyDown={cardKeyDown("ui-design")}
              className="grid grid-cols-6 grid-rows-2 gap-4 h-[560px] cursor-pointer"
            >
              <BentoTile
                className="col-span-4 row-span-2"
                image={uiGallery}
                tag="Mobile app"
                title="Wellness tracker — 12 screens"
              />
              <BentoTile
                className="col-span-2 row-span-1"
                tag="Dashboard"
                title="Analytics suite"
                solid
              />
              <BentoTile
                className="col-span-2 row-span-1"
                tag="Web UI"
                title="SaaS landing concept"
              />
            </div>
          </motion.article>

          {/* PROJECT 3 — Frontend */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            role="button"
            tabIndex={0}
            onClick={() => setActive("frontend")}
            onKeyDown={cardKeyDown("frontend")}
            className="group glass rounded-3xl overflow-hidden shadow-elegant cursor-pointer hover:border-primary/40 transition-all"
          >
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col order-2 lg:order-1">
                <div className="text-xs font-mono text-primary tracking-widest">03 — FRONTEND</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  Production React product site
                </h3>
                <p className="mt-3 text-muted-foreground">
                  A fully responsive marketing site built with React, Tailwind, and Framer Motion.
                  Optimized for performance, accessibility, and SEO.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind v4", "Framer Motion", "Vite"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full glass text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {[
                    "Lighthouse 98+ on all metrics",
                    "Fully responsive device support",
                    "Animated, accessible UI components",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <button
                    onClick={open("frontend")}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-medium px-5 py-2.5 hover:scale-[1.02] transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live demo
                  </button>
                  <button
                    onClick={open("frontend")}
                    className="inline-flex items-center gap-2 rounded-full glass text-sm font-medium px-5 py-2.5 hover:bg-card transition"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 relative order-1 lg:order-2 bg-muted/30 overflow-hidden">
                <img
                  src={frontend}
                  alt="Frontend project shown on laptop and phone mockups"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      <ProjectModal projectId={active} onClose={() => setActive(null)} />
    </section>
  );
}

function BentoTile({
  className = "",
  image,
  tag,
  title,
  solid,
}: {
  className?: string;
  image?: string;
  tag: string;
  title: string;
  solid?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden glass shadow-card hover:border-primary/40 transition-all ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      ) : (
        <div
          className={`absolute inset-0 ${
            solid ? "bg-gradient-accent" : "bg-gradient-to-br from-card to-secondary"
          }`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-6">
        <span className="text-[10px] uppercase tracking-widest text-primary mb-2">{tag}</span>
        <div className="font-semibold text-lg">{title}</div>
      </div>
    </div>
  );
}
