import { Metadata } from "next";
import { faqItems } from "@/lib/mock-data";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | MooreSkillUp",
  description: "Frequently asked questions about our learning platform.",
};

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border px-4 py-1 text-sm font-medium text-primary">
            Help Center
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about courses, certificates,
            enrollment, payments, and learning on MooreSkillUp.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group rounded-3xl border bg-card p-6 transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="font-display text-lg font-semibold">
                  {item.question}
                </h3>

                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>

              <div className="mt-4 border-t pt-4">
                <p className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-background p-10 text-center">
          <h2 className="font-display text-2xl font-bold">
            Still have questions?
          </h2>

          <p className="mt-3 text-muted-foreground">
            Our team is here to help you get the most out of MooreSkillUp.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}