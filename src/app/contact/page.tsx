import { Metadata } from "next";
import { MessageCircleMore, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | MooreSkillUp",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
            Contact our team
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Have questions about our courses or need support? We are here to help you on your
            learning journey.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircleMore className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold">WhatsApp</h3>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Chat with us directly
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Email</h3>
                  <a
                    href="mailto:support@mooreskillup.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    support@mooreskillup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nnamdi Azikiwe University, Awka, Anambara State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border dark:border-none bg-card p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}