import { motion, type Variants } from "motion/react";
import { nowItems } from "./data";

const line: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const label: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const title: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
  },
};

const pulse: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NowSection() {
  return (
    <section
      id="now"
      className="min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <motion.p
              variants={line}
              className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-3"
            >
              Current focus
            </motion.p>

            <motion.h2
              variants={line}
              className="font-display uppercase text-5xl sm:text-7xl leading-none"
            >
              Right
              <br />
              Now
            </motion.h2>
          </div>

          <motion.span
            variants={line}
            className="font-display text-5xl text-neutral-300"
          >
            {String(nowItems.length).padStart(2, "0")}
          </motion.span>
        </motion.div>

        <div className="divide-y divide-neutral-400 border-t border-neutral-400">
          {nowItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              className="relative py-6 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8"
            >
              <motion.span
                variants={pulse}
                style={{ transformOrigin: "left" }}
                className="absolute -top-px left-0 h-px w-8 bg-neutral-900"
              />

              <motion.span
                variants={label}
                className="font-code text-xs uppercase tracking-widest text-neutral-500 sm:w-24 shrink-0"
              >
                {item.label}
              </motion.span>

              <motion.span
                variants={title}
                className="text-neutral-700 leading-relaxed"
              >
                {item.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
