"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
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

const heroImages = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    id: 1,
    quote:
      "MooreSkillUp has truly transformed my career. The courses are clear, focused, and easy to follow. I finished faster than expected.",
    author: "MaryJane Eduputa",
    role: "Python Programmer",
    avatar: "ME",
  },
  {
    id: 2,
    quote:
      "The content is rich and practical. I learned new skills that I could apply immediately in real work projects.",
    author: "Donatus",
    role: "Product Designer",
    avatar: "D",
  },
  {
    id: 3,
    quote:
      "I joined MooreSkillUp for the flexible schedule and the expert instructors. The experience exceeded my expectations.",
    author: "Emeka Victor",
    role: "Fullstack Developer",
    avatar: "EV",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  🚀 Build Skills. Follow Paths. Get Hired.
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Learn Smarter.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#024293] to-[#de7300]">
                    Follow Your Path.
                  </span>
                </h1>

                <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                  MooreSkillUp is not just a course platform — it’s a guided learning system that helps you
                  discover your path in tech, design, cloud, AI, and more.
                </p>
              </motion.div>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link href="/courses">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base">
                    Explore Courses
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 h-14 text-base border-[#de7300] text-[#de7300] hover:bg-[#de7300] hover:text-white"
                  >
                    Contant Us
                  </Button>
                </Link>
              </motion.div>

              {/* MINI VALUE POINTS */}
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground pt-4">
                <div>✔ Structured learning paths</div>
                <div>✔ Beginner → Advanced roadmap</div>
                <div>✔ Real-world projects</div>
                <div>✔ Career-focused skills</div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl">

                <Image
                  src="/images/people-with-laptop.jpg"
                  alt="Students learning on MooreSkillUp"
                  width={1000}
                  height={1000}
                  className="h-[520px] w-full object-cover"
                />

                {/* overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#024293]/20 to-[#de7300]/10" />
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-card border border-border px-4 py-3 shadow-lg text-sm">
                🎯 Start from your personalized path
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                New Learner Guide
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight">
                Not Sure Where to Start?
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                MooreSkillUp offers multiple career paths including Web Development,
                Artificial Intelligence, Cloud Computing, Cybersecurity, Data,
                DevOps, Mobile Development, Design, Software Engineering, and more.
              </p>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                If you're unsure which path matches your interests and goals,
                watch our Know Your Path guide. We'll show you how each learning
                path works, the skills you'll learn, and how to choose the best
                direction for your future.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/k-y-p">
                  <Button size="lg">
                    Watch Know Your Path
                  </Button>
                </Link>

                <Link href="/courses">
                  <Button variant="outline" size="lg">
                    Explore Paths
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold">1. Watch the Guide</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn how MooreSkillUp learning paths work.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold">2. Choose a Career Path</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Select a category that matches your interests.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold">3. Pick a Learning Branch</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Follow a structured roadmap from beginner to advanced.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                  <h3 className="font-semibold">4. Build Real Skills</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete courses, projects, and milestones as you grow.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="py-24 relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              A Smarter Way to Learn
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Instead of random courses, MooreSkillUp guides you through structured learning paths designed for real career outcomes.
            </p>
          </div>

          {/* CORE IDEA GRID */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl">🧭</div>
              <h3 className="mt-4 text-xl font-semibold">Choose Your Path</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Web Dev, AI, Cloud, Design, Cybersecurity and more — pick a direction based on your goals.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl">📚</div>
              <h3 className="mt-4 text-xl font-semibold">Follow Structured Learning</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Every path is broken into beginner → intermediate → advanced steps so you never feel lost.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-4 text-xl font-semibold">Build Real Skills</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Learn by building projects that prepare you for internships, jobs, and freelance work.
              </p>
            </div>
          </div>

          {/* CTA STRIP */}
          <div className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-[#024293] to-[#de7300] p-10 text-white text-center shadow-xl">

            <h3 className="text-3xl font-bold">
              Not sure where to start?
            </h3>

            <p className="mt-3 text-white/80">
              Let the system guide you step-by-step based on your interests.
            </p>

            <div className="mt-6">
              <a
                href="/k-y-p"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:scale-105 transition"
              >
                ✨ Discover Your Path
              </a>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Explore Course Categories</p> */}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">Course Categories</h2>
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
                  className="group overflow-hidden rounded-[2rem] border border-border dark:border-none bg-white dark:bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg"
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
              {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Most Popular Courses</p> */}
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">Courses Available</h2>
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
                  className="group overflow-hidden rounded-[2rem] bg-white dark:bg-card transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url(${coverImages[index % coverImages.length]})` }}
                  />
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                      {/* <span className="rounded-full bg-muted px-3 py-1">{course.level}</span>
                      <span className="font-semibold text-foreground">{course.rating.toFixed(1)} ★</span> */}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{course.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                      {/* <span>{course.learners}+ learners</span>
                      <span className="font-semibold text-foreground">{coursePrice}</span> */}
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
            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What learners are saying</p> */}
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground">What Learners Saying About MooreSkillUp</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-[2rem] border border-border dark:border-none bg-white dark:bg-card p-8">
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
          <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr]">
            {/* Left Content */}
            <div className="sticky top-24 h-fit">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                FAQ
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Questions?
                <br />
                We've got answers.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
                Everything you need to know about enrollment, certificates,
                learning paths, course access, and your future with MooreSkillUp.
              </p>

              <a
                href="/faq"
                className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                View all FAQs
              </a>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-4">
              {faqItems.slice(0, 5).map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-3xl border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>

                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45 text-primary" />
                  </summary>

                  <p className="mt-4 border-t pt-4 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
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
                {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ready to get started?</p> */}
                <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">Take the first step, start learning today!</h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
                  Access premium courses, expert instructors, and career-aligned learning paths designed to help you succeed.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/auth/register"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white dark:bg-slate-100/95 px-8 py-4 text-center font-semibold text-black transition hover:bg-slate-100 dark:hover:bg-slate-200/95 sm:w-auto"
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
