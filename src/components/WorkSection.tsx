import { motion, type Variants } from "motion/react";
import { projects } from "./data";

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

const row: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkSection() {
  return (
    <section
      id="work"
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
              Projects
            </motion.p>

            <motion.h2
              variants={line}
              className="font-display uppercase text-5xl sm:text-7xl leading-none"
            >
              Selected
              <br />
              Work
            </motion.h2>
          </div>

          <motion.span
            variants={line}
            className="font-display text-5xl text-neutral-300"
          >
            {String(projects.length).padStart(2, "0")}
          </motion.span>
        </motion.div>

        <div className="divide-y divide-neutral-400 border-t border-neutral-400">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={row}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="py-7 group"
            >
              <div className="flex gap-4">
                <span className="font-code text-xs text-neutral-400 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="font-display uppercase text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-neutral-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-code text-xs border border-neutral-400 px-2 py-1 rounded-sm text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
