"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/shared/BrandLogo";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LEFT: LOGO */}
        <BrandLogo href="/" />

        {/* CENTER: NAV + CTA */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          {/* 🔥 Know Your Path CTA (NO DUPLICATION, NO ABSOLUTE) */}
          <Link
            href="/k-y-p"
            className="group relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition hover:shadow-md"
          >
            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500"></span>
            </span>Know Your Path
          </Link>
        </nav>
        
        {/* RIGHT: ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          <Link href="http://localhost:3000/auth/login">
            <Button className="rounded-full" variant="ghost" size="sm">
              Login
            </Button>
          </Link>

          <Link href="http://localhost:3000">
            <Button className="bg-[#de7300] rounded-full" variant="accent" size="sm">
              Get started
            </Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex lg:hidden rounded-xl border border-border bg-card p-2"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-border bg-card/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">

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

            {/* MOBILE CTA */}
            <Link
              href="/k-y-p"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#024293] to-[#de7300] px-3 py-2 text-center text-sm font-semibold text-white"
            >
              ✨ Know Your Path
            </Link>

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