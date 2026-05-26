import { Metadata } from "next";
import CoursesExplorer from "./CoursesExplorer";

export const metadata: Metadata = {
  title: "Courses | MooreSkillUp",
  description: "Explore our categories, tracks, and courses.",
};

export default function CoursesPage() {
  return (
    <main className="flex-1 bg-background text-foreground py-16 transition-colors duration-300">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Explore our Course Catalog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Browse through our structured, career-focused learning paths mapped to modern industry standards.
          </p>
        </div>

        <CoursesExplorer />
      </section>
    </main>
  );
}
