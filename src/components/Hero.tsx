import resumePdf from "../assets/Resume - Roniel Jade Verdadero.pdf";
const heroContent = {
  id: "home",
  intro: "Hello, I’m",
  name: "Roniel Jade D. Verdadero",
  role: "Web Developer & IT Support Professional",
  blurb:
    "I am a web developer with hands-on experience in building and maintaining web applications, as well as providing technical support for daily operations. I focus on creating practical, reliable solutions and continuously improving my skills through real-world projects.",
  primaryCta: { label: "Download Resume", href: resumePdf },
};

export default function Hero() {
  return (
    <section className="mt-16 " id={heroContent.id}>
      <div className="grid gap-10  md:items-center">
        <div>
          <p className="text-xl font-semibold text-primary/80">
            {heroContent.intro}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-[3.8rem]">
            {heroContent.name}
          </h1>
          <p className=" text-base font-semibold text-base-content/80 md:text-lg">
            {heroContent.role}
          </p>
          <p className="mt-7 text-base leading-relaxed text-base-content/80">
            {heroContent.blurb}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={heroContent.primaryCta.href}
              className="btn btn-primary btn-md"
              download
            >
              {heroContent.primaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
