"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

function getPageName(pathname: string) {
  if (pathname === "/") {
    return "Home";
  }

  if (pathname.startsWith("/work/")) {
    return "Visual Story";
  }

  if (pathname.startsWith("/work")) {
    return "Work";
  }

  if (pathname.startsWith("/studio")) {
    return "Studio";
  }

  if (pathname.startsWith("/contact")) {
    return "Contact";
  }

  return "ZLB Studio";
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const pathname = usePathname();

  const firstRender = useRef(true);

  const [transitioning, setTransitioning] =
    useState(false);

  const [transitionId, setTransitionId] =
    useState(0);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setTransitionId((current) => current + 1);
    setTransitioning(true);

    const timer = window.setTimeout(() => {
      setTransitioning(false);
    }, 1150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  const pageName = getPageName(pathname);

  return (
    <>
      {children}

      <AnimatePresence>
        {transitioning && (
          <motion.div
            key={transitionId}
            className="pointer-events-none fixed inset-0 z-[9996] overflow-hidden"
          >
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: ["-100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 1.05,
                times: [0, 0.38, 0.65, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-0 bg-[#f05c3c]"
            />

            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: ["-100%", "0%", "0%", "100%"],
              }}
              transition={{
                duration: 1.05,
                delay: 0.07,
                times: [0, 0.38, 0.65, 1],
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-0 bg-[#050505]"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [30, 0, 0, -30],
              }}
              transition={{
                duration: 0.85,
                delay: 0.16,
                times: [0, 0.3, 0.7, 1],
              }}
              className="absolute inset-0 flex items-center justify-center text-[#f4f2ed]"
            >
              <div className="text-center">
                <p className="mb-5 text-[9px] uppercase tracking-[0.38em] text-white/45">
                  ZLB Studio
                </p>

                <p className="text-[13vw] font-medium leading-[0.75] tracking-[-0.09em] md:text-[7vw]">
                  {pageName}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: [0, 1, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                times: [0, 0.4, 0.7, 1],
              }}
              className="absolute bottom-10 left-10 right-10 h-px origin-left bg-[#f05c3c]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}