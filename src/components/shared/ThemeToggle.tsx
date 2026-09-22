"use client";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
export function ThemeToggle({
  className,
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  const { theme, toggle } = useTheme();

  if (iconOnly) {
    return (
      <button
        onClick={toggle}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground",
          className,
        )}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <SunMedium className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/40 hover:bg-card",
        className,
      )}
      aria-label="Toggle theme"
    >
      {" "}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
        {" "}
        {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}{" "}
      </span>{" "}
      {theme === "dark" ? "Light" : "Dark"}{" "}
    </button>
  );
}
