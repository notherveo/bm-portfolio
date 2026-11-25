import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
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
            <span className="font-medium text-foreground">Contact</span>
          </div>
          <div className="mt-6">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Get in touch</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Have a project or question? I'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="rounded-2xl p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground">Name</label>
                      <input type="text" className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground">Email</label>
                      <input type="email" className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground">Message</label>
                    <textarea rows={5} className="mt-1 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" placeholder="Tell me about your project..." />
                  </div>
                  <Button size="lg" className="mt-2" asChild>
                    <Link href="/">
                      Send message <ArrowRight size={16} />
                    </Link>
                  </Button>
                </form>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="rounded-2xl p-6">
                <h2 className="text-lg font-semibold tracking-tight">Contact info</h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    hello@blac.example
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    Available for freelance
                  </div>
                </div>
              </Card>
              <Card className="rounded-2xl p-6">
                <h2 className="text-lg font-semibold tracking-tight">Social</h2>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground"><Mail size={18} /></a>
                  <a href="#" className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground"><Sparkles size={18} /></a>
                  <a href="#" className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground"><MapPin size={18} /></a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
