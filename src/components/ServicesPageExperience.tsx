"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Camera,
  Heart,
  PartyPopper,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Wedding Stories",
    shortTitle: "Weddings",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=92",
    description:
      "Cinematic wedding photography focused on real emotion, natural movement and the atmosphere surrounding your day.",
    details: [
      "Pre-wedding consultation",
      "Full-day or partial coverage",
      "Directed and documentary photography",
      "Carefully edited high-resolution gallery",
      "Private online delivery",
    ],
  },
  {
    number: "02",
    title: "Portrait Sessions",
    shortTitle: "Portraits",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=3840&q=92",
    description:
      "Thoughtful portrait sessions for individuals, couples, families and creative professionals who want images with personality.",
    details: [
      "Creative planning",
      "Location guidance",
      "Natural posing direction",
      "Individual and group portraits",
      "High-resolution final images",
    ],
  },
  {
    number: "03",
    title: "Event Coverage",
    shortTitle: "Events",
    icon: PartyPopper,
    image:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=3840&q=92",
    description:
      "Professional event photography that documents the people, energy, details and important moments without interrupting the experience.",
    details: [
      "Corporate and private events",
      "Guest and speaker photography",
      "Venue and detail coverage",
      "Fast edited preview selection",
      "Complete event gallery",
    ],
  },
  {
    number: "04",
    title: "Commercial Campaigns",
    shortTitle: "Commercial",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=3840&q=92",
    description:
      "Strategic visual content for businesses, brands and independent professionals who need a clear and consistent visual identity.",
    details: [
      "Campaign and content planning",
      "Brand photography",
      "Team and workplace portraits",
      "Product and lifestyle imagery",
      "Website and social-media assets",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Enquiry",
    text: "Send the project type, preferred date, location and the result you want to achieve.",
  },
  {
    number: "02",
    title: "Direction",
    text: "We agree on the visual approach, schedule, locations and practical requirements.",
  },
  {
    number: "03",
    title: "Production",
    text: "The photography is created through a balance of natural observation and clear direction.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "The strongest images are professionally edited and delivered through a private gallery.",
  },
];

export default function ServicesPageExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const introductionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(
    heroProgress,
    [0, 1],
    [1.04, 1.22],
  );

  const heroY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "12%"],
  );

  const heroContentY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "30%"],
  );

  const heroContentOpacity = useTransform(
    heroProgress,
    [0, 0.72],
    [1, 0],
  );

  const heroTitleX = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "-8%"],
  );

  const { scrollYProgress: introductionProgress } = useScroll({
    target: introductionRef,
    offset: ["start end", "end start"],
  });

  const introductionTitleX = useTransform(
    introductionProgress,
    [0, 1],
    ["6%", "-5%"],
  );

  return (
    <main className="overflow-x-clip bg-[#050505] text-[#f4f2ed]">
      <section
        ref={heroRef}
        className="relative h-[135vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={
              reducedMotion
                ? {
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=3840&q=94')",
                  }
                : {
                    scale: heroScale,
                    y: heroY,
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=3840&q=94')",
                  }
            }
            className="absolute inset-0 bg-cover bg-center"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_42%,rgba(0,0,0,0.96))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.62)_115%)]" />

          <div className="film-grain absolute inset-0 opacity-[0.12]" />

          <motion.div
            style={
              reducedMotion
                ? undefined
                : {
                    y: heroContentY,
                    opacity: heroContentOpacity,
                  }
            }
            className="relative z-10 mx-auto flex h-full max-w-[2400px] flex-col justify-between px-5 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36 2xl:px-20 2xl:pb-20 2xl:pt-48"
          >
            <div className="flex items-start justify-between gap-10">
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-white/50 sm:text-[10px] 2xl:text-sm">
                  Photography services
                </p>

                <p className="max-w-xl text-base font-light leading-7 text-white/70 md:text-xl md:leading-8 2xl:max-w-3xl 2xl:text-3xl 2xl:leading-10">
                  Cinematic photography shaped around people,
                  atmosphere and meaningful visual storytelling.
                </p>
              </div>

              <div className="hidden items-center gap-4 md:flex">
                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.3em] text-white/45 2xl:text-xs">
                  Four services
                  <br />
                  One visual standard
                </p>

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 2xl:h-20 2xl:w-20">
                  <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
                </span>
              </div>
            </div>

            <div>
              <motion.h1
                style={
                  reducedMotion
                    ? undefined
                    : {
                        x: heroTitleX,
                      }
                }
                className="whitespace-nowrap text-[21vw] font-medium leading-[0.7] tracking-[-0.1em] md:text-[11.5vw]"
              >
                SERVICES
              </motion.h1>

              <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end">
                <p className="max-w-2xl text-sm leading-6 text-white/60 2xl:max-w-4xl 2xl:text-xl 2xl:leading-8">
                  Wedding, portrait, event and commercial photography
                  across Bristol, the United Kingdom and selected
                  international locations.
                </p>

                <a
                  href="#services-list"
                  data-cursor-label="Explore"
                  className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.3em] 2xl:text-xs"
                >
                  Explore services

                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45 2xl:h-20 2xl:w-20">
                    <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        ref={introductionRef}
        className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64"
      >
        <div className="pointer-events-none absolute right-[-18vw] top-[-20vw] h-[58vw] w-[58vw] rounded-full bg-[#f05c3c]/10 blur-[160px]" />

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="grid gap-14 border-b border-white/10 pb-20 md:grid-cols-[0.45fr_1.55fr] md:gap-20 md:pb-28 2xl:gap-36 2xl:pb-40">
            <div className="flex items-start justify-between md:flex-col">
              <p className="text-[9px] uppercase leading-5 tracking-[0.34em] text-[#8a8a8a] 2xl:text-xs">
                00.01
                <br />
                What we create
              </p>

              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-[#f05c3c] 2xl:h-20 2xl:w-20">
                <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
              </span>
            </div>

            <motion.h2
              style={
                reducedMotion
                  ? undefined
                  : {
                      x: introductionTitleX,
                    }
              }
              className="max-w-[1900px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]"
            >
              Every service begins
              <br />
              with the story.
            </motion.h2>
          </div>

          <div className="grid gap-14 pt-14 md:grid-cols-[0.45fr_1.55fr] md:gap-20 md:pt-24 2xl:gap-36 2xl:pt-36">
            <p className="max-w-lg text-sm uppercase leading-6 tracking-[0.2em] text-[#777777] 2xl:text-lg 2xl:leading-8">
              ZLB Studio
              <br />
              Bristol, United Kingdom
            </p>

            <div className="grid gap-10 md:grid-cols-2 2xl:gap-20">
              <p className="text-xl font-light leading-8 text-white/85 md:text-2xl md:leading-9 2xl:text-4xl 2xl:leading-[1.45]">
                The service changes, but the approach remains consistent.
                Clear preparation, calm direction and careful attention
                to the moments that matter.
              </p>

              <p className="text-base leading-8 text-[#929292] 2xl:text-2xl 2xl:leading-10">
                Each project is planned around its purpose rather than
                forced into a fixed template. This creates photographs
                that feel personal, useful and visually connected from
                beginning to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services-list"
        className="border-t border-white/10"
      >
        {services.map((service, index) => (
          <ServiceSection
            key={service.number}
            service={service}
            reversed={index % 2 === 1}
          />
        ))}
      </section>

      <section className="relative overflow-hidden bg-[#f05c3c] px-5 py-28 text-black md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="pointer-events-none absolute left-[-15vw] top-[-15vw] h-[50vw] w-[50vw] rounded-full border border-black/10" />

        <div className="pointer-events-none absolute left-[-4vw] top-[-4vw] h-[28vw] w-[28vw] rounded-full border border-black/10" />

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-20 grid gap-10 border-b border-black/20 pb-16 md:grid-cols-[0.45fr_1.55fr] md:pb-24 2xl:mb-32 2xl:gap-36 2xl:pb-36">
            <p className="text-[9px] uppercase leading-5 tracking-[0.34em] text-black/55 2xl:text-xs">
              00.02
              <br />
              Working process
            </p>

            <h2 className="max-w-[1900px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]">
              Clear from enquiry
              <br />
              to final delivery.
            </h2>
          </div>

          <div className="border-t border-black/20">
            {process.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.7,
                }}
                className="group grid gap-8 border-b border-black/20 py-10 md:grid-cols-[0.25fr_0.65fr_1.1fr] md:items-center md:py-14 2xl:py-20"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-black/50 2xl:text-xs">
                  Step {step.number}
                </p>

                <h3 className="text-4xl font-medium tracking-[-0.06em] md:text-5xl 2xl:text-7xl">
                  {step.title}
                </h3>

                <div className="flex items-center justify-between gap-8">
                  <p className="max-w-3xl text-base leading-8 text-black/65 2xl:text-2xl 2xl:leading-10">
                    {step.text}
                  </p>

                  <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-black group-hover:text-white md:flex 2xl:h-20 2xl:w-20">
                    <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="pointer-events-none absolute bottom-[-25vw] right-[-20vw] h-[60vw] w-[60vw] rounded-full bg-[#f05c3c]/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[2400px]">
          <p className="mb-12 text-[9px] uppercase tracking-[0.34em] text-[#777777] 2xl:text-xs">
            Start a project
          </p>

          <div className="flex flex-col justify-between gap-16 border-t border-white/10 pt-14 md:flex-row md:items-end 2xl:pt-20">
            <h2 className="max-w-[1700px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]">
              Tell us what you
              <br />
              want to create.
            </h2>

            <a
              href="/contact"
              data-cursor-label="Enquire"
              className="group flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.28em] 2xl:text-sm"
            >
              Start an enquiry

              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45 2xl:h-24 2xl:w-24">
                <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

type ServiceSectionProps = {
  service: (typeof services)[number];
  reversed: boolean;
};

function ServiceSection({
  service,
  reversed,
}: ServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const Icon = service.icon;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.04, 1.08],
  );

  const headingX = useTransform(
    scrollYProgress,
    [0, 1],
    reversed ? ["-4%", "4%"] : ["4%", "-4%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-white/10 px-5 py-24 md:px-10 md:py-36 2xl:px-20 2xl:py-52"
    >
      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-[2400px]">
        <div
          className={`grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-20 2xl:gap-32 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative min-h-[520px] overflow-hidden bg-[#111111] md:min-h-[720px] 2xl:min-h-[980px]"
          >
            <motion.div
              style={
                reducedMotion
                  ? {
                      backgroundImage: `url('${service.image}')`,
                    }
                  : {
                      y: imageY,
                      scale: imageScale,
                      backgroundImage: `url('${service.image}')`,
                    }
              }
              className="absolute -inset-[8%] bg-cover bg-center"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.92))]" />

            <div className="film-grain absolute inset-0 opacity-[0.1]" />

            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-8 md:inset-x-10 md:bottom-10 2xl:inset-x-14 2xl:bottom-14">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50 2xl:text-xs">
                  Service {service.number}
                </p>

                <p className="text-3xl font-light tracking-[-0.05em] md:text-5xl 2xl:text-7xl">
                  {service.shortTitle}
                </p>
              </div>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f05c3c] text-black 2xl:h-20 2xl:w-20">
                <Icon className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col justify-between py-2 lg:py-8 2xl:py-12">
            <div>
              <div className="mb-14 flex items-center justify-between border-b border-white/10 pb-7 2xl:mb-20 2xl:pb-10">
                <p className="text-[9px] uppercase tracking-[0.34em] text-[#777777] 2xl:text-xs">
                  ZLB Service
                </p>

                <p className="text-[9px] uppercase tracking-[0.34em] text-[#f05c3c] 2xl:text-xs">
                  {service.number}
                </p>
              </div>

              <motion.h2
                style={
                  reducedMotion
                    ? undefined
                    : {
                        x: headingX,
                      }
                }
                className="mb-12 text-[14vw] font-medium leading-[0.82] tracking-[-0.085em] lg:text-[6vw]"
              >
                {service.title}
              </motion.h2>

              <p className="max-w-4xl text-xl font-light leading-8 text-white/80 md:text-2xl md:leading-9 2xl:text-4xl 2xl:leading-[1.45]">
                {service.description}
              </p>
            </div>

            <div className="mt-20 2xl:mt-28">
              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-[#777777] 2xl:text-xs">
                Service includes
              </p>

              <div className="border-t border-white/10">
                {service.details.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-center justify-between gap-8 border-b border-white/10 py-5 2xl:py-7"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#f05c3c] 2xl:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-base text-white/75 md:text-lg 2xl:text-2xl">
                        {detail}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-white/25 2xl:h-6 2xl:w-6" />
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                data-cursor-label="Enquire"
                className="group mt-10 flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.28em] 2xl:mt-14 2xl:text-sm"
              >
                Enquire about this service

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black 2xl:h-20 2xl:w-20">
                  <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}