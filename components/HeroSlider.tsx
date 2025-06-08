// components/HeroSlider.js
"use client";
import { useState, useEffect } from "react";

/**
 * Componente HeroSlider para la página principal
 * Slider automático con imágenes, texto y botón CTA
 */
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos de ejemplo para el slider
  const slides = [
    {
      id: 1,
      image: "/auto1.jpeg",
      title: "Tu próximo auto te está esperando",
      subtitle: "Descubre nuestra amplia selección de vehículos usados",
    },
    {
      id: 2,
      image: "/auto2.jpeg",

      title: "Calidad garantizada",
      subtitle: "Todos nuestros autos pasan por inspección técnica",
    },
    {
      id: 3,
      image: "/auto3.jpeg",
      title: "Financiación disponible",
      subtitle: "Te ayudamos a conseguir el auto de tus sueños",
    },
  ];

  // Auto-advance del slider cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-64 md:h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Imagen de fondo */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay oscuro para mejor legibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Contenido del slide */}
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <a
                  href="/catalogo"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors"
                >
                  Ver Catálogo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
