// components/AutosCarousel.js
"use client";
import { useState, useEffect } from "react";
import AutoCard from "./AutoCard";

/**
 * Carrusel de autos destacados
 * Muestra 1 card en móvil, 3 en desktop, con navegación infinita
 */
export default function AutosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de ejemplo de autos
  const autos = [
    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      year: 2020,
      km: 45000,
      fuelType: "Nafta",
      price: 15000000,
      imageUrl: "/auto1.jpeg",
      isNew: false,
    },
    {
      id: 2,
      marca: "Toyota",
      modelo: "Corolla",
      year: 2020,
      km: 45000,
      fuelType: "Nafta",
      price: 15000000,
      imageUrl: "/auto1.jpeg",
      isNew: false,
    },
    {
      id: 3,
      marca: "Toyota",
      modelo: "Corolla",
      year: 2020,
      km: 45000,
      fuelType: "Nafta",
      price: 15000000,
      imageUrl: "/auto1.jpeg",
      isNew: false,
    },
    {
      id: 4,
      marca: "Toyota",
      modelo: "Corolla",
      year: 2020,
      km: 45000,
      fuelType: "Nafta",
      price: 15000000,
      imageUrl: "/auto1.jpeg",
      isNew: false,
    },
  ];

  // Navegación del carrusel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % autos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + autos.length) % autos.length);
  };

  // Auto-advance cada 4 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Autos Destacados
          </h2>
          <p className="text-gray-600 mt-2">
            Encuentra el auto perfecto para ti
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor de cards - Vista móvil: 1 card, Desktop: 3 cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out md:grid md:grid-cols-3 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {autos.map((auto) => (
                <div
                  key={auto.id}
                  className="w-full flex-shrink-0 px-2 md:px-0"
                >
                  <AutoCard auto={auto} />
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación - Solo visible en móvil */}
          <div className="md:hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicadores - Solo visible en móvil */}
          <div className="flex justify-center mt-4 space-x-2 md:hidden">
            {autos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botón para ver todos los autos */}
        <div className="text-center mt-8">
          <a
            href="/catalogo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            Ver Todos los Autos
          </a>
        </div>
      </div>
    </section>
  );
}
