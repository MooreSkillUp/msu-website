"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
const links = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/quiz-shop", label: "Quiz Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/75 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/msu-logo.svg"
            alt="Logo"
            width={150}
            height={40}
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">

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
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >

                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">

          <ThemeToggle />
          <Link href="/auth/login">

            <Button variant="ghost" size="sm">

              Login
            </Button>
          </Link>
          <Link href="/auth/register">

            <Button className="bg-[#de7300]" variant="accent" size="sm">

              Get started
            </Button>
          </Link>
        </div>
        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex rounded-xl border border-border bg-card p-2 text-foreground lg:hidden"
          aria-label="Toggle navigation"
        >

          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-card/95 px-4 py-4 lg:hidden">

          <div className="flex flex-col gap-2">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
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
