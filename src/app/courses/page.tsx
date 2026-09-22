import { Metadata } from "next";
import CoursesExplorer from "./CoursesExplorer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Courses | MooreSkillUp",
  description: "Structured career paths in web development, cloud, AI, design, and more.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <main className="flex-1 bg-slate-100 text-foreground py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Find Your Career Path
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Structured, career-focused paths mapped to what the tech industry actually hires for.
          </p>
        </div>

        <CoursesExplorer />
      </section>
    </main>
  );
}
