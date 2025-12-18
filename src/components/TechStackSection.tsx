const techStack = {
  id: "techstack",
  eyebrow: "Tech Stack",
  title: "Tools I Build With",
  description:
    "A practical technology stack focused on building reliable web applications and supporting real-world systems.",
  groups: [
    {
      title: "Frontend",
      description: "UI frameworks and styling.",
      items: [
        { name: "HTML5", level: "Advanced", tone: "primary" },      // 4
        { name: "CSS3", level: "Advanced", tone: "primary" },          // 4
        { name: "Bootstrap", level: "Advanced", tone: "primary" },   // 4
        { name: "Javascript", level: "Intermediate", tone: "info" }, // 3
        { name: "React", level: "Junior", tone: "success" },        // 2
        { name: "TypeScript", level: "Beginner", tone: "neutral" },   // 2
        { name: "Tailwind CSS", level: "Beginner", tone: "neutral" }, // 2
      ],
    },
    {
      title: "Backend",
      description: "APIs and data layers.",
      items: [
        { name: "PHP", level: "Advanced", tone: "primary" },        // 4
        { name: "MySQL", level: "Advanced", tone: "primary" },      // 4
        { name: "MSSQL", level: "Intermediate", tone: "info" },// 3
        { name: "Node.js", level: "Beginner", tone: "neutral" },    // 1
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Collaboration and delivery.",
      items: [
        { name: "Vs Code", level: "Expert", tone: "secondary" }, // (set to 3; adjust if different)
        { name: "Git / GitHub", level: "Advanced", tone: "primary" }, // 4
        { name: "Figma", level: "Intermediate", tone: "info" }, // (set to 3; adjust if different)
        { name: "Canva", level: "Intermediate", tone: "info" }, // (set to 3; adjust if different)
     
      ],
    },
  ],
} as const;

const toneClasses: Record<
  (typeof techStack.groups)[number]["items"][number]["tone"],
  string
> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  info: "bg-info/10 text-info",
  success: "bg-success/10 text-success",
  neutral: "bg-base-200 text-base-content/80",
};

export default function TechStackSection() {
  return (
    <section id={techStack.id} className="space-y-6">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
          {techStack.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          {techStack.title}
        </h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-base-content/75">
          {techStack.description}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {techStack.groups.map((group) => (
          <article
            key={group.title}
            className="group flex flex-col rounded-2xl border border-base-200 bg-base-100/90 p-5 shadow-lg shadow-primary/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-primary/10"
          >
            <header className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold">{group.title}</h3>
                <p className="mt-1 text-xs text-base-content/70">
                  {group.description}
                </p>
              </div>
              <div className="h-9 w-9 rounded-xl bg-base-200/80 ring-1 ring-base-300" />
            </header>

            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center justify-between gap-3 rounded-xl border border-base-200 px-3 py-2 text-sm ${
                    toneClasses[item.tone]
                  } transition-colors`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-base-content/70">
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
