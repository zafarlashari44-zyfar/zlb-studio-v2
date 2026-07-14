"use client";

import "lenis/dist/lenis.css";

import {
  ReactLenis,
  type LenisRef,
} from "lenis/react";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import PageTransition from "@/components/PageTransition";

type SiteExperienceProps = {
  children: React.ReactNode;
};

type ScrollTriggerController = {
  update: () => void;
  refresh: () => void;
};

const SiteReadyContext = createContext(false);

export function useSiteReady() {
  return useContext(SiteReadyContext);
}

export default function SiteExperience({
  children,
}: SiteExperienceProps) {
  const pathname = usePathname();

  const lenisRef = useRef<LenisRef>(null);

  const scrollTriggerRef =
    useRef<ScrollTriggerController | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    let removeTicker:
      | (() => void)
      | undefined;

    let removeScrollListener:
      | (() => void)
      | undefined;

    const setupScrolling = async () => {
      const gsapModule = await import("gsap");

      const scrollTriggerModule = await import(
        "gsap/ScrollTrigger"
      );

      if (!mounted) {
        return;
      }

      const gsap = gsapModule.gsap;

      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = lenisRef.current?.lenis;

      if (!lenis) {
        return;
      }

      const handleLenisScroll = () => {
        ScrollTrigger.update();
      };

      const handleGsapTick = (time: number) => {
        lenis.raf(time * 1000);
      };

      lenis.on(
        "scroll",
        handleLenisScroll,
      );

      gsap.ticker.add(handleGsapTick);

      gsap.ticker.lagSmoothing(0);

      scrollTriggerRef.current =
        ScrollTrigger;

      removeTicker = () => {
        gsap.ticker.remove(handleGsapTick);
      };

      removeScrollListener = () => {
        lenis.off(
          "scroll",
          handleLenisScroll,
        );
      };

      requestAnimationFrame(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      });
    };

    setupScrolling();

    return () => {
      mounted = false;

      removeTicker?.();
      removeScrollListener?.();

      scrollTriggerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    if (!lenis) {
      return;
    }

    if (ready) {
      lenis.start();

      requestAnimationFrame(() => {
        lenis.resize();

        scrollTriggerRef.current?.refresh();
      });

      return;
    }

    lenis.stop();
  }, [ready]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    const lenis = lenisRef.current?.lenis;

    lenis?.scrollTo(0, {
      immediate: true,
      force: true,
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    const refreshTimer = window.setTimeout(() => {
      lenis?.resize();

      scrollTriggerRef.current?.refresh();
    }, 180);

    return () => {
      window.clearTimeout(refreshTimer);
    };
  }, [pathname, ready]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    let animationFrame = 0;

    const refreshScrollSystem = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame =
        requestAnimationFrame(() => {
          lenisRef.current?.lenis?.resize();

          scrollTriggerRef.current?.refresh();
        });
    };

    document.fonts.ready.then(
      refreshScrollSystem,
    );

    const firstRefresh =
      window.setTimeout(
        refreshScrollSystem,
        250,
      );

    const secondRefresh =
      window.setTimeout(
        refreshScrollSystem,
        1000,
      );

    window.addEventListener(
      "resize",
      refreshScrollSystem,
      {
        passive: true,
      },
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.clearTimeout(firstRefresh);
      window.clearTimeout(secondRefresh);

      window.removeEventListener(
        "resize",
        refreshScrollSystem,
      );
    };
  }, [pathname, ready]);

  return (
    <MotionConfig reducedMotion="user">
      <SiteReadyContext.Provider
        value={ready}
      >
        <ReactLenis
          ref={lenisRef}
          root
          options={{
            autoRaf: false,
            lerp: 0.045,
            smoothWheel: true,
            wheelMultiplier: 0.72,
            touchMultiplier: 1,
            syncTouch: false,
            overscroll: false,
            orientation: "vertical",
            gestureOrientation: "vertical",
            autoResize: true,
            anchors: {
              offset: -96,
            },
          }}
        >
          <PageLoader
            onComplete={() => {
              setReady(true);
            }}
          />

          <CustomCursor enabled={ready} />

          <PageTransition>
            {children}
          </PageTransition>
        </ReactLenis>
      </SiteReadyContext.Provider>
    </MotionConfig>
  );
}