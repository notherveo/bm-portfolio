import Link from "next/link";
import { ArrowLeft, Layers, Palette, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Fintech dashboard",
    category: "Development",
    icon: Layers,
    desc: "A clean data experience for a payments product. Built with Next.js and Tailwind.",
    tags: ["Next.js", "TypeScript", "Chart.js"],
  },
  {
    title: "Design system",
    category: "Design",
    icon: Palette,
    desc: "Tokens, components, and a consistent way to build. Ships with a Storybook catalog.",
    tags: ["Tokens", "Storybook", "Accessibility"],
  },
  {
    title: "E-commerce app",
    category: "Product",
    icon: Sparkles,
    desc: "Fast checkout, smart recommendations, and a happy customer. Full stack implementation.",
    tags: ["React", "Node.js", "Postgres"],
  },
  {
    title: "Developer tooling",
    category: "Development",
    icon: Terminal,
    desc: "CLI utilities and scaffolding for building faster. Written in TypeScript.",
    tags: ["TypeScript", "CLI", "Automation"],
  },
  {
    title: "Marketing site",
    category: "Design",
    icon: Layers,
    desc: "A product page that tells a story. Motion, clear hierarchy, and a single CTA.",
    tags: ["Next.js", "Motion", "Copywriting"],
  },
  {
    title: "Internal analytics",
    category: "Product",
    icon: Terminal,
    desc: "Real-time dashboards for a growing team. Built for speed and clarity.",
    tags: ["React", "WebSockets", "D3"],
  },
];

export default function WorksPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft size={15} /> Back to home
              </Link>
            </Button>
            <span>/</span>
            <span className="font-medium text-foreground">Works</span>
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">My work</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              A collection of projects I've built, designed, or shipped.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 border-b pb-4">
            {["All", "Development", "Design", "Product"].map((c) => (
              <button
                key={c}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  c === "All"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Card key={i} className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 border-b px-5 py-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <p.icon className="size-4" />
                  </span>
                  <span className="text-sm text-muted-foreground">{p.category}</span>
                </div>
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
