type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

const experience = {
  id: "experience",
  eyebrow: "Experience",
  title: "What I’ve Worked On",
  description:
    "Practical experience delivering UI and full‑stack features, collaborating with teams, and keeping quality high.",
  items: [
    {
      role: "Front‑End Developer",
      company: "Freelance",
      period: "2023 – Present",
      description:
        "Built responsive interfaces for small businesses with React and Tailwind, focusing on usability and performance.",
      tech: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      role: "Full‑Stack Developer",
      company: "Personal Projects",
      period: "2022 – Present",
      description:
        "Developed full‑stack apps with PHP/MySQL and Node/Express, including auth, CRUD, and dashboards.",
      tech: ["PHP", "MySQL", "Node.js", "Express"],
    },
  ] as ExperienceItem[],
};

export default function ExperienceSection() {
  return (
    <section id={experience.id} className="space-y-5">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">{experience.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{experience.title}</h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-base-content/75">
          {experience.description}
        </p>
      </header>

      <div className="space-y-4">
        {experience.items.map((exp) => (
          <article
            key={`${exp.role}-${exp.company}`}
            className="rounded-2xl border border-base-200 bg-base-100/90 p-5 shadow-lg shadow-primary/5"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-base-content/70">{exp.company}</p>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-base-content/60">
                {exp.period}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-base-content/80">{exp.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span key={tech} className="badge badge-outline border-base-300 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}