interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

interface ExperienceSectionProps {
  experience: Experience[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
      <h2 className="text-5xl font-serif mb-4 text-center text-stone-100">
        Experience
      </h2>
      <p className="text-center text-stone-500 font-sans mb-16">
        Where I've worked
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-white/5" />

        {experience.map((exp, i) => (
          <div key={`${exp.company}-${i}`} className="relative flex gap-6 mb-10 last:mb-0">
            {/* Dot */}
            <div className="relative z-10 mt-1.5 shrink-0">
              <div
                className={`w-3 h-3 rounded-full border-2 border-[#141414] ${
                  !exp.endDate ? "bg-[#c9a87c]" : "bg-stone-600"
                }`}
                style={{ marginLeft: "4px" }}
              />
            </div>

            {/* Card */}
            <div className="flex-1 bg-[#1a1917] border border-white/5 rounded-xl p-5 hover:border-[#c9a87c]/20 transition-colors duration-300">
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <h3 className="text-stone-100 font-sans font-medium text-sm">
                  {exp.position}
                </h3>
                <span className="text-stone-600 text-xs">•</span>
                <span className="text-[#c9a87c] font-sans text-sm">
                  {exp.company}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-stone-500 font-sans">
                  {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : "Present"}
                </span>
                <span className="text-xs text-stone-600 font-sans">
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-1.5 mb-3">
                {exp.highlights.slice(0, 2).map((h, j) => (
                  <li
                    key={j}
                    className="text-stone-400 font-sans text-xs leading-relaxed flex gap-2"
                  >
                    <span className="text-[#c9a87c]/60 shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-sans uppercase tracking-wider text-stone-500 border border-white/5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
