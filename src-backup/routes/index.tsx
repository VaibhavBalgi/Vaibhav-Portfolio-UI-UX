import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vaibhav — UI/UX Designer & Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Vaibhav, a UI/UX designer and frontend developer crafting intuitive interfaces and shipping fast, modern web experiences.",
      },
      { property: "og:title", content: "Vaibhav — UI/UX Designer & Frontend Developer" },
      {
        property: "og:description",
        content: "Designing intuitive interfaces and turning them into functional digital experiences.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
