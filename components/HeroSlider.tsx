"use client";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-64 md:h-96 overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Contenido del slide */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-primary">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 font-heading">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl mb-6 font-sans text-foreground">
                {slide.subtitle}
              </p>
              <a
                href="/catalogo"
                className="bg-primary text-buttonText px-6 py-3 rounded-lg font-medium inline-block transition-colors hover:bg-hover"
              >
                Ver Catálogo
              </a>
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
              index === currentSlide
                ? "bg-foreground"
                : "bg-foreground bg-opacity-40"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
