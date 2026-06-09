import Container from "../components/ui/container";
import SectionTitle from "../components/ui/SectionTitle";

export default function Home() {
  return (
    <main>
      <section className="py-32">
        <Container>

          <SectionTitle
            title="Comprometidos con el desarrollo urbano y el bienestar social"
            subtitle="Sociedad Constructora DUVA desarrolla proyectos con enfoque en calidad, compromiso y excelencia."
          />

        </Container>
      </section>
    </main>
  );
}
