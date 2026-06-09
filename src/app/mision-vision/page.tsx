import Container from "../../components/ui/container";
import SectionTitle from "../../components/ui/SectionTitle";
import InfoCard from "../../components/ui/InfoCard";

export default function MisionVisionPage() {
  return (
    <main className="py-12">
      <Container>
        <SectionTitle
          title="Misión y Visión"
          subtitle="Los principios que orientan nuestro trabajo y el impacto que buscamos generar en las comunidades donde desarrollamos nuestros proyectos."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <InfoCard
            delay={0.4}
            title="Nuestra Misión"
            description="Ser una constructora de vanguardia que eleva los estándares de la vivienda social en Chile, demostrando que el acceso a un subsidio DS 49 o DS 27 es sinónimo de máxima calidad, diseño y durabilidad. Nos comprometemos a ejecutar obras habitacionales y urbanas con un nivel de excelencia técnica y rigurosidad constructiva excepcional, entregando a las familias y comités un hogar de alto estándar que dignifique sus vidasy cumpla sus sueños. "
          />

          <InfoCard
            delay={0.4}
            title="Nuestra Visión"
            description="Ser reconocidos como la constructora líder y referente en el desarrollo de vivienda social e infraestructura urbana con sentido humano en el país. Aspiramos a consolidar un modelo de construcción donde la excelencia técnica y la sensibilidad social vayan de la mano, transformando barrios, devolviendo la tranquilidad a las comunidades y demostrando que es posible edificar con el corazón puesto en las personas."
          />
        </div>
      </Container>
    </main>
  );
}
