import { Metadata } from "next";
import { faqItems } from "@/lib/mock-data";
import {
  PiCaretDownDuotone as ChevronDown,
  PiGraduationCapDuotone as GraduationCap,
  PiStorefrontDuotone as Storefront,
  PiStackDuotone as Stack,
} from "react-icons/pi";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | MooreSkillUp",
  description: "Frequently asked questions about our learning platform.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          {/* <span className="inline-flex rounded-full border px-4 py-1 text-sm font-medium text-primary">
            Help Center
          </span> */}

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Straight answers about courses, certificates, enrollment, and how
            MooreSkillUp actually works.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl bg-card p-6 transition-all duration-300 "
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
        <div className="mt-16">
          <CtaBanner
            heading="Still have questions?"
            description="We're students too. We know what it's like to get stuck, so reach out."
            linkHref="/contact"
            linkLabel="Contact Support"
            items={[
              { icon: GraduationCap, label: "Course Access", sublabel: "Free plan & release days", bg: "bg-[#24437f]" },
              { icon: Storefront, label: "Quiz Shop", sublabel: "Redeem points for perks", bg: "bg-[#3a5eaa]" },
              { icon: Stack, label: "Course Structure", sublabel: "Weekly lessons & capstone", bg: "bg-[#FC6203]" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}