type Project = { name: string; description: string; tech: string[]; link?: string };

const projectsSection = {
  id: "projects",
  eyebrow: "Projects",
  title: "Selected Work",
  description:
    "Representative projects that emphasize clarity, performance, and maintainable delivery.",
  projects: [
    {
      name: "Portfolio Website",
      description: "Modern personal site with React, Tailwind, DaisyUI, and theme support.",
      tech: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
      link: "#",
    },
    {
      name: "Task Manager App",
      description: "Full‑stack task manager with auth, filtering, and a REST API backend.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      name: "E‑commerce Landing",
      description: "Conversion‑focused landing page with product highlights and pricing.",
      tech: ["React", "Tailwind CSS"],
      link: "#",
    },
  ] as Project[],
};

export default function ProjectsSection() {
  return (
    <section id={projectsSection.id} className="space-y-5">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
          {projectsSection.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{projectsSection.title}</h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed text-base-content/75">
          {projectsSection.description}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {projectsSection.projects.map((project) => (
          <article
            key={project.name}
            className="card h-full border border-base-200 bg-base-100/90 shadow-lg shadow-primary/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-primary/10"
          >
            <div className="card-body">
              <h3 className="card-title text-lg">{project.name}</h3>
              <p className="mt-1 text-sm text-base-content/75">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="badge badge-inline border-base-300 text-xs bg-base-200">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="mt-4">
                  <a href={project.link} className="text-sm font-medium text-primary hover:underline">
                    View project
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}