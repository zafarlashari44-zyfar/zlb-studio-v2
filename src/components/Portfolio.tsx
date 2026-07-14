"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Ayesha & Adam",
    category: "Wedding Story",
    location: "Bristol, United Kingdom",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=3840&q=90",
  },
  {
    number: "02",
    title: "Noor",
    category: "Editorial Portrait",
    location: "London, United Kingdom",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=3840&q=90",
  },
  {
    number: "03",
    title: "House of Form",
    category: "Brand Campaign",
    location: "Manchester, United Kingdom",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=3840&q=90",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f0ede6] px-5 py-24 text-black md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[2400px]">
        <div className="grid gap-10 border-b border-black/25 pb-14 md:grid-cols-[0.7fr_1.3fr] md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.22em]"
          >
            Selected work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="max-w-5xl text-[13vw] font-medium leading-[0.84] tracking-[-0.075em] md:text-[7vw]"
          >
            Honest moments shaped into timeless images.
          </motion.h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-7 border-b border-black/25 py-12 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:py-20"
            >
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <p className="mb-8 text-xs uppercase tracking-[0.2em] text-black/50">
                    Project {project.number}
                  </p>

                  <motion.h3
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                    }}
                    className="text-5xl font-medium leading-none tracking-[-0.06em] md:text-7xl"
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <div className="grid grid-cols-2 gap-8 text-xs uppercase leading-5 tracking-[0.14em]">
                  <div>
                    <p className="mb-2 text-black/40">Category</p>
                    <p>{project.category}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-black/40">Location</p>
                    <p>{project.location}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-black/40">Year</p>
                    <p>{project.year}</p>
                  </div>
                </div>
              </div>

              <motion.a
                href="#contact"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative block overflow-hidden bg-black"
              >
                <motion.div
                  variants={{
                    hidden: {
                      clipPath: "inset(100% 0% 0% 0%)",
                    },
                    visible: {
                      clipPath: "inset(0% 0% 0% 0%)",
                    },
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="relative aspect-[4/5] overflow-hidden md:aspect-[16/11]"
                >
                  <motion.div
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                    className="absolute inset-0 bg-cover bg-center"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    viewport={{ once: true }}
                    transition={{
                      scale: {
                        duration: 1.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

                  <div className="absolute bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ed5d3b] text-black transition-transform duration-500 group-hover:rotate-45 md:bottom-8 md:right-8 md:h-20 md:w-20">
                    <ArrowUpRight size={26} />
                  </div>

                  <div className="absolute bottom-6 left-6 text-white md:bottom-8 md:left-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      View story
                    </p>
                  </div>
                </motion.div>
              </motion.a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




