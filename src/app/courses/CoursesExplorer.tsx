"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  PiMagnifyingGlassDuotone as Search,
  PiArrowRightDuotone as ArrowRight,
  PiGlobeDuotone as Globe,
  PiTerminalDuotone as Terminal,
  PiCpuDuotone as Cpu,
  PiDatabaseDuotone as Database,
  PiCloudDuotone as Cloud,
  PiInfinityDuotone as InfinityIcon,
  PiDeviceMobileDuotone as Smartphone,
  PiPaletteDuotone as Palette,
  PiShieldDuotone as Shield,
  PiGitBranchDuotone as GitBranch,
  PiHardDrivesDuotone as Server,
  PiCompassDuotone as Compass,
} from "react-icons/pi";
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

// Flat solid colors for each category card
const programColors: Record<string, string> = {
  "web-development": "bg-blue-600",
  "programming-languages": "bg-indigo-600",
  "ai-ml": "bg-fuchsia-600",
  "data": "bg-teal-600",
  "cloud-computing": "bg-sky-600",
  "devops": "bg-rose-600",
  "mobile-development": "bg-pink-600",
  "design-graphics": "bg-purple-600",
  "cybersecurity": "bg-red-800",
  "software-engineering": "bg-blue-700",
  "core-tech": "bg-slate-800",
  "engineering": "bg-orange-600",
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
          placeholder="Search paths, tracks, or skills like React, Docker, Python..."
          className="w-full bg-white text-foreground rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-sans"
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
                ? "bg-[#FC6203] text-white"
                : "bg-white hover:bg-slate-50 text-muted-foreground hover:text-foreground"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid List Section */}
      {filteredPrograms.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl max-w-lg mx-auto">
          <p className="text-lg font-semibold text-muted-foreground">No matches found</p>
          <p className="text-sm text-slate-400 mt-2">Try adjusting your keywords or tab filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            className="mt-6 text-sm font-bold text-[#FC6203] hover:underline"
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
              const colorClass = programColors[program.id] || "bg-blue-600";
              const trackCount = program.branches.length;

              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[2rem] bg-card text-foreground flex flex-col justify-between h-full overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Gradient Header */}
                    <div className={`relative ${colorClass} p-7 pb-8 text-white overflow-hidden`}>
                      {/* Subtle Background Pattern Overlay */}
                      <div className="absolute inset-0 bg-black/10 opacity-30 mix-blend-overlay" />

                      {/* Top Badges Row */}
                      <div className="relative flex items-center justify-between z-10">
                        {/* Acronym Badge */}
                        <span className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md text-white px-4 py-1 text-xs font-extrabold tracking-wider rounded-full">
                          {program.iconLabel}
                        </span>

                        {/* Icon Badge */}
                        <div className="p-2 rounded-xl bg-white/15 backdrop-blur-md text-white">
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
                          className="bg-slate-100 rounded-2xl p-4.5 transition hover:bg-slate-200/70"
                        >
                          {/* Track Title */}
                          <h3 className="font-bold text-foreground text-[15px] tracking-tight">
                            {branch.title}
                          </h3>

                          {/* Track Summary */}
                          <p className="text-muted-foreground text-xs mt-1 leading-normal font-medium">
                            {branch.summary}
                          </p>

                          {/* Pills wrapper */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {branch.tools.map((course, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="bg-white text-slate-700 text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full transition hover:bg-slate-50 cursor-default"
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
                  <div className="flex items-center justify-between pt-4 pb-6 px-6 bg-slate-100 rounded-b-[2rem]">
                    <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      {trackCount} learning {trackCount === 1 ? "branch" : "branches"}
                    </span>
                    <Link
                      href={`/courses?path=${program.id}`}
                      className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-750 rounded-full px-4.5 py-1.5 text-xs font-bold transition active:scale-95 cursor-pointer"
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
