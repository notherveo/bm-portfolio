import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Blac.
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-foreground">Home</Link>
          <Link href="/works" className="text-sm font-medium hover:text-foreground">Works</Link>
          <Link href="/about" className="text-sm font-medium hover:text-foreground">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-foreground">Contact</Link>
        </div>
        <Button size="sm" asChild>
          <Link href="/contact">Let's talk</Link>
        </Button>
      </nav>
    </header>
  );
}
