const contact = {
  id: "contact",
  title: "Let’s work together",
  description: "Have an opportunity or idea? I’m always open to discussing new projects.",
  email: "ronieljjadee@gmail.com",
  socials: [
    { name: "GitHub", href: "https://github.com/jadebot7538" },
    { name: "JobStreet", href: "https://ph.jobstreet.com/profiles/3MlDfXYSJG" },
  ],
};

export default function ContactSection() {
  return (
    <footer id={contact.id} className="border-t border-base-200 bg-base-100">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{contact.title}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-base-content/75">
              {contact.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className="btn btn-primary btn-sm md:btn-md">
                Email me
              </a>
              {contact.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm border-base-300 md:btn-md"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-base-200 bg-base-100/90 p-4 shadow-lg shadow-primary/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-content/60">Contact</p>
            <a href={`mailto:${contact.email}`} className="mt-2 block text-sm text-primary hover:underline">
              {contact.email}
            </a>
            <div className="mt-4 space-y-2">
              {contact.socials.map((s) => (
                <div key={s.name} className="text-sm text-base-content/80">
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
                    {s.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-base-200 pt-4 text-xs text-base-content/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Roniel Jade D. Verdadero</span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}