"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

type ProcessStep = {
  number: string;
  title: string;
  label: string;
  description: string;
  details: string[];
  image: string;
  rotation: number;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    label: "Your story",
    description:
      "We begin with your people, your ideas and the feeling you want the final photographs to carry.",
    details: [
      "Creative consultation",
      "Mood and visual direction",
      "Location planning",
      "Schedule preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=92",
    rotation: -4,
  },
  {
    number: "02",
    title: "Direct",
    label: "The experience",
    description:
      "Clear direction keeps the session natural. You know what to do without the photographs feeling forced.",
    details: [
      "Natural posing guidance",
      "Lighting direction",
      "Moment based shooting",
      "Calm session management",
    ],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=92",
    rotation: 4,
  },
  {
    number: "03",
    title: "Create",
    label: "The frames",
    description:
      "Documentary moments and carefully directed portraits are shaped into one consistent visual story.",
    details: [
      "Cinematic composition",
      "Editorial portraits",
      "Documentary coverage",
      "Creative detail frames",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=92",
    rotation: -3,
  },
  {
    number: "04",
    title: "Deliver",
    label: "The collection",
    description:
      "Every selected image is edited carefully and delivered through a private, simple and responsive gallery.",
    details: [
      "Professional colour grading",
      "High resolution images",
      "Private online gallery",
      "Social media exports",
    ],
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1800&q=92",
    rotation: 3,
  },
];

export default function ProcessExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", "-300vw"],
  );

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  const backgroundRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180],
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.15, 0.9],
  );

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      const index = Math.min(
        steps.length - 1,
        Math.floor(latest * steps.length),
      );

      setActiveIndex(index);
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] text-[#f4f2ed]"
    >
      <div className="hidden h-[420vh] lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,92,60,0.12),transparent_42%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

          <div className="film-grain absolute inset-0 opacity-[0.06]" />

          <motion.div
            style={{
              rotate: backgroundRotate,
              scale: backgroundScale,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[34vw] w-[34vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          >
            <div className="absolute inset-[12%] rounded-full border border-[#f05c3c]/15" />

            <div className="absolute inset-[28%] rounded-full border border-white/[0.05]" />

            <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />

            <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]" />
          </motion.div>

          <div className="absolute inset-x-10 top-8 z-30 flex items-center justify-between">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
                ZLB working process
              </p>

              <p className="text-sm text-white/60">
                From first conversation to final gallery
              </p>
            </div>

            <div className="flex items-center gap-5">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#9a9a9a]">
                Step
              </p>

              <motion.p
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="font-mono text-4xl font-light tracking-[-0.08em]"
              >
                {steps[activeIndex].number}
              </motion.p>
            </div>
          </div>

          <motion.div
            style={{
              x: trackX,
            }}
            className="relative z-10 flex h-screen w-[400vw]"
          >
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="flex h-screen w-screen shrink-0 items-center px-10 pb-20 pt-28"
              >
                <div className="mx-auto grid w-full max-w-[2400px] grid-cols-[0.8fr_1.2fr] items-center gap-20">
                  <div>
                    <div className="mb-16 flex items-center gap-5">
                      <span
                        className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                          activeIndex === index
                            ? "bg-[#f05c3c]"
                            : "bg-white/20"
                        }`}
                      />

                      <p className="text-[10px] uppercase tracking-[0.34em] text-[#9a9a9a]">
                        {step.label}
                      </p>
                    </div>

                    <div className="overflow-hidden">
                      <motion.h2
                        initial={{
                          y: "110%",
                        }}
                        whileInView={{
                          y: "0%",
                        }}
                        viewport={{
                          once: true,
                          amount: 0.35,
                        }}
                        transition={{
                          duration: 1,
                          ease: [0.76, 0, 0.24, 1],
                        }}
                        className="text-[9vw] font-medium leading-[0.75] tracking-[-0.09em]"
                      >
                        {step.title}
                      </motion.h2>
                    </div>

                    <p className="mt-10 max-w-xl text-xl font-light leading-8 text-[#b5b5b5]">
                      {step.description}
                    </p>

                    <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-7">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05c3c]" />

                          <p className="text-[10px] uppercase leading-5 tracking-[0.2em] text-[#9a9a9a]">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                      rotate: step.rotation * 2,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: step.rotation,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      rotate: 0,
                      scale: 1.025,
                    }}
                    data-cursor-label="Explore"
                    className="group relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden border border-white/10 bg-[#111111] shadow-[0_80px_180px_rgba(0,0,0,0.8)]"
                  >
                    <motion.div
                      style={{
                        backgroundImage: `url("${step.image}")`,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 scale-[1.04] bg-cover bg-center"
                    />

                    <div className="absolute inset-0 bg-black/15" />

                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),transparent_40%,rgba(0,0,0,0.85))]" />

                    <div className="film-grain absolute inset-0 opacity-[0.1]" />

                    <div className="absolute left-7 top-7 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#f05c3c]" />

                      <p className="text-[9px] uppercase tracking-[0.3em] text-white/65">
                        Process {step.number}
                      </p>
                    </div>

                    <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                      <p className="max-w-xs text-3xl font-light leading-tight tracking-[-0.05em]">
                        {step.label}
                      </p>

                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-700 group-hover:rotate-45">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                  </motion.div>
                </div>
              </article>
            ))}
          </motion.div>

          <div className="absolute inset-x-10 bottom-8 z-30">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Scroll to move through the process
              </p>

              <div className="flex gap-3">
                {steps.map((step, index) => (
                  <span
                    key={step.number}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "scale-150 bg-[#f05c3c]"
                        : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="h-px overflow-hidden bg-white/10">
              <motion.div
                style={{
                  width: progressWidth,
                }}
                className="h-full bg-[#f05c3c]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-28 lg:hidden">
        <div className="mb-20 border-b border-white/10 pb-12">
          <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
            ZLB working process
          </p>

          <h2 className="text-[15vw] font-medium leading-[0.82] tracking-[-0.08em]">
            From idea to final frame.
          </h2>
        </div>

        <div className="space-y-24">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-white/10 pb-20"
            >
              <div className="mb-7 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9a9a9a]">
                  Step {step.number}
                </p>

                <ArrowDownRight
                  size={20}
                  className="text-[#f05c3c]"
                />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: step.rotation,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mb-10 aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111]"
              >
                <motion.div
                  initial={{
                    scale: 1.12,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  style={{
                    backgroundImage: `url("${step.image}")`,
                  }}
                  className="absolute inset-0 bg-cover bg-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.85))]" />

                <div className="film-grain absolute inset-0 opacity-[0.1]" />

                <p className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-white/60">
                  {step.label}
                </p>
              </motion.div>

              <h3 className="mb-7 text-[18vw] font-medium leading-[0.78] tracking-[-0.09em]">
                {step.title}
              </h3>

              <p className="mb-9 text-lg font-light leading-8 text-[#b5b5b5]">
                {step.description}
              </p>

              <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
                {step.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05c3c]" />

                    <p className="text-[9px] uppercase leading-5 tracking-[0.18em] text-[#9a9a9a]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




