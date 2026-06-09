"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-20
        ">

          {/* LOGO */}
   <Link href="/">
  <Image
    src="/logo.jpg"
    alt="Logo DUVA"
    width={110    }
    height={60}
    className="h-auto"
    priority
  />
</Link>

          {/* NAV */}
          <nav className="flex items-center gap-8 text-sm font-medium">

            {/* DROPDOWN */}
            <div className="relative group">

              <button className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors">
                Quiénes somos
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {/* MENU */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <Link
                  href="/equipo"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Nuestro equipo
                </Link>

                <Link
                  href="/clientes"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Clientes
                </Link>

                <Link
                  href="/mision-vision"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Misión y visión
                </Link>

              </div>
            </div>

            <Link
              href="/servicios"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Servicios
            </Link>

            <Link
              href="/proyectos"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Proyectos realizados
            </Link>

          </nav>
        </div>

        {/* RIGHT */}
        <Link
          href="/contacto"
          className="bg-[var(--primary)] text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Contacto
        </Link>

      </div>
    </header>
  );
}