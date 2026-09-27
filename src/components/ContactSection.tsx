export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <p className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-5">
          Contact
        </p>

        <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none max-w-2xl">
          Let's build
          <br />
          something.
        </h2>

        <p className="mt-6 max-w-md text-neutral-400 leading-relaxed">
          I'm interested in software engineering opportunities, interesting
          products, and projects that solve real operational problems.
        </p>

        <a
          href="mailto:wahidullah.karimi22@gmail.com"
          className="font-code inline-block mt-8 text-base sm:text-lg border-b border-neutral-100 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
        >
          wahidullah.karimi22@gmail.com
        </a>
      </div>
    </section>
  );
}
