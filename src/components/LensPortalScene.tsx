"use client";

import {
  Float,
  Sparkles,
  useTexture,
} from "@react-three/drei";
import {
  useFrame,
  useThree,
} from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import {
  useEffect,
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";

type LensPortalSceneProps = {
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

const bladeCount = 9;

export default function LensPortalScene({
  progress,
  reducedMotion,
}: LensPortalSceneProps) {
  const lensRef = useRef<THREE.Group>(null);
  const barrelRef = useRef<THREE.Group>(null);
  const apertureRef = useRef<THREE.Group>(null);
  const glassRef =
    useRef<
      THREE.Mesh<
        THREE.CircleGeometry,
        THREE.MeshPhysicalMaterial
      >
    >(null);

  const photoRef = useRef<THREE.Mesh>(null);

  const { size } = useThree();

  const texture = useTexture(
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=90",
  );

  const bladeShape = useMemo(() => {
    const shape = new THREE.Shape();

    shape.moveTo(-0.18, -0.62);
    shape.lineTo(1.48, -0.36);
    shape.quadraticCurveTo(
      1.7,
      0,
      1.38,
      0.48,
    );
    shape.lineTo(0.08, 0.45);
    shape.quadraticCurveTo(
      -0.25,
      0.12,
      -0.18,
      -0.62,
    );

    return shape;
  }, []);

  const mobile = size.width < 768;
  const tablet = size.width < 1200;

  useEffect(() => {
    texture.colorSpace =
      THREE.SRGBColorSpace;

    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);

  useFrame((state, delta) => {
    if (
      !lensRef.current ||
      !barrelRef.current ||
      !apertureRef.current
    ) {
      return;
    }

    const rawProgress = reducedMotion
      ? 0.32
      : progress.get();

    const easedProgress =
      THREE.MathUtils.smoothstep(
        rawProgress,
        0,
        1,
      );

    const apertureProgress =
      THREE.MathUtils.smoothstep(
        rawProgress,
        0.04,
        0.48,
      );

    const zoomProgress =
      THREE.MathUtils.smoothstep(
        rawProgress,
        0.52,
        1,
      );

    const pointerX = reducedMotion
      ? 0
      : state.pointer.x;

    const pointerY = reducedMotion
      ? 0
      : state.pointer.y;

    const baseX = mobile
      ? 0
      : tablet
        ? 1.1
        : 1.75;

    const baseY = mobile
      ? -0.35
      : -0.1;

    const baseScale = mobile
      ? 0.64
      : tablet
        ? 0.82
        : 1.02;

    const zoomScale =
      baseScale +
      zoomProgress *
        (mobile ? 1.05 : 1.55);

    lensRef.current.position.x =
      THREE.MathUtils.damp(
        lensRef.current.position.x,
        baseX + pointerX * 0.3,
        3.4,
        delta,
      );

    lensRef.current.position.y =
      THREE.MathUtils.damp(
        lensRef.current.position.y,
        baseY -
          pointerY * 0.22 +
          Math.sin(
            state.clock.elapsedTime * 0.45,
          ) *
            0.06,
        3.4,
        delta,
      );

    lensRef.current.position.z =
      THREE.MathUtils.damp(
        lensRef.current.position.z,
        -0.45 + zoomProgress * 3.7,
        3.2,
        delta,
      );

    lensRef.current.rotation.x =
      THREE.MathUtils.damp(
        lensRef.current.rotation.x,
        -pointerY * 0.08,
        3.5,
        delta,
      );

    lensRef.current.rotation.y =
      THREE.MathUtils.damp(
        lensRef.current.rotation.y,
        pointerX * 0.1,
        3.5,
        delta,
      );

    lensRef.current.rotation.z =
      THREE.MathUtils.damp(
        lensRef.current.rotation.z,
        easedProgress * 0.32,
        3,
        delta,
      );

    const currentScale =
      lensRef.current.scale.x;

    const nextScale =
      THREE.MathUtils.damp(
        currentScale,
        zoomScale,
        3,
        delta,
      );

    lensRef.current.scale.setScalar(
      nextScale,
    );

    barrelRef.current.rotation.z +=
      delta *
      (0.055 + easedProgress * 0.15);

    apertureRef.current.rotation.z -=
      delta *
      (0.06 + easedProgress * 0.12);

    apertureRef.current.children.forEach(
      (blade, index) => {
        const baseAngle =
          (index / bladeCount) *
          Math.PI *
          2;

        blade.rotation.z =
          baseAngle +
          THREE.MathUtils.lerp(
            1.03,
            0.18,
            apertureProgress,
          );

        const bladeMesh =
          blade.children[0];

        if (bladeMesh) {
          bladeMesh.position.x =
            THREE.MathUtils.lerp(
              0.18,
              1.08,
              apertureProgress,
            );
        }
      },
    );

    if (photoRef.current) {
      const photoScale =
        0.92 +
        apertureProgress * 0.12 +
        zoomProgress * 0.08;

      photoRef.current.scale.setScalar(
        photoScale,
      );

      photoRef.current.rotation.z =
        -easedProgress * 0.08;
    }

    if (glassRef.current) {
      glassRef.current.material.opacity =
        THREE.MathUtils.lerp(
          0.56,
          0.18,
          zoomProgress,
        );
    }
  });

  return (
    <>
      <ambientLight intensity={1.25} />

      <directionalLight
        position={[5, 6, 8]}
        intensity={3.2}
        color="#ffffff"
      />

      <pointLight
        position={[-4, 1, 5]}
        intensity={45}
        distance={15}
        color="#f05c3c"
      />

      <pointLight
        position={[4, -3, 4]}
        intensity={28}
        distance={13}
        color="#7ca8d8"
      />

      <Float
        speed={1.1}
        floatIntensity={
          reducedMotion ? 0 : 0.18
        }
        rotationIntensity={
          reducedMotion ? 0 : 0.06
        }
        floatingRange={[-0.04, 0.04]}
      >
        <group
          ref={lensRef}
          position={[1.75, -0.1, -0.45]}
        >
          <group ref={barrelRef}>
            <mesh
              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}
            >
              <cylinderGeometry
                args={[
                  3.15,
                  3.28,
                  2.45,
                  128,
                ]}
              />

              <meshStandardMaterial
                color="#090909"
                metalness={0.92}
                roughness={0.2}
              />
            </mesh>

            <mesh
              position={[0, 0, -1.05]}
              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}
            >
              <cylinderGeometry
                args={[
                  3.38,
                  3.38,
                  0.32,
                  128,
                ]}
              />

              <meshStandardMaterial
                color="#171717"
                metalness={0.95}
                roughness={0.16}
              />
            </mesh>

            <mesh
              position={[0, 0, -0.68]}
              rotation={[
                Math.PI / 2,
                0,
                0,
              ]}
            >
              <cylinderGeometry
                args={[
                  3.24,
                  3.24,
                  0.38,
                  128,
                ]}
              />

              <meshStandardMaterial
                color="#222222"
                metalness={0.88}
                roughness={0.3}
              />
            </mesh>

            <mesh position={[0, 0, 1.16]}>
              <torusGeometry
                args={[
                  2.85,
                  0.32,
                  32,
                  160,
                ]}
              />

              <meshStandardMaterial
                color="#080808"
                metalness={0.95}
                roughness={0.14}
              />
            </mesh>

            <mesh position={[0, 0, 1.39]}>
              <torusGeometry
                args={[
                  2.92,
                  0.035,
                  16,
                  160,
                ]}
              />

              <meshBasicMaterial color="#f05c3c" />
            </mesh>

            <mesh position={[0, 0, 1.43]}>
              <torusGeometry
                args={[
                  2.66,
                  0.018,
                  12,
                  160,
                ]}
              />

              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.48}
              />
            </mesh>

            {Array.from({
              length: 48,
            }).map((_, index) => {
              const angle =
                (index / 48) *
                Math.PI *
                2;

              const major =
                index % 4 === 0;

              return (
                <group
                  key={index}
                  rotation={[
                    0,
                    0,
                    angle,
                  ]}
                >
                  <mesh
                    position={[
                      0,
                      3.16,
                      0.85,
                    ]}
                  >
                    <boxGeometry
                      args={[
                        major
                          ? 0.025
                          : 0.012,
                        major
                          ? 0.19
                          : 0.1,
                        0.025,
                      ]}
                    />

                    <meshBasicMaterial
                      color={
                        major
                          ? "#f05c3c"
                          : "#666666"
                      }
                    />
                  </mesh>
                </group>
              );
            })}
          </group>

          <mesh
            ref={photoRef}
            position={[0, 0, 1.04]}
          >
            <circleGeometry
              args={[2.48, 128]}
            />

            <meshBasicMaterial
              map={texture}
              toneMapped={false}
            />
          </mesh>

          <mesh position={[0, 0, 1.08]}>
            <circleGeometry
              args={[2.5, 128]}
            />

            <meshBasicMaterial
              color="#050505"
              transparent
              opacity={0.16}
            />
          </mesh>

          <group
            ref={apertureRef}
            position={[0, 0, 1.22]}
          >
            {Array.from({
              length: bladeCount,
            }).map((_, index) => {
              const angle =
                (index /
                  bladeCount) *
                Math.PI *
                2;

              return (
                <group
                  key={index}
                  rotation={[
                    0,
                    0,
                    angle + 1.03,
                  ]}
                >
                  <mesh
                    position={[
                      0.18,
                      0,
                      0,
                    ]}
                  >
                    <shapeGeometry
                      args={[
                        bladeShape,
                      ]}
                    />

                    <meshStandardMaterial
                      color="#070707"
                      metalness={0.92}
                      roughness={0.18}
                      side={
                        THREE.DoubleSide
                      }
                    />
                  </mesh>
                </group>
              );
            })}
          </group>

          <mesh
            ref={glassRef}
            position={[0, 0, 1.46]}
          >
            <circleGeometry
              args={[2.62, 128]}
            />

            <meshPhysicalMaterial
              color="#8ab4d4"
              transparent
              opacity={0.56}
              transmission={0.86}
              thickness={0.45}
              roughness={0.04}
              metalness={0.05}
              clearcoat={1}
              clearcoatRoughness={0.05}
              ior={1.45}
              reflectivity={1}
            />
          </mesh>

          <mesh
            position={[
              -0.72,
              0.78,
              1.5,
            ]}
            rotation={[0, 0, -0.45]}
          >
            <planeGeometry
              args={[0.7, 2.6]}
            />

            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.12}
              blending={
                THREE.AdditiveBlending
              }
              depthWrite={false}
            />
          </mesh>

          <mesh position={[0, 0, 1.52]}>
            <torusGeometry
              args={[
                2.58,
                0.012,
                12,
                160,
              ]}
            />

            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.34}
            />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={mobile ? 20 : 55}
        scale={
          mobile
            ? [8, 5, 5]
            : [14, 8, 8]
        }
        size={1.2}
        speed={0.16}
        opacity={0.42}
        color="#f05c3c"
        noise={1.4}
      />
    </>
  );
}