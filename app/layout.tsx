import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import type { Metadata } from "next";

interface RootLayoutProps {
  children: ReactNode;
}

// Metadata para Next.js
export const metadata: Metadata = {
  title: "Autopoint Usados - Autos Usados de Calidad",
  description:
    "Encuentra tu próximo auto usado con Autopoint Usados. Gran selección, financiación y atención personalizada.",
  // viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  // themeColor: "#B8860B", // Amarillo oscuro primary
};

/**
 * Layout principal de la aplicación
 * Incluye Navbar y Footer globales en todas las páginas
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navbar fijo en la parte superior */}
        <Navbar />

        {/* Contenido principal que crece para empujar el footer hacia abajo */}
        <main className="flex-grow">{children}</main>

        {/* Footer siempre en la parte inferior */}
        <Footer />
      </body>
    </html>
  );
}
