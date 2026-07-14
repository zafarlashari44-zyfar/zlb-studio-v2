"use client";

import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

const frames = [
  {
    title: "The Ceremony",
    category: "Wedding",
    location: "Bristol",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=92",
  },
  {
    title: "The Portrait",
    category: "Editorial",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=92",
  },
  {
    title: "The Celebration",
    category: "Event",
    location: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
  },
];

export default function ShowreelExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const reducedMotion = useReducedMotion();

  const [desktop, setDesktop] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rawRotateX = useTransform(
    pointerY,
    [-0.5, 0.5],
    [4, -4],
  );

  const rawRotateY = useTransform(
    pointerX,
    [-0.5, 0.5],
    [-5, 5],
  );

  const rotateX = useSpring(rawRotateX, {
    stiffness: 130,
    damping: 24,
    mass: 0.7,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 130,
    damping: 24,
    mass: 0.7,
  });

  const imagePointerX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 130,
      damping: 24,
    },
  );

  const imagePointerY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-14, 14]),
    {
      stiffness: 130,
      damping: 24,
    },
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameScaleX = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    desktop
      ? [0.86, 1.15, 1.39]
      : [0.94, 1.03, 1.14],
  );

  const frameScaleY = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    desktop
      ? [0.86, 1.15, 1.39]
      : [0.94, 1.03, 1.17],
  );

  const frameRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-4, 0, 0],
  );

  const frameY = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["7vh", "0vh", "0vh"],
  );

  const frameRadius = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    ["30px", "12px", "0px"],
  );

  const frameShadow = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [
      "0 80px 180px rgba(0,0,0,0.85)",
      "0 30px 90px rgba(0,0,0,0.65)",
      "0 0 0 rgba(0,0,0,0)",
    ],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.32],
    [1, 1, 0],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.32],
    ["0px", "-80px"],
  );

  const firstOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [1, 1, 0],
  );

  const secondOpacity = useTransform(
    scrollYProgress,
    [0.27, 0.4, 0.62, 0.72],
    [0, 1, 1, 0],
  );

  const thirdOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.76, 1],
    [0, 1, 1],
  );

  const firstScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1.14, 1.02],
  );

  const secondScale = useTransform(
    scrollYProgress,
    [0.27, 0.72],
    [1.13, 1.02],
  );

  const thirdScale = useTransform(
    scrollYProgress,
    [0.62, 1],
    [1.12, 1],
  );

  const firstMetaOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.18, 0.32],
    [0, 1, 0],
  );

  const secondMetaOpacity = useTransform(
    scrollYProgress,
    [0.34, 0.46, 0.61],
    [0, 1, 0],
  );

  const thirdMetaOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.8, 0.9],
    [0, 1, 0],
  );

  const finalOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.94],
    [0, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.82, 0.94],
    ["50px", "0px"],
  );

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    );

    const updateDesktop = () => {
      setDesktop(mediaQuery.matches);
    };

    updateDesktop();

    mediaQuery.addEventListener("change", updateDesktop);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateDesktop,
      );
    };
  }, []);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (!desktop || reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width -
        0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height -
        0.5,
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] bg-[#050505] text-[#f4f2ed]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,92,60,0.09),transparent_42%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="film-grain absolute inset-0 opacity-[0.07]" />

        <motion.div
          style={{
            opacity: introOpacity,
            y: introY,
          }}
          className="absolute inset-x-5 top-28 z-30 flex items-start justify-between md:inset-x-10 md:top-32"
        >
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              Scroll directed showreel
            </p>

            <h2 className="max-w-4xl text-[14vw] font-medium leading-[0.82] tracking-[-0.08em] md:text-[7vw]">
              Motion inside every frame.
            </h2>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <p className="text-right text-[9px] uppercase leading-5 tracking-[0.28em] text-[#9a9a9a]">
              Scroll
              <br />
              To play
            </p>

            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15">
              <ArrowDown size={18} />
            </span>
          </div>
        </motion.div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "1800px",
          }}
        >
          <motion.div
            data-cursor
            data-cursor-label="Reel"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            style={{
              scaleX: frameScaleX,
              scaleY: frameScaleY,
              rotateZ: frameRotate,
              rotateX:
                desktop && !reducedMotion ? rotateX : 0,
              rotateY:
                desktop && !reducedMotion ? rotateY : 0,
              y: frameY,
              borderRadius: frameRadius,
              boxShadow: frameShadow,
              transformStyle: "preserve-3d",
            }}
            className="relative h-[86vh] w-[88vw] max-w-[1200px] overflow-hidden border border-white/10 bg-[#0a0a0a] md:h-[72vh] md:w-[72vw]"
          >
            <motion.div
              style={{
                opacity: firstOpacity,
                scale: firstScale,
                x:
                  desktop && !reducedMotion
                    ? imagePointerX
                    : 0,
                y:
                  desktop && !reducedMotion
                    ? imagePointerY
                    : 0,
                backgroundImage: `url("${frames[0].image}")`,
              }}
              className="absolute -inset-[5%] bg-cover bg-center"
            />

            <motion.div
              style={{
                opacity: secondOpacity,
                scale: secondScale,
                x:
                  desktop && !reducedMotion
                    ? imagePointerX
                    : 0,
                y:
                  desktop && !reducedMotion
                    ? imagePointerY
                    : 0,
                backgroundImage: `url("${frames[1].image}")`,
              }}
              className="absolute -inset-[5%] bg-cover bg-center"
            />

            <motion.div
              style={{
                opacity: thirdOpacity,
                scale: thirdScale,
                x:
                  desktop && !reducedMotion
                    ? imagePointerX
                    : 0,
                y:
                  desktop && !reducedMotion
                    ? imagePointerY
                    : 0,
                backgroundImage: `url("${frames[2].image}")`,
              }}
              className="absolute -inset-[5%] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),transparent_38%,rgba(0,0,0,0.88))]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.45)_110%)]" />

            <div className="film-grain absolute inset-0 opacity-[0.1]" />

            <FrameMeta
              frame={frames[0]}
              number="01"
              opacity={firstMetaOpacity}
            />

            <FrameMeta
              frame={frames[1]}
              number="02"
              opacity={secondMetaOpacity}
            />

            <FrameMeta
              frame={frames[2]}
              number="03"
              opacity={thirdMetaOpacity}
            />

            <motion.div
              style={{
                opacity: finalOpacity,
                y: finalY,
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/35 px-6 text-center"
            >
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-white/50">
                  ZLB Studio
                </p>

                <h3 className="max-w-5xl text-[13vw] font-medium leading-[0.84] tracking-[-0.08em] md:text-[7vw]">
                  Every frame has a pulse.
                </h3>
              </div>
            </motion.div>

            <div className="absolute inset-x-5 bottom-5 z-30 md:inset-x-8 md:bottom-7">
              <div className="mb-3 flex items-center justify-between text-[8px] uppercase tracking-[0.28em] text-white/45">
                <span>Showreel 2026</span>
                <span>Scroll progress</span>
              </div>

              <div className="h-px overflow-hidden bg-white/20">
                <motion.div
                  style={{
                    width: progressWidth,
                  }}
                  className="h-full bg-[#f05c3c]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-5 bottom-6 z-20 flex items-center justify-between md:inset-x-10 md:bottom-8">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Photography in motion
          </p>

          <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Bristol and worldwide
          </p>
        </div>
      </div>
    </section>
  );
}

type FrameMetaProps = {
  frame: (typeof frames)[number];
  number: string;
  opacity: MotionValue<number>;
};

function FrameMeta({
  frame,
  number,
  opacity,
}: FrameMetaProps) {
  return (
    <motion.div
      style={{
        opacity,
        transform: "translateZ(55px)",
      }}
      className="absolute inset-0 z-20 flex flex-col justify-between p-5 md:p-8"
    >
      <div className="flex items-start justify-between">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
          Frame {number}
        </p>

        <p className="text-right text-[9px] uppercase leading-5 tracking-[0.26em] text-white/55">
          {frame.category}
          <br />
          {frame.location}
        </p>
      </div>

      <div className="pb-10 md:pb-12">
        <h3 className="max-w-4xl text-[13vw] font-medium leading-[0.82] tracking-[-0.08em] md:text-[6vw]">
          {frame.title}
        </h3>
      </div>
    </motion.div>
  );
}




