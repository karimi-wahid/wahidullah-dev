import { motion, AnimatePresence, type Variants } from "motion/react";
import { navLinks } from "./data";

interface NavigationProps {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const link: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const footer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function Navigation({ navOpen, setNavOpen }: NavigationProps) {
  return (
    <nav
      className={`fixed inset-0 z-40 bg-neutral-200 text-neutral-900 flex flex-col justify-between px-6 pt-24 pb-10 transition-all duration-300 cursor-pointer ${
        navOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-2"
      }`}
    >
      <AnimatePresence>
        {navOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-1"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item}
                variants={link}
                href={`#${item.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
                className="font-display uppercase text-5xl sm:text-6xl leading-tight hover:text-neutral-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={footer}
        initial="hidden"
        animate={navOpen ? "visible" : "hidden"}
        className="flex justify-between text-xs uppercase tracking-widest"
      >
        <a href="mailto:wahidullah.karimi22@gmail.com">Email</a>

        <a href="#contact" onClick={() => setNavOpen(false)}>
          Contact
        </a>
      </motion.div>
    </nav>
  );
}
