import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Header />
      <main className="relative mx-auto flex max-w-5xl flex-col gap-32 px-6 pb-24 pt-8 md:px-8">
        <Hero />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
      </main>
      <ContactSection />
    </>
  );
}

export default App;