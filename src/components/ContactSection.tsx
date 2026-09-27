import { motion, type Variants } from "motion/react";

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const underline: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="max-w-3xl mx-auto w-full"
      >
        <motion.p
          variants={line}
          className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-5"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={line}
          className="font-display uppercase text-5xl sm:text-7xl leading-none max-w-2xl"
        >
          Let's build
          <br />
          something.
        </motion.h2>

        <motion.p
          variants={line}
          className="mt-6 max-w-md text-neutral-400 leading-relaxed"
        >
          I'm interested in software engineering opportunities, interesting
          products, and projects that solve real operational problems.
        </motion.p>

        <motion.div variants={line} className="mt-8 inline-block relative">
          <a
            href="mailto:wahidullah.karimi22@gmail.com"
            className="font-code inline-block text-base sm:text-lg pb-1 text-neutral-100 hover:text-neutral-500 transition-colors"
          >
            wahidullah.karimi22@gmail.com
          </a>
          <motion.span
            variants={underline}
            style={{ transformOrigin: "left" }}
            className="absolute bottom-0 left-0 h-px w-full bg-neutral-100"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
