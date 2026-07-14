"use client";

import { motion } from "motion/react";

const items = [
  "Weddings",
  "Portraits",
  "Editorial",
  "Events",
  "Brand Stories",
  "Creative Direction",
];

function TickerItems() {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex shrink-0 items-center gap-8"
        >
          <span className="whitespace-nowrap text-[11vw] font-medium leading-none tracking-[-0.07em] md:text-[6vw]">
            {item}
          </span>

          <span className="h-4 w-4 shrink-0 rounded-full bg-[#f05c3c] md:h-6 md:w-6" />
        </div>
      ))}
    </>
  );
}

export default function ClientTicker() {
  return (
    <section className="overflow-hidden border-y border-white/15 bg-[#090909] py-8 text-white md:py-12">
      <div className="mb-8 flex items-center justify-between px-5 md:px-10">
        <p className="text-[9px] uppercase tracking-[0.32em] text-white/45">
          Visual disciplines
        </p>

        <p className="text-[9px] uppercase tracking-[0.32em] text-white/45">
          Bristol and worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max shrink-0 items-center gap-8 pr-8"
        >
          <TickerItems />
          <TickerItems />
        </motion.div>
      </div>
    </section>
  );
}




