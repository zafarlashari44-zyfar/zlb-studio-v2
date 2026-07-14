"use client";

import {
  motion,
  type MotionValue,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import type {
  PointerEvent as ReactPointerEvent,
} from "react";
import { useRef } from "react";

type LuxuryFrameData = {
  id: string;
  image: string;
  category: string;
  title: string;
  position: string;
  depth: number;
  rotation: number;
  exitX: number;
  exitY: number;
  exitRotation: number;
  exitScale: number;
  visibility?: string;
  objectPosition?: string;
};

const frames: LuxuryFrameData[] = [
  {
    id: "main",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2600&q=92",
    category: "Wedding Story",
    title: "A Story of Two",
    position:
      "left-[12%] top-[3%] h-[91%] w-[76%]",
    depth: 180,
    rotation: -1,
    exitX: -4,
    exitY: -8,
    exitRotation: 0,
    exitScale: 1.42,
    objectPosition: "center",
  },
  {
    id: "portrait",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=90",
    category: "Portrait",
    title: "Quiet Presence",
    position:
      "left-[-8%] top-[23%] h-[48%] w-[31%]",
    depth: 65,
    rotation: -8,
    exitX: -110,
    exitY: 20,
    exitRotation: -17,
    exitScale: 0.86,
    visibility: "hidden sm:block",
    objectPosition: "center",
  },
  {
    id: "editorial",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1800&q=90",
    category: "Editorial",
    title: "Human Form",
    position:
      "right-[-7%] top-[18%] h-[48%] w-[31%]",
    depth: 80,
    rotation: 7,
    exitX: 115,
    exitY: -25,
    exitRotation: 16,
    exitScale: 0.86,
    visibility: "hidden sm:block",
    objectPosition: "center",
  },
];

export default function LensPortalHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 76,
    damping: 30,
    mass: 0.55,
    restDelta: 0.0001,
  });

  const stageRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [3.5, -3.5]),
    {
      stiffness: 120,
      damping: 26,
      mass: 0.75,
    },
  );

  const stageRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-5.5, 5.5]),
    {
      stiffness: 120,
      damping: 26,
      mass: 0.75,
    },
  );

  const stageX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-14, 14]),
    {
      stiffness: 120,
      damping: 26,
    },
  );

  const stageY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 120,
      damping: 26,
    },
  );

  const lightX = useTransform(
    pointerX,
    [-0.5, 0.5],
    [24, 82],
  );

  const lightY = useTransform(
    pointerY,
    [-0.5, 0.5],
    [20, 76],
  );

  const spotlight = useMotionTemplate`
    radial-gradient(
      circle at ${lightX}% ${lightY}%,
      rgba(240,92,60,0.14),
      rgba(240,92,60,0.045) 20%,
      transparent 48%
    )
  `;

  const contentY = useTransform(
    progress,
    [0, 0.72, 1],
    ["0%", "0%", "25%"],
  );

  const contentOpacity = useTransform(
    progress,
    [0, 0.8, 1],
    [1, 1, 0],
  );

  const headlineOneX = useTransform(
    progress,
    [0, 1],
    ["0%", "-10%"],
  );

  const headlineTwoX = useTransform(
    progress,
    [0, 1],
    ["0%", "7%"],
  );

  const headlineScale = useTransform(
    progress,
    [0, 0.76, 1],
    [1, 1, 1.1],
  );

  const headlineBlur = useTransform(
    progress,
    [0, 0.84, 1],
    ["blur(0px)", "blur(0px)", "blur(10px)"],
  );

  const stageScale = useTransform(
    progress,
    [0, 0.66, 1],
    [0.93, 1, 1.16],
  );

  const stageScrollY = useTransform(
    progress,
    [0, 1],
    ["0%", "-6%"],
  );

  const stageOpacity = useTransform(
    progress,
    [0, 0.87, 1],
    [1, 1, 0],
  );

  const backgroundScale = useTransform(
    progress,
    [0, 1],
    [1.04, 1.42],
  );

  const backgroundOpacity = useTransform(
    progress,
    [0, 0.72, 1],
    [0.2, 0.12, 0],
  );

  const ornamentRotate = useTransform(
    progress,
    [0, 1],
    [0, 160],
  );

  const counterY = useTransform(
    progress,
    [0, 1],
    ["0%", "-35%"],
  );

  const progressScale = useTransform(
    progress,
    [0, 1],
    [0, 1],
  );

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) /
        bounds.width -
        0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) /
        bounds.height -
        0.5,
    );
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[205vh] bg-[#050505]"
    >
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="sticky top-0 h-screen overflow-hidden bg-[#050505]"
      >
        <div className="absolute inset-0 bg-[#050505]" />

        <motion.div
          style={{
            scale: reducedMotion
              ? 1
              : backgroundScale,
            opacity: reducedMotion
              ? 0.15
              : backgroundOpacity,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2600&q=88')",
          }}
          className="absolute inset-0 bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/90" />

        <div className="absolute inset-0 bg-[linear-gradient(105deg,#050505_0%,rgba(5,5,5,0.98)_40%,rgba(5,5,5,0.48)_74%,#050505_100%)]" />

        <motion.div
          style={{
            background: spotlight,
          }}
          className="pointer-events-none absolute inset-0"
        />

        <div className="pointer-events-none absolute right-[-16vw] top-[-18vw] h-[54vw] w-[54vw] rounded-full border border-white/[0.035]" />

        <div className="pointer-events-none absolute right-[-4vw] top-[-6vw] h-[31vw] w-[31vw] rounded-full border border-[#f05c3c]/10" />

        <div className="pointer-events-none absolute inset-x-0 top-[19%] h-px bg-white/[0.03]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-[17%] h-px bg-white/[0.03]" />

        <div className="pointer-events-none absolute left-[6%] top-0 h-full w-px bg-white/[0.02]" />

        <div className="pointer-events-none absolute right-[6%] top-0 h-full w-px bg-white/[0.02]" />

        <div className="relative z-10 mx-auto grid h-full max-w-[2400px] grid-rows-[auto_1fr] px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36 lg:grid-cols-[0.84fr_1.16fr] lg:grid-rows-1 2xl:px-20 2xl:pb-20 2xl:pt-48">
          <motion.div
            style={{
              y: reducedMotion
                ? 0
                : contentY,
              opacity: reducedMotion
                ? 1
                : contentOpacity,
            }}
            className="relative z-20 flex flex-col justify-between pb-8 lg:pb-0 lg:pr-12 2xl:pr-24"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-[#f05c3c] shadow-[0_0_22px_rgba(240,92,60,0.8)]" />

                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/42 sm:text-[10px] 2xl:text-sm">
                    ZLB Studio
                  </p>
                </div>

                <p className="max-w-xl text-base font-light leading-7 text-white/58 md:text-xl md:leading-8 2xl:max-w-3xl 2xl:text-3xl 2xl:leading-10">
                  Cinematic photography shaped through
                  restraint, honest emotion and precise
                  visual direction.
                </p>
              </div>

              <motion.div
                style={{
                  rotate: reducedMotion
                    ? 0
                    : ornamentRotate,
                }}
                className="hidden h-16 w-16 items-center justify-center rounded-full border border-white/12 lg:flex 2xl:h-24 2xl:w-24"
              >
                <Circle className="h-2 w-2 fill-[#f05c3c] text-[#f05c3c]" />
              </motion.div>
            </div>

            <motion.div
              style={{
                scale: reducedMotion
                  ? 1
                  : headlineScale,
                filter: reducedMotion
                  ? "blur(0px)"
                  : headlineBlur,
              }}
              className="relative mt-14 origin-left lg:mt-0"
            >
              <p className="mb-6 text-[8px] uppercase tracking-[0.38em] text-white/28 2xl:text-xs">
                Independent visual studio · Bristol
              </p>

              <motion.h1
                style={{
                  x: reducedMotion
                    ? 0
                    : headlineOneX,
                }}
                className="text-[clamp(4.5rem,8.7vw,13.5rem)] font-medium leading-[0.72] tracking-[-0.1em] text-[#f4f2ed]"
              >
                STORIES
              </motion.h1>

              <motion.h2
                style={{
                  x: reducedMotion
                    ? 0
                    : headlineTwoX,
                }}
                className="ml-[4vw] mt-2 whitespace-nowrap text-[clamp(3.8rem,7.3vw,11.5rem)] font-medium leading-[0.74] tracking-[-0.095em] text-[#f05c3c] lg:ml-[1.5vw]"
              >
                WITH DEPTH.
              </motion.h2>

              <div className="mt-11 flex flex-col justify-between gap-7 border-t border-white/12 pt-7 sm:flex-row sm:items-end">
                <p className="max-w-md text-sm leading-6 text-white/42 2xl:max-w-2xl 2xl:text-xl 2xl:leading-8">
                  Weddings, portraits, events and
                  commercial stories across Bristol
                  and selected international locations.
                </p>

                <a
                  href="/work"
                  data-cursor-label="Explore"
                  className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.32em] 2xl:text-xs"
                >
                  Selected work

                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f05c3c] text-black shadow-[0_24px_75px_rgba(240,92,60,0.3)] transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 2xl:h-20 2xl:w-20">
                    <ArrowUpRight className="h-5 w-5 2xl:h-7 2xl:w-7" />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              scale: reducedMotion
                ? 1
                : stageScale,
              y: reducedMotion
                ? 0
                : stageScrollY,
              opacity: reducedMotion
                ? 1
                : stageOpacity,
            }}
            className="relative min-h-[48vh] lg:min-h-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[89%] w-full max-w-[1050px] [perspective:2000px]">
                <motion.div
                  style={{
                    rotateX: reducedMotion
                      ? 0
                      : stageRotateX,
                    rotateY: reducedMotion
                      ? 0
                      : stageRotateY,
                    x: reducedMotion
                      ? 0
                      : stageX,
                    y: reducedMotion
                      ? 0
                      : stageY,
                  }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f05c3c]/8" />

                  <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />

                  <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-white/[0.025]" />

                  {frames.map((frame) => (
                    <LuxuryPhotoFrame
                      key={frame.id}
                      frame={frame}
                      progress={progress}
                      reducedMotion={Boolean(reducedMotion)}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div
              style={{
                y: reducedMotion
                  ? 0
                  : counterY,
              }}
              className="pointer-events-none absolute bottom-1 right-0 hidden items-center gap-5 lg:flex"
            >
              <div className="text-right">
                <p className="mb-1 text-[8px] uppercase tracking-[0.3em] text-white/25 2xl:text-xs">
                  Composition 001
                </p>

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/45 2xl:text-xs">
                  Move cursor to explore
                </p>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 2xl:h-16 2xl:w-16">
                <ArrowDown className="h-4 w-4 text-white/42" />
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-[3px] w-full bg-white/[0.04]">
          <motion.div
            style={{
              scaleX: reducedMotion
                ? 0.15
                : progressScale,
            }}
            className="h-full origin-left bg-[#f05c3c]"
          />
        </div>

        <div className="film-grain pointer-events-none absolute inset-0 z-40 opacity-[0.055]" />
      </div>
    </section>
  );
}

function LuxuryPhotoFrame({
  frame,
  progress,
  reducedMotion,
}: {
  frame: LuxuryFrameData;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const x = useTransform(
    progress,
    [0, 0.68, 1],
    [0, 0, frame.exitX],
  );

  const y = useTransform(
    progress,
    [0, 0.68, 1],
    [0, 0, frame.exitY],
  );

  const scale = useTransform(
    progress,
    [0, 0.68, 1],
    [1, 1, frame.exitScale],
  );

  const rotateZ = useTransform(
    progress,
    [0, 0.68, 1],
    [0, 0, frame.exitRotation],
  );

  const opacity = useTransform(
    progress,
    [0, 0.88, 1],
    [1, 1, 0],
  );

  const imageScale = useTransform(
    progress,
    [0, 1],
    [1.06, 1.17],
  );

  const labelY = useTransform(
    progress,
    [0, 1],
    ["0%", "-18%"],
  );

  return (
    <div
      className={`absolute ${frame.position} ${
        frame.visibility ?? ""
      }`}
      style={{
        transform: `translateZ(${frame.depth}px) rotate(${frame.rotation}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.article
        style={{
          x: reducedMotion ? 0 : x,
          y: reducedMotion ? 0 : y,
          scale: reducedMotion ? 1 : scale,
          rotateZ: reducedMotion ? 0 : rotateZ,
          opacity: reducedMotion ? 1 : opacity,
        }}
        data-cursor-label="View"
        className="group relative h-full w-full overflow-hidden border border-white/[0.09] bg-[#0a0a0a] shadow-[0_65px_170px_rgba(0,0,0,0.76)]"
      >
        <motion.div
          style={{
            scale: reducedMotion
              ? 1.06
              : imageScale,
            backgroundImage: `url('${frame.image}')`,
            backgroundPosition:
              frame.objectPosition ?? "center",
          }}
          className="absolute inset-0 bg-cover transition-[filter] duration-700 group-hover:brightness-110"
        />

        <div className="absolute inset-0 bg-black/[0.08]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_35%,rgba(0,0,0,0.86)_100%)]" />

        <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-[#f05c3c]/70 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-white/40 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:left-6 sm:top-6" />

        <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-white/40 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:right-6 sm:top-6" />

        <motion.div
          style={{
            y: reducedMotion ? 0 : labelY,
          }}
          className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-5 sm:inset-x-6 sm:bottom-6 2xl:inset-x-9 2xl:bottom-9"
        >
          <div>
            <p className="mb-2 text-[7px] uppercase tracking-[0.34em] text-white/42 sm:text-[8px] 2xl:text-xs">
              {frame.category}
            </p>

            <p className="text-sm font-light tracking-[-0.035em] text-white sm:text-xl 2xl:text-3xl">
              {frame.title}
            </p>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/18 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black sm:h-10 sm:w-10 2xl:h-14 2xl:w-14">
            <ArrowUpRight className="h-3.5 w-3.5 2xl:h-5 2xl:w-5" />
          </span>
        </motion.div>

        <div className="film-grain absolute inset-0 opacity-[0.055]" />
      </motion.article>
    </div>
  );
}