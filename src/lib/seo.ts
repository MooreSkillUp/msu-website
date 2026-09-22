import type { Metadata } from "next";

export const siteUrl = "https://msu-website.vercel.app";
export const siteName = "MooreSkillUp";

/**
 * Builds a page's Metadata object with OpenGraph and Twitter card fields
 * pre-wired to the shared social preview image, so links shared on
 * WhatsApp, X, LinkedIn, etc. render a proper title, description, and
 * preview card instead of a bare link.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/site-preview.png",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/site-preview.png"],
    },
  };
}
