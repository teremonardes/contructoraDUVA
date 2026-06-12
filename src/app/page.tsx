import Hero from "@/src/components/ui/Hero";

import AboutSection from "@/src/components/sections/about";
import ClientsSection from "@/src/components/sections/clients";
import MissionVisionSection from "@/src/components/sections/missionvision";

export default function Home() {
  return (
    <main>
      <Hero
        title="Comprometidos con el desarrollo urbano y el bienestar social"
        subtitle="Especialistas en proyectos habitacionales y urbanos, comprometidos con la calidad, la innovación y el bienestar de las comunidades."
        image="/images/hero.jpg"
      />

      <AboutSection />

      <ClientsSection />

      <div className="bg-[var(--primary-light)]">
        <MissionVisionSection />
      </div>
    </main>
  );
}
