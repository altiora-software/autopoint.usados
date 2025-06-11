// app/page.js
import HeroSlider from "../components/HeroSlider";
import AutosCarousel from "../components/AutosCarousel";

/**
 * Página principal del sitio
 * Incluye HeroSlider y AutosCarousel
 */
export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      {/* Hero slider con imágenes y call to action */}
      <HeroSlider />

      {/* Carrusel de autos destacados */}
      <AutosCarousel />
    </div>
  );
}
