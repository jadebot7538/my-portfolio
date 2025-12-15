const heroContent = {
  id: "home",
  intro: "Hello, I’m",
  name: "Roniel Jade D. Verdadero",
  role: "Web Developer & IT Support Professional",
  blurb:
    "I am a web developer and IT professional with hands-on experience developing and maintaining web applications, as well as supporting day-to-day IT operations. I focus on delivering practical solutions, maintaining system reliability, and continuously improving my technical skills.",
  primaryCta: { label: "Download Resume", href: "#" },
};

export default function Hero() {
  return (
    <section className="mt-5" id={heroContent.id}>
      <div className="grid gap-10  md:items-center">
        <div>
          <p className="text-xl font-semibold text-primary/80">
            {heroContent.intro}
          </p>
          <h1 className="mt-1 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {heroContent.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-base-content/80">
            {heroContent.role}
          </p>
          <p className="mt-5 text-base leading-relaxed text-base-content/80">
            {heroContent.blurb}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={heroContent.primaryCta.href}
              className="btn btn-primary btn-md"
            >
              {heroContent.primaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
