"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PiStarDuotone as Star,
  PiArrowRightDuotone as ArrowRight,
  PiPlusDuotone as Plus,
  PiCheckCircleDuotone as CheckCircle,
  PiCodeDuotone as Code2,
  PiHardDrivesDuotone as Server,
  PiDatabaseDuotone as Database,
  PiPenNibDuotone as PenTool,
  PiCpuDuotone as Cpu,
  PiCloudDuotone as CloudIcon,
  PiChartBarDuotone as ChartBarIcon,
  PiDeviceMobileDuotone as SmartphoneIcon,
} from "react-icons/pi";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/shared/CtaBanner";
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

const heroTracks = [
  { icon: Code2, label: "Web Dev", bg: "bg-[#24437f]" },
  { icon: CloudIcon, label: "Cloud", bg: "bg-[#3a5eaa]" },
  { icon: ChartBarIcon, label: "Data", bg: "bg-[#FC6202]" },
  { icon: SmartphoneIcon, label: "Mobile", bg: "bg-[#0c1945]" },
];

const courseCoverMap: Record<string, { color: string; icon: any; label: string }> = {
  "frontend-react-studio": {
    color: "bg-sky-600",
    icon: Code2,
    label: "Frontend React",
  },
  "backend-python-api-builder": {
    color: "bg-emerald-600",
    icon: Server,
    label: "Python Backend",
  },
  "backend-javascript-service-lab": {
    color: "bg-amber-600",
    icon: Database,
    label: "JavaScript Backend",
  },
  "uiux-figma-product-track": {
    color: "bg-fuchsia-600",
    icon: PenTool,
    label: "UI/UX Design",
  },
  "ai-data-automation-lab": {
    color: "bg-violet-600",
    icon: Cpu,
    label: "AI & Data",
  },
  "engineering-3d-systems": {
    color: "bg-slate-800",
    icon: Star,
    label: "3D Systems",
  },
};

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      
      <section className="relative overflow-hidden bg-[#0c1945]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 py-14 lg:grid-cols-2 lg:gap-0 lg:py-0">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex max-w-xl flex-col justify-center lg:py-24 lg:pr-12"
            >
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Skills that start tech careers.
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Introducing Career Paths: structured, project-based tracks in web
                development, cloud, data, and design built to get you noticed.
              </p>

              {/* CTA BUTTON */}
              <div className="mt-8">
                <Link href="/courses">
                  <Button size="lg" className="h-14 rounded-full bg-[#FC6203] px-8 text-base hover:bg-[#FC6203]/90">
                    Explore All Courses
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex h-64 overflow-hidden sm:h-80 lg:h-auto"
            >
              {/* Category stripe gutter */}
              <div className="hidden shrink-0 lg:flex">
                {heroTracks.map((track) => (
                  <div
                    key={track.label}
                    className={`flex w-14 flex-col items-center gap-2 pt-8 ${track.bg}`}
                  >
                    <track.icon className="h-6 w-6 text-white" />
                  </div>
                ))}
              </div>

              <div className="relative flex-1">
                <Image
                  src="/images/people-with-laptop.jpg"
                  alt="MooreSkillUp learners collaborating on a project"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex gap-2.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {academyPrograms.map((program) => (
              <Link
                key={program.id}
                href={`/courses?path=${program.id}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                {program.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div>
              {/* <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                New Learner Guide
              </div> */}

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

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="space-y-1">
                {[
                  { title: "Watch the Guide", desc: "Learn how MooreSkillUp learning paths work." },
                  { title: "Choose a Career Path", desc: "Select a category that matches your interests." },
                  { title: "Pick a Learning Branch", desc: "Follow a structured roadmap from beginner to advanced." },
                  { title: "Build Real Skills", desc: "Complete courses, projects, and milestones as you grow." },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4 rounded-xl p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
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
            <div className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md">
              <div className="p-8 pb-0">
                <h3 className="text-xl font-semibold">Choose Your Path</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Web Dev, AI, Cloud, Design, Cybersecurity and more. Pick a direction based on your goals.
                </p>
              </div>
              <Image
                src="/feature-image/choose-your-path.png"
                alt="Choose Your Path"
                width={1569}
                height={1635}
                className="mt-4 h-auto px-10 py-10 w-full"
              />
            </div>

            {/* CARD 2 */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md">
              <div className="p-8 pb-0">
                <h3 className="text-xl font-semibold">Follow Structured Learning</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Every path is broken into beginner to intermediate to advanced steps so you never feel lost.
                </p>
              </div>
              <Image
                src="/feature-image/structured-learn.png"
                alt="Follow Structured Learning"
                width={1738}
                height={1558}
                className="mt-4 px-10 py-10 h-auto w-full"
              />
            </div>

            {/* CARD 3 */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md">
              <div className="p-8 pb-0">
                <h3 className="text-xl font-semibold">Build Real Skills</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Learn by building projects that prepare you for internships, jobs, and freelance work.
                </p>
              </div>
              <Image
                src="/feature-image/real-skill.png"
                alt="Build Real Skills"
                width={1838}
                height={1624}
                className="mt-4 px-10 py-10 h-auto w-full"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              {/* <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                Courses
              </span> */}

              <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Learn Skills That Matter
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore practical, industry-focused courses designed to help you
                build real-world skills and accelerate your career.
              </p>
            </div>

            <Link
              href="/courses"
              className="
                inline-flex items-center gap-2
                rounded-full border
                px-6 py-3
                text-sm font-semibold
                transition-all
                hover:border-primary
                hover:text-primary
              "
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Course Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 6).map((course, index) => {
              const coverData =
                courseCoverMap[course.id] ?? {
                  color: "bg-slate-900",
                  icon: Code2,
                  label: course.track,
                };
              const CoverIcon = coverData.icon;

              return (
                <Link
                  href="/courses"
                  key={course.id}
                  className="group flex flex-col overflow-hidden rounded-2xl  bg-card transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      role="img"
                      aria-label={`Cover image for ${course.title}`}
                      className={`absolute inset-0 ${coverData.color} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <CoverIcon className="absolute bottom-3 right-3 h-10 w-10 text-white/30" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-2 text-base font-bold leading-snug text-foreground">
                      {course.title}
                    </h3>

                    <div className="mt-auto flex items-center pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary">
                        View Course
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Complete Courses.
            <br />
            Earn Recognition.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every learner who successfully completes a MooreSkillUp course
            receives an official Certificate of Completion that validates
            their learning journey and acquired skills.
          </p>

          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Showcase your achievements on your portfolio, résumé, LinkedIn
            profile, and professional platforms while demonstrating your
            commitment to continuous growth and career development.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Official MooreSkillUp Certificate</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Downloadable digital certificate</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Share on LinkedIn and professional profiles</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Recognized proof of course completion</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Showcase your skills and achievements</span>
            </div>

          </div>

          <div className="mt-10">
            <Link href="/courses">
              <Button
                size="lg"
                className="rounded-full px-8 h-14"
              >
                Start Learning Today
              </Button>
            </Link>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative group">

          {/* Certificate Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
              p-4
              shadow-lg
              transition-all
              duration-300
              group-hover:shadow-xl
            "
          >

            <Image
              src="/images/preview-certificate.jpeg"
              alt="MooreSkillUp Certificate Preview"
              width={1200}
              height={850}
              className="w-full rounded-xl object-cover"
            />

            {/* Top Badge */}
            {/* <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black shadow-lg backdrop-blur">
                Official Certificate
              </span>
            </div> */}

            {/* Certificate Overlay */}
            {/* <div className="absolute bottom-6 left-6 rounded-xl bg-black/70 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">
                Verified Completion
              </p>
              <p className="text-xs text-white/70">
                Unique Certificate ID Included
              </p>
            </div> */}

          </div>

          {/* Floating Verification Card */}
          <div
            className="
              absolute
              -bottom-6
              -right-4
              rounded-2xl
              border
              border-border
              bg-background
              px-5
              py-4
              shadow-lg
              backdrop-blur
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Verified Certificate
                </p>
                <p className="text-xs text-muted-foreground">
                  Earn upon completion
                </p>
              </div>

            </div>
          </div>


        </div>

      </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr]">
            {/* Left Content */}
            <div className="h-fit lg:sticky lg:top-24">
              {/* <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
                FAQ
              </span> */}

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
                  className="group rounded-2xl bg-card p-6 transition-all duration-300 "
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>

                    <Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45 text-primary" />
                  </summary>

                  <p className="mt-4 pt-4 leading-7 text-muted-foreground">
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
          <CtaBanner
            heading="Take the first step, start learning today!"
            description="Access premium courses, expert instructors, and career-aligned learning paths designed to help you succeed."
            linkHref="/courses"
            linkLabel="Explore all courses"
            items={[
              { icon: Code2, label: "Web Development", sublabel: "Frontend, Backend, Fullstack", bg: "bg-[#24437f]" },
              { icon: CloudIcon, label: "Cloud Computing", sublabel: "AWS, Azure, Google Cloud", bg: "bg-[#3a5eaa]" },
              { icon: Cpu, label: "AI & Machine Learning", sublabel: "ML, Deep Learning, GenAI", bg: "bg-[#FC6203]" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
