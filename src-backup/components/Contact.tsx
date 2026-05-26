import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeader } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something good."
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              { Icon: Mail, label: "Email", value: "hello@vaibhav.design", href: "mailto:hello@vaibhav.design" },
              { Icon: Linkedin, label: "LinkedIn", value: "/in/vaibhav", href: "https://linkedin.com" },
              { Icon: Github, label: "GitHub", value: "@vaibhav", href: "https://github.com" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 glass rounded-2xl p-5 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              India · Working worldwide
            </div>
          </motion.div>

          <motion.form
            onSubmit={handle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass rounded-3xl p-8 shadow-elegant space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's it about?" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full rounded-2xl bg-muted/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground font-medium px-7 py-3 glow-primary hover:scale-[1.02] transition"
            >
              {sent ? "Message sent ✓" : "Send message"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Vaibhav. Designed & built with care.</div>
        <div>Crafted in Figma, shipped with React.</div>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl bg-muted/40 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
