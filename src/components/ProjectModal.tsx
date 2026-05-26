import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Info } from "lucide-react";
import { useEffect } from "react";
import uxAudit from "@/assets/project-ux-audit.jpg";
import uiGallery from "@/assets/project-ui-gallery.jpg";
import frontend from "@/assets/project-frontend.jpg";

export type ProjectId = "ux-audit" | "ui-design" | "frontend" | "portfolio-design" | "landing-page-practice";

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
            {projectId === "portfolio-design" && <PortfolioDesignContent />}
            {projectId === "landing-page-practice" && <LandingPagePracticeContent />}
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
      <div className="relative w-full overflow-hidden max-h-[70vh]">
        <img src={image} alt={alt} className="w-full h-auto object-contain object-top block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      <div className="px-6 sm:px-10 -mt-20 relative z-10">
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
        title="E-Commerce UX Audit — Flipkart"
        description="A comprehensive UX audit of Flipkart's product page and checkout flow, focusing on reducing friction, improving clarity, and optimizing for higher conversion rates."
        image="/UX audit/Before.png.png"
        alt="UX audit overview"
      />

      <div className="px-6 sm:px-10 mt-12 grid sm:grid-cols-4 gap-4">
        {[
          ["High", "Cognitive Load"],
          ["Poor", "Visual Hierarchy"],
          ["Friction", "In Checkout"],
          ["Cluttered", "Product Page"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-muted/40 p-5 border border-border">
            <div className="text-xl sm:text-2xl font-bold text-gradient-accent">{n}</div>
            <div className="text-xs text-muted-foreground mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-10 mt-14 space-y-12">
        <Section title="Before vs after">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Before (Original)", image: "/UX audit/Before.png" },
              { label: "After (Redesign)", image: "/UX audit/After.png" },
            ].map((v) => (
              <div
                key={v.label}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card"
              >
                <img 
                  src={v.image} 
                  alt={v.label} 
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono tracking-widest uppercase shadow-sm font-semibold">
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Issues Observed">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-muted/30 p-5 border border-border">
              <h4 className="font-semibold mb-3 text-primary">Product Page Issues</h4>
              <ul className="space-y-2 text-sm text-foreground/85">
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Excessive information causing clutter</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Weak visibility of "Buy Now" button</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Important details not highlighted properly</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Poor content organization</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-muted/30 p-5 border border-border">
              <h4 className="font-semibold mb-3 text-primary">Checkout Flow Issues</h4>
              <ul className="space-y-2 text-sm text-foreground/85">
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Login required at early stage</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Multiple steps in checkout</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Long address form</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />No progress indicator</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Conclusion & Recommendations">
          <div className="rounded-2xl glass p-6 text-sm text-foreground/85 leading-relaxed max-w-3xl">
            <p className="mb-4">
              The original UX design introduced significant friction and reduced efficiency throughout the user journey. The high cognitive load and poor visual hierarchy on the product page made it difficult for users to focus on primary actions.
            </p>
            <p>
              By improving visual clarity, simplifying the layout, and optimizing the checkout flow (removing early login barriers and showing clear progress), we can significantly enhance the user experience and ultimately increase conversion rates.
            </p>
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
        title="Food Delivery App — UI Design & Screens"
        description="A complete mobile food delivery experience covering 20 screens, including food discovery, restaurant selection, user profiles, and a seamless checkout flow."
        image="/Designs/D1/Main.png"
        alt="UI design gallery"
      />

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Screens">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Splash screen.png",
              "Login screen.png",
              "Login Scrren 2.png",
              "home.png",
              "product 1.png",
              "product 1.1.png",
              "product 1.2.png",
              "product 2.png",
              "product 2.1.png",
              "product 2.2.png",
              "product 3.png",
              "product 4.png",
              "product 4.1.png",
              "product 4.2.png",
              "product 5.png",
              "product 6.png",
              "Payment.png",
              "Delivered.png",
              "Pop up message.png",
              "User alarm.png",
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-border aspect-[9/16] bg-card flex items-center justify-center group"
              >
                <img
                  src={`/Designs/D1/${img}`}
                  alt={`Design screen ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 text-[9px] font-mono text-white mix-blend-difference drop-shadow-md">
                  {i < 9 ? `0${i + 1}` : i + 1}
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
                  "bg-[#421736]",
                  "bg-[#6B285A]",
                  "bg-[#F5F5F5]",
                  "bg-[#E0E0E0]",
                  "bg-[#FFFFFF]",
                ].map((c) => (
                  <div key={c} className={`aspect-square rounded-xl ${c} border border-border`} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl glass p-6">
              <div className="text-xs text-muted-foreground mb-4">Type scale</div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">Header 1 / 24</div>
                <div className="text-xl font-semibold">Header 2 / 20</div>
                <div className="text-base">Body / 16</div>
                <div className="text-xs text-muted-foreground">Caption / 12</div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Components">
          <div className="grid sm:grid-cols-3 gap-3">
            {["Food Item Cards", "Navigation Bar", "Checkout Flow", "Buttons", "Inputs", "Modals"].map((c) => (
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
        eyebrow="CASE STUDY — FINTECH PLATFORM"
        title="Payzen"
        description="A fully responsive, modern financial landing page and visual transaction tracker designed and generated using Lovable, featuring frictionless currency metrics and elegant visual layouts."
        image={frontend}
        alt="Payzen fintech showcase"
      />

      <div className="px-6 sm:px-10 mt-8 flex flex-wrap gap-3">
        <a
          href="https://seamlesspayments.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground text-sm font-medium px-5 py-2.5 hover:scale-[1.02] transition"
        >
          View live <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Screens">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "payzen-1.png",
              "payzen-2.png",
              "payzen-3.png",
              "payzen-4.png",
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-border bg-card group aspect-video flex items-center justify-center"
              >
                <img
                  src={`/Designs/D2/${img}`}
                  alt={`Payzen screen ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {[
              "Lovable AI",
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
              ["Fintech Dashboard", "Integrated transaction visualizers and interactive account tables."],
              ["Aesthetic Layout", "Vibrant modern color highlights, dark-theme contrasts, and balanced spacing."],
              ["Form Validations", "Smooth currency converting visual flows and payment confirmation triggers."],
              ["Vite & React", "Clean production bundler with rapid rendering speeds and fluid layouts."],
            ].map(([n, t]) => (
              <div key={t} className="rounded-2xl glass p-5">
                <div className="text-2xl font-bold text-gradient-accent">{n}</div>
                <div className="text-sm text-foreground/80 mt-1">{t}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Prototype Status">
          <div className="rounded-2xl border border-[#E8722A]/20 bg-[#E8722A]/5 p-5 text-sm text-foreground/85 flex gap-3 max-w-3xl">
            <Info className="w-5 h-5 text-[#E8722A] flex-shrink-0 mt-0.5" />
            <div>
              <strong>Practice Prototype Disclaimer:</strong> This frontend application is created purely for layout, interactive flow, and visual UI/UX practice. Since it operates as a static client-side prototype without database connections, certain features (like actual fund transfers, balance transactions, or user authentication) are visual simulations and may exhibit static behaviors. These will be fully functional once integrated with a backend server database.
            </div>
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

/* ---------------- PORTFOLIO DESIGN ---------------- */
function PortfolioDesignContent() {
  return (
    <div className="pb-12">
      <ModalHeader
        eyebrow="CASE STUDY — PORTFOLIO DESIGN"
        title="Portfolio UI Design"
        description="The visual design and layout iterations for my personal portfolio website."
        image="/Designs/D2/m1.png"
        alt="Portfolio Design"
      />

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Screens">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "vaibhav-portfolio-hero.png",
              "vaibhav-portfolio-portfolio.png",
              "vaibhav-portfolio-contact.png",
              "vaibhav-portfolio-hero (1).png",
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-border bg-card group aspect-video flex items-center justify-center"
              >
                <img
                  src={`/Designs/D2/${img}`}
                  alt={`Portfolio screen ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ---------------- LANDING PAGE PRACTICE ---------------- */
function LandingPagePracticeContent() {
  return (
    <div className="pb-12">
      <ModalHeader
        eyebrow="FIGMA LAYOUT PRACTICE — ONBOARDING"
        title="Onboarding Layout & Flow Practice"
        description="A curated series of mobile onboarding screens designed in Figma to practice visual pacing, user welcoming flows, button placement, and card-based structures."
        image="/Practice/Frame 1.png"
        alt="Figma onboarding practice design banner"
      />

      <div className="px-6 sm:px-10 mt-12 space-y-12">
        <Section title="Practice Layouts & Onboarding Screens">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Frame 1.png",
              "Frame 2.png",
              "Frame 3.png",
              "Frame 4.png",
              "Frame 5.png",
              "Frame 6.png",
              "Frame 7.png",
            ].map((img, i) => (
              <div
                key={img}
                className="relative rounded-2xl overflow-hidden border border-border bg-card group shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <img
                  src={`/Practice/${img}`}
                  alt={`Practice Onboarding Screen ${i + 1}`}
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono tracking-widest uppercase shadow-sm font-semibold text-foreground">
                  Frame 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Visual & Learning Focus">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["User Welcome Flows", "Crafting intuitive onboarding sequences that guide users through key app values."],
              ["Visual Spacing", "Refining layout balance, white space, and touch-target sizing for mobile devices."],
              ["Card-Based Structure", "Designing card wrappers, modern border outlines, and overlapping visual elements."],
              ["Action Placements", "Optimizing call-to-actions, pagination indicator dots, and skip-step buttons."]
            ].map(([n, d]) => (
              <div key={n} className="rounded-2xl bg-muted/30 p-5 border border-border">
                <div className="text-lg font-bold text-gradient-accent">{n}</div>
                <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Key Accomplishments">
          <div className="rounded-2xl glass p-6 max-w-3xl border border-border">
            <ul className="space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Figma Layout Practice:</strong> Designed and iterated seven unique onboarding screen templates exploring layout configurations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Onboarding Experience:</strong> Formulated clear visual pacing and user journeys for welcoming users and introducing key app features.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Typography & Hierarchy:</strong> Styled clear headlines, taglines, and active/inactive page indicators to guide user attention.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Component Refinement:</strong> Built and reused UI elements like buttons, cards, and input fields to maintain high design consistency.</span>
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}
