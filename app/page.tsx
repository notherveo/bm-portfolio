import Link from "next/link";
import { ArrowRight, Layers, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles size={13} className="mr-1" /> Now accepting new projects
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Hi, I'm Blac.
            <br />
            <span className="text-muted-foreground">I build things for the web.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            A full-stack developer and designer based in San Francisco. I turn
            good ideas into clean, fast products — from the first sketch to the
            last deployed line.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/contact">
                Let's work together <ArrowRight size={17} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/works">View my work</Link>
            </Button>
          </div>
        </section>

        {/* Featured work */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Featured work</h2>
              <p className="mt-1 text-sm text-muted-foreground">A few projects I'm proud of.</p>
            </div>
            <Link href="/works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Fintech dashboard", icon: Layers, desc: "A clean data experience for a payments product." },
              { title: "Design system", icon: Palette, desc: "Tokens, components, and a consistent way to build." },
              { title: "E-commerce app", icon: Sparkles, desc: "Fast checkout, smart recommendations, and a happy customer." },
            ].map((p, i) => (
              <Link key={i} href="/works" className="group block rounded-2xl border p-6 transition hover:bg-accent">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Services / what I do */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: Layers, title: "Full-stack development", desc: "React, Next.js, Node, and clean, maintainable code." },
                { icon: Palette, title: "UI & design systems", desc: "Design languages, accessible components, and consistent interactions." },
                { icon: Sparkles, title: "Product & automation", desc: "Small products, integrations, and workflows that do the heavy lifting." },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border p-6">
                  <p className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground"><s.icon size={20} /></p>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            I'd love to hear about it. Drop me a line and let's see if we're a good fit.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in touch <ArrowRight size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
