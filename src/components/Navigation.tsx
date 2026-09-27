import { navLinks } from "./data";

interface NavigationProps {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

export default function Navigation({ navOpen, setNavOpen }: NavigationProps) {
  return (
    <nav
      className={`fixed inset-0 z-40 bg-neutral-200 text-neutral-900 flex flex-col justify-between px-6 pt-24 pb-10 transition-all duration-300 cursor-pointer ${
        navOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-2"
      }`}
    >
      <div className="flex flex-col gap-1">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setNavOpen(false)}
            className="font-display uppercase text-5xl sm:text-6xl leading-tight hover:text-neutral-500 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex justify-between text-xs uppercase tracking-widest">
        <a href="mailto:wahidullah.karimi22@gmail.com">Email</a>

        <a href="#contact" onClick={() => setNavOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
