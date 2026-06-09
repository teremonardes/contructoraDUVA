import Container from "../../components/ui/container";
import SectionTitle from "../../components/ui/SectionTitle";
import InfoCard from "../../components/ui/InfoCard";

export default function ClientesPage() {
  return (
    <main>
      <section className="py-12">
        <Container>
          <SectionTitle
            title="Nuestros Clientes y Aliados"
            subtitle="En Sociedad Constructora DUVA, entendemos que levantar un proyecto habitacional o social requiere de un trabajo en equipo transparente y comprometido. Por eso, nuestros clientes y aliados se dividen en tres pilares fundamentales que valoramos con la misma importancia:"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <InfoCard
              delay={0.4}
              title="Nuestros Beneficiarios"
              description="Las familias y los comités de vivienda son el corazón y la razón de ser de nuestro trabajo. Son socios activos en el codiseño de sus futuros hogares y entornos; sus sueños, esfuerzo e inquietudes guían cada decisión que tomamos en terreno."
            />

            <InfoCard
              delay={0.4}
              title="Entidades Patrocinantes"
              description="Trabajamos codo a codo con las entidades que gestionan los proyectos frente al MINVU. Nos integramos como un socio técnico riguroso, eficiente y confiable para que la transición desde el papel a la obra sea impecable."
            />

            <InfoCard
              delay={0.4}
              title="Municipalidades y Organismos Públicos"
              description="Somos aliados estratégicos de los municipios locales, colaborando en la ejecución de políticas habitacionales y urbanas con altos estándares de cumplimiento, transparencia y responsabilidad pública."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
