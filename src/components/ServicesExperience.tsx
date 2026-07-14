"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Wedding Stories",
    shortTitle: "Weddings",
    description:
      "Cinematic wedding photography focused on real emotion, natural movement and the moments that happen between the planned ones.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=92",
    deliverables: [
      "Full day coverage",
      "Edited image collection",
      "Private online gallery",
      "Highlight story",
    ],
  },
  {
    number: "02",
    title: "Editorial Portraits",
    shortTitle: "Portraits",
    description:
      "Directed portrait sessions with clean composition, controlled light and an editorial visual language built around personality.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=92",
    deliverables: [
      "Creative direction",
      "Location planning",
      "Professional editing",
      "High resolution delivery",
    ],
  },
  {
    number: "03",
    title: "Events and Culture",
    shortTitle: "Events",
    description:
      "Documentary event coverage that captures atmosphere, people and energy without making the experience feel staged.",
    image:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
    deliverables: [
      "Event coverage",
      "Guest photography",
      "Fast preview delivery",
      "Full edited archive",
    ],
  },
  {
    number: "04",
    title: "Brand Campaigns",
    shortTitle: "Commercial",
    description:
      "Campaign photography for brands that need consistent imagery, strong art direction and content designed for digital platforms.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=3840&q=92",
    deliverables: [
      "Campaign planning",
      "Art direction",
      "Product and lifestyle imagery",
      "Platform ready exports",
    ],
  },
];

export default function ServicesExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          rootMargin: "-35% 0px -45% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative bg-[#050505] text-[#f4f2ed]"
    >
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[2400px] items-center justify-between px-5 py-5 md:px-10">
          <p className="text-[9px] uppercase tracking-[0.32em] text-[#9a9a9a]">
            Services
          </p>

          <p className="text-[9px] uppercase tracking-[0.32em] text-[#9a9a9a]">
            ZLB Studio
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[2400px] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden min-h-screen border-r border-white/10 lg:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage: `url("${activeService.image}")`,
                }}
                className="absolute inset-0 bg-cover bg-center"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.92))]" />

            <div className="film-grain absolute inset-0 opacity-[0.12]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-10">
              <div className="flex items-start justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeService.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="text-[10px] uppercase tracking-[0.34em] text-white/55"
                  >
                    Service {activeService.number}
                  </motion.p>
                </AnimatePresence>

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                  <span className="text-xs tracking-[0.2em]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.title}
                    initial={{
                      opacity: 0,
                      y: 55,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-white/50">
                      Photography service
                    </p>

                    <h2 className="max-w-3xl text-[7vw] font-medium leading-[0.82] tracking-[-0.08em]">
                      {activeService.title}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div>
          {services.map((service, index) => (
            <article
              key={service.number}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              className="relative border-b border-white/10 px-5 py-20 md:px-10 md:py-28 lg:flex lg:min-h-screen lg:flex-col lg:justify-center"
            >
              <div className="mb-8 overflow-hidden lg:hidden">
                <motion.div
                  initial={{
                    scale: 1.12,
                    clipPath: "inset(100% 0% 0% 0%)",
                  }}
                  whileInView={{
                    scale: 1,
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                  className="aspect-[4/5] bg-cover bg-center md:aspect-[16/10]"
                />
              </div>

              <div className="mb-12 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#9a9a9a]">
                  Service {service.number}
                </p>

                <span
                  className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                    activeIndex === index
                      ? "bg-[#f05c3c]"
                      : "bg-white/20"
                  }`}
                />
              </div>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 45,
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
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-8 text-[14vw] font-medium leading-[0.84] tracking-[-0.08em] md:text-[8vw] lg:text-[5vw]"
              >
                {service.shortTitle}
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: 0.1,
                  duration: 0.7,
                }}
                className="mb-12 max-w-xl text-lg font-light leading-8 text-[#b5b5b5] md:text-xl"
              >
                {service.description}
              </motion.p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-7">
                {service.deliverables.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: itemIndex * 0.06,
                      duration: 0.5,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f05c3c]" />

                    <p className="text-[10px] uppercase leading-5 tracking-[0.2em] text-[#9a9a9a]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                data-cursor-label="Book"
                className="group mt-12 flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.28em]"
              >
                Enquire about this service

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black">
                  <ArrowUpRight size={19} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




