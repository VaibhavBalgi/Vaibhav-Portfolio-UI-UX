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
          eyebrow="Selected Work"
          title="Selected Work"
          description="A collection of UI/UX explorations, redesign concepts, and frontend projects."
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
                  src="/UX audit/Before.png.png"
                  alt="UX audit dashboard with before and after comparison"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs">
                  Case study
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col">
                <div className="text-xs font-mono text-primary tracking-widest">01 — UX REDESIGN</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  UX Audit & Redesign
                </h3>
                <p className="mt-3 text-muted-foreground">
                  A usability-focused redesign project where I analyzed interface problems, identified UX issues, and proposed cleaner and more accessible design improvements.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["Layout", "Improved layout"],
                    ["Colors", "Better contrast"],
                    ["Clean", "Simplified UI"],
                  ].map(([n, l]) => (
                    <div key={l} className="rounded-2xl bg-muted/50 p-3">
                      <div className="text-lg font-bold text-gradient-accent">{n}</div>
                      <div className="text-[10px] text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {[
                    "Analyzed core user flows",
                    "Proposed accessible design concepts",
                    "Focused on clear visual hierarchy",
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
                <h3 className="mt-3 text-3xl font-bold leading-tight">UI Design Collection</h3>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  A collection of UI concepts and interface designs created in Figma, focused on clean layouts, modern visuals, and user-friendly experiences.
                </p>
              </div>
              <button
                onClick={open("ui-design")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
              >
                View all <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[560px]">
              <BentoTile
                className="col-span-4 row-span-2 cursor-pointer"
                image="/Designs/D1/Main.png"
                tag="Mobile app"
                title="Food Delivery App Concept"
                onClick={() => setActive("ui-design")}
                onKeyDown={cardKeyDown("ui-design")}
              />
              <BentoTile
                className="col-span-2 row-span-1 cursor-pointer"
                tag="Portfolio Design UI"
                title="Portfolio design"
                image="/Designs/D2/m1.png"
                onClick={() => setActive("portfolio-design")}
                onKeyDown={cardKeyDown("portfolio-design")}
              />
              <BentoTile
                className="col-span-2 row-span-1 cursor-pointer"
                tag="Figma Layout"
                title="Onboarding Layout Practice"
                image="/Practice/Frame 1.png"
                onClick={() => setActive("landing-page-practice")}
                onKeyDown={cardKeyDown("landing-page-practice")}
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
                <div className="text-xs font-mono text-primary tracking-widest">03 — FRONTEND DEVELOPMENT</div>
                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  Payzen
                </h3>
                <p className="mt-3 text-muted-foreground">
                  A premium, fully responsive fintech visual platform and dashboard built to prototype frictionless transaction tracking, modern account summaries, and custom financial indicators.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Lovable AI", "React", "TypeScript", "Tailwind v4", "Framer Motion"].map((t) => (
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
                    "Financial layouts designed on Lovable AI",
                    "Fully responsive transaction tables and summaries",
                    "Custom animated payment interaction states",
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
                    View details <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://seamlesspayments.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass text-sm font-medium px-5 py-2.5 hover:bg-card transition"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
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
  onClick,
  onKeyDown,
}: {
  className?: string;
  image?: string;
  tag: string;
  title: string;
  solid?: boolean;
  onClick?: React.MouseEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
}) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
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
