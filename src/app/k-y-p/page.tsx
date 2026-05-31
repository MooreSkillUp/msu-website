import { Metadata } from "next";
import { PlayIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Know Your Path | MooreSkillUp",
  description:
    "Discover your ideal learning journey and explore the skills needed to achieve your career goals.",
};

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
              Discover the right learning path for your goals. Explore career
              opportunities, understand the skills required, and start building
              a future you can be proud of with MooreSkillUp.
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
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold">
              Watch: Know Your Path
            </h2>

            <p className="mt-2 text-muted-foreground">
              This short video will help you understand how MooreSkillUp works,
              identify your interests, and choose a learning path that matches your
              goals.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/kEaC6nBXwco"
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
            Many learners struggle because they don't have a clear direction.
            Understanding your career path helps you focus on the right skills,
            avoid unnecessary distractions, and make steady progress toward your
            goals.
          </p>
        </div>
      </section>
    </main>
  );
}