"use client";

import { useState } from "react";
import { Auto } from "../types/auto";
import Image from "next/image";

interface AutoDetailPageProps {
  auto: Auto;
}

export default function AutoDetailPage({ auto }: AutoDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    return new Intl.NumberFormat("es-AR").format(km);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-background text-foreground font-sans">
      {/* Título principal */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
          {auto.marca} {auto.modelo} {auto.year}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              auto.isNew
                ? "bg-green-600 text-background"
                : "bg-blue-600 text-background"
            }`}
          >
            {auto.isNew ? "0km" : "Usado"}
          </span>
          <span className="text-2xl font-bold text-primary">
            {formatPrice(auto.price)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Galería de imágenes */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden shadow-md">
            <Image
              height={300}
              width={600}
              src={
                auto.images && auto.images.length > 0
                  ? auto.images[currentImageIndex]
                  : auto.imageUrl ?? "/autos/default.jpg"
              }
              alt={`${auto.marca} ${auto.modelo} - Imagen ${
                currentImageIndex + 1
              }`}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Miniaturas */}
          {auto.images && (
            <div className="grid grid-cols-4 gap-2">
              {auto.images.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`overflow-hidden rounded border-2 transition-colors ${
                    currentImageIndex === index
                      ? "border-primary"
                      : "border-gray-700 hover:border-primary"
                  }`}
                >
                  <Image
                    height={100}
                    width={100}
                    src={imagen}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información detallada */}
        <div>
          {/* Características principales */}
          <div className="bg-background rounded-lg shadow-md p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-heading font-semibold mb-4 text-primary">
              Características
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground">
              {[
                { label: "Año", value: auto.year },
                { label: "Kilometraje", value: `${formatKm(auto.km)} km` },
                { label: "Combustible", value: auto.fuelType },
                { label: "Motor", value: auto.caracteristicas?.motor },
                {
                  label: "Transmisión",
                  value: auto.caracteristicas?.transmision,
                },
                { label: "Tracción", value: auto.caracteristicas?.traccion },
                { label: "Puertas", value: auto.caracteristicas?.puertas },
                { label: "Asientos", value: auto.caracteristicas?.asientos },
                { label: "Color", value: auto.caracteristicas?.color },
                { label: "Patente", value: auto.caracteristicas?.patente },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between">
                  <span className="text-muted">{label}:</span>
                  <span className="font-medium">{value || "-"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipamiento */}
          {auto.equipamiento && auto.equipamiento.length > 0 && (
            <div className="bg-background rounded-lg shadow-md p-6 mb-6 border border-gray-700">
              <h2 className="text-xl font-heading font-semibold mb-4 text-primary">
                Equipamiento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-foreground">
                {auto.equipamiento.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Descripción */}
          <div className="bg-background rounded-lg shadow-md p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-heading font-semibold mb-4 text-primary">
              Descripción
            </h2>
            <p className="text-foreground leading-relaxed">
              {auto.description}
            </p>
          </div>

          {/* Botones de contacto */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/5491234567890?text=Hola! Me interesa el ${
                auto.marca
              } ${auto.modelo} ${
                auto.year
              } que tienen publicado por ${formatPrice(auto.price)}`}
              className="w-full bg-primary hover:bg-hover text-buttonText text-center py-3 px-6 rounded-lg font-medium transition-colors block"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:+5491234567890"
              className="w-full bg-secondary hover:bg-secondary/80 text-buttonText text-center py-3 px-6 rounded-lg font-medium transition-colors block"
            >
              Llamar por teléfono
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
