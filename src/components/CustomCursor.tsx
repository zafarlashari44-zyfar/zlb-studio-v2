"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

type CustomCursorProps = {
  enabled: boolean;
};

export default function CustomCursor({
  enabled,
}: CustomCursorProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 750,
    damping: 45,
    mass: 0.12,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 750,
    damping: 45,
    mass: 0.12,
  });

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const pointerMedia = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    );

    if (!pointerMedia.matches) {
      return;
    }

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target =
        event.target instanceof Element
          ? event.target.closest(
              "a, button, [data-cursor]",
            )
          : null;

      setActive(Boolean(target));

      setLabel(
        target?.getAttribute("data-cursor-label") ?? "",
      );
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setActive(false);
      setLabel("");
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 0.2,
        },
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
    >
      <motion.div
        animate={{
          width: active ? 76 : 12,
          height: active ? 76 : 12,
          backgroundColor: active
            ? "rgba(240, 92, 60, 0.94)"
            : "rgba(255, 255, 255, 0.92)",
          borderColor: active
            ? "rgba(240, 92, 60, 0)"
            : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 32,
        }}
        className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border mix-blend-difference"
      >
        <motion.span
          animate={{
            opacity: active && label ? 1 : 0,
            scale: active && label ? 1 : 0.7,
          }}
          className="text-[9px] font-medium uppercase tracking-[0.18em] text-black"
        >
          {label}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}




