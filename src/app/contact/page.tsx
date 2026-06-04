// import { Metadata } from "next";
// import { MessageCircleMore, Mail, MapPin } from "lucide-react";
// import { ContactForm } from "./contact-form";

// export const metadata: Metadata = {
//   title: "Contact Us | MooreSkillUp",
//   description: "Get in touch with our team.",
// };

// export default function ContactPage() {
//   return (
//     <main className="flex-1">
//       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mb-12 text-center">
//           <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">
//             Contact our team
//           </h1>
//           <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
//             Have questions about our courses or need support? We are here to help you on your
//             learning journey.
//           </p>
//         </div>
//         <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] max-w-5xl mx-auto">
//           <div className="space-y-6">
//             <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                   <MessageCircleMore className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-bold">WhatsApp</h3>
//                   <a href="#" className="text-sm text-muted-foreground hover:text-primary">
//                     Chat with us directly
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-display font-bold">Email</h3>
//                   <a
//                     href="mailto:mooreskillup@gmail.com"
//                     className="text-sm text-muted-foreground hover:text-primary"
//                   >
//                     mooreskillup@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-[2rem] border border-border dark:border-none bg-card p-6">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
//                   <MapPin className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Nnamdi Azikiwe University, Awka, Anambara State, Nigeria</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[2rem] border border-border dark:border-none bg-card p-8">
//             <h2 className="font-display text-2xl font-bold mb-6">Send us a message</h2>
//             <ContactForm />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import { Metadata } from "next";
import Link from "next/link";

import {
  MessageCircleMore,
  Mail,
  MapPin,
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
title: "Contact Us | MooreSkillUp",
description: "Get in touch with the MooreSkillUp team.",
};

export default function ContactPage() {
return ( <main className="flex-1">

  {/* HERO */}
  <section className="relative overflow-hidden py-20">

    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl text-center">

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          Get the Help You Need
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Whether you're exploring courses, choosing a learning path,
          or need support, our team is here to help.
        </p>

      </div>
    </div>
  </section>

  {/* MAIN CONTENT */}
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* WhatsApp */}
          <div className="rounded-[2rem] border bg-card p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                <MessageCircleMore className="h-6 w-6" />
              </div>

              <div className="flex-1">

                <h3 className="font-bold text-lg">
                  WhatsApp Support
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Need a quick answer? Chat directly with our team
                  about courses, learning paths, enrollment,
                  certificates, and support.
                </p>

                <a
                  href="YOUR_WHATSAPP_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4 inline-flex items-center gap-2
                    rounded-full
                    bg-green-500
                    px-5 py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-green-600
                  "
                >
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>

            </div>

          </div>

          {/* Email */}
          <div className="rounded-[2rem] border bg-card p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Email Support
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer email? Reach out and we'll get back to you.
                </p>

                <a
                  href="mailto:mooreskillup@gmail.com"
                  className="mt-2 block text-primary hover:underline"
                >
                  mooreskillup@gmail.com
                </a>

              </div>

            </div>

          </div>

          {/* AI Assistant */}
          <div className="rounded-[2rem] border bg-card p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bot className="h-6 w-6" />
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h3 className="font-bold text-lg">
                    AI Learning Assistant
                  </h3>

                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    Coming Soon
                  </span>

                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  Get instant answers about courses, certificates,
                  learning paths, and enrollment.
                </p>

              </div>

            </div>

          </div>

          {/* Location */}
          <div className="rounded-[2rem] border bg-card p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Our Team
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Nnamdi Azikiwe University, Awka, Anambara State, Nigeria.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="rounded-[2rem] border bg-card p-8 shadow-sm">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Send us a message
            </h2>

            <p className="mt-2 text-muted-foreground">
              Fill out the form below and our team will respond as soon as possible.
            </p>

          </div>

          <ContactForm />

        </div>

      </div>

    </div>
  </section>

  {/* BOTTOM CTA */}
  <section className="pb-24">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="rounded-[2rem] bg-gradient-to-r from-[#024293] to-[#FC6202] p-10 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Need Immediate Help?
            </h2>

            <p className="mt-2 text-white/80">
              Chat directly with our team on WhatsApp for the fastest response.
            </p>

          </div>

          <a
            href="YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-white
              px-6 py-3
              font-semibold
              text-black
            "
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </div>

  </section>

</main>


);
}
