"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useSiteReady } from "@/components/SiteExperience";

export default function Hero() {
  const ready = useSiteReady();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const sceneScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.72, 1, 1.35],
  );

  const sceneRotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [13, 0, -5],
  );

  const sceneRotateY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [-11, 0, 5],
  );

  const sceneY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["7vh", "0vh", "-9vh"],
  );

  const frameRadius = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8],
    ["34px", "10px", "0px"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [1.18, 1.05, 1.22],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"],
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1.4],
  );

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0.2, 0.08, 0],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.42],
    [1, 1, 0],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.42],
    ["0vh", "-8vh"],
  );

  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0.82],
  );

  const titleLetterSpacing = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["-0.09em", "-0.04em"],
  );

  const detailsOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.75],
    [0, 1, 0],
  );

  const detailsY = useTransform(
    scrollYProgress,
    [0.35, 0.5, 0.75],
    ["40px", "0px", "-25px"],
  );

  const finalOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.88],
    [0, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.72, 0.88],
    ["50px", "0px"],
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[220vh] bg-[#070707] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            scale: backgroundScale,
            opacity: backgroundOpacity,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=95')",
          }}
          className="absolute inset-0 bg-cover bg-center blur-[55px]"
        />

        <div className="absolute inset-0 bg-[#070707]/80" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="film-grain absolute inset-0 opacity-[0.1]" />

        <motion.div
          style={{
            opacity: introOpacity,
            y: introY,
          }}
          className="absolute inset-x-0 top-0 z-30 flex h-screen flex-col justify-between px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32"
        >
          <div className="flex items-start justify-between">
            <p className="max-w-[180px] text-[10px] uppercase leading-5 tracking-[0.3em] text-white/45">
              Bristol
              <br />
              United Kingdom
            </p>

            <p className="max-w-[180px] text-right text-[10px] uppercase leading-5 tracking-[0.3em] text-white/45">
              Wedding
              <br />
              Portrait
              <br />
              Editorial
            </p>
          </div>

          <motion.div
            style={{
              scale: titleScale,
            }}
            className="pointer-events-none text-center"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={
                ready
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 100,
                    }
              }
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                letterSpacing: titleLetterSpacing,
              }}
              className="text-[28vw] font-semibold leading-[0.7] md:text-[19vw]"
            >
              ZLB
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={
                ready
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                    }
              }
              transition={{
                delay: 0.12,
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mt-3 text-[11vw] font-light leading-none tracking-[-0.07em] md:text-[6vw]"
            >
              STUDIO
            </motion.p>
          </motion.div>

          <div className="flex items-end justify-between">
            <p className="max-w-[260px] text-sm leading-6 text-white/60 md:text-base">
              Cinematic photography shaped around real emotion.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Scroll
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20">
                <ArrowDown size={17} />
              </span>
            </div>
          </div>
        </motion.div>

        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-5 md:px-10"
          style={{
            perspective: "1500px",
          }}
        >
          <motion.div
            style={{
              scale: sceneScale,
              rotateX: sceneRotateX,
              rotateY: sceneRotateY,
              y: sceneY,
              borderRadius: frameRadius,
              transformStyle: "preserve-3d",
            }}
            className="relative aspect-[4/5] w-full max-w-[1100px] overflow-hidden bg-black shadow-[0_80px_180px_rgba(0,0,0,0.75)] md:aspect-[16/10]"
          >
            <motion.div
              style={{
                scale: imageScale,
                y: imageY,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=95')",
              }}
              className="absolute -inset-[6%] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_35%,rgba(0,0,0,0.65))]" />

            <div className="film-grain absolute inset-0 opacity-[0.12]" />

            <motion.div
              style={{
                opacity: detailsOpacity,
                y: detailsY,
              }}
              className="absolute inset-0 flex items-end justify-between p-6 md:p-10"
            >
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.32em] text-white/45">
                  Visual story 001
                </p>

                <p className="max-w-md text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                  Moments that feel alive.
                </p>
              </div>

              <p className="hidden text-right text-[9px] uppercase leading-5 tracking-[0.28em] text-white/50 md:block">
                Bristol
                <br />
                Worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{
            opacity: finalOpacity,
            y: finalY,
          }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="text-center">
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-white/40">
              ZLB Studio
            </p>

            <h2 className="max-w-5xl px-6 text-[12vw] font-medium leading-[0.85] tracking-[-0.08em] md:text-[7vw]">
              Stories you can feel.
            </h2>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-5 bottom-5 z-40 flex items-center justify-between md:inset-x-10 md:bottom-8">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            ZLB 2026
          </p>

          <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Scroll experience
          </p>
        </div>
      </div>
    </section>
  );
}




