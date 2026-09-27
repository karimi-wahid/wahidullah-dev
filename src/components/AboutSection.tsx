import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full space-y-16">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={line}
            className="font-code text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5"
          >
            Full-stack developer
          </motion.p>

          <motion.h1
            variants={line}
            className="font-display uppercase text-5xl sm:text-7xl leading-none"
          >
            Hi, I'm Wahidullah.
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-6 max-w-xl text-neutral-400 leading-relaxed"
          >
            I build practical software for real-world problems — from business
            management systems and ERP customizations to modern web
            applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="border-l border-neutral-700 pl-5 sm:pl-8"
        >
          <motion.h2
            variants={line}
            className="font-display text-2xl sm:text-4xl uppercase leading-tight"
          >
            It started with one line:
          </motion.h2>

          <motion.p
            variants={line}
            className="font-code mt-4 text-xl sm:text-2xl text-neutral-300"
          >
            "Hello World!"
          </motion.p>

          <motion.p
            variants={line}
            className="mt-4 max-w-xl text-neutral-500 leading-relaxed"
          >
            I thought I was learning to code...
          </motion.p>

          <motion.p
            variants={line}
            className="mt-4 max-w-xl text-neutral-400 leading-relaxed"
          >
            I didn't know
            <br />
            How many <span className="text-red-600">bugs</span>, late{" "}
            <span className="text-red-600">nights</span>
            <br />
            And stories that{" "}
            <span className="text-white font-bold">one line</span> would create.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.p
            variants={line}
            className="font-code text-xs uppercase tracking-widest text-neutral-500"
          >
            Currently focused on
          </motion.p>

          <motion.p
            variants={line}
            className="mt-3 font-display uppercase text-2xl sm:text-3xl"
          >
            Software Engineering · Odoo · Native Apps
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
