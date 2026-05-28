import { Metadata } from "next";
import { quizShopItems } from "@/lib/mock-data";
import { Button } from "@/components/Button";
import { PlayIcon, Zap } from "lucide-react";
export const metadata: Metadata = {
  title: "know Your Path | MooreSkillUp",
  description: "",
};
export default function KnowYourPathPage() {
  return (
    <main className="flex-1">
      {" "}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {" "}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {" "}
          <div>
            {" "}
            {/* <div className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              {" "}
              Rewards{" "}
            </div>{" "} */}
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
              {" "}
              Know Your Path{" "}
            </h1>{" "}
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {" "}
              Turn your hard-earned quiz points into profile badges, streak freezes, and course
              discounts.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 ">
            {" "}
            <PlayIcon className="h-5 w-5 text-accent" />{" "}
            <span className="font-display font-bold">Subscribe to our channel</span>{" "}
          </div>{" "}
        </div>{" "}
       
      </section>{" "}
    </main>
  );
}
