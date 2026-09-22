"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Search, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/shared/BrandLogo";

const exploreLinks = [
  { href: "/courses", label: "Courses", desc: "Browse all learning paths" },
  { href: "/k-y-p", label: "Know Your Path", desc: "Not sure where to start?", badge: true },
  { href: "/faq", label: "FAQ", desc: "Common questions, answered" },
  { href: "/contact", label: "Contact", desc: "Talk to the team" },
];

const links = [{ href: "/pricing", label: "Pricing" }];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [query, setQuery] = useState("");
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground hover:bg-muted lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* LOGO */}
        <BrandLogo href="/" className="shrink-0" />

        {/* DESKTOP: EXPLORE + PRICING */}
        <nav className="hidden items-center gap-1 lg:flex">
          <div ref={exploreRef} className="relative">
            <button
              onClick={() => setExploreOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition",
                exploreOpen ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
              )}
            >
              Explore
              <ChevronDown className={cn("h-4 w-4 transition-transform", exploreOpen && "rotate-180")} />
            </button>

            {exploreOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-border bg-card p-2 shadow-xl">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setExploreOpen(false)}
                    className="flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition hover:bg-muted"
                  >
                    <span>
                      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        {link.label}
                        {link.badge && (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground">{link.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP SEARCH BAR */}
        <form onSubmit={handleSearch} className="relative hidden flex-1 max-w-md md:flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to learn?"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        {/* RIGHT: ACTIONS */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Link
            href="/k-y-p"
            title="Know Your Path"
            className="relative hidden h-9 w-9 items-center justify-center rounded-full text-primary transition hover:bg-primary/10 sm:inline-flex"
          >
            <Sparkles className="h-[18px] w-[18px]" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted md:hidden"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <ThemeToggle iconOnly className="hidden lg:inline-flex" />

          <Link href="/auth/login" className="hidden lg:inline-flex">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>

          <Link href="/auth/register">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full whitespace-nowrap border-primary/50 text-primary hover:text-white"
            >
              Join for Free
            </Button>
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-border bg-card/95 px-4 py-4 lg:hidden">
          <form onSubmit={handleSearch} className="relative mb-4 flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to learn?"
              className="w-full rounded-full border border-border bg-background py-2.5 pl-5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="flex flex-col gap-1">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </p>

            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
                {link.badge && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>
                )}
              </Link>
            ))}

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle className="flex-1 justify-center" />

              <Link href="/auth/login" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </Link>

              <Link href="/auth/register" className="flex-1" onClick={() => setOpen(false)}>
                <Button variant="accent" className="w-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
