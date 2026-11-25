import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Blac.
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Full-stack developer and designer. I build products, design systems, and the
              quiet moments between them.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Pages</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/works" className="text-sm text-muted-foreground hover:text-foreground">Works</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-2 flex gap-4">
              <li><a href="#" className="text-muted-foreground hover:text-foreground"><Mail size={18} /></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground"><Github size={18} /></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">© 2026 Blac. All rights reserved.</p>
      </div>
    </footer>
  );
}
