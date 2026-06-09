import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Información */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              DUVA
            </h3>

            <p className="text-sm text-gray-300 max-w-sm">
              Sociedad Constructora DUVA comprometida con el desarrollo urbano y el bienestar social. 
            </p>
          </div>

          {/* Navegación */}
          <div className="mr-2">
            <h4 className="font-semibold mb-3">
              Navegación
            </h4>

            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/">Inicio</Link>
              </li>

              <li>
                <Link href="/servicios">Servicios</Link>
              </li>

              <li>
                <Link href="/proyectos">Proyectos</Link>
              </li>

              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-4 pt-2 text-sm text-gray-300">
          © {new Date().getFullYear()} DUVA. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}