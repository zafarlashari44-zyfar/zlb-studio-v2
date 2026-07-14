"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  number: string;
  name: string;
  project: string;
  location: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    number: "01",
    name: "Ayesha and Adam",
    project: "Wedding story",
    location: "Bristol",
    quote:
      "The photographs feel exactly like the day felt. Nothing looks forced, and every important moment is there.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=92",
  },
  {
    number: "02",
    name: "Noor Ahmed",
    project: "Editorial portrait",
    location: "London",
    quote:
      "The direction was calm and clear. I felt comfortable throughout the session, and the final portraits look strong and natural.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=92",
  },
  {
    number: "03",
    name: "House of Form",
    project: "Brand campaign",
    location: "Manchester",
    quote:
      "ZLB understood the visual direction quickly and delivered a complete collection that worked across every platform.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=3840&q=92",
  },
];

export default function TestimonialsExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    testimonialRefs.current.forEach((element, index) => {
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
          rootMargin: "-35% 0px -40% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative bg-[#0a0a0a] text-[#f4f2ed]">
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-[2400px] items-center justify-between px-5 py-5 md:px-10">
          <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
            Client words
          </p>

          <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
            Real experiences
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[2400px] lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="hidden border-r border-white/10 lg:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.number}
                initial={{
                  opacity: 0,
                  scale: 1.1,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundImage: `url("${activeTestimonial.image}")`,
                }}
                className="absolute inset-0 bg-cover bg-center"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.16),transparent_45%,rgba(0,0,0,0.9))]" />

            <div className="film-grain absolute inset-0 opacity-[0.1]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-10">
              <div className="flex items-start justify-between">
                <p className="text-[9px] uppercase tracking-[0.34em] text-white/55">
                  Testimonial {activeTestimonial.number}
                </p>

                <Quote
                  size={38}
                  strokeWidth={1}
                  className="text-[#f05c3c]"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.name}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                >
                  <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-white/50">
                    {activeTestimonial.project}
                  </p>

                  <p className="text-4xl font-light tracking-[-0.05em]">
                    {activeTestimonial.name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div>
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.number}
              ref={(element) => {
                testimonialRefs.current[index] = element;
              }}
              className="relative flex min-h-screen flex-col justify-center border-b border-white/10 px-5 py-24 md:px-10 md:py-32 lg:px-14"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: "inset(100% 0% 0% 0%)",
                }}
                whileInView={{
                  opacity: 1,
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
                  backgroundImage: `url("${testimonial.image}")`,
                }}
                className="mb-12 aspect-[4/5] bg-cover bg-center lg:hidden"
              />

              <div className="mb-12 flex items-center justify-between">
                <p className="text-[9px] uppercase tracking-[0.34em] text-[#9a9a9a]">
                  Testimonial {testimonial.number}
                </p>

                <span
                  className={`h-2 w-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "scale-150 bg-[#f05c3c]"
                      : "bg-white/20"
                  }`}
                />
              </div>

              <Quote
                size={56}
                strokeWidth={1}
                className="mb-10 text-[#f05c3c]"
              />

              <motion.blockquote
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
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-[10vw] font-light leading-[0.98] tracking-[-0.06em] md:text-[6vw] lg:text-[4vw]"
              >
                “{testimonial.quote}”
              </motion.blockquote>

              <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 text-xl font-medium tracking-[-0.04em]">
                    {testimonial.name}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.28em] text-[#9a9a9a]">
                    {testimonial.project}
                    <span className="mx-3 text-[#f05c3c]">
                      /
                    </span>
                    {testimonial.location}
                  </p>
                </div>

                <a
                  href="#contact"
                  data-cursor-label="Book"
                  className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.28em]"
                >
                  Create your story

                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#f05c3c] group-hover:bg-[#f05c3c] group-hover:text-black">
                    <ArrowUpRight size={19} />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




