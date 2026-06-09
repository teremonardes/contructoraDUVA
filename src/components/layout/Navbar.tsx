"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    label: "Quiénes somos",
    dropdown: [
      { label: "Nuestro equipo", href: "/equipo" },
      { label: "Clientes", href: "/clientes" },
      { label: "Misión y visión", href: "/mision-vision" },
    ],
  },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos realizados", href: "/proyectos" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Bloquea scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={closeDrawer}>
            <Image
              src="/logo.jpg"
              alt="Logo DUVA"
              width={110}
              height={60}
              priority
            />
          </Link>

          {/* NAV DESKTOP — oculto en mobile */}
          <nav className="hidden md:flex gap-10 text-sm font-medium ml-10 mr-auto">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors">
                Quiénes somos
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/equipo" className="block px-6 py-4 hover:bg-gray-100">Nuestro equipo</Link>
                <Link href="/clientes" className="block px-6 py-4 hover:bg-gray-100">Clientes</Link>
                <Link href="/mision-vision" className="block px-6 py-4 hover:bg-gray-100">Misión y visión</Link>
              </div>
            </div>
            <Link href="/servicios" className="hover:text-[var(--primary)] transition-colors">Servicios</Link>
            <Link href="/proyectos" className="hover:text-[var(--primary)] transition-colors">Proyectos realizados</Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className="hidden md:inline-block rounded-full bg-[var(--primary)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Contacto
            </Link>

            {/* HAMBURGER — solo visible en mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* HEADER DEL DRAWER */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
          <Link href="/" onClick={closeDrawer}>
            <Image src="/logo.jpg" alt="Logo DUVA" width={90} height={48} priority />
          </Link>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Cerrar menú"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* LINKS DEL DRAWER */}
        <nav className="flex flex-col px-6 py-6 gap-1 text-sm font-medium flex-1">

          {/* Dropdown en mobile: toggle con click */}
          <div>
            <button
              className="flex items-center justify-between w-full py-3 hover:text-[var(--primary)] transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Quiénes somos
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                dropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 flex flex-col gap-1 pb-2">
                <Link href="/equipo" onClick={closeDrawer} className="py-2 hover:text-[var(--primary)] transition-colors">Nuestro equipo</Link>
                <Link href="/clientes" onClick={closeDrawer} className="py-2 hover:text-[var(--primary)] transition-colors">Clientes</Link>
                <Link href="/mision-vision" onClick={closeDrawer} className="py-2 hover:text-[var(--primary)] transition-colors">Misión y visión</Link>
              </div>
            </div>
          </div>

          <Link href="/servicios" onClick={closeDrawer} className="py-3 hover:text-[var(--primary)] transition-colors">Servicios</Link>
          <Link href="/proyectos" onClick={closeDrawer} className="py-3 hover:text-[var(--primary)] transition-colors">Proyectos realizados</Link>
        </nav>

        {/* BOTÓN CONTACTO EN DRAWER */}
        <div className="px-6 pb-8">
          <Link
            href="/contacto"
            onClick={closeDrawer}
            className="block w-full text-center rounded-full bg-[var(--primary)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
}