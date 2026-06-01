"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  href = "/",
  size = "md",
  subtitle = "Learn • Build • Grow",
  className,
}: {
  href?: string;
  size?: "sm" | "md";
  subtitle?: string;
  className?: string;
}) {
  const compact = size === "sm";

  return (
    <Link href={href} className={cn("flex items-center gap-3", className)}>
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/msu-logo.svg"
            alt="Logo"
            width={170}
            height={50}
            className="block dark:hidden"
          />
          <Image
            src="/msu-logo-white.svg"
            alt="Logo"
            width={170}
            height={50}
            className="hidden dark:block"
          />
          </Link>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </Link>
  );
}
