import Link from "next/link";
import Image from "next/image";
import { publicEnv } from "@/lib/public-env";
const links = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/quiz-shop", label: "Quiz Shop" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
export function Footer() {
  return (
    <footer className="bg-card/40 mt-auto">
      {" "}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        {" "}
        <div>
          {" "}
          <div className="pb-10">
            <Link href="/" className="flex items-center gap-2">
          <Image
            src="/msu-logo-potrait.svg"
            alt="Logo"
            width={150}
            height={40}
          />
        </Link></div>{" "}
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            {" "}
            Premium learning experiences for builders, designers, and modern product teams.{" "}
          </p>{" "}
          <p className="mt-2 text-sm text-muted-foreground">
            {" "}
            Produced by{" "}
            <a
              href={publicEnv.moretechUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary hover:text-accent"
            >
              {" "}
              MooreTech{" "}
            </a>{" "}
          </p>{" "}
        </div>{" "}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {" "}
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {" "}
              {link.label}{" "}
            </Link>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
