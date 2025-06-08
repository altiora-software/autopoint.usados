// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

/**
 * Componente de navegación principal
 * Incluye logo, menú responsive y botón de WhatsApp
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">
              Autopoint Usados
            </h1>
          </div>

          {/* Menú desktop - oculto en móvil */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Catálogo
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Botón WhatsApp desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5491234567890"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2"
              >
                Inicio
              </Link>
              <a
                href="/catalogo"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2"
              >
                Catálogo
              </a>
              <a
                href="/contacto"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2"
              >
                Contacto
              </a>
              <a
                href="https://wa.me/5491234567890"
                className="bg-green-500 text-white block px-3 py-2 rounded-lg font-medium mt-2"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
