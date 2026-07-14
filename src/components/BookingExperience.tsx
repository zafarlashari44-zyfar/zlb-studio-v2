"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type {
  FormEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useEffect, useRef, useState } from "react";

export default function BookingExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const [desktopPointer, setDesktopPointer] = useState(false);
  const [status, setStatus] = useState("");

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const ringRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [10, -10]),
    {
      stiffness: 130,
      damping: 22,
    },
  );

  const ringRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-12, 12]),
    {
      stiffness: 130,
      damping: 22,
    },
  );

  const ringX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 130,
      damping: 22,
    },
  );

  const ringY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [-18, 18]),
    {
      stiffness: 130,
      damping: 22,
    },
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    ["8%", "-16%"],
  );

  const backgroundRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180],
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "35%"],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (min-width: 1024px)",
    );

    const updatePointer = () => {
      setDesktopPointer(mediaQuery.matches);
    };

    updatePointer();
    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePointer,
      );
    };
  }, []);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (!desktopPointer || reducedMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width -
        0.5,
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height -
        0.5,
    );
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const shootType = String(
      data.get("shootType") ?? "",
    );
    const date = String(data.get("date") ?? "");
    const location = String(
      data.get("location") ?? "",
    );
    const message = String(data.get("message") ?? "");

    const studioEmail = "hello@zlbstudio.co.uk";

    const subject = encodeURIComponent(
      `Photography enquiry from ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Shoot type: ${shootType}`,
        `Preferred date: ${date}`,
        `Location: ${location}`,
        "",
        "Message",
        message,
      ].join("\n"),
    );

    setStatus("Opening your email application");

    window.location.href =
      `mailto:${studioEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#f05c3c] px-5 py-28 text-black md:px-10 md:py-44"
    >
      <motion.div
        style={{
          y: glowY,
        }}
        className="pointer-events-none absolute right-[-20vw] top-[-20vw] h-[60vw] w-[60vw] rounded-full bg-white/15 blur-[150px]"
      />

      <motion.div
        style={{
          rotate: backgroundRotate,
        }}
        className="pointer-events-none absolute left-[-15vw] top-[10vw] hidden h-[40vw] w-[40vw] rounded-full border border-black/10 lg:block"
      >
        <div className="absolute inset-[16%] rounded-full border border-black/10" />

        <div className="absolute inset-[34%] rounded-full border border-black/10" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-black/10" />
      </motion.div>

      <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" />

      <div className="relative mx-auto max-w-[2400px]">
        <div className="mb-20 border-b border-black/20 pb-14 md:mb-28 md:pb-20">
          <div className="mb-10 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.34em] text-black/55">
              Booking enquiries
            </p>

            <p className="text-[9px] uppercase tracking-[0.34em] text-black/55">
              Bristol and worldwide
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              style={{
                x: titleX,
              }}
              className="whitespace-nowrap text-[20vw] font-medium leading-[0.72] tracking-[-0.095em] md:text-[11vw]"
            >
              START YOUR STORY
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
          <div>
            <p className="mb-8 max-w-xl text-3xl font-light leading-tight tracking-[-0.05em] md:text-5xl">
              Tell us what you are planning and how you
              want it to feel.
            </p>

            <p className="max-w-md text-base leading-7 text-black/65">
              Share the date, location and type of
              photography you need. ZLB Studio will reply
              with availability and the next steps.
            </p>

            <div
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointer}
              className="mt-16 flex min-h-[340px] items-center justify-center"
              style={{
                perspective: "1200px",
              }}
            >
              <motion.div
                data-cursor-label="Book"
                style={{
                  rotateX:
                    desktopPointer && !reducedMotion
                      ? ringRotateX
                      : 0,
                  rotateY:
                    desktopPointer && !reducedMotion
                      ? ringRotateY
                      : 0,
                  x:
                    desktopPointer && !reducedMotion
                      ? ringX
                      : 0,
                  y:
                    desktopPointer && !reducedMotion
                      ? ringY
                      : 0,
                  transformStyle: "preserve-3d",
                }}
                className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-black/25 md:h-[360px] md:w-[360px]"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[10%] rounded-full border border-black/15"
                >
                  <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black" />
                </motion.div>

                <div
                  className="flex h-[54%] w-[54%] items-center justify-center rounded-full bg-black text-[#f4f2ed]"
                  style={{
                    transform: "translateZ(55px)",
                  }}
                >
                  <ArrowUpRight
                    size={48}
                    strokeWidth={1.3}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-black/25"
          >
            <FormField
              label="Your name"
              name="name"
              type="text"
              placeholder="Full name"
              required
            />

            <FormField
              label="Email address"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
            />

            <div className="grid md:grid-cols-2">
              <label className="border-b border-black/25 py-7 md:border-r md:pr-6">
                <span className="mb-4 block text-[9px] uppercase tracking-[0.3em] text-black/50">
                  Shoot type
                </span>

                <select
                  name="shootType"
                  required
                  defaultValue=""
                  className="w-full bg-transparent text-xl outline-none"
                >
                  <option value="" disabled>
                    Select service
                  </option>

                  <option value="Wedding">
                    Wedding
                  </option>

                  <option value="Portrait">
                    Portrait
                  </option>

                  <option value="Event">
                    Event
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>
                </select>
              </label>

              <label className="border-b border-black/25 py-7 md:pl-6">
                <span className="mb-4 block text-[9px] uppercase tracking-[0.3em] text-black/50">
                  Preferred date
                </span>

                <input
                  name="date"
                  type="date"
                  className="w-full bg-transparent text-xl outline-none"
                />
              </label>
            </div>

            <FormField
              label="Location"
              name="location"
              type="text"
              placeholder="City or venue"
            />

            <label className="block border-b border-black/25 py-7">
              <span className="mb-4 block text-[9px] uppercase tracking-[0.3em] text-black/50">
                Tell us about your project
              </span>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Share the main details"
                className="w-full resize-none bg-transparent text-xl leading-8 outline-none placeholder:text-black/35"
              />
            </label>

            <div className="flex flex-col items-start justify-between gap-7 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-sm text-xs leading-5 text-black/50">
                This temporary zero cost form opens your
                email application. EmailJS will be connected
                later for direct website submissions.
              </p>

              <button
                type="submit"
                data-cursor-label="Send"
                className="group flex items-center gap-5 text-[10px] uppercase tracking-[0.28em]"
              >
                Send enquiry

                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={21} />
                </span>
              </button>
            </div>

            {status && (
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-black/55">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  required,
}: FormFieldProps) {
  return (
    <label className="block border-b border-black/25 py-7">
      <span className="mb-4 block text-[9px] uppercase tracking-[0.3em] text-black/50">
        {label}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent text-xl outline-none placeholder:text-black/35 md:text-2xl"
      />
    </label>
  );
}




