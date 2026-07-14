"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Studio",
    href: "#studio",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "YouTube",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] px-5 pb-8 pt-24 text-[#f4f2ed] md:px-10 md:pb-10 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,92,60,0.1),transparent_38%)]" />

      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="grid gap-16 border-b border-white/10 pb-20 md:grid-cols-[1.2fr_0.8fr] md:pb-28">
          <div>
            <p className="mb-8 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              ZLB Studio
            </p>

            <h2 className="max-w-4xl text-[14vw] font-medium leading-[0.82] tracking-[-0.08em] md:text-[7vw]">
              Real moments.
              <br />
              Lasting frames.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10 md:pt-14">
            <div>
              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-[#707070]">
                Navigation
              </p>

              <nav className="space-y-4">
                {navigation.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-cursor-label={link.label}
                    className="group flex w-fit items-center gap-3 text-lg"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-[#707070]">
                Social
              </p>

              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    data-cursor-label="Open"
                    className="group flex w-fit items-center gap-3 text-lg"
                  >
                    {social.label}

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-white/10 py-16 md:py-24">
          <motion.p
            initial={{
              y: "110%",
            }}
            whileInView={{
              y: "0%",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="whitespace-nowrap text-center text-[24vw] font-semibold leading-[0.7] tracking-[-0.095em] md:text-[17vw]"
          >
            ZLB STUDIO
          </motion.p>
        </div>

        <div className="flex flex-col gap-7 pt-8 text-[9px] uppercase tracking-[0.26em] text-[#707070] md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 ZLB Studio
          </p>

          <p>
            Bristol, United Kingdom
          </p>

          <a
            href="#top"
            data-cursor-label="Top"
            className="group flex w-fit items-center gap-3 text-[#f4f2ed]"
          >
            Back to top

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}




