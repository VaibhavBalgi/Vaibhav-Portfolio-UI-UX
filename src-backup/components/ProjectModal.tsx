import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import uxAudit from "@/assets/project-ux-audit.jpg";
import uiGallery from "@/assets/project-ui-gallery.jpg";
import frontend from "@/assets/project-frontend.jpg";

export type ProjectId = "ux-audit" | "ui-design" | "frontend";

export function ProjectModal({
  projectId,
  onClose,
}: {
  projectId: ProjectId | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!projectId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [projectId, onClose]);

  return (
    <AnimatePresence>
      {projectId && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="fixed inset-0 bg-background/85 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-6xl my-0 sm:my-8 rounded-none sm:rounded-3xl glass shadow-elegant overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card transition"
            >
              <X className="w-5 h-5" />
            </button>

            {projectId === "ux-audit" && <UxAuditContent />}
            {projectId === "ui-design" && <UiDesignContent />}
            {projectId === "frontend" && <FrontendContent />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalHeader({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="relative">
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="px-6 sm:px-10 -mt-20 relative">
        <div className="text-xs font-mono text-primary tracking-widest">{eyebrow}</div>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold leading-tight max-w-3xl">{title}</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* ---------------- UX AUDIT ---------------- */
function UxAuditContent() {
  return (
    <div className="pb-12">
      <ModalHeader
        eyebrow="CASE STUDY — UX AUDIT"
        title="Fintech dashboard heuristic review"
        description="A complete audit of a fintech dashboard's onboarding and transaction flows, scored against Nielsen's heuristics and WCAG 2.1."
        image={uxAudit}
        alt="UX audit overview"
      />

      <div className="px-6 sm:px-10 mt-12 grid sm:grid-cols-4 gap-4">
        {[
          ["+38%", "Task success"],
          ["−42%", "Time on task"],
          ["AA", "WCAG level"],
          ["12", "Heuristics fixed"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-muted/40 p-5 border border-border">
            <div className="text-2xl font-bold text-gradient-accent">{n}</div>
            <div className="text-xs text-muted-foreground mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-10 mt-14 space-y-12">
        <Section title="Before vs after">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Before", tone: "muted" },
              { label: "After", tone: "accent" },
            ].map((v) => (
              <div
                key={v.label}
                className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-card"
              >
                <div
                  className={`absolute inset-0 ${
                    v.tone === "accent"
                      ? "bg-gradient-accent opacity-90"
                      : "bg-gradient-to-br from-secondary to-card"
                  }`}
                />
                <div className="relative h-full p-6 flex flex-col">
                  <div className="text-[10px] font-mono tracking-widest uppercase opacity-80">
                    {v.label}
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="h-2 w-1/3 rounded-full bg-foreground/30" />
                    <div className="h-2 w-2/3 rounded-full bg-foreground/20" />
                    <div className="h-2 w-1/2 rounded-full bg-foreground/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key findings">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Unclear primary CTA on the transactions screen",
              "Inconsistent iconography across navigation",
              "Low contrast on critical numerical data (3.1:1)",
              "No visible system status during transfers",
              "Form validation appears only after submit",
              "Modal traps focus but doesn't return it on close",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-2xl bg-muted/30 p-4 border border-border"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground/85">{t}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Accessibility improvements">
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Raised text contrast to AA across data tables",
              "Added visible focus states on all interactive elements",
              "Introduced ARIA live regions for transfer status",
              "Reworked color-only error states with iconography",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 text-sm rounded-2xl glass p-4"
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Redesign rationale">
          <div className="rounded-2xl glass p-6 text-sm text-foreground/85 leading-relaxed max-w-3xl">
            Simplified the dashboard hierarchy around a single primary task — moving money — and pushed
            secondary actions into contextual menus. New micro-interactions confirm progress, and a
            consistent type scale brings calm to dense data.
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ---------------- UI DESIGN ---------------- */
function UiDesignContent() {
  return (
    <div className="pb-12">
      <ModalHeader
        eyebrow="CASE STUDY — UI/UX DESIGN"
        title="Wellness tracker — design system & screens"
        description="A modular mobile design system covering 12 screens, motion specs, and a reusable component library in Figma."
        image={uiGallery}
        alt="UI design gallery"
      />

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Screens">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-border aspect-[9/16] bg-gradient-to-br from-card to-secondary"
              >
                <div className="absolute inset-3 rounded-xl bg-background/60 p-3 flex flex-col gap-2">
                  <div className="h-2 w-1/2 rounded-full bg-foreground/30" />
                  <div className="h-16 rounded-lg bg-gradient-accent opacity-70" />
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-foreground/15" />
                    <div className="h-1.5 w-3/4 rounded-full bg-foreground/15" />
                    <div className="h-1.5 w-2/3 rounded-full bg-foreground/15" />
                  </div>
                  <div className="mt-auto flex gap-1.5">
                    <div className="h-6 flex-1 rounded-md bg-primary/80" />
                    <div className="h-6 flex-1 rounded-md bg-foreground/10" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-muted-foreground">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Color & typography">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl glass p-6">
              <div className="text-xs text-muted-foreground mb-4">Palette</div>
              <div className="grid grid-cols-5 gap-2">
                {[
                  "bg-primary",
                  "bg-gradient-accent",
                  "bg-card",
                  "bg-secondary",
                  "bg-muted",
                ].map((c) => (
                  <div key={c} className={`aspect-square rounded-xl ${c} border border-border`} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl glass p-6">
              <div className="text-xs text-muted-foreground mb-4">Type scale</div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">Display / 32</div>
                <div className="text-xl font-semibold">Heading / 20</div>
                <div className="text-base">Body / 16</div>
                <div className="text-xs text-muted-foreground">Caption / 12</div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Components">
          <div className="grid sm:grid-cols-3 gap-3">
            {["Buttons", "Inputs", "Cards", "Tabs", "Modals", "Charts"].map((c) => (
              <div
                key={c}
                className="rounded-2xl glass p-5 flex items-center justify-between hover:border-primary/40 transition"
              >
                <span className="text-sm">{c}</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ---------------- FRONTEND ---------------- */
function FrontendContent() {
  return (
    <div className="pb-12">
      <ModalHeader
        eyebrow="CASE STUDY — FRONTEND"
        title="Production React product site"
        description="A fully responsive marketing site built with React, TypeScript, Tailwind v4, and Framer Motion — optimized for performance and accessibility."
        image={frontend}
        alt="Frontend project"
      />

      <div className="px-6 sm:px-10 mt-8 flex flex-wrap gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-medium px-5 py-2.5 hover:scale-[1.02] transition"
        >
          <ExternalLink className="w-4 h-4" /> Live demo
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full glass text-sm font-medium px-5 py-2.5 hover:bg-card transition"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Responsive previews">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <DevicePreview label="Desktop" ratio="aspect-[16/10]" />
            <DevicePreview label="Tablet" ratio="aspect-[3/4]" />
            <DevicePreview label="Mobile" ratio="aspect-[9/16]" />
          </div>
        </Section>

        <Section title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {[
              "React 19",
              "TypeScript",
              "Tailwind v4",
              "Framer Motion",
              "Vite 7",
              "TanStack Router",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Feature highlights">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["98+", "Lighthouse score across all metrics"],
              ["A11y", "Keyboard-navigable & screen-reader tested"],
              ["SSR", "Server-rendered routes with edge deploy"],
              ["Motion", "Reduced-motion aware Framer animations"],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl glass p-5">
                <div className="text-2xl font-bold text-gradient-accent">{n}</div>
                <div className="text-sm text-foreground/80 mt-1">{t}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function DevicePreview({ label, ratio }: { label: string; ratio: string }) {
  return (
    <div>
      <div
        className={`relative rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-card to-secondary ${ratio}`}
      >
        <div className="absolute inset-3 rounded-xl bg-background/60 p-3 flex flex-col gap-2">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
          </div>
          <div className="h-16 rounded-lg bg-gradient-accent opacity-80" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/15" />
            <div className="h-1.5 w-1/2 rounded-full bg-foreground/15" />
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            <div className="h-8 rounded-md bg-foreground/10" />
            <div className="h-8 rounded-md bg-foreground/10" />
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-muted-foreground font-mono">{label}</div>
    </div>
  );
}
