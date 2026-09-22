import Link from "next/link";
import { PiArrowRightDuotone as ArrowRight } from "react-icons/pi";
import { cn } from "@/lib/utils";

export interface CtaBannerItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel: string;
  bg: string;
}

interface CtaBannerProps {
  heading: React.ReactNode;
  description: string;
  linkHref: string;
  linkLabel: string;
  linkExternal?: boolean;
  items: CtaBannerItem[];
  className?: string;
}

export function CtaBanner({
  heading,
  description,
  linkHref,
  linkLabel,
  linkExternal,
  items,
  className,
}: CtaBannerProps) {
  const linkClassName =
    "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80";

  return (
    <div className={cn("rounded-3xl bg-[#0c1945] p-8 text-white lg:p-10", className)}>
      <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{heading}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{description}</p>

          {linkExternal ? (
            <a href={linkHref} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <Link href={linkHref} className={linkClassName}>
              {linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {items.map((item) => (
            <div key={item.label} className="overflow-hidden rounded-xl bg-white/10">
              <div className={cn("flex h-20 items-center justify-center", item.bg)}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <div className="p-3">
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-white/60">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
