import Container from "@/src/components/ui/container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import TeamCard from "@/src/components/ui/TeamCard";

const teamMembers = [
  {
    name: "Catalina Duarte",
    role: "Gerente General",
  },
  {
    name: "Florencia Duarte",
    role: "Arquitecta",
  },
  {
    name: "Patricio Ortiz",
    role: "Jefe de Obras",
  },
  {
    name: "Juan Francisco Ortiz",
    role: "Operaciones",
  },
  {
    name: "Nicolás Duarte",
    role: "Área Legal",
  },
  {
    name: "Mauro Lobo",
    role: "Jefe Equipo Techos",
  },
];

export default function AboutSection() {
  return (
    <>
      <section className="py-12">
        <Container>
          <SectionTitle
            title="Quiénes Somos"
            subtitle="Comprometidos con el desarrollo urbano y el bienestar social."
          />

          <div className="max-w-4xl mx-auto text-center text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
             Sociedad Constructora DUVA es una empresa comprometida 
             con el desarrollo urbano y el bienestar social. 
             Centramos nuestra gestión en abrir caminos hacia una vivienda digna, 
             consolidándonos como expertos en el desarrollo de proyectos bajo los subsidios DS 49 y DS 27.
            </p>

            <p>
              Sin embargo, nuestro verdadero motor no son las estructuras, sino las personas. 
              Nos involucramos en cada proyecto con la sensibilidad y rigurosidad que requiere 
              construir el hogar de una familia. No solo edificamos viviendas o mejoramos entornos; 
              cumplimos promesas, devolvemos la tranquilidad y transformamos los espacios para 
              cambiar vidas de manera permanente.
            </p>

          </div>
        </Container>
      </section>

      <section className="pb-24 pt-8 bg-[var(--primary-light)]">
      
        <Container>
                     <SectionTitle
              title="Nuestro Equipo"
              subtitle="Un equipo multidisciplinario comprometido con la excelencia técnica y el desarrollo de proyectos con impacto social."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </div>
        </Container>
      </section>
    </>
  );
}
