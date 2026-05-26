import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeader } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch("https://formsubmit.co/ajax/vaibhavbalgi3456@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something good."
          description="Interested in collaborating or connecting? Feel free to reach out."
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
              { Icon: Mail, label: "Email", value: "vaibhavbalgi3456@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavbalgi3456@gmail.com" },
              { Icon: MessageCircle, label: "WhatsApp", value: "+91 7829247724", href: "https://wa.me/917829247724" },
              { Icon: Linkedin, label: "LinkedIn", value: "Vaibhav Balgi", href: "https://www.linkedin.com/in/vaibhav-balgi" },
              { Icon: Github, label: "GitHub", value: "@VaibhavBalgi", href: "https://github.com/VaibhavBalgi" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
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
