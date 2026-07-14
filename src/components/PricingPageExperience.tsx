"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  Clock3,
  Heart,
  Images,
  Sparkles,
} from "lucide-react";
import type {
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";
import { useRef } from "react";

const packages = [
  {
    number: "01",
    name: "Portrait Session",
    category: "Individuals, couples and families",
    price: "£295",
    priceNote: "Starting from",
    description:
      "A relaxed portrait experience built around natural expression, calm direction and carefully refined final images.",
    coverage: "Up to 90 minutes",
    delivery: "25 edited images",
    icon: Camera,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2400&q=90",
    features: [
      "Pre-session consultation",
      "One selected location",
      "Natural posing direction",
      "Individual and group portraits",
      "Private online gallery",
      "High-resolution downloads",
    ],
  },
  {
    number: "02",
    name: "Event Coverage",
    category: "Private and corporate events",
    price: "£495",
    priceNote: "Starting from",
    description:
      "Professional event coverage preserving the atmosphere, people, details and important moments without interrupting the experience.",
    coverage: "Up to 3 hours",
    delivery: "80+ edited images",
    icon: Sparkles,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=90",
    features: [
      "Pre-event planning call",
      "Venue and detail coverage",
      "Guest and speaker photography",
      "Documentary visual approach",
      "Preview images within 48 hours",
      "Complete private gallery",
    ],
  },
  {
    number: "03",
    name: "Wedding Story",
    category: "Complete wedding-day storytelling",
    price: "£1,250",
    priceNote: "Starting from",
    description:
      "Cinematic wedding photography combining natural observation, guided portraits and an emotionally complete visual story.",
    coverage: "Up to 10 hours",
    delivery: "400+ edited images",
    icon: Heart,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=92",
    features: [
      "Wedding planning consultation",
      "Full-day photography coverage",
      "Couple and family portraits",
      "Documentary guest photography",
      "Preview gallery within 72 hours",
      "Complete high-resolution gallery",
      "Personal print licence",
    ],
  },
  {
    number: "04",
    name: "Brand Campaign",
    category: "Businesses and creative professionals",
    price: "Custom",
    priceNote: "Project quotation",
    description:
      "Purpose-built photography for websites, campaigns, social content, personal brands and commercial communication.",
    coverage: "Based on project",
    delivery: "Custom image library",
    icon: Building2,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90",
    features: [
      "Creative discovery session",
      "Campaign and shot planning",
      "Location or workplace coverage",
      "Team and lifestyle photography",
      "Commercial usage options",
      "Web and social-media exports",
    ],
  },
];

const included = [
  {
    number: "01",
    title: "Creative preparation",
    text: "Every project begins with a focused conversation about its purpose, location, timing and intended visual feeling.",
  },
  {
    number: "02",
    title: "Calm direction",
    text: "Clear guidance is provided throughout the shoot while leaving enough space for natural movement and real personality.",
  },
  {
    number: "03",
    title: "Detailed editing",
    text: "Every selected photograph receives individual colour, exposure and tonal refinement before final delivery.",
  },
  {
    number: "04",
    title: "Private delivery",
    text: "Your completed visual collection is delivered through a secure and simple online gallery.",
  },
];

const comparisonRows = [
  {
    label: "Planning consultation",
    portrait: "Included",
    event: "Included",
    wedding: "Included",
    commercial: "Included",
  },
  {
    label: "Photography coverage",
    portrait: "90 minutes",
    event: "3 hours",
    wedding: "10 hours",
    commercial: "Custom",
  },
  {
    label: "Edited photographs",
    portrait: "25 images",
    event: "80+ images",
    wedding: "400+ images",
    commercial: "Custom",
  },
  {
    label: "Preview delivery",
    portrait: "Optional",
    event: "48 hours",
    wedding: "72 hours",
    commercial: "Agreed schedule",
  },
  {
    label: "Online gallery",
    portrait: "Included",
    event: "Included",
    wedding: "Included",
    commercial: "Included",
  },
  {
    label: "High-resolution files",
    portrait: "Included",
    event: "Included",
    wedding: "Included",
    commercial: "Included",
  },
];

const faqs = [
  {
    question: "Is a deposit required?",
    answer:
      "A booking deposit secures the agreed date. The remaining balance and payment schedule are confirmed before the project begins.",
  },
  {
    question: "Can packages be customised?",
    answer:
      "Yes. Coverage time, locations, deliverables, additional photographers and final image requirements can be adjusted.",
  },
  {
    question: "Are travel costs included?",
    answer:
      "Bristol-based travel is normally included. Longer-distance travel and accommodation are confirmed separately before booking.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery depends on the service and project size. A clear estimated completion date is provided before confirmation.",
  },
];

export default function PricingPageExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const packagesRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(
    heroProgress,
    [0, 1],
    [1.04, 1.24],
  );

  const heroImageY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "13%"],
  );

  const heroContentY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "26%"],
  );

  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.72],
    [1, 0],
  );

  const heroTitleX = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "-8%"],
  );

  const deckRotateZ = useTransform(
    heroProgress,
    [0, 1],
    [0, -8],
  );

  const deckY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "18%"],
  );

  const { scrollYProgress: packageProgress } = useScroll({
    target: packagesRef,
    offset: ["start end", "end start"],
  });

  const packageTitleX = useTransform(
    packageProgress,
    [0, 1],
    ["5%", "-5%"],
  );

  const glowY = useTransform(
    packageProgress,
    [0, 1],
    ["-20%", "35%"],
  );

  return (
    <main className="overflow-x-clip bg-[#050505] text-[#f4f2ed]">
      <section
        ref={heroRef}
        className="relative h-[145vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{
              scale: reducedMotion ? 1.04 : heroImageScale,
              y: reducedMotion ? "0%" : heroImageY,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=3840&q=92')",
            }}
            className="absolute inset-0 bg-cover bg-center"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.86),rgba(0,0,0,0.24)_42%,rgba(0,0,0,0.98))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,transparent_5%,rgba(0,0,0,0.3)_38%,rgba(0,0,0,0.82)_100%)]" />

          <div className="film-grain absolute inset-0 opacity-[0.12]" />

          <motion.div
            style={{
              y: reducedMotion ? "0%" : heroContentY,
              opacity: reducedMotion ? 1 : heroOpacity,
            }}
            className="relative z-10 mx-auto flex h-full max-w-[2400px] flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pb-14 md:pt-36 2xl:px-20 2xl:pb-20 2xl:pt-48"
          >
            <div className="flex items-start justify-between gap-10">
              <div>
                <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-white/50 sm:text-[10px] 2xl:text-sm">
                  Photography investment
                </p>

                <p className="max-w-xl text-base font-light leading-7 text-white/70 md:text-xl md:leading-8 2xl:max-w-3xl 2xl:text-3xl 2xl:leading-10">
                  Flexible photography packages shaped around
                  your story, location and creative requirements.
                </p>
              </div>

              <div className="hidden items-center gap-4 md:flex">
                <p className="text-right text-[9px] uppercase leading-5 tracking-[0.3em] text-white/45 2xl:text-xs">
                  Interactive pricing
                  <br />
                  Custom quotations
                </p>

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 backdrop-blur-md 2xl:h-20 2xl:w-20">
                  <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
                </span>
              </div>
            </div>

            <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <motion.h1
                  style={{
                    x: reducedMotion ? "0%" : heroTitleX,
                  }}
                  className="text-[22vw] font-medium leading-[0.69] tracking-[-0.105em] sm:text-[18vw] lg:text-[10vw]"
                >
                  PRICING
                </motion.h1>

                <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end">
                  <p className="max-w-2xl text-sm leading-6 text-white/60 2xl:max-w-4xl 2xl:text-xl 2xl:leading-8">
                    Final pricing depends on coverage, location,
                    production requirements and final deliverables.
                  </p>

                  <a
                    href="#packages"
                    data-cursor-label="Explore"
                    className="group flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.3em] 2xl:text-xs"
                  >
                    Explore packages

                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f05c3c] text-black transition-transform duration-500 group-hover:rotate-45 2xl:h-20 2xl:w-20">
                      <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
                    </span>
                  </a>
                </div>
              </div>

              <motion.div
                style={{
                  y: reducedMotion ? "0%" : deckY,
                  rotateZ: reducedMotion ? 0 : deckRotateZ,
                }}
                className="hidden lg:block"
              >
                <HeroPricingDeck />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        ref={packagesRef}
        id="packages"
        className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64"
      >
        <motion.div
          style={{
            y: reducedMotion ? "0%" : glowY,
          }}
          className="pointer-events-none absolute right-[-20vw] top-[-20vw] h-[65vw] w-[65vw] rounded-full bg-[#f05c3c]/10 blur-[180px]"
        />

        <div className="pointer-events-none absolute left-[-10vw] top-[30%] h-[35vw] w-[35vw] rounded-full border border-white/[0.04]" />

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-20 grid gap-12 border-b border-white/10 pb-16 md:grid-cols-[0.42fr_1.58fr] md:gap-20 md:pb-24 2xl:mb-32 2xl:gap-36 2xl:pb-36">
            <div className="flex items-start justify-between md:flex-col">
              <p className="text-[9px] uppercase leading-5 tracking-[0.34em] text-[#828282] 2xl:text-xs">
                00.01
                <br />
                Interactive packages
              </p>

              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-[#f05c3c] 2xl:h-20 2xl:w-20">
                <ArrowDown className="h-5 w-5 2xl:h-7 2xl:w-7" />
              </span>
            </div>

            <motion.h2
              style={{
                x: reducedMotion ? "0%" : packageTitleX,
              }}
              className="max-w-[1900px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]"
            >
              Move through
              <br />
              every dimension.
            </motion.h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-2 2xl:gap-12">
            {packages.map((item) => (
              <TiltPackageCard
                key={item.number}
                item={item}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-7 border-t border-white/10 pt-8 md:flex-row md:items-center 2xl:mt-20 2xl:pt-12">
            <p className="max-w-3xl text-sm leading-7 text-[#8d8d8d] 2xl:text-xl 2xl:leading-9">
              These packages provide a starting point. Coverage,
              locations, albums, additional photographers and
              commercial licences can be added separately.
            </p>

            <a
              href="/contact"
              data-cursor-label="Enquire"
              className="group flex w-fit items-center gap-4 text-[10px] uppercase tracking-[0.28em] 2xl:text-sm"
            >
              Request custom pricing

              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black 2xl:h-20 2xl:w-20">
                <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f05c3c] px-5 py-28 text-black md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="pointer-events-none absolute left-[-20vw] top-[-22vw] h-[65vw] w-[65vw] rounded-full border border-black/10" />

        <div className="pointer-events-none absolute left-[-5vw] top-[-7vw] h-[35vw] w-[35vw] rounded-full border border-black/10" />

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute right-[-8vw] top-[12%] h-[28vw] w-[28vw] rounded-full border border-black/10"
        >
          <div className="absolute inset-[18%] rounded-full border border-black/10" />
          <div className="absolute inset-[38%] rounded-full border border-black/10" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-black/10" />
        </motion.div>

        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-20 grid gap-10 border-b border-black/20 pb-16 md:grid-cols-[0.42fr_1.58fr] md:gap-20 md:pb-24 2xl:mb-32 2xl:gap-36 2xl:pb-36">
            <p className="text-[9px] uppercase leading-5 tracking-[0.34em] text-black/55 2xl:text-xs">
              00.02
              <br />
              Every booking
            </p>

            <h2 className="max-w-[1900px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]">
              Premium attention
              <br />
              at every level.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-black/20 bg-black/20 md:grid-cols-2">
            {included.map((item, index) => (
              <DepthBenefitCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="pointer-events-none absolute bottom-[-20vw] left-[-20vw] h-[55vw] w-[55vw] rounded-full bg-[#f05c3c]/10 blur-[190px]" />

        <div className="relative mx-auto max-w-[2400px]">
          <div className="mb-16 flex flex-col justify-between gap-12 border-b border-white/10 pb-14 md:flex-row md:items-end 2xl:mb-24 2xl:pb-20">
            <div>
              <p className="mb-8 text-[9px] uppercase tracking-[0.34em] text-[#777777] 2xl:text-xs">
                00.03
                <br />
                Compare packages
              </p>

              <h2 className="text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]">
                Find your
                <br />
                perfect coverage.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#8d8d8d] 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-10">
              Custom projects can combine coverage and deliverables
              from multiple package levels.
            </p>
          </div>

          <div
            data-lenis-prevent
            className="overflow-x-auto border-t border-white/10"
          >
            <div className="min-w-[1050px]">
              <div className="grid grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10 bg-white/[0.02]">
                <TableCell muted>
                  Package feature
                </TableCell>

                {[
                  "Portrait",
                  "Event",
                  "Wedding",
                  "Commercial",
                ].map((heading) => (
                  <TableCell
                    key={heading}
                    bordered
                    heading
                  >
                    {heading}
                  </TableCell>
                ))}
              </div>

              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.2fr_repeat(4,1fr)] border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.025]"
                >
                  <TableCell>
                    {row.label}
                  </TableCell>

                  <TableCell bordered muted>
                    {row.portrait}
                  </TableCell>

                  <TableCell bordered muted>
                    {row.event}
                  </TableCell>

                  <TableCell bordered muted>
                    {row.wedding}
                  </TableCell>

                  <TableCell bordered muted>
                    {row.commercial}
                  </TableCell>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-28 md:px-10 md:py-44 2xl:px-20 2xl:py-64">
        <div className="mx-auto grid max-w-[2400px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28 2xl:gap-44">
          <div>
            <p className="mb-8 text-[9px] uppercase tracking-[0.34em] text-[#777777] 2xl:text-xs">
              00.04
              <br />
              Questions
            </p>

            <h2 className="text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] lg:text-[6vw]">
              Before
              <br />
              you book.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="group grid gap-7 border-b border-white/10 py-9 md:grid-cols-[0.14fr_0.86fr] 2xl:py-14"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#f05c3c] 2xl:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h3 className="mb-5 text-2xl font-light tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-3 md:text-3xl 2xl:text-5xl">
                    {faq.question}
                  </h3>

                  <p className="max-w-4xl text-base leading-8 text-[#8d8d8d] 2xl:text-2xl 2xl:leading-10">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-28 md:px-10 md:pb-44 2xl:px-20 2xl:pb-64">
        <div className="pointer-events-none absolute bottom-[-30vw] right-[-20vw] h-[65vw] w-[65vw] rounded-full bg-[#f05c3c]/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[2400px] border-t border-white/10 pt-14 2xl:pt-20">
          <p className="mb-12 text-[9px] uppercase tracking-[0.34em] text-[#777777] 2xl:text-xs">
            Build your package
          </p>

          <div className="flex flex-col justify-between gap-16 md:flex-row md:items-end">
            <h2 className="max-w-[1700px] text-[13vw] font-medium leading-[0.82] tracking-[-0.085em] md:text-[6.8vw]">
              Your story deserves
              <br />
              its own dimension.
            </h2>

            <a
              href="/contact"
              data-cursor-label="Enquire"
              className="group flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.28em] 2xl:text-sm"
            >
              Start an enquiry

              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f05c3c] text-black shadow-[0_30px_80px_rgba(240,92,60,0.28)] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 2xl:h-24 2xl:w-24">
                <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroPricingDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [10, -10]),
    {
      stiffness: 130,
      damping: 22,
      mass: 0.7,
    },
  );

  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 130,
      damping: 22,
      mass: 0.7,
    },
  );

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5,
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative ml-auto h-[390px] max-w-[680px]"
      style={{
        perspective: "1600px",
      }}
    >
      <motion.div
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
          style={{
            transform: "translateZ(-100px)",
          }}
        >
          <div className="absolute inset-[16%] rounded-full border border-white/10" />

          <div className="absolute inset-[35%] rounded-full border border-[#f05c3c]/45" />

          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#f05c3c]" />
        </motion.div>

        <DeckCard
          className="left-[3%] top-[16%] -rotate-[12deg]"
          depth="-40px"
          title="PORTRAIT"
          price="£295"
          delay={0}
        />

        <DeckCard
          className="right-[2%] top-[6%] rotate-[10deg]"
          depth="30px"
          title="EVENT"
          price="£495"
          delay={0.8}
        />

        <DeckCard
          featured
          className="left-[28%] top-[22%] rotate-[1deg]"
          depth="110px"
          title="WEDDING"
          price="£1,250"
          delay={1.6}
        />
      </motion.div>
    </div>
  );
}

function DeckCard({
  title,
  price,
  className,
  depth,
  delay,
  featured = false,
}: {
  title: string;
  price: string;
  className: string;
  depth: string;
  delay: number;
  featured?: boolean;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`absolute ${className}`}
      style={{
        transform: `translateZ(${depth})`,
      }}
    >
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -16, 0],
                rotateZ: [0, 1.5, 0],
              }
        }
        transition={{
          duration: 5.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`h-[250px] w-[220px] overflow-hidden border p-6 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
          featured
            ? "border-[#f05c3c] bg-[#f05c3c] text-black"
            : "border-white/15 bg-black/65 text-white"
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <p
              className={`text-[8px] uppercase tracking-[0.28em] ${
                featured
                  ? "text-black/55"
                  : "text-white/45"
              }`}
            >
              ZLB Package
            </p>

            <span
              className={`h-2 w-2 rounded-full ${
                featured
                  ? "bg-black"
                  : "bg-[#f05c3c]"
              }`}
            />
          </div>

          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.28em]">
              {title}
            </p>

            <p className="text-5xl font-medium tracking-[-0.075em]">
              {price}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TiltPackageCard({
  item,
}: {
  item: (typeof packages)[number];
}) {
  const reducedMotion = useReducedMotion();
  const Icon = item.icon;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 150,
      damping: 22,
      mass: 0.65,
    },
  );

  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 150,
      damping: 22,
      mass: 0.65,
    },
  );

  const cardX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 150,
      damping: 22,
    },
  );

  const cardY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 150,
      damping: 22,
    },
  );

  const glareX = useTransform(
    pointerX,
    [-0.5, 0.5],
    [12, 88],
  );

  const glareY = useTransform(
    pointerY,
    [-0.5, 0.5],
    [12, 88],
  );

  const glareBackground = useMotionTemplate`
    radial-gradient(
      circle at ${glareX}% ${glareY}%,
      rgba(255,255,255,0.24),
      rgba(255,255,255,0.06) 20%,
      transparent 48%
    )
  `;

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLElement>,
  ) => {
    if (reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5,
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative min-h-[760px] 2xl:min-h-[980px]"
      style={{
        perspective: "1800px",
      }}
    >
      <motion.article
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          x: reducedMotion ? 0 : cardX,
          y: reducedMotion ? 0 : cardY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full min-w-0 overflow-hidden border p-6 shadow-[0_60px_160px_rgba(0,0,0,0.5)] sm:p-8 md:p-10 2xl:p-16 ${
          item.featured
            ? "border-[#f05c3c] bg-[#f05c3c] text-black"
            : "border-white/10 bg-[#090909] text-[#f4f2ed]"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16] transition-transform duration-1000 group-hover:scale-110"
          style={{
            backgroundImage: `url('${item.image}')`,
          }}
        />

        <div
          className={`absolute inset-0 ${
            item.featured
              ? "bg-[linear-gradient(to_bottom,rgba(240,92,60,0.72),#f05c3c_72%)]"
              : "bg-[linear-gradient(to_bottom,rgba(5,5,5,0.68),#090909_72%)]"
          }`}
        />

        <motion.div
          style={{
            background: glareBackground,
          }}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="pointer-events-none absolute inset-[3%] border border-white/[0.045]" />

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: item.featured ? 28 : 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border ${
            item.featured
              ? "border-black/10"
              : "border-white/[0.07]"
          }`}
          style={{
            transform: "translateZ(-40px)",
          }}
        >
          <div className="absolute inset-[22%] rounded-full border border-current opacity-50" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-current opacity-40" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-current opacity-40" />
        </motion.div>

        <div
          className="relative z-10 flex h-full flex-col justify-between gap-20"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <div className="mb-14 flex items-start justify-between gap-8">
              <div>
                <p
                  className={`mb-4 text-[9px] uppercase tracking-[0.3em] 2xl:text-xs ${
                    item.featured
                      ? "text-black/55"
                      : "text-[#777777]"
                  }`}
                >
                  Package {item.number}
                </p>

                <p
                  className={`max-w-md text-sm leading-6 2xl:text-xl 2xl:leading-8 ${
                    item.featured
                      ? "text-black/65"
                      : "text-[#9a9a9a]"
                  }`}
                >
                  {item.category}
                </p>
              </div>

              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 2xl:h-20 2xl:w-20 ${
                  item.featured
                    ? "border-black/25 bg-black text-white"
                    : "border-white/15 bg-white/[0.03]"
                }`}
              >
                <Icon className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </div>

            <h3 className="mb-10 max-w-4xl text-[clamp(3rem,5vw,8rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              {item.name}
            </h3>

            <div
              className={`border-y py-8 2xl:py-12 ${
                item.featured
                  ? "border-black/20"
                  : "border-white/10"
              }`}
            >
              <p
                className={`mb-3 text-[9px] uppercase tracking-[0.3em] 2xl:text-xs ${
                  item.featured
                    ? "text-black/50"
                    : "text-[#777777]"
                }`}
              >
                {item.priceNote}
              </p>

              <p className="text-[clamp(3.5rem,6vw,9rem)] font-medium leading-none tracking-[-0.085em]">
                {item.price}
              </p>
            </div>

            <p
              className={`mt-9 max-w-4xl text-lg font-light leading-8 md:text-xl md:leading-9 2xl:text-3xl 2xl:leading-[1.45] ${
                item.featured
                  ? "text-black/70"
                  : "text-white/75"
              }`}
            >
              {item.description}
            </p>
          </div>

          <div
            style={{
              transform: "translateZ(45px)",
            }}
          >
            <div
              className={`mb-9 grid grid-cols-2 gap-8 border-y py-7 2xl:py-10 ${
                item.featured
                  ? "border-black/20"
                  : "border-white/10"
              }`}
            >
              <PackageInfo
                label="Coverage"
                value={item.coverage}
                featured={item.featured}
                icon={<Clock3 className="h-5 w-5 2xl:h-7 2xl:w-7" />}
              />

              <PackageInfo
                label="Delivery"
                value={item.delivery}
                featured={item.featured}
                icon={<Images className="h-5 w-5 2xl:h-7 2xl:w-7" />}
              />
            </div>

            <p
              className={`mb-5 text-[9px] uppercase tracking-[0.3em] 2xl:text-xs ${
                item.featured
                  ? "text-black/50"
                  : "text-[#777777]"
              }`}
            >
              Package includes
            </p>

            <div
              className={`border-t ${
                item.featured
                  ? "border-black/20"
                  : "border-white/10"
              }`}
            >
              {item.features.map((feature) => (
                <div
                  key={feature}
                  className={`flex items-center gap-4 border-b py-4 2xl:py-6 ${
                    item.featured
                      ? "border-black/20"
                      : "border-white/10"
                  }`}
                >
                  <Check
                    className={`h-4 w-4 shrink-0 2xl:h-6 2xl:w-6 ${
                      item.featured
                        ? "text-black"
                        : "text-[#f05c3c]"
                    }`}
                  />

                  <p
                    className={`text-sm 2xl:text-xl ${
                      item.featured
                        ? "text-black/70"
                        : "text-white/70"
                    }`}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              data-cursor-label="Enquire"
              className="mt-10 flex w-full items-center justify-between gap-8 2xl:mt-14"
            >
              <span className="text-[10px] uppercase tracking-[0.28em] 2xl:text-sm">
                Enquire about this package
              </span>

              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-xl transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 2xl:h-20 2xl:w-20 ${
                  item.featured
                    ? "bg-black text-white"
                    : "bg-[#f05c3c] text-black"
                }`}
              >
                <ArrowUpRight className="h-5 w-5 2xl:h-8 2xl:w-8" />
              </span>
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function PackageInfo({
  label,
  value,
  featured,
  icon,
}: {
  label: string;
  value: string;
  featured: boolean;
  icon: ReactNode;
}) {
  return (
    <div>
      <div
        className={`mb-5 ${
          featured
            ? "text-black/45"
            : "text-[#f05c3c]"
        }`}
      >
        {icon}
      </div>

      <p
        className={`mb-2 text-[9px] uppercase tracking-[0.25em] 2xl:text-xs ${
          featured
            ? "text-black/45"
            : "text-[#777777]"
        }`}
      >
        {label}
      </p>

      <p className="text-base 2xl:text-2xl">
        {value}
      </p>
    </div>
  );
}

function DepthBenefitCard({
  item,
  index,
}: {
  item: (typeof included)[number];
  index: number;
}) {
  return (
    <motion.article
      whileHover={{
        z: 20,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="group relative min-h-[360px] overflow-hidden bg-[#f05c3c] p-8 md:min-h-[450px] md:p-10 2xl:min-h-[580px] 2xl:p-16"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

      <div
        className="relative z-10 flex h-full flex-col justify-between gap-20"
        style={{
          transform: "translateZ(45px)",
        }}
      >
        <div className="flex items-start justify-between">
          <p className="text-[9px] uppercase tracking-[0.3em] text-black/50 transition-colors duration-500 group-hover:text-white/45 2xl:text-xs">
            Included {item.number}
          </p>

          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/25 transition-all duration-500 group-hover:rotate-12 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black 2xl:h-20 2xl:w-20">
            <Check className="h-5 w-5 2xl:h-8 2xl:w-8" />
          </span>
        </div>

        <div>
          <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-black/40 transition-colors duration-500 group-hover:text-[#f05c3c] 2xl:text-xs">
            0{index + 1}
          </p>

          <h3 className="mb-6 text-4xl font-medium tracking-[-0.06em] transition-colors duration-500 group-hover:text-white md:text-5xl 2xl:text-7xl">
            {item.title}
          </h3>

          <p className="max-w-3xl text-base leading-8 text-black/65 transition-colors duration-500 group-hover:text-white/60 2xl:text-2xl 2xl:leading-10">
            {item.text}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function TableCell({
  children,
  bordered = false,
  muted = false,
  heading = false,
}: {
  children: ReactNode;
  bordered?: boolean;
  muted?: boolean;
  heading?: boolean;
}) {
  return (
    <div
      className={`px-6 py-6 2xl:px-10 2xl:py-9 ${
        bordered
          ? "border-l border-white/10"
          : ""
      } ${
        heading
          ? "text-lg font-medium tracking-[-0.03em] 2xl:text-3xl"
          : "text-sm 2xl:text-xl"
      } ${
        muted
          ? "text-[#8d8d8d]"
          : "text-white/75"
      }`}
    >
      {children}
    </div>
  );
}