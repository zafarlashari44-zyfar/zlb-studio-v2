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
  Camera,
  Clapperboard,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Emotion first",
    text: "Real expression matters more than perfect posing. Direction exists to create confidence without removing personality.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Clear direction",
    text: "Every shoot has a visual plan, but enough freedom remains for natural movement and unexpected moments.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Complete stories",
    text: "Individual images should feel strong, but the final collection must work as one connected visual experience.",
    icon: Clapperboard,
  },
];

const workflow = [
  {
    number: "01",
    title: "Listen",
    text: "We understand the people, purpose, location and feeling behind the project.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We prepare the visual direction, timings, locations and practical details.",
  },
  {
    number: "03",
    title: "Create",
    text: "Natural moments and directed portraits are captured with one consistent style.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Every selected frame receives careful colour, tone and final image preparation.",
  },
];

export default function StudioPageExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(
    heroProgress,
    [0, 1],
    [1.04, 1.24],
  );

  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "12%"],
  );

  const heroContentY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "30%"],
  );

  const heroContentOpacity = useTransform(
    heroProgress,
    [0, 0.72],
    [1, 0],
  );

  const heroTitleX = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "-8%"],
  );

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(
    storyProgress,
    [0, 1],
    ["-7%", "7%"],
  );

  const portraitScale = useTransform(
    storyProgress,
    [0, 0.5, 1],
    [1.13, 1.04, 1],
  );

  const portraitRotate = useTransform(
    storyProgress,
    [0, 0.5, 1],
    [3, 0, -2],
  );

  const statementX = useTransform(
    storyProgress,
    [0, 1],
    ["5%", "-6%"],
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
                      "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=3840&q=94')",
                  }
                : {
                    scale: heroImageScale,
                    y: heroImageY,
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=3840&q=94')",
                  }
            }
            className="absolute inset-0 bg-cover bg-center"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent_38%,rgba(0,0,0,0.95))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_110%)]" />

          <div className="film-grain absolute inset-0 opacity-[0.12]" />

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    y: heroContentY,
                    opacity: heroContentOpacity,
                  }
            }
            className="relative z-10 mx-auto flex h-full max-w-[2400px] flex-col justify-between px-5 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36 2xl:px-20 2xl:pb-20 2xl:pt-48"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-white/50 2xl:text-sm">
                  ZLB Studio
                </p>

                <p className="max-w-md text-base font-light leading-7 text-white/70 md:text-xl md:leading-8 2xl:max-w-2xl 2xl:text-3xl 2xl:leading-10">
                  A photography and visual storytelling studio
                  built around emotion, direction and timeless frames.
                </p>
              </div>

              <div className="hidden items-center gap-4 md:flex">
                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.3em] text-white/45 2xl:text-xs">
                  Bristol
                  <br />
                  United Kingdom
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
                        x: heroTitleX,
                      }
                }
                className="whitespace-nowrap text-[24vw] font-medium leading-[0.7] tracking-[-0.1em] md:text-[14vw]"
              >
                THE STUDIO
              </motion.h1>

              <div className="mt-8 flex flex-col justify-between gap-7 border-t border-white/20 pt-6 md:flex-row md:items-end">
                <p className="max-w-xl text-sm leading-6 text-white/60 2xl:max-w-3xl 2xl:text-xl 2xl:leading-8">
                  Photography for weddings, portraits, events
                  and commercial projects across the United Kingdom.
                </p>

                <p className="text-[9px] uppercase tracking-[0.3em] text-white/45 2xl:text-xs">
                  Independent visual studio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        ref={storyRef}
        className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64"
      >
        <div className="pointer-events-none absolute right-[-20vw] top-[-20vw] h-[60vw] w-[60vw] rounded-full bg-[#f05c3c]/10 blur-[160px]" />

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-20 flex items-center justify-between border-b border-white/10 pb-8 md:mb-32">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a] 2xl:text-xs">
              00.01
              <br />
              Our story
            </p>

            <span className="h-2 w-2 rounded-full bg-[#f05c3c]" />
          </div>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 2xl:gap-40">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <motion.div
                style={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: portraitRotate,
                      }
                }
                className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111] shadow-[0_80px_180px_rgba(0,0,0,0.75)]"
              >
                <motion.div
                  style={
                    reducedMotion
                      ? {
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=3840&q=94')",
                        }
                      : {
                          y: portraitY,
                          scale: portraitScale,
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=3840&q=94')",
                        }
                  }
                  className="absolute -inset-[8%] bg-cover bg-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.9))]" />

                <div className="film-grain absolute inset-0 opacity-[0.1]" />

                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between md:inset-x-8 md:bottom-8 2xl:inset-x-12 2xl:bottom-12">
                  <div>
                    <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50 2xl:text-xs">
                      Founder and creative director
                    </p>

                    <p className="text-3xl font-light tracking-[-0.05em] 2xl:text-6xl">
                      ZLB Studio
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f05c3c] text-black 2xl:h-20 2xl:w-20">
                    <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
                  </span>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.h2
                style={
                  reducedMotion
                    ? undefined
                    : {
                        x: statementX,
                      }
                }
                className="mb-16 text-[14vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[7vw]"
              >
                Images should
                <br />
                feel lived in.
              </motion.h2>

              <div className="grid gap-12 border-t border-white/10 pt-10 md:grid-cols-2 2xl:gap-20 2xl:pt-16">
                <p className="text-xl font-light leading-8 text-white/80 md:text-2xl md:leading-9 2xl:text-4xl 2xl:leading-[1.45]">
                  ZLB Studio began with one simple idea.
                  Photography should preserve more than appearance.
                  It should preserve atmosphere, movement and emotion.
                </p>

                <p className="text-base leading-8 text-[#9a9a9a] 2xl:text-2xl 2xl:leading-10">
                  Every project combines documentary observation with
                  clear creative direction. The goal is not to force
                  moments into a template. The goal is to create enough
                  structure for real personality to appear naturally.
                </p>
              </div>

              <div className="mt-20 grid grid-cols-2 border-y border-white/10 md:grid-cols-4 2xl:mt-32">
                <StudioStat value="250+" label="Stories photographed" />
                <StudioStat value="8+" label="Years of experience" />
                <StudioStat value="120+" label="Clients and couples" />
                <StudioStat value="UK" label="Based in Bristol" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f05c3c] px-5 py-28 text-black md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="mx-auto max-w-[2400px]">
          <div className="mb-20 grid gap-10 border-b border-black/20 pb-14 md:grid-cols-[0.55fr_1.45fr] md:pb-24 2xl:mb-32">
            <p className="text-[9px] uppercase tracking-[0.34em] text-black/55 2xl:text-xs">
              00.02
              <br />
              Studio values
            </p>

            <h2 className="max-w-[1800px] text-[14vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[7vw]">
              Minimal process.
              <br />
              Maximum attention.
            </h2>
          </div>

          <div className="grid border-t border-black/20 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  initial={{
                    opacity: 0,
                    y: 50,
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
                    duration: 0.8,
                  }}
                  className={`group border-b border-black/20 py-12 lg:min-h-[520px] lg:px-10 lg:py-14 ${
                    index < values.length - 1
                      ? "lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-full flex-col justify-between gap-20">
                    <div className="flex items-start justify-between">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-black/50 2xl:text-xs">
                        Value {value.number}
                      </p>

                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/25 transition-all duration-500 group-hover:rotate-12 group-hover:bg-black group-hover:text-white 2xl:h-20 2xl:w-20">
                        <Icon className="h-5 w-5 2xl:h-8 2xl:w-8" />
                      </span>
                    </div>

                    <div>
                      <h3 className="mb-7 text-4xl font-medium tracking-[-0.06em] md:text-5xl 2xl:text-7xl">
                        {value.title}
                      </h3>

                      <p className="max-w-xl text-base leading-8 text-black/65 2xl:text-2xl 2xl:leading-10">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="mx-auto max-w-[2400px]">
          <div className="mb-20 flex flex-col justify-between gap-10 border-b border-white/10 pb-14 md:flex-row md:items-end md:pb-24 2xl:mb-32">
            <div>
              <p className="mb-8 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a] 2xl:text-xs">
                00.03
                <br />
                How we work
              </p>

              <h2 className="text-[14vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[7vw]">
                Simple stages.
                <br />
                Strong results.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#9a9a9a] 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-10">
              Each project follows a clear structure while leaving
              enough space for natural moments and creative decisions.
            </p>
          </div>

          <div className="border-t border-white/10">
            {workflow.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.05,
                  duration: 0.7,
                }}
                className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[0.3fr_0.7fr_1fr] md:items-center md:py-14 2xl:py-20"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#f05c3c] 2xl:text-xs">
                  {step.number}
                </p>

                <h3 className="text-4xl font-medium tracking-[-0.06em] md:text-5xl 2xl:text-7xl">
                  {step.title}
                </h3>

                <div className="flex items-center justify-between gap-8">
                  <p className="max-w-2xl text-base leading-8 text-[#9a9a9a] 2xl:text-2xl 2xl:leading-10">
                    {step.text}
                  </p>

                  <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black md:flex 2xl:h-20 2xl:w-20">
                    <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-24 flex flex-col justify-between gap-10 border-t border-white/10 pt-10 md:flex-row md:items-end 2xl:mt-36">
            <h2 className="max-w-5xl text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[7vw]">
              Ready to create
              <br />
              something real.
            </h2>

            <a
              href="/#contact"
              data-cursor-label="Book"
              className="group flex items-center gap-5 text-[10px] uppercase tracking-[0.28em] 2xl:text-sm"
            >
              Book a shoot

              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45 2xl:h-24 2xl:w-24">
                <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function StudioStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-b border-white/10 py-8 odd:border-r md:border-b-0 md:border-r md:px-6 md:py-10 last:md:border-r-0 2xl:px-10 2xl:py-16">
      <p className="mb-5 text-[11vw] font-medium leading-none tracking-[-0.08em] md:text-[4vw]">
        {value}
      </p>

      <p className="text-[9px] uppercase leading-5 tracking-[0.25em] text-[#9a9a9a] 2xl:text-xs">
        {label}
      </p>
    </div>
  );
}