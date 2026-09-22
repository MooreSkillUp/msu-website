import { Metadata } from "next";
import { PiPlayDuotone as PlayIcon } from "react-icons/pi";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Know Your Path | MooreSkillUp",
  description:
    "Find your ideal learning path and the skills you need to land a real tech career.",
  path: "/k-y-p",
});

export default function KnowYourPathPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Know Your Path
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Not sure which path fits you? This guide breaks down the career
              options, the skills each one actually needs, and how to start
              building toward it today.
            </p>
          </div>

          {/* <a
            href="https://www.youtube.com/@MSU-Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 font-medium transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <PlayIcon className="h-5 w-5" />
            <span>Subscribe to Our Channel</span>
          </a> */}
          <a
            href="https://www.youtube.com/@MSU-Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl animate-pulse"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <PlayIcon className="h-5 w-5" />
            </div>

            <span>Subscribe to Our Channel</span>

            <span className="rounded-full bg-white px-2 py-1 text-xs font-bold text-red-600">
              NEW
            </span>
          </a>
        </div>

        {/* Featured Video */}
        <div className="mx-auto w-full rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold">
              Watch: Know Your Path
            </h2>

            <p className="mt-2 text-muted-foreground">
              A quick watch that shows you how MooreSkillUp works and helps
              you pick the path that actually fits.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/7AF1cWP-qMs"
                title="Know Your Path"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-6">
          <h3 className="font-display text-xl font-semibold">
            Why Knowing Your Path Matters
          </h3>

          <p className="mt-3 text-muted-foreground">
            Most students stall out because they don't have a clear direction.
            Once you know your path, you know exactly which skills to focus
            on and stop wasting time on the wrong ones.
          </p>
        </div>
      </section>
    </main>
  );
}