"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type {
  PointerEvent as ReactPointerEvent,
} from "react";
import { useEffect, useState } from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectFilter,
} from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [canTilt, setCanTilt] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.5,
    },
  );

  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.5,
    },
  );

  const imageX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-15, 15]),
    {
      stiffness: 150,
      damping: 24,
    },
  );

  const imageY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-15, 15]),
    {
      stiffness: 150,
      damping: 24,
    },
  );

  useEffect(() => {
    const query = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    );

    const updateTilt = () => {
      setCanTilt(query.matches);
    };

    updateTilt();
    query.addEventListener("change", updateTilt);

    return () => {
      query.removeEventListener(
        "change",
        updateTilt,
      );
    };
  }, []);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLAnchorElement>,
  ) => {
    if (!canTilt) {
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
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 40,
        scale: 0.96,
      }}
      transition={{
        delay: index * 0.06,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={
        index % 3 === 0
          ? "lg:col-span-7"
          : "lg:col-span-5"
      }
    >
      <motion.div
        style={{
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        <Link
          href={`/work/${project.slug}`}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          data-cursor-label="View"
          className="group block"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#111111] md:aspect-[16/11]">
            <motion.div
              style={{
                x: canTilt ? imageX : 0,
                y: canTilt ? imageY : 0,
                backgroundImage: `url("${project.cover}")`,
              }}
              whileHover={
                canTilt
                  ? {
                      scale: 1.1,
                    }
                  : undefined
              }
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -inset-[6%] scale-[1.06] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/15 transition-colors duration-700 group-hover:bg-black/30" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.92))]" />

            <div className="film-grain absolute inset-0 opacity-[0.1]" />

            <div
              className="absolute inset-0 flex flex-col justify-between p-5 md:p-8"
              style={{
                transform: "translateZ(45px)",
              }}
            >
              <div className="flex items-start justify-between">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.25em] text-white/55">
                  {project.category}
                  <br />
                  {project.year}
                </p>
              </div>

              <div>
                <div className="mb-5 flex items-end justify-between gap-5">
                  <h2 className="max-w-3xl text-[12vw] font-medium leading-[0.82] tracking-[-0.08em] md:text-[6vw] lg:text-[4.8vw]">
                    {project.title}
                  </h2>

                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-700 group-hover:rotate-45 md:h-16 md:w-16">
                    <ArrowUpRight size={21} />
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-white/20 pt-4 text-[9px] uppercase tracking-[0.24em] text-white/50">
                  <span>{project.location}</span>
                  <span>View story</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default function WorkIndex() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter,
        );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-28 pt-36 text-[#f4f2ed] md:px-10 md:pb-44 md:pt-44">
      <div className="pointer-events-none absolute right-[-20vw] top-[-20vw] h-[60vw] w-[60vw] rounded-full bg-[#f05c3c]/10 blur-[150px]" />

      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="mb-16 border-b border-white/10 pb-14 md:mb-24 md:pb-20">
          <p className="mb-8 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
            Selected work
          </p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: "0%",
              }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[22vw] font-medium leading-[0.72] tracking-[-0.095em] md:text-[12vw]"
            >
              STORIES
            </motion.h1>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-lg font-light leading-8 text-[#9a9a9a] md:text-xl">
              Photography collections built around people,
              emotion and visual direction.
            </p>

            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveFilter(category)
                  }
                  className={`rounded-full border px-5 py-3 text-[9px] uppercase tracking-[0.24em] transition-all duration-300 ${
                    activeFilter === category
                      ? "border-[#f05c3c] bg-[#f05c3c] text-black"
                      : "border-white/15 text-[#9a9a9a] hover:border-white/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-y-20"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}




