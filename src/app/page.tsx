"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/Button";
import { academyPrograms, courses, faqItems } from "@/lib/mock-data";

const companyLogos = [
  "blueenergy",
  "chekpeople",
  "cleanhose",
  "copower",
  "happypower",
  "newcloud",
  "beehouse",
  "bludiamond",
];

const heroHighlights = [
  { label: "Courses", value: "320+" },
  { label: "Students", value: "100k+" },
  { label: "Instructors", value: "40+" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    id: 1,
    quote:
      "BrightMind has truly transformed my career. The courses are clear, focused, and easy to follow. I finished faster than expected.",
    author: "Kathryn Murphy",
    role: "UX Designer",
    avatar: "KM",
  },
  {
    id: 2,
    quote:
      "The content is rich and practical. I learned new skills that I could apply immediately in real work projects.",
    author: "Bessie Cooper",
    role: "Product Designer",
    avatar: "BC",
  },
  {
    id: 3,
    quote:
      "I joined BrightMind for the flexible schedule and the expert instructors. The experience exceeded my expectations.",
    author: "Eleanor Pena",
    role: "Frontend Developer",
    avatar: "EP",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-40" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="space-y-6"
              >
                <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">Learn and Grow with Top Online Courses</h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Discover top online courses designed to help you build skills, advance your career, and learn at your own pace.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/courses">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base">
                    Explore Courses
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white dark:bg-card shadow-lg">
                <img
                  src={heroImages[0]}
                  alt="Student working on laptop"
                  className="h-[520px] w-full object-cover"
                />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Explore Course Categories</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">Explore Course Categories</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#de7300]">
              View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {academyPrograms.slice(0, 4).map((program, index) => {
              const bgColors = ["bg-sky-50", "bg-emerald-50", "bg-amber-50", "bg-violet-50"];
              const darkBgColors = ["dark:bg-sky-900", "dark:bg-emerald-900", "dark:bg-amber-900", "dark:bg-violet-900"];
              const textColors = ["text-sky-700", "text-emerald-700", "text-amber-700", "text-violet-700"];
              return (
                <Link
                  href="/courses"
                  key={program.id}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-white dark:bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${bgColors[index % bgColors.length]} ${darkBgColors[index % darkBgColors.length]} ${textColors[index % textColors.length]} text-xl font-semibold`}>
                    {program.iconLabel}</div>
                  <h3 className="mt-8 text-2xl font-semibold text-foreground">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{program.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore tracks <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Most Popular Courses</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">Popular Courses</h2>
            </div>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#de7300]">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 6).map((course, index) => {
              const coverImages = [
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
              ];
              const coursePrice = course.access === "free" ? "Free" : "$29.99";
              return (
                <Link
                  href="/courses"
                  key={course.id}
                  className="group overflow-hidden rounded-[2rem] border border-border bg-white dark:bg-card transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url(${coverImages[index % coverImages.length]})` }}
                  />
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="rounded-full bg-muted px-3 py-1">{course.level}</span>
                      <span className="font-semibold text-foreground">{course.rating.toFixed(1)} ★</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{course.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                      <span>{course.learners}+ learners</span>
                      <span className="font-semibold text-foreground">{coursePrice}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What learners are saying</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">What Learners Saying About BrightMind</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-[2rem] border border-border bg-white dark:bg-card p-8">
                <p className="text-lg leading-8 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Frequently Asked Questions</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Answers to the most common questions about the BrightMind learning experience.
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.slice(0, 5).map((faq, index) => (
                <div key={index} className="flex items-center justify-between gap-4 rounded-[2rem] border border-border bg-muted p-6">
                  <div>
                    <p className="font-semibold text-foreground">{faq.question}</p>
                  </div>
                  <Plus className="h-5 w-5 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] bg-gradient-to-br from-[#024293] to-[#FC6202] text-white p-12 shadow-2xl lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ready to get started?</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Take the first step, start learning today!</h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
                  Access premium courses, expert instructors, and career-aligned learning paths designed to help you succeed.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/auth/register"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white dark:bg-slate-100/95 px-8 py-4 text-center font-semibold text-black shadow-lg shadow-white/20 transition hover:bg-slate-100 dark:hover:bg-slate-200/95 sm:w-auto"
                >
                  Join Now
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/20 sm:w-auto"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
