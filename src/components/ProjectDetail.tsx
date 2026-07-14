"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/data/projects";

export default function ProjectDetail({
  project,
}: {
  project: Project;
}) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1.25],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );

  return (
    <main className="bg-[#050505] text-[#f4f2ed]">
      <section
        ref={heroRef}
        className="relative h-[125vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              backgroundImage: `url("${project.hero}")`,
            }}
            className="absolute inset-0 bg-cover bg-center"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),transparent_40%,rgba(0,0,0,0.92))]" />

          <div className="film-grain absolute inset-0 opacity-[0.12]" />

          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="relative z-10 mx-auto flex h-full max-w-[2400px] flex-col justify-between px-5 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36"
          >
            <div className="flex items-start justify-between">
              <Link
                href="/work"
                data-cursor-label="Back"
                className="flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/70"
              >
                <ArrowLeft size={16} />
                All work
              </Link>

              <p className="text-right text-[9px] uppercase leading-5 tracking-[0.28em] text-white/60">
                {project.category}
                <br />
                {project.location}
                <br />
                {project.year}
              </p>
            </div>

            <div>
              <p className="mb-6 text-[9px] uppercase tracking-[0.34em] text-white/55">
                ZLB visual story
              </p>

              <h1 className="max-w-7xl text-[18vw] font-medium leading-[0.72] tracking-[-0.095em] md:text-[10vw]">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/75 md:text-2xl md:leading-9">
                {project.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[2400px]">
          <div className="grid gap-12 border-b border-white/10 pb-20 md:grid-cols-[0.7fr_1.3fr] md:pb-28">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              Project overview
            </p>

            <motion.p
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.85,
              }}
              className="max-w-5xl text-[9vw] font-light leading-[1] tracking-[-0.06em] md:text-[4.7vw]"
            >
              {project.description}
            </motion.p>
          </div>

          <div className="grid border-b border-white/10 md:grid-cols-4">
            {project.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`border-b border-white/10 py-10 md:border-b-0 md:px-8 md:py-14 ${
                  index < project.stats.length - 1
                    ? "md:border-r"
                    : ""
                }`}
              >
                <p className="mb-6 text-[13vw] font-medium leading-none tracking-[-0.08em] md:text-[5vw]">
                  {stat.value}
                </p>

                <p className="text-[9px] uppercase tracking-[0.28em] text-[#9a9a9a]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-14 py-24 md:grid-cols-3 md:py-36">
            <StoryText
              number="01"
              title="The brief"
              text={project.brief}
            />

            <StoryText
              number="02"
              title="The approach"
              text={project.approach}
            />

            <StoryText
              number="03"
              title="The result"
              text={project.result}
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10 md:pb-44">
        <div className="mx-auto grid max-w-[2400px] gap-8 md:grid-cols-12">
          {project.gallery.map((image, index) => (
            <motion.figure
              key={`${project.slug}-${index}`}
              initial={{
                opacity: 0,
                y: 70,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden border border-white/10 ${
                index % 4 === 0
                  ? "aspect-[16/10] md:col-span-8"
                  : index % 4 === 1
                    ? "aspect-[4/5] md:col-span-4"
                    : index % 4 === 2
                      ? "aspect-[4/5] md:col-span-5"
                      : "aspect-[16/10] md:col-span-7"
              }`}
            >
              <motion.div
                style={{
                  backgroundImage: `url("${image}")`,
                }}
                initial={{
                  scale: 1.12,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 bg-cover bg-center"
              />

              <div className="film-grain absolute inset-0 opacity-[0.08]" />

              <div className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.28em] text-white/55">
                Frame {String(index + 1).padStart(2, "0")}
              </div>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto flex max-w-[2400px] flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="mb-7 text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              Begin your project
            </p>

            <h2 className="max-w-5xl text-[15vw] font-medium leading-[0.8] tracking-[-0.09em] md:text-[8vw]">
              Create your own story.
            </h2>
          </div>

          <Link
            href="/#contact"
            data-cursor-label="Book"
            className="group flex items-center gap-5 text-[10px] uppercase tracking-[0.28em]"
          >
            Book a shoot

            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={21} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function StoryText({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.75,
      }}
      className="border-t border-white/10 pt-7"
    >
      <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-[#f05c3c]">
        {number}
      </p>

      <h2 className="mb-6 text-3xl font-medium tracking-[-0.05em]">
        {title}
      </h2>

      <p className="text-base font-light leading-8 text-[#9a9a9a]">
        {text}
      </p>
    </motion.article>
  );
}




