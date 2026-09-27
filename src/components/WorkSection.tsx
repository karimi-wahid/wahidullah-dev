import { projects } from "./data";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Projects
            </p>

            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none">
              Selected
              <br />
              Work
            </h2>
          </div>

          <span className="font-display text-5xl text-neutral-300">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="divide-y divide-neutral-400 border-t border-neutral-400">
          {projects.map((project, index) => (
            <div key={project.title} className="py-7 group">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
