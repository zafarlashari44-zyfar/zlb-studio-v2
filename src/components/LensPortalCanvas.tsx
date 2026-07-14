"use client";

import {
  Canvas,
} from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { Suspense } from "react";

import LensPortalScene from "@/components/LensPortalScene";

type LensPortalCanvasProps = {
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

export default function LensPortalCanvas({
  progress,
  reducedMotion,
}: LensPortalCanvasProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 9.2],
        fov: 42,
        near: 0.1,
        far: 40,
      }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference:
          "high-performance",
      }}
      performance={{
        min: 0.5,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(
          "#050505",
          0,
        );
      }}
    >
      <Suspense fallback={null}>
        <LensPortalScene
          progress={progress}
          reducedMotion={reducedMotion}
        />
      </Suspense>
    </Canvas>
  );
}