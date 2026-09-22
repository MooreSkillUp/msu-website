import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import "@/styles.css";
import { Footer } from "@/components/Footer";
import { buildMetadata, siteUrl } from "@/lib/seo";

const productSans = localFont({
  src: [
    {
      path: "./fonts/Product-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Product-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-product-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "MooreSkillUp",
    description:
      "MooreSkillUp helps university students turn academic theory into real tech skills, from web development to AI, and build a career to match.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${productSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
