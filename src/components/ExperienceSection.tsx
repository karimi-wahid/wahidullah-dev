import { experiences } from "./data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Career
            </p>

            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none">
              Experience
            </h2>
          </div>

          <span className="font-display text-5xl text-neutral-700">
            {String(experiences.length).padStart(2, "0")}
          </span>
        </div>

        <div className="divide-y divide-neutral-700 border-t border-neutral-700">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="py-8 group"
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="sm:w-32 shrink-0">
                  <span className="font-code text-xs text-neutral-500">
                    {experience.period}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display uppercase text-2xl sm:text-3xl group-hover:translate-x-1 transition-transform">
                        {experience.role}
                      </h3>

                      <p className="font-code text-xs uppercase tracking-widest text-neutral-500 mt-2">
                        {experience.company}
                      </p>
                    </div>

                    <span className="font-code text-xs text-neutral-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-neutral-400 text-sm leading-relaxed">
                    {experience.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-code text-xs border border-neutral-700 px-2 py-1 rounded-sm text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
