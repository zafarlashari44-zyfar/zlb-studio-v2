"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

type Story = {
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  layout: string;
  aspect: string;
  scrollDistance: number;
  rotateStart: number;
  rotateEnd: number;
  imagePosition?: string;
};

const stories: Story[] = [
  {
    number: "01",
    title: "A Story in Red",
    category: "Wedding",
    location: "Bristol",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=92",
    layout: "lg:col-span-7 lg:col-start-1",
    aspect: "aspect-[4/5] md:aspect-[16/11]",
    scrollDistance: 70,
    rotateStart: -3,
    rotateEnd: 2,
    imagePosition: "center",
  },
  {
    number: "02",
    title: "Quiet Beauty",
    category: "Portrait",
    location: "London",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=92",
    layout: "lg:col-span-4 lg:col-start-9 lg:mt-44",
    aspect: "aspect-[4/5]",
    scrollDistance: 110,
    rotateStart: 4,
    rotateEnd: -2,
    imagePosition: "center",
  },
  {
    number: "03",
    title: "After Midnight",
    category: "Editorial",
    location: "Manchester",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=92",
    layout: "lg:col-span-4 lg:col-start-2",
    aspect: "aspect-[4/5]",
    scrollDistance: 90,
    rotateStart: -4,
    rotateEnd: 3,
    imagePosition: "center",
  },
  {
    number: "04",
    title: "Modern Rituals",
    category: "Brand Story",
    location: "Birmingham",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=3840&q=92",
    layout: "lg:col-span-7 lg:col-start-6 lg:-mt-20",
    aspect: "aspect-[4/5] md:aspect-[16/11]",
    scrollDistance: 60,
    rotateStart: 3,
    rotateEnd: -2,
    imagePosition: "center",
  },
];

function StoryCard({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rawRotateX = useTransform(
    pointerY,
    [-0.5, 0.5],
    [8, -8],
  );

  const rawRotateY = useTransform(
    pointerX,
    [-0.5, 0.5],
    [-9, 9],
  );

  const rotateX = useSpring(rawRotateX, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const imageX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 150,
      damping: 24,
    },
  );

  const imageY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 150,
      damping: 24,
    },
  );

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      story.scrollDistance,
      0,
      -story.scrollDistance,
    ],
  );

  const cardRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      story.rotateStart,
      0,
      story.rotateEnd,
    ],
  );

  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.91, 1, 0.95],
  );

  const imageScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5%", "5%"],
  );

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    );

    const updatePointerType = () => {
      setFinePointer(pointerQuery.matches);
    };

    updatePointerType();
    pointerQuery.addEventListener("change", updatePointerType);

    return () => {
      pointerQuery.removeEventListener(
        "change",
        updatePointerType,
      );
    };
  }, []);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    if (!finePointer || reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const horizontal =
      (event.clientX - bounds.left) / bounds.width - 0.5;

    const vertical =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(horizontal);
    pointerY.set(vertical);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      style={
        reducedMotion
          ? undefined
          : {
              y: cardY,
              rotateZ: cardRotate,
              scale: cardScale,
            }
      }
      className={story.layout}
    >
      <motion.a
        href="#contact"
        data-cursor-label="View"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{
          rotateX:
            finePointer && !reducedMotion ? rotateX : 0,
          rotateY:
            finePointer && !reducedMotion ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          delay: index * 0.06,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative block"
      >
        <div
          className={`relative ${story.aspect} overflow-hidden border border-white/10 bg-[#111111] shadow-[0_50px_140px_rgba(0,0,0,0.65)]`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            style={{
              x:
                finePointer && !reducedMotion
                  ? imageX
                  : 0,
              y:
                finePointer && !reducedMotion
                  ? imageY
                  : imageScrollY,
              backgroundImage: `url("${story.image}")`,
              backgroundPosition:
                story.imagePosition ?? "center",
            }}
            whileHover={
              finePointer && !reducedMotion
                ? {
                    scale: 1.12,
                  }
                : undefined
            }
            transition={{
              scale: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute -inset-[8%] scale-[1.08] bg-cover"
          />

          <div className="absolute inset-0 bg-black/15 transition-colors duration-700 group-hover:bg-black/30" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),transparent_45%,rgba(0,0,0,0.88))]" />

          <div className="film-grain absolute inset-0 opacity-[0.1]" />

          <div
            className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7"
            style={{
              transform: "translateZ(45px)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-[#f05c3c]" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
              Story {story.number}
            </span>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-5 md:p-8"
            style={{
              transform: "translateZ(55px)",
            }}
          >
            <div className="mb-5 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                  {story.category}
                </p>

                <h3 className="max-w-xl text-4xl font-medium leading-[0.9] tracking-[-0.06em] text-white md:text-6xl">
                  {story.title}
                </h3>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-700 group-hover:rotate-45 md:h-16 md:w-16">
                <ArrowUpRight size={22} />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/20 pt-4 text-[9px] uppercase tracking-[0.24em] text-white/50">
              <span>{story.location}</span>
              <span>{story.year}</span>
            </div>
          </div>

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 1.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 top-0 h-px w-full origin-left bg-[#f05c3c]"
          />
        </div>
      </motion.a>
    </motion.article>
  );
}

export default function InteractiveStories() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-[#f4f2ed] md:px-10 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,92,60,0.12),transparent_38%)]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="mb-24 grid gap-10 border-b border-white/15 pb-14 md:mb-40 md:grid-cols-[0.65fr_1.35fr] md:pb-20">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              Selected stories
            </p>

            <p className="max-w-xs text-sm leading-6 text-[#9a9a9a]">
              Move your cursor across each frame.
              Scroll to change its depth.
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
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="max-w-5xl text-[14vw] font-medium leading-[0.82] tracking-[-0.08em] md:text-[7.2vw]"
            >
              Frames with depth.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-36">
          {stories.map((story, index) => (
            <StoryCard
              key={story.number}
              story={story}
              index={index}
            />
          ))}
        </div>

        <div className="mt-28 flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-8 md:mt-48 md:flex-row md:items-end">
          <p className="max-w-xl text-3xl font-light leading-tight tracking-[-0.045em] md:text-5xl">
            Every story deserves more than a static gallery.
          </p>

          <a
            href="#contact"
            data-cursor-label="Book"
            className="group flex items-center gap-5 text-xs uppercase tracking-[0.24em]"
          >
            Start your story

            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}




