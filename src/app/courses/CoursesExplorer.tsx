"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Globe,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Infinity as InfinityIcon,
  Smartphone,
  Palette,
  Shield,
  GitBranch,
  Server,
  Compass,
} from "lucide-react";
import { academyPrograms } from "@/lib/mock-data";

// Custom icons mapping for each category ID
const programIcons: Record<string, React.ComponentType<any>> = {
  "web-development": Globe,
  "programming-languages": Terminal,
  "ai-ml": Cpu,
  "data": Database,
  "cloud-computing": Cloud,
  "devops": InfinityIcon,
  "mobile-development": Smartphone,
  "design-graphics": Palette,
  "cybersecurity": Shield,
  "software-engineering": GitBranch,
  "core-tech": Server,
  "engineering": Compass,
};

// Custom gradients matching the premium design for each category card
const programGradients: Record<string, string> = {
  "web-development": "from-[#1d4ed8] via-[#2563eb] to-[#f97316]",
  "programming-languages": "from-[#4f46e5] via-[#6366f1] to-[#7c3aed]",
  "ai-ml": "from-[#c026d3] via-[#ec4899] to-[#06b6d4]",
  "data": "from-[#0d9488] via-[#10b981] to-[#0284c7]",
  "cloud-computing": "from-[#0284c7] via-[#2563eb] to-[#4f46e5]",
  "devops": "from-[#ea580c] via-[#e11d48] to-[#be123c]",
  "mobile-development": "from-[#ec4899] via-[#f43f5e] to-[#fb923c]",
  "design-graphics": "from-[#7c3aed] via-[#d946ef] to-[#ec4899]",
  "cybersecurity": "from-[#991b1b] via-[#7f1d1d] to-[#1e293b]",
  "software-engineering": "from-[#2563eb] via-[#4f46e5] to-[#0d9488]",
  "core-tech": "from-[#334155] via-[#1e293b] to-[#0f172a]",
  "engineering": "from-[#d97706] via-[#ea580c] to-[#c2410c]",
};

// Groups of tabs for structured navigation
const tabGroups = [
  { id: "all", label: "All Subjects" },
  { id: "dev", label: "Development" },
  { id: "data-ai", label: "Data & AI" },
  { id: "cloud-ops", label: "Cloud & DevOps" },
  { id: "creative", label: "Design & Eng" },
  { id: "security-core", label: "Security & Core Tech" },
];

const programToTabMap: Record<string, string[]> = {
  "web-development": ["dev"],
  "programming-languages": ["dev"],
  "ai-ml": ["data-ai"],
  "data": ["data-ai"],
  "cloud-computing": ["cloud-ops"],
  "devops": ["cloud-ops"],
  "mobile-development": ["dev"],
  "design-graphics": ["creative"],
  "cybersecurity": ["security-core"],
  "software-engineering": ["dev"],
  "core-tech": ["security-core"],
  "engineering": ["creative"],
};

export default function CoursesExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filtering logic
  const filteredPrograms = useMemo(() => {
    return academyPrograms.filter((program) => {
      // 1. Tab Group Filter
      if (activeTab !== "all") {
        const tabs = programToTabMap[program.id] || [];
        if (!tabs.includes(activeTab)) return false;
      }

      // 2. Search Query Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesCategory =
          program.title.toLowerCase().includes(query) ||
          program.description.toLowerCase().includes(query);

        const matchesTracks = program.branches.some(
          (branch) =>
            branch.title.toLowerCase().includes(query) ||
            branch.summary.toLowerCase().includes(query) ||
            branch.tools.some((tool) => tool.toLowerCase().includes(query))
        );

        return matchesCategory || matchesTracks;
      }

      return true;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="w-full">
      {/* Search Bar Section */}
      <div className="relative max-w-xl mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search categories, tracks, or courses (e.g. React, Docker, Python)..."
          className="w-full bg-slate-50 dark:bg-[#111e38]/50 text-foreground border border-slate-200 dark:border-border/80 focus:border-primary rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 dark:placeholder:text-muted-foreground font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Tabs Section */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
        {tabGroups.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${isActive
                ? "bg-[#de7300] text-white shadow-md shadow-orange-500/20 border-transparent"
                : "bg-slate-100 hover:bg-slate-200 dark:bg-[#111e38] dark:hover:bg-[#182a4d] text-muted-foreground hover:text-foreground border border-border dark:border-slate-800/80"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid List Section */}
      {filteredPrograms.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 dark:bg-[#111e38]/30 rounded-3xl border border-border dark:border-slate-800/60 max-w-lg mx-auto">
          <p className="text-lg font-semibold text-muted-foreground">No matches found</p>
          <p className="text-sm text-slate-400 mt-2">Try adjusting your keywords or tab filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            className="mt-6 text-sm font-bold text-[#de7300] hover:underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => {
              const IconComponent = programIcons[program.id] || Globe;
              const gradientClass = programGradients[program.id] || "from-blue-600 to-orange-500";
              const trackCount = program.branches.length;

              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[2rem] bg-card text-foreground flex flex-col justify-between h-full border border-border/85 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 overflow-hidden group transition-all duration-300"
                >
                  <div>
                    {/* Gradient Header */}
                    <div className={`relative bg-gradient-to-br ${gradientClass} p-7 pb-8 text-white overflow-hidden`}>
                      {/* Subtle Background Pattern Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-30 mix-blend-overlay" />

                      {/* Top Badges Row */}
                      <div className="relative flex items-center justify-between z-10">
                        {/* Acronym Badge */}
                        <span className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md text-white px-4 py-1 text-xs font-extrabold tracking-wider rounded-full border border-white/10 shadow-sm">
                          {program.iconLabel}
                        </span>

                        {/* Icon Badge */}
                        <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/10 shadow-sm">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="relative text-2xl font-bold tracking-tight text-white mt-6 z-10 font-display">
                        {program.title}
                      </h2>

                      {/* Description */}
                      <p className="relative text-white/90 text-[13px] mt-2.5 leading-relaxed font-sans z-10 font-medium max-w-[95%]">
                        {program.description}
                      </p>
                    </div>

                    {/* Track Sub-Cards Body */}
                    <div className="p-6 space-y-4">
                      {program.branches.map((branch, index) => (
                        <div
                          key={index}
                          className="bg-slate-50/70 dark:bg-[#121f38] rounded-2xl p-4.5 border border-slate-200/60 dark:border-slate-800/60 transition hover:bg-slate-100/60 dark:hover:bg-[#162747] hover:border-slate-300 dark:hover:border-slate-700/80"
                        >
                          {/* Track Title */}
                          <h3 className="font-bold text-foreground dark:text-white text-[15px] tracking-tight">
                            {branch.title}
                          </h3>

                          {/* Track Summary */}
                          <p className="text-muted-foreground dark:text-slate-400 text-[11.5px] mt-1 leading-normal font-medium">
                            {branch.summary}
                          </p>

                          {/* Pills wrapper */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {branch.tools.map((course, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="bg-slate-200/50 dark:bg-[#1b2c4e] text-slate-700 dark:text-slate-200 text-[9.5px] font-semibold px-2.5 py-0.5 rounded-full border border-slate-200/80 dark:border-slate-700/50 transition hover:bg-slate-200 dark:hover:bg-[#223963] cursor-default"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 pb-6 px-6 border-t border-border/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-[#080d19] rounded-b-[2rem]">
                    <span className="text-muted-foreground dark:text-slate-400 text-xs font-semibold tracking-wide uppercase">
                      {trackCount} learning {trackCount === 1 ? "branch" : "branches"}
                    </span>
                    <Link
                      href={`/courses?path=${program.id}`}
                      className="inline-flex items-center gap-1.5 bg-transparent border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100/50 dark:hover:bg-white/5 text-slate-750 dark:text-white rounded-full px-4.5 py-1.5 text-xs font-bold transition active:scale-95 cursor-pointer shadow-sm"
                    >
                      Start this path <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
