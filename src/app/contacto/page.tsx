import Container from "@/src/components/ui/container";
import SectionTitle from "@/src/components/ui/SectionTitle";
import ContactForm from "@/src/components/ui/contactForm";

export default function ContactoPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Contacto"
          subtitle="Estamos disponibles para responder tus consultas y acompañarte en el desarrollo de tu proyecto."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Información */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Conversemos
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Si necesitas información sobre nuestros servicios,
              proyectos o deseas coordinar una reunión, completa
              el formulario y nuestro equipo se pondrá en contacto
              contigo a la brevedad.
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-semibold">Correo electrónico</p>
                <p className="text-gray-600">
                  contacto@duva.cl
                </p>
              </div>

              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-gray-600">
                  +56 9 XXXX XXXX
                </p>
              </div>

              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-gray-600">
                  Santiago, Chile
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}