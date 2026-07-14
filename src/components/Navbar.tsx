"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteReady } from "@/components/SiteExperience";

const links = [
  {
    label: "Work",
    href: "/work",
    number: "01",
  },
  {
    label: "Services",
    href: "/services",
    number: "02",
  },
  {
    label: "Pricing",
    href: "/pricing",
    number: "03",
  },
  {
    label: "Studio",
    href: "/studio",
    number: "04",
  },
  {
    label: "Contact",
    href: "/contact",
    number: "05",
  },
];

export default function Navbar() {
  const ready = useSiteReady();
  const { scrollY } = useScroll();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 50);

    if (
      latest > previous &&
      latest > 180 &&
      !menuOpen
    ) {
      setHidden(true);
      return;
    }

    setHidden(false);
  });

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

      setCurrentTime(time);
    };

    updateTime();

    const interval = window.setInterval(
      updateTime,
      30000,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{
          y: -120,
        }}
        animate={{
          y: ready && !hidden ? 0 : -120,
        }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(5, 5, 5, 0.84)"
              : "rgba(5, 5, 5, 0)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(255, 255, 255, 0)",
            backdropFilter: scrolled
              ? "blur(18px)"
              : "blur(0px)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="border-b"
        >
          <div className="mx-auto flex h-20 max-w-[2400px] items-center justify-between px-5 text-white md:h-24 md:px-10">
            <Link
              href="/"
              data-cursor-label="Home"
              className="relative z-[110] flex items-center gap-3"
            >
              <span className="text-lg font-semibold tracking-[-0.055em]">
                ZLB STUDIO
              </span>

              <span className="hidden h-1.5 w-1.5 rounded-full bg-[#f05c3c] sm:block" />
            </Link>

            <nav className="hidden items-center gap-9 md:flex">
              {links.slice(0, 3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  data-cursor-label={link.label}
                  className="group relative overflow-hidden text-sm"
                >
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {link.label}
                  </span>

                  <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {link.label}
                  </span>
                </Link>
              ))}

              <Link
                href="/#contact"
                data-cursor-label="Book"
                className="group flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-sm transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Book a shoot

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 md:hidden"
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0% at 92% 6%)",
            }}
            animate={{
              clipPath: "circle(150% at 92% 6%)",
            }}
            exit={{
              clipPath: "circle(0% at 92% 6%)",
            }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[200] overflow-hidden bg-[#f05c3c] text-black"
          >
            <div className="mx-auto flex h-full max-w-[2400px] flex-col px-5 pb-7 pt-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-lg font-semibold tracking-[-0.055em]"
                >
                  ZLB STUDIO
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/30"
                  aria-label="Close navigation"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="flex flex-1 items-center">
                <nav className="w-full">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        y: 70,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.07,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-end justify-between border-b border-black/25 py-4"
                      >
                        <span className="text-[15vw] font-medium leading-[0.82] tracking-[-0.085em]">
                          {link.label}
                        </span>

                        <span className="mb-2 text-[10px] tracking-[0.25em] text-black/55">
                          {link.number}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.6,
                }}
                className="grid grid-cols-2 gap-5 border-t border-black/25 pt-5"
              >
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-black/50">
                    Location
                  </p>

                  <p className="text-xs uppercase leading-5 tracking-[0.18em]">
                    Bristol
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div className="text-right">
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-black/50">
                    Local time
                  </p>

                  <p className="text-xs uppercase tracking-[0.18em]">
                    {currentTime || "00:00"}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute bottom-24 right-6 flex h-20 w-20 items-center justify-center rounded-full border border-black/25"
            >
              <ArrowDownRight size={25} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




