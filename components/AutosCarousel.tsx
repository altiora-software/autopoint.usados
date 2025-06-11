"use client";
import { useState, useEffect } from "react";
import AutoCard from "./AutoCard";
import { Auto } from "../types/auto";

export default function AutosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autos: Auto[] = [
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % autos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + autos.length) % autos.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-background font-sans">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
            Autos Destacados
          </h2>
          <p className="text-foreground mt-2">
            Encuentra el auto perfecto para ti
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out md:grid md:grid-cols-3 md:grid-rows-1 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/*
      On smaller screens (mobile), you probably still want the carousel
      with all cars. So, we'll conditionally render or slice for desktop.
    */}
              {autos.slice(0, 3).map(
                (
                  auto // <--- Add .slice(0, 3) here for desktop view
                ) => (
                  <div
                    key={auto.id}
                    className="w-full flex-shrink-0 px-2 md:px-0"
                  >
                    <AutoCard auto={auto} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Botones navegación móvil */}
          <div className="md:hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-lg hover:bg-hover transition-colors"
              aria-label="Anterior"
            >
              <svg
                className="w-5 h-5 text-buttonText"
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
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-2 shadow-lg hover:bg-hover transition-colors"
              aria-label="Siguiente"
            >
              <svg
                className="w-5 h-5 text-buttonText"
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

          {/* Indicadores móviles */}
          <div className="flex justify-center mt-4 space-x-2 md:hidden">
            {autos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Botón ver todos */}
        <div className="text-center mt-8">
          <a
            href="/catalogo"
            className="bg-primary hover:bg-hover text-buttonText px-6 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            Ver Todos los Autos
          </a>
        </div>
      </div>
    </section>
  );
}
