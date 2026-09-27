export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full space-y-16">
        <div>
          <p className="font-code text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">
            Full-stack developer
          </p>

          <h1 className="font-display uppercase text-5xl sm:text-7xl leading-none">
            Hi, I'm Wahidullah.
          </h1>

          <p className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
            I build practical software for real-world problems — from business
            management systems and ERP customizations to modern web
            applications.
          </p>
        </div>

        <div className="border-l border-neutral-700 pl-5 sm:pl-8">
          <h2 className="font-display text-2xl sm:text-4xl uppercase leading-tight">
            It started with one line:
          </h2>

          <p className="font-code mt-4 text-xl sm:text-2xl text-neutral-300">
            "Hello World!"
          </p>

          <p className="mt-4 max-w-xl text-neutral-500 leading-relaxed">
            I thought I was learning to code...
          </p>

          <p className="mt-4 max-w-xl text-neutral-400 leading-relaxed">
            I didn't know
            <br />
            How many <span className="text-red-600">bugs</span>, late{" "}
            <span className="text-red-600">nights</span>
            <br />
            And stories that{" "}
            <span className="text-white font-bold">one line</span> would create.
          </p>
        </div>

        <div>
          <p className="font-code text-xs uppercase tracking-widest text-neutral-500">
            Currently focused on
          </p>

          <p className="mt-3 font-display uppercase text-2xl sm:text-3xl">
            Software Engineering · Odoo · Native Apps
          </p>
        </div>
      </div>
    </section>
  );
}
