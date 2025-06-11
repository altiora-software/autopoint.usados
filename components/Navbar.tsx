"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
           <Image 
              src="/logo.png"
              alt="Logo de la empresa"
              width={80}
              height={80}
              // className="h-auto w-auto"
           />
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-primary hover:text-secondary px-3 py-2 rounded-md transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-primary hover:text-secondary px-3 py-2 rounded-md transition-colors duration-200"
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="text-primary hover:text-secondary px-3 py-2 rounded-md transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Botón WhatsApp desktop */}
          <div className="hidden md:block ">
            <a
              href="https://wa.me/5491234567890"
              className="bg-primary text-buttonText hover:bg-accent text-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-secondary focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
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
          <div className="text-center md:hidden bg-background px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-lg shadow-lg">
            <Link
              href="/"
              className="text-primary hover:text-secondary block px-3 py-2 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-primary hover:text-secondary block px-3 py-2 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="text-primary hover:text-secondary block px-3 py-2 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <a
              href="https://wa.me/5491234567890"
              className="hover:bg-accent text-foreground block px-3 py-2 rounded-lg font-medium mt-2 text-center transition-colors duration-200"
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
