"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type PageLoaderProps = {
  onComplete: () => void;
};

export default function PageLoader({
  onComplete,
}: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const startedAt = performance.now();

    let animationFrame = 0;
    let completionTimer = 0;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startedAt;
      const percentage = Math.min(
        100,
        Math.round((elapsed / duration) * 100),
      );

      setProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
        return;
      }

      completionTimer = window.setTimeout(() => {
        setVisible(false);
      }, 180);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    const previousBodyOverflow =
      document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow =
        previousHtmlOverflow;

      document.body.style.overflow =
        previousBodyOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9998] overflow-hidden bg-[#0a0a0a] text-white"
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              ZLB Studio
            </p>

            <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Visual stories
            </p>
          </div>

          <div className="flex h-full items-center justify-center">
            <div className="relative overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[30vw] font-semibold leading-[0.7] tracking-[-0.1em] md:text-[18vw]"
              >
                ZLB
              </motion.h2>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-7 md:inset-x-10 md:bottom-9">
            <div className="mb-4 flex items-end justify-between">
              <p className="max-w-[200px] text-[9px] uppercase leading-4 tracking-[0.25em] text-white/40">
                Photography
                <br />
                Film
                <br />
                Creative direction
              </p>

              <p className="font-mono text-4xl font-light tracking-[-0.06em] md:text-6xl">
                {String(progress).padStart(3, "0")}
              </p>
            </div>

            <div className="h-px overflow-hidden bg-white/15">
              <motion.div
                className="h-full origin-left bg-[#f05c3c]"
                animate={{
                  scaleX: progress / 100,
                }}
                transition={{
                  duration: 0.1,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 top-1/2 h-px w-full origin-left bg-white/10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}




