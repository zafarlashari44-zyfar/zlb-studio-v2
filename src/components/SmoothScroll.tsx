"use client";

import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  );
}




