import { nowItems } from "./data";

export default function NowSection() {
  return (
    <section
      id="now"
      className="min-h-screen bg-neutral-200 text-neutral-900 flex flex-col justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-code text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Current focus
            </p>

            <h2 className="font-display uppercase text-5xl sm:text-7xl leading-none">
              Right
              <br />
              Now
            </h2>
          </div>

          <span className="font-display text-5xl text-neutral-300">
            {String(nowItems.length).padStart(2, "0")}
          </span>
        </div>

        <div className="divide-y divide-neutral-400 border-t border-neutral-400">
          {nowItems.map((item, index) => (
            <div
              key={index}
              className="py-6 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8"
            >
              <span className="font-code text-xs uppercase tracking-widest text-neutral-500 sm:w-24 shrink-0">
                {item.label}
              </span>

              <span className="text-neutral-700 leading-relaxed">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
