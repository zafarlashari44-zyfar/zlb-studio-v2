"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";
import { useRef } from "react";

const contactDetails = [
  {
    label: "Email",
    value: "hello@zlbstudio.co.uk",
    href: "mailto:hello@zlbstudio.co.uk",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Bristol, United Kingdom",
    href: "https://maps.google.com/?q=Bristol,United+Kingdom",
    icon: MapPin,
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    href: "#contact",
    icon: Clock3,
  },
];

export default function ContactPageExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1.22],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, 0],
  );

  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-8%"],
  );

  return (
    <main className="overflow-x-clip bg-[#050505] text-[#f4f2ed]">
      <section
        ref={heroRef}
        className="relative h-[135vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={
              reducedMotion
                ? {
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=94')",
                  }
                : {
                    scale: imageScale,
                    y: imageY,
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=94')",
                  }
            }
            className="absolute inset-0 bg-cover bg-center"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78),transparent_40%,rgba(0,0,0,0.96))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.6)_110%)]" />

          <div className="film-grain absolute inset-0 opacity-[0.12]" />

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    y: contentY,
                    opacity: contentOpacity,
                  }
            }
            className="relative z-10 mx-auto flex h-full max-w-[2400px] flex-col justify-between px-5 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36 2xl:px-20 2xl:pb-20 2xl:pt-48"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-white/50 sm:text-[10px] 2xl:text-sm">
                  Booking and enquiries
                </p>

                <p className="max-w-xl text-base font-light leading-7 text-white/70 md:text-xl md:leading-8 2xl:max-w-3xl 2xl:text-3xl 2xl:leading-10">
                  Tell us what you are planning and how you
                  want the final story to feel.
                </p>
              </div>

              <div className="hidden items-center gap-4 md:flex">
                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.3em] text-white/45 2xl:text-xs">
                  Bristol
                  <br />
                  Worldwide
                </p>

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 2xl:h-20 2xl:w-20">
                  <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
                </span>
              </div>
            </div>

            <div>
              <motion.h1
                style={
                  reducedMotion
                    ? undefined
                    : {
                        x: titleX,
                      }
                }
                className="whitespace-nowrap text-[21vw] font-medium leading-[0.7] tracking-[-0.1em] md:text-[11.5vw]"
              >
                LET US TALK
              </motion.h1>

              <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end">
                <p className="max-w-2xl text-sm leading-6 text-white/60 2xl:max-w-4xl 2xl:text-xl 2xl:leading-8">
                  Wedding, portrait, event and commercial
                  photography across the United Kingdom.
                </p>

                <a
                  href="#contact"
                  data-cursor-label="Enquire"
                  className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.3em]"
                >
                  Start an enquiry

                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45 2xl:h-20 2xl:w-20">
                    <ArrowUpRight className="h-5 w-5 2xl:h-7 2xl:w-7" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="pointer-events-none absolute right-[-20vw] top-[-20vw] h-[60vw] w-[60vw] rounded-full bg-[#f05c3c]/10 blur-[160px]" />

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-20 grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.55fr_1.45fr] md:pb-24 2xl:mb-32">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a] 2xl:text-xs">
              00.01
              <br />
              Contact details
            </p>

            <h2 className="max-w-[1900px] text-[14vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[7vw]">
              Clear communication
              <br />
              from the start.
            </h2>
          </div>

          <div className="grid border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              const borderClasses =
                index === 0
                  ? "md:border-r xl:border-r"
                  : index === 1
                    ? "xl:border-r"
                    : "";

              return (
                <motion.a
                  key={detail.label}
                  href={detail.href}
                  target={
                    detail.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    detail.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  data-cursor-label="Open"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative min-w-0 overflow-hidden border-b border-white/10 px-6 py-10 sm:px-8 sm:py-12 md:min-h-[360px] xl:min-h-[440px] xl:border-b-0 xl:px-10 xl:py-14 2xl:min-h-[520px] 2xl:px-14 2xl:py-16 ${borderClasses}`}
                >
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#f05c3c] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

                  <div className="relative z-10 flex h-full min-w-0 flex-col justify-between gap-20">
                    <div className="flex items-start justify-between gap-8">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#707070] transition-colors duration-500 group-hover:text-black/55 sm:text-[10px] 2xl:text-xs">
                        Contact {String(index + 1).padStart(2, "0")}
                      </p>

                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-12 group-hover:border-black/25 group-hover:bg-black group-hover:text-white sm:h-16 sm:w-16 2xl:h-20 2xl:w-20">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-8 2xl:w-8" />
                      </span>
                    </div>

                    <div className="min-w-0 max-w-full">
                      <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#9a9a9a] transition-colors duration-500 group-hover:text-black/55 sm:text-[10px] 2xl:text-xs">
                        {detail.label}
                      </p>

                      <h3 className="max-w-full break-words text-[clamp(1.75rem,2vw,3.75rem)] font-light leading-[1.04] tracking-[-0.055em] text-[#f4f2ed] transition-colors duration-500 [overflow-wrap:anywhere] group-hover:text-black">
                        {detail.value}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}