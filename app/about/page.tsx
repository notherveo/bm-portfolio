import Link from "next/link";
import { ArrowLeft, Layers, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Frontend", icon: Layers, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Backend", icon: Terminal, items: ["Node.js", "Postgres", "REST", "GraphQL"] },
  { name: "Design", icon: Sparkles, items: ["UI", "Design systems", "Accessibility", "Motion"] },
];

const experience = [
  { role: "Senior Engineer", company: "TechCrunch", period: "2022 — Present" },
  { role: "Product Engineer", company: "Stripe", period: "2019 — 2022" },
  { role: "Full-stack Developer", company: "Figma", period: "2017 — 2019" },
];

export default function AboutPage() {
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
            <span className="font-medium text-foreground">About</span>
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">About me</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              A little about who I am and what I do.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="rounded-2xl p-6">
                <h2 className="text-lg font-semibold tracking-tight">Who I am</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  I'm a full-stack developer and designer based in San Francisco. I enjoy
                  building products that feel good to use — from the first interaction to the
                  last. My background spans frontend, backend, and design, which lets me
                  bridge the gap between what's possible and what's practical.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  San Francisco, CA
                </div>
                <div className="mt-6">
                  <a href="mailto:hello@blac.example" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                    <Mail size={15} /> hello@blac.example
                  </a>
                </div>
              </Card>

              <div className="mt-8">
                <h2 className="text-lg font-semibold tracking-tight mb-4">Experience</h2>
                <div className="space-y-4">
                  {experience.map((e, i) => (
                    <Card key={i} className="rounded-2xl p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{e.role}</h3>
                          <p className="text-sm text-muted-foreground">{e.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{e.period}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="rounded-2xl p-6">
                <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
                <div className="mt-4 space-y-4">
                  {skills.map((s, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2">
                        <p className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground"><s.icon size={16} /></p>
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {s.items.map((t) => (
                          <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="rounded-2xl p-6">
                <h2 className="text-lg font-semibold tracking-tight">Let's connect</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  I'm always open to new opportunities and interesting projects.
                </p>
                <Button size="lg" className="mt-4" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
