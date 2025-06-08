import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}
/**
 * Layout principal de la aplicación
 * Incluye Navbar y Footer globales en todas las páginas
 */



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
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
