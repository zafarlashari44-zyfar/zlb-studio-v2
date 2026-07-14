"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 250,
    suffix: "+",
    label: "Stories photographed",
    description:
      "Weddings, portraits, events and commercial stories created across the United Kingdom.",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years of experience",
    description:
      "A visual approach developed through photography, filmmaking and creative direction.",
  },
  {
    value: 120,
    suffix: "+",
    label: "Clients and couples",
    description:
      "People and brands who trusted ZLB Studio to preserve their most important moments.",
  },
  {
    value: 24,
    suffix: "h",
    label: "Preview delivery",
    description:
      "Selected preview frames delivered quickly while the full collection is being prepared.",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(counterRef, {
    once: true,
    amount: 0.7,
  });

  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
    };
  }, [inView, motionValue, value]);

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    ["5%", "-12%"],
  );

  const circleRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 220],
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "30%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-[#f4f2ed] md:px-10 md:py-44"
    >
      <motion.div
        style={{
          y: glowY,
        }}
        className="pointer-events-none absolute right-[-15vw] top-[-20vw] h-[55vw] w-[55vw] rounded-full bg-[#f05c3c]/10 blur-[130px]"
      />

      <motion.div
        style={{
          rotate: circleRotate,
        }}
        className="pointer-events-none absolute right-[5vw] top-[12vw] hidden h-[26vw] w-[26vw] rounded-full border border-white/[0.05] lg:block"
      >
        <div className="absolute inset-[18%] rounded-full border border-[#f05c3c]/20" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]" />
      </motion.div>

      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="mb-20 border-b border-white/10 pb-14 md:mb-32 md:pb-20">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
              Studio in numbers
            </p>

            <motion.div
              style={{
                rotate: circleRotate,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15"
            >
              <ArrowDownRight
                size={20}
                className="text-[#f05c3c]"
              />
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              style={{
                x: titleX,
              }}
              className="whitespace-nowrap text-[18vw] font-medium leading-[0.76] tracking-[-0.09em] md:text-[10vw]"
            >
              EXPERIENCE IN FRAME
            </motion.h2>
          </div>
        </div>

        <div className="grid border-t border-white/10 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
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
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative border-b border-white/10 py-12 md:min-h-[430px] md:p-10 ${
                index % 2 === 0
                  ? "md:border-r"
                  : ""
              }`}
            >
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#f05c3c] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-20">
                <div className="flex items-start justify-between">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#9a9a9a] transition-colors duration-500 group-hover:text-black/60">
                    Statistic {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#f05c3c] transition-colors duration-500 group-hover:bg-black" />
                </div>

                <div>
                  <p className="mb-7 text-[22vw] font-medium leading-[0.65] tracking-[-0.1em] transition-colors duration-500 group-hover:text-black md:text-[9vw]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <div className="grid gap-5 border-t border-white/15 pt-6 transition-colors duration-500 group-hover:border-black/20 lg:grid-cols-2">
                    <h3 className="text-xl font-medium tracking-[-0.04em] transition-colors duration-500 group-hover:text-black">
                      {stat.label}
                    </h3>

                    <p className="text-sm leading-6 text-[#9a9a9a] transition-colors duration-500 group-hover:text-black/65">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}




