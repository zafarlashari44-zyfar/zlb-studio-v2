"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export default function StudioIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["6%", "0%", "-4%"],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5%", "5%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.04, 1],
  );

  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [2.5, 0, -1.5],
  );

  const arrowRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180],
  );

  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-25%"],
  );

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative overflow-hidden bg-[#f05c3c] px-5 py-24 text-black md:px-10 md:py-36 2xl:px-20 2xl:py-52"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.2),transparent_35%)]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/10" />

      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="grid gap-12 border-b border-black/25 pb-16 md:grid-cols-[0.55fr_1.45fr] md:gap-20 md:pb-24 2xl:gap-32 2xl:pb-36">
          <div className="flex items-start justify-between md:flex-col">
            <motion.div
              style={
                reducedMotion
                  ? undefined
                  : {
                      y: numberY,
                    }
              }
            >
              <p className="text-[10px] uppercase leading-5 tracking-[0.32em] text-black/60 2xl:text-sm">
                00.01
                <br />
                The studio
              </p>
            </motion.div>

            <motion.div
              style={
                reducedMotion
                  ? undefined
                  : {
                      rotate: arrowRotate,
                    }
              }
              className="flex h-14 w-14 items-center justify-center rounded-full border border-black/30 md:h-20 md:w-20 2xl:h-28 2xl:w-28"
            >
              <ArrowDownRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
            </motion.div>
          </div>

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    x: headingX,
                  }
            }
          >
            <h2 className="max-w-[1900px] text-[clamp(4rem,7.2vw,17rem)] font-medium leading-[0.82] tracking-[-0.085em]">
              We do not just
              <br />
              photograph moments.
            </h2>

            <h2 className="mt-3 max-w-[1900px] text-[clamp(4rem,7.2vw,17rem)] font-medium leading-[0.82] tracking-[-0.085em]">
              We preserve
              <br />
              how they felt.
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-14 pt-14 md:grid-cols-[0.55fr_1.45fr] md:gap-20 md:pt-24 2xl:gap-32 2xl:pt-36">
          <div className="flex flex-col justify-between gap-16">
            <p className="max-w-xl text-[clamp(1.15rem,1.3vw,2.25rem)] font-normal leading-[1.5] tracking-[-0.025em]">
              ZLB Studio creates cinematic photography for weddings,
              portraits, events and brands. Every frame is built around
              real emotion, clear direction and timeless storytelling.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black/25 pt-7 text-[9px] uppercase leading-5 tracking-[0.22em] 2xl:text-xs 2xl:leading-7">
              <div>
                <p className="mb-3 text-black/45">
                  Based
                </p>

                <p>
                  Bristol
                  <br />
                  United Kingdom
                </p>
              </div>

              <div>
                <p className="mb-3 text-black/45">
                  Available
                </p>

                <p>
                  United Kingdom
                  <br />
                  Worldwide
                </p>
              </div>
            </div>
          </div>

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    rotate: imageRotate,
                  }
            }
            className="relative aspect-[4/5] overflow-hidden bg-[#050505] shadow-[0_60px_160px_rgba(0,0,0,0.3)] md:aspect-[16/10]"
          >
            <motion.div
              style={
                reducedMotion
                  ? {
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?auto=format&fit=crop&w=3840&q=92')",
                    }
                  : {
                      y: imageY,
                      scale: imageScale,
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?auto=format&fit=crop&w=3840&q=92')",
                    }
              }
              className="absolute -inset-[7%] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.85))]" />

            <div className="film-grain absolute inset-0 opacity-[0.1]" />

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-8 text-white md:inset-x-8 md:bottom-8 2xl:inset-x-12 2xl:bottom-12">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/55 2xl:text-xs">
                  Creative approach
                </p>

                <p className="max-w-2xl text-[clamp(1.4rem,2vw,3.5rem)] font-light leading-[1.15] tracking-[-0.04em]">
                  Documentary honesty shaped with cinematic direction.
                </p>
              </div>

              <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/55 md:block 2xl:text-xs">
                ZLB 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}